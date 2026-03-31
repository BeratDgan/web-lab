import { useState } from "react";

// ─── Tip Tanımları ───────────────────────────────────────────────

/** Konu seçenekleri */
type SubjectOption = "Genel" | "İş Teklifi" | "Proje" | "Diğer";

/** Form alanları */
interface ContactFormData {
  fullName: string;
  email: string;
  subject: SubjectOption;
  message: string;
}

/** Her alan için hata mesajı (boş string = hata yok) */
interface ContactFormErrors {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

// ─── Sabitler ────────────────────────────────────────────────────

const SUBJECT_OPTIONS: SubjectOption[] = ["Genel", "İş Teklifi", "Proje", "Diğer"];

const INITIAL_FORM_DATA: ContactFormData = {
  fullName: "",
  email: "",
  subject: "Genel",
  message: "",
};

const INITIAL_ERRORS: ContactFormErrors = {
  fullName: "",
  email: "",
  subject: "",
  message: "",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ─── Doğrulama Fonksiyonu ────────────────────────────────────────

function validate(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = { ...INITIAL_ERRORS };

  if (data.fullName.trim().length < 2) {
    errors.fullName = "Ad soyad en az 2 karakter olmalıdır.";
  }

  if (!EMAIL_REGEX.test(data.email)) {
    errors.email = "Geçerli bir e-posta adresi giriniz.";
  }

  if (!SUBJECT_OPTIONS.includes(data.subject)) {
    errors.subject = "Lütfen bir konu seçiniz.";
  }

  if (data.message.trim().length < 10) {
    errors.message = "Mesaj en az 10 karakter olmalıdır.";
  }

  return errors;
}

/** Hata var mı kontrol et */
function hasErrors(errors: ContactFormErrors): boolean {
  return Object.values(errors).some((msg) => msg !== "");
}

// ─── Component ───────────────────────────────────────────────────

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<ContactFormErrors>(INITIAL_ERRORS);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  /** Ortak alan değiştirme handler'ı */
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Kullanıcı düzeltme yaparken ilgili hatayı temizle
    if (errors[name as keyof ContactFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  }

  /** Form gönderimi */
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (hasErrors(validationErrors)) return;

    setIsSubmitting(true);

    // Asenkron gönderim simülasyonu (2 saniye)
    await new Promise<void>((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData(INITIAL_FORM_DATA);

    // 4 saniye sonra başarı mesajını gizle
    setTimeout(() => setIsSuccess(false), 4000);
  }

  // ─── Ortak CSS Sınıfları ─────────────────────────────────────

  const labelClass = "block text-sm font-medium text-slate-300 mb-1.5";
  const inputBaseClass =
    "w-full rounded-lg bg-slate-800/60 border px-4 py-2.5 text-slate-100 placeholder-slate-500 outline-none transition-all duration-200 focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500";
  const inputNormalBorder = "border-slate-600/50";
  const inputErrorBorder = "border-red-500/70";

  function inputClass(field: keyof ContactFormErrors): string {
    return `${inputBaseClass} ${errors[field] ? inputErrorBorder : inputNormalBorder}`;
  }

  // ─── Render ──────────────────────────────────────────────────

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="w-full max-w-xl mx-auto space-y-5"
    >
      {/* Başarı Mesajı */}
      {isSuccess && (
        <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/30 p-4 text-center text-emerald-400 text-sm font-medium animate-fade-in">
          ✅ Mesajınız başarıyla gönderildi! En kısa sürede dönüş yapılacaktır.
        </div>
      )}

      {/* Ad Soyad */}
      <div>
        <label htmlFor="fullName" className={labelClass}>
          Ad Soyad
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          placeholder="Adınızı ve soyadınızı girin"
          value={formData.fullName}
          onChange={handleChange}
          className={inputClass("fullName")}
        />
        {errors.fullName && (
          <p className="mt-1.5 text-xs text-red-400">{errors.fullName}</p>
        )}
      </div>

      {/* E-posta */}
      <div>
        <label htmlFor="email" className={labelClass}>
          E-posta
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="ornek@email.com"
          value={formData.email}
          onChange={handleChange}
          className={inputClass("email")}
        />
        {errors.email && (
          <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
        )}
      </div>

      {/* Konu */}
      <div>
        <label htmlFor="subject" className={labelClass}>
          Konu
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={inputClass("subject")}
        >
          {SUBJECT_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.subject && (
          <p className="mt-1.5 text-xs text-red-400">{errors.subject}</p>
        )}
      </div>

      {/* Mesaj */}
      <div>
        <label htmlFor="message" className={labelClass}>
          Mesaj
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Mesajınızı buraya yazın..."
          value={formData.message}
          onChange={handleChange}
          className={`${inputClass("message")} resize-none`}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>
        )}
      </div>

      {/* Gönder Butonu */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-200 hover:from-indigo-500 hover:to-purple-500 hover:shadow-indigo-500/40 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg
              className="h-4 w-4 animate-spin"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Gönderiliyor...
          </span>
        ) : (
          "Mesaj Gönder"
        )}
      </button>
    </form>
  );
}
