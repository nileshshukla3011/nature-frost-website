"use client";

import { useEffect, useState } from "react";
import { AlertCircle, CheckCircle2, Loader2, Phone, Send } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";
import { products } from "@/lib/products";
import { enquiryTypes } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * Web3Forms access key.
 *
 * Get one free (no signup) at https://web3forms.com by entering
 * Naturefrost25@gmail.com, then put it in .env.local as:
 *   NEXT_PUBLIC_WEB3FORMS_KEY=your-key-here
 *
 * NEXT_PUBLIC_ values are inlined at build time, so the site must be rebuilt
 * after the key is added.
 *
 * WITHOUT A KEY the form falls back to a mailto: link. Be aware this is a weak
 * fallback, NOT an equivalent: it only does anything if the visitor has a
 * desktop mail client configured. Someone using Gmail in a browser tab — which
 * is most people — sees nothing happen and the enquiry is lost. Setting the key
 * is required for this form to actually capture leads.
 */
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

type Status = "idle" | "submitting" | "success" | "error" | "fallback";

interface FormValues {
  name: string;
  company: string;
  email: string;
  phone: string;
  enquiryType: string;
  product: string;
  quantity: string;
  message: string;
}

const emptyValues: FormValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  enquiryType: enquiryTypes[0],
  product: "",
  quantity: "",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(emptyValues);
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormValues, string>>
  >({});
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  /**
   * Pre-fills the form from the URL, e.g. /contact?product=sweet-corn from a
   * product card, or ?enquiry=spec from the brochure button.
   *
   * Read from window rather than useSearchParams so the page can be fully
   * static-prerendered without a Suspense boundary.
   */
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const productSlug = params.get("product");
    const enquiry = params.get("enquiry");

    setValues((prev) => {
      const next = { ...prev };

      const matched = products.find((p) => p.slug === productSlug);
      if (matched) {
        next.product = matched.name;
        next.message = `I would like to enquire about your frozen ${matched.name}. Please share specifications, pack sizes and pricing.`;
      }

      if (enquiry === "spec") {
        next.enquiryType = "Product Specification Request";
        if (!matched) {
          next.message =
            "Please send me the Nature Frost product brochure and specification sheet.";
        }
      }

      return next;
    });
  }, []);

  const update = (field: keyof FormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    // Clear a field's error as soon as the visitor starts correcting it.
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = () => {
    const next: Partial<Record<keyof FormValues, string>> = {};

    if (!values.name.trim()) next.name = "Please enter your name.";

    if (!values.email.trim()) {
      next.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
      next.email = "Please enter a valid email address.";
    }

    if (!values.phone.trim()) {
      next.phone = "Please enter a phone number.";
    } else if (values.phone.replace(/\D/g, "").length < 7) {
      next.phone = "Please enter a valid phone number.";
    }

    if (!values.message.trim()) {
      next.message = "Please tell us about your requirement.";
    } else if (values.message.trim().length < 10) {
      next.message = "Please add a little more detail.";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  /** Composes the same enquiry as a mailto: link for the no-key fallback. */
  const mailtoFallback = () => {
    const body = [
      `Name: ${values.name}`,
      values.company && `Company: ${values.company}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone}`,
      `Enquiry type: ${values.enquiryType}`,
      values.product && `Product: ${values.product}`,
      values.quantity && `Estimated volume: ${values.quantity}`,
      "",
      values.message,
    ]
      .filter(Boolean)
      .join("\n");

    return `mailto:${site.email}?subject=${encodeURIComponent(
      `Website enquiry — ${values.enquiryType}`,
    )}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    // Honeypot: a real person never sees or fills this field.
    const honeypot = new FormData(event.currentTarget).get("botcheck");
    if (honeypot) return;

    if (!ACCESS_KEY) {
      /*
       * No key configured. Hand the enquiry to the visitor's mail client.
       *
       * Deliberately NOT reported as "sent": a mailto: link does nothing at all
       * for anyone without a desktop mail client, and claiming success would
       * leave them believing we received something we never did. The
       * "fallback" state shows the alternatives instead.
       */
      window.location.href = mailtoFallback();
      setStatus("fallback");
      return;
    }

    setStatus("submitting");
    setFeedback("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Website enquiry — ${values.enquiryType}${
            values.product ? ` (${values.product})` : ""
          }`,
          from_name: "Nature Frost Website",
          // Lets you hit Reply in Gmail and reach the enquirer directly.
          replyto: values.email,
          Name: values.name,
          Company: values.company || "Not provided",
          Email: values.email,
          Phone: values.phone,
          "Enquiry Type": values.enquiryType,
          Product: values.product || "Not specified",
          "Estimated Volume": values.quantity || "Not specified",
          Message: values.message,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        setFeedback(
          "Thank you — your enquiry has reached us. We will get back to you shortly.",
        );
        setValues(emptyValues);
      } else {
        throw new Error(result.message ?? "Submission failed");
      }
    } catch {
      setStatus("error");
      setFeedback(
        "We could not send your enquiry just now. Please email or call us directly using the details alongside.",
      );
    }
  };

  /*
   * Shown when the site has no Web3Forms key and we handed the enquiry to the
   * visitor's mail client. We cannot know whether that worked, so this never
   * claims the message was sent — it offers WhatsApp and phone as routes that
   * definitely do work.
   */
  if (status === "fallback") {
    return (
      <div className="rounded-3xl border border-border bg-card p-8 shadow-soft sm:p-10">
        <h3 className="text-xl font-bold text-foreground">
          One more step to send it
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Your email app should have opened with this enquiry ready to send —
          please press Send there to reach us.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          <strong className="font-semibold text-foreground">
            If nothing opened
          </strong>{" "}
          — which happens if you read mail in a browser rather than an app — use
          one of these instead:
        </p>

        <div className="mt-6 space-y-3">
          <a
            href={whatsappLink(
              `Enquiry from ${values.name || "the website"}${
                values.company ? ` (${values.company})` : ""
              }${values.product ? ` about ${values.product}` : ""}: ${values.message}`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[#0e8046] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0b6b3a]"
          >
            Send this on WhatsApp instead
          </a>

          <div className="grid gap-3 sm:grid-cols-2">
            {site.phones.map((phone) => (
              <a
                key={phone.tel}
                href={`tel:${phone.tel}`}
                className="flex items-center justify-center gap-2 rounded-full border-2 border-primary px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Phone className="h-4 w-4" />
                {phone.display}
              </a>
            ))}
          </div>

          <a
            href={`mailto:${site.email}`}
            className="block text-center text-sm font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
          >
            {site.email}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 w-full text-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          ← Back to the form
        </button>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-primary/30 bg-primary-soft p-8 text-center sm:p-10">
        <span className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="text-xl font-bold text-foreground">Enquiry sent</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          {feedback}
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setFeedback("");
          }}
          className="mt-6 rounded-full border-2 border-primary px-6 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8"
    >
      <h2 className="text-xl font-bold text-foreground">Send us an enquiry</h2>
      <p className="mt-1.5 text-sm text-muted-foreground">
        Tell us what you need and we will come back to you with specifications
        and pricing.
      </p>

      {/* Honeypot — hidden from people, tempting to bots. */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field
          label="Your name"
          name="name"
          required
          value={values.name}
          error={errors.name}
          onChange={(v) => update("name", v)}
          autoComplete="name"
          placeholder="Full name"
        />

        <Field
          label="Company"
          name="company"
          value={values.company}
          onChange={(v) => update("company", v)}
          autoComplete="organization"
          placeholder="Company or business name"
        />

        <Field
          label="Email address"
          name="email"
          type="email"
          required
          value={values.email}
          error={errors.email}
          onChange={(v) => update("email", v)}
          autoComplete="email"
          placeholder="you@company.com"
        />

        <Field
          label="Phone number"
          name="phone"
          type="tel"
          required
          value={values.phone}
          error={errors.phone}
          onChange={(v) => update("phone", v)}
          autoComplete="tel"
          placeholder="+91 00000 00000"
        />

        <SelectField
          label="Enquiry type"
          name="enquiryType"
          value={values.enquiryType}
          onChange={(v) => update("enquiryType", v)}
          options={enquiryTypes}
        />

        <SelectField
          label="Product of interest"
          name="product"
          value={values.product}
          onChange={(v) => update("product", v)}
          options={products.map((p) => p.name)}
          placeholder="Select a product (optional)"
        />

        <div className="sm:col-span-2">
          <Field
            label="Estimated volume"
            name="quantity"
            value={values.quantity}
            onChange={(v) => update("quantity", v)}
            placeholder="e.g. 5 MT per month, or one trial container"
          />
        </div>

        <div className="sm:col-span-2">
          <Field
            label="Your requirement"
            name="message"
            required
            textarea
            value={values.message}
            error={errors.message}
            onChange={(v) => update("message", v)}
            placeholder="Tell us about the product, specification, pack size and market you are supplying."
          />
        </div>
      </div>

      {status === "error" && (
        <div
          role="alert"
          className="mt-5 flex items-start gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-4"
        >
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
          <p className="text-sm leading-relaxed text-foreground">{feedback}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-200 hover:bg-primary-hover   disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send Enquiry
          </>
        )}
      </button>

      <p className="mt-4 text-center text-xs leading-relaxed text-faint-foreground">
        Your details are used only to respond to this enquiry. We never sell or
        share them.
      </p>
    </form>
  );
}

/* ---------------------------------------------------------------- fields -- */

const fieldClasses = (hasError?: boolean) =>
  cn(
    "w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground transition-colors",
    "placeholder:text-faint-foreground focus:outline-none focus:ring-2 focus:ring-ring/40",
    hasError ? "border-red-500/60" : "border-border focus:border-primary",
  );

function Field({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  required,
  textarea,
  placeholder,
  autoComplete,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  placeholder?: string;
  autoComplete?: string;
}) {
  const errorId = `${name}-error`;

  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-sm font-medium text-foreground"
      >
        {label}
        {required && (
          <span className="ml-0.5 text-red-500" aria-hidden="true">
            *
          </span>
        )}
      </label>

      {textarea ? (
        <textarea
          id={name}
          name={name}
          rows={5}
          value={value}
          required={required}
          placeholder={placeholder}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          onChange={(e) => onChange(e.target.value)}
          className={cn(fieldClasses(!!error), "resize-y")}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          required={required}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          onChange={(e) => onChange(e.target.value)}
          className={fieldClasses(!!error)}
        />
      )}

      {error && (
        <p id={errorId} className="mt-1.5 text-xs font-medium text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  placeholder,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: readonly string[];
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-sm font-medium text-foreground"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={fieldClasses()}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
