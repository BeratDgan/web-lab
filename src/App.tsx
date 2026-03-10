import Button from './components/Button'
import Input from './components/Input'
import Card from './components/Card'
import Alert from './components/Alert'

const projects = [
  {
    title: 'E-Ticaret Sitesi',
    description: 'React ve Node.js ile geliştirilmiş tam kapsamlı bir e-ticaret platformu.',
    image: 'https://placehold.co/600x192',
    alt: 'E-Ticaret sitesi arayüzü',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Blog Uygulaması',
    description: 'Kişisel blog platformu. Markdown destekli yazı editörü.',
    image: 'https://placehold.co/600x192',
    alt: 'Blog uygulaması yazı listesi',
    tags: ['TypeScript', 'Next.js'],
  },
  {
    title: 'Hava Durumu',
    description: 'OpenWeather API ile anlık hava durumu bilgisi.',
    image: 'https://placehold.co/600x192',
    alt: 'Hava durumu uygulaması arayüzü',
    tags: ['JavaScript', 'API'],
  },
]

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">

      {/* Dark Mode Toggle */}
      <button
        onClick={() => document.documentElement.classList.toggle('dark')}
        className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="Tema değiştir"
      >
        <span className="dark:hidden">&#9790;</span>
        <span className="hidden dark:inline">&#9728;</span>
      </button>

      <section className="px-4 py-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Projelerim
        </h2>

        {/* Mobil: 1 sütun, Tablet: 2 sütun, Desktop: 3 sütun */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-900 border border-transparent dark:border-gray-700 overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.alt}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  {project.description}
                </p>
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
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ===== UI KIT: Button ===== */}
      <section className="space-y-8 p-8 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Button</h2>

        {/* Boyut varyantları */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-3">
            Boyutlar
          </h3>
          <div className="flex flex-wrap items-end gap-4">
            <Button size="sm">Küçük</Button>
            <Button size="md">Orta</Button>
            <Button size="lg">Büyük</Button>
          </div>
        </div>

        {/* Renk varyantları */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-3">
            Renkler
          </h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </div>

        {/* Disabled durumu */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-3">
            Disabled
          </h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" disabled>Primary</Button>
            <Button variant="secondary" disabled>Secondary</Button>
            <Button variant="danger" disabled>Danger</Button>
            <Button variant="ghost" disabled>Ghost</Button>
          </div>
        </div>
      </section>

      {/* ===== UI KIT: Input ===== */}
      <section className="space-y-6 p-8 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Input</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
          <Input
            id="name"
            label="Ad Soyad"
            placeholder="Ahmet Yılmaz"
          />
          <Input
            id="email"
            label="E-posta"
            type="email"
            placeholder="ad@mail.com"
            helpText="Örnek: ad@mail.com"
          />
          <Input
            id="pass"
            label="Şifre"
            type="password"
            placeholder="········"
            error="En az 8 karakter olmalı"
          />
          <Input
            id="disabled"
            label="Devre Dışı"
            disabled
            value="Düzenlenemez"
            onChange={() => {}}
          />
        </div>
      </section>

      {/* ===== UI KIT: Card ===== */}
      <section className="space-y-6 p-8 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Card</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Card
            variant="elevated"
            title="Proje A"
            image="https://placehold.co/600x192"
            imageAlt="Proje ekran görüntüsü"
          >
            <p>Bu bir elevated (gölgeli) kart.</p>
          </Card>

          <Card variant="outlined" title="Proje B">
            <p>Bu bir outlined (çerçeveli) kart.</p>
          </Card>

          <Card
            variant="filled"
            title="Proje C"
            footer={<Button size="sm">Detay</Button>}
          >
            <p>Bu bir filled (dolgulu) kart.</p>
          </Card>
        </div>
      </section>

      {/* ===== UI KIT: Alert ===== */}
      <section className="space-y-4 p-8 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Alert</h2>

        <Alert variant="info" title="Bilgi">
          Formunuz başarıyla kaydedildi.
        </Alert>

        <Alert variant="success" title="Başarılı">
          İşlem tamamlandı!
        </Alert>

        <Alert variant="warning" title="Uyarı">
          Oturum 5 dakika sonra sona erecek.
        </Alert>

        <Alert
          variant="error"
          title="Hata"
          dismissible
          onDismiss={() => console.log('kapatıldı')}
        >
          Bağlantı kurulamadı. Tekrar deneyin.
        </Alert>
      </section>
    </div>
  )
}

export default App