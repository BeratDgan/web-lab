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
    </div>
  )
}

export default App