import { Link } from 'react-router-dom'
import Button from './components/Button'
import Input from './components/Input'
import Card from './components/Card'

const skills = ['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Git']

const projects = [
  {
    title: 'Not Alma Uygulaması',
    description: 'Kullanıcıların not oluşturabildiği ve düzenleyebildiği full stack bir uygulama.',
    image: 'https://placehold.co/600x200',
    imageAlt: 'Not alma uygulaması arayüzü',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Blog Uygulaması',
    description: 'Kişisel blog platformu. Markdown destekli yazı editörü.',
    image: 'https://placehold.co/600x200',
    imageAlt: 'Blog uygulaması yazı listesi görünümü',
    tags: ['TypeScript', 'Next.js'],
  },
  {
    title: 'Hava Durumu',
    description: 'OpenWeather API ile anlık hava durumu bilgisi.',
    image: 'https://placehold.co/600x200',
    imageAlt: 'Hava durumu uygulaması arayüzü',
    tags: ['JavaScript', 'API'],
  },
]

const navLinks = [
  { href: '#hakkimda', label: 'Hakkımda' },
  { href: '#projeler', label: 'Projelerim' },
  { href: '#iletisim', label: 'İletişim' },
]

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">

      {/* ===== SKIP LINK ===== */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg"
      >
        Ana içeriğe atla
      </a>

      {/* ===== DARK MODE TOGGLE ===== */}
      <button
        onClick={() => document.documentElement.classList.toggle('dark')}
        className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="Tema değiştir"
      >
        <span className="dark:hidden">&#9790;</span>
        <span className="hidden dark:inline">&#9728;</span>
      </button>

      {/* ===== HEADER ===== */}
      <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
          <h1 className="text-xl font-bold text-blue-800 dark:text-blue-300">
            Berat Doğan
          </h1>
          <nav aria-label="Ana navigasyon">
            <ul className="flex flex-wrap gap-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  to="/ui-kit"
                  className="px-3 py-1 rounded-md bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-medium hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                >
                  UI Kit
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content">

        {/* ===== HAKKIMDA ===== */}
        <section id="hakkimda" className="py-16 px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
            <figure className="shrink-0">
              <img
                src="images.png"
                alt="Berat Doğan profil fotoğrafı"
                className="w-40 h-40 rounded-full object-cover shadow-lg"
              />
              <figcaption className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">Berat Doğan</figcaption>
            </figure>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center md:text-left">
                Hakkımda
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Bilgisayar Mühendisliği öğrencisiyim. Backend geliştirme,
                cloud teknolojileri ve modern web uygulamalarıyla ilgileniyorum.
              </p>
              <ul className="flex flex-wrap gap-2" role="list" aria-label="Beceri etiketleri">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="bg-blue-800 dark:bg-blue-900 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ===== PROJELERİM ===== */}
        <section id="projeler" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
              Projelerim
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <Card
                  key={project.title}
                  variant="elevated"
                  title={project.title}
                  image={project.image}
                  imageAlt={project.imageAlt}
                  footer={
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  }
                >
                  <p className="text-sm">{project.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ===== İLETİŞİM ===== */}
        <section id="iletisim" className="py-16 px-4">
          <div className="max-w-lg mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              İletişim
            </h2>
            <form className="space-y-4" noValidate>
              <Input id="ad" label="Ad" placeholder="Adınız" required
                aria-describedby="ad-hata" />
              <Input id="email" label="E-posta" type="email" placeholder="ornek@mail.com" required
                aria-describedby="email-hata" />

              <div className="space-y-1">
                <label htmlFor="konu" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Konu
                </label>
                <select
                  id="konu"
                  name="konu"
                  required
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 transition-colors"
                >
                  <option value="">Seçiniz</option>
                  <option value="genel">Genel Soru</option>
                  <option value="proje">Proje Hakkında</option>
                  <option value="is">İş Teklifi</option>
                </select>
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="mesaj"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Mesaj
                </label>
                <textarea
                  id="mesaj"
                  name="mesaj"
                  rows={4}
                  required
                  minLength={10}
                  aria-describedby="mesaj-hata"
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 transition-colors"
                />
              </div>

              <Button variant="primary" size="lg" type="submit" className="w-full">
                Gönder
              </Button>
            </form>
          </div>
        </section>

      </main>

      {/* ===== FOOTER ===== */}
      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-center py-6 px-4 text-gray-500 dark:text-gray-400 text-sm">
        <p>&copy; 2025 Berat Doğan. Tüm hakları saklıdır.</p>
        <nav aria-label="Sosyal medya bağlantıları" className="mt-3">
          <ul className="flex justify-center gap-4">
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      </footer>

    </div>
  )
}

export default App
