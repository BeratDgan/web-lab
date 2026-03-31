import ContactForm from "../forms/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-slate-900/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Bölüm Başlığı */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            İletişim
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Bir projeniz mi var veya sadece merhaba demek mi istiyorsunuz?
            Aşağıdaki formu kullanarak bana ulaşabilirsiniz.
          </p>
        </div>

        {/* Form Kartı */}
        <div className="mx-auto mt-14 max-w-xl rounded-2xl border border-slate-700/50 bg-slate-800/30 p-6 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
