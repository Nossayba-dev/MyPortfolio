import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { profile } from "../data/profile";
import { contactPage as copy } from "../data/copy";
import { Contact } from "../sections/Contact";
import { useLanguage, type Bi } from "../lib/LanguageContext";

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

function validate(values: Values, pick: (bi: Bi<string>) => string): Errors {
  const errors: Errors = {};

  if (!values.firstName.trim()) errors.firstName = pick(copy.firstNameError);
  if (!values.lastName.trim()) errors.lastName = pick(copy.lastNameError);

  if (!values.email.trim()) {
    errors.email = pick(copy.emailEmptyError);
  } else if (!EMAIL.test(values.email.trim())) {
    errors.email = pick(copy.emailInvalidError);
  }

  // Phone is optional, but if given it should look like a phone number.
  if (values.phone.trim() && !/^[\d\s+()-]{6,}$/.test(values.phone.trim())) {
    errors.phone = pick(copy.phoneError);
  }

  if (!values.message.trim()) {
    errors.message = pick(copy.messageEmptyError);
  } else if (values.message.trim().length < 10) {
    errors.message = pick(copy.messageShortError);
  }

  return errors;
}

export function ContactPage() {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { pick } = useLanguage();

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
    const found = validate(values, pick);
    setErrors(found);

    const firstInvalid = (Object.keys(found) as Field[])[0];
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    const subject = `${pick(copy.mailSubject)} ${values.firstName} ${values.lastName}`;
    const body = [
      `${pick(copy.mailNameLabel)}: ${values.firstName} ${values.lastName}`,
      `${pick(copy.mailEmailLabel)}: ${values.email}`,
      values.phone.trim() ? `${pick(copy.mailPhoneLabel)}: ${values.phone}` : null,
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
            {pick(copy.back)}
          </Link>
          <h1 className="page-hero-title">
            {pick(copy.titleBefore) ? `${pick(copy.titleBefore)} ` : ""}
            <span className="gradient-text">{pick(copy.titleWord)}</span>
          </h1>
          <p className="page-hero-sub">
            {pick(copy.subtitle)} <a href={`mailto:${profile.email}`}>{profile.email}</a>.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container form-wrap">
          {sent ? (
            <div className="form-sent" role="status" aria-live="polite">
              <h2>
                {pick(copy.sentThanks)} {values.firstName}.
              </h2>
              <p>
                {pick(copy.sentBody)} <a href={`mailto:${profile.email}`}>{profile.email}</a>.
              </p>
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => {
                  setValues(EMPTY);
                  setSent(false);
                }}
              >
                {pick(copy.writeAnother)}
              </button>
            </div>
          ) : (
            <form ref={formRef} className="form" onSubmit={onSubmit} noValidate>
              <div className="form-row">
                <TextField
                  name="firstName"
                  label={pick(copy.firstNameLabel)}
                  autoComplete="given-name"
                  value={values.firstName}
                  error={errors.firstName}
                  onChange={update}
                  placeholder={pick(copy.firstNamePlaceholder)}
                />
                <TextField
                  name="lastName"
                  label={pick(copy.lastNameLabel)}
                  autoComplete="family-name"
                  value={values.lastName}
                  error={errors.lastName}
                  onChange={update}
                  placeholder={pick(copy.lastNamePlaceholder)}
                />
              </div>

              <div className="form-row">
                <TextField
                  name="email"
                  label={pick(copy.emailLabel)}
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  spellCheck={false}
                  value={values.email}
                  error={errors.email}
                  onChange={update}
                  placeholder={pick(copy.emailPlaceholder)}
                />
                <TextField
                  name="phone"
                  label={pick(copy.phoneLabel)}
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  optionalLabel={pick(copy.phoneOptional)}
                  spellCheck={false}
                  value={values.phone}
                  error={errors.phone}
                  onChange={update}
                  placeholder={pick(copy.phonePlaceholder)}
                />
              </div>

              <div className="field">
                <label htmlFor="message">{pick(copy.messageLabel)}</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={values.message}
                  placeholder={pick(copy.messagePlaceholder)}
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
                {pick(copy.submit)}
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
  optionalLabel,
  ...rest
}: {
  name: Field;
  label: string;
  value: string;
  error?: string;
  onChange: (field: Field, value: string) => void;
  type?: string;
  optionalLabel?: string;
  autoComplete?: string;
  inputMode?: "email" | "tel";
  spellCheck?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="field">
      <label htmlFor={name}>
        {label}
        {optionalLabel && <span className="field-optional">{optionalLabel}</span>}
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
