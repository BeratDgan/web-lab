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
    <div className="min-h-screen bg-gray-50">
      <section className="px-4 py-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Projelerim</h2>

        {/* Mobil: 1 sütun, Tablet: 2 sütun, Desktop: 3 sütun */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.alt}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full"
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