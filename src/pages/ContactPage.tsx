import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { profile } from "../data/profile";
import { Contact } from "../sections/Contact";

type Field = "firstName" | "lastName" | "email" | "phone" | "message";
type Values = Record<Field, string>;
type Errors = Partial<Record<Field, string>>;

const EMPTY: Values = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

// Deliberately permissive: something@something.tld. Anything stricter rejects
// valid addresses, and the real check is whether the mail actually arrives.
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: Values): Errors {
  const errors: Errors = {};

  if (!values.firstName.trim()) errors.firstName = "Please enter your first name.";
  if (!values.lastName.trim()) errors.lastName = "Please enter your last name.";

  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL.test(values.email.trim())) {
    errors.email = "That doesn’t look like a valid email address.";
  }

  // Phone is optional, but if given it should look like a phone number.
  if (values.phone.trim() && !/^[\d\s+()-]{6,}$/.test(values.phone.trim())) {
    errors.phone = "Please enter a valid phone number, or leave this empty.";
  }

  if (!values.message.trim()) {
    errors.message = "Please write a message.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Please write a little more — at least 10 characters.";
  }

  return errors;
}

export function ContactPage() {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const dirty = Object.values(values).some((v) => v.trim() !== "");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // The success card is shorter than the form, so bring it into view.
  useEffect(() => {
    if (sent) window.scrollTo({ top: 0, behavior: "smooth" });
  }, [sent]);

  // Warn before losing a half-written message.
  useEffect(() => {
    if (!dirty || sent) return;
    const onBeforeUnload = (e: BeforeUnloadEvent) => e.preventDefault();
    window.addEventListener("beforeunload", onBeforeUnload);
    return () => window.removeEventListener("beforeunload", onBeforeUnload);
  }, [dirty, sent]);

  function update(field: Field, value: string) {
    setValues((v) => ({ ...v, [field]: value }));
    // Clear a field's error as soon as the person starts fixing it.
    setErrors((e) => (e[field] ? { ...e, [field]: undefined } : e));
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);

    const firstInvalid = (Object.keys(found) as Field[])[0];
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    const subject = `Portfolio enquiry from ${values.firstName} ${values.lastName}`;
    const body = [
      `Name: ${values.firstName} ${values.lastName}`,
      `Email: ${values.email}`,
      values.phone.trim() ? `Phone: ${values.phone}` : null,
      "",
      values.message,
    ]
      .filter(Boolean)
      .join("\n");

    setSent(true);
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <>
      <header className="page-hero">
        <div className="container">
          <Link to="/" className="project-back">
            ← Back
          </Link>
          <h1 className="page-hero-title">
            Let’s <span className="gradient-text">talk</span>
          </h1>
          <p className="page-hero-sub">
            Tell me about your project or role and I’ll get back to you. You can also email me
            directly at <a href={`mailto:${profile.email}`}>{profile.email}</a>.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container form-wrap">
          {sent ? (
            <div className="form-sent" role="status" aria-live="polite">
              <h2>Thanks, {values.firstName}.</h2>
              <p>
                Your email app should have opened with the message ready to send. If nothing
                happened, email me directly at{" "}
                <a href={`mailto:${profile.email}`}>{profile.email}</a>.
              </p>
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => {
                  setValues(EMPTY);
                  setSent(false);
                }}
              >
                Write another message
              </button>
            </div>
          ) : (
            <form ref={formRef} className="form" onSubmit={onSubmit} noValidate>
              <div className="form-row">
                <TextField
                  name="firstName"
                  label="First name"
                  autoComplete="given-name"
                  value={values.firstName}
                  error={errors.firstName}
                  onChange={update}
                  placeholder="Nossayba…"
                />
                <TextField
                  name="lastName"
                  label="Last name"
                  autoComplete="family-name"
                  value={values.lastName}
                  error={errors.lastName}
                  onChange={update}
                  placeholder="Abbara…"
                />
              </div>

              <div className="form-row">
                <TextField
                  name="email"
                  label="Email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  spellCheck={false}
                  value={values.email}
                  error={errors.email}
                  onChange={update}
                  placeholder="you@company.com…"
                />
                <TextField
                  name="phone"
                  label="Phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  optional
                  spellCheck={false}
                  value={values.phone}
                  error={errors.phone}
                  onChange={update}
                  placeholder="+212…"
                />
              </div>

              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={values.message}
                  placeholder="Tell me what you’re working on…"
                  aria-invalid={errors.message ? true : undefined}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  onChange={(e) => update("message", e.target.value)}
                />
                {errors.message && (
                  <p className="field-error" id="message-error" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              <button type="submit" className="btn btn-primary form-submit">
                Send message
              </button>
            </form>
          )}
        </div>
      </section>

      <Contact />
    </>
  );
}

function TextField({
  name,
  label,
  value,
  error,
  onChange,
  type = "text",
  optional = false,
  ...rest
}: {
  name: Field;
  label: string;
  value: string;
  error?: string;
  onChange: (field: Field, value: string) => void;
  type?: string;
  optional?: boolean;
  autoComplete?: string;
  inputMode?: "email" | "tel";
  spellCheck?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="field">
      <label htmlFor={name}>
        {label}
        {optional && <span className="field-optional">Optional</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${name}-error` : undefined}
        onChange={(e) => onChange(name, e.target.value)}
        {...rest}
      />
      {error && (
        <p className="field-error" id={`${name}-error`} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
