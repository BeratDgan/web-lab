function App() {
  return (
    <>
      {/* Skip Link */}
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      {/* HEADER */}
      <header>
        <div className="site-title">
          <h1>Berat Doğan</h1>
        </div>

        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projelerim</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      {/* MAIN */}
      <main id="main-content">

        {/* HAKKIMDA */}
        <section id="hakkimda">
          <h2>Hakkımda</h2>

          <div className="about-content">
            <figure>
              <img
                src="images.png"
                alt="Berat Doğan profil fotoğrafı"
                width="200"
              />
              <figcaption>Berat Doğan</figcaption>
            </figure>

            <div>
              <p>
                Bilgisayar Mühendisliği öğrencisiyim. Backend geliştirme,
                cloud teknolojileri ve modern web uygulamalarıyla ilgileniyorum.
              </p>

              <h3>Kullandığım Teknolojiler</h3>
              <ul className="skill-tags" role="list" aria-label="Beceri etiketleri">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PROJELER */}
        <section id="projeler">
          <h2>Projelerim</h2>

          <div className="project-grid">
            <article className="project-card">
              <img src="https://placehold.co/600x200" alt="Not alma uygulaması arayüzü" />
              <h3>Not Alma Uygulaması</h3>
              <p>Kullanıcıların not oluşturabildiği ve düzenleyebildiği full stack bir uygulama.</p>
              <ul className="skill-tags">
                <li>React</li>
                <li>Node.js</li>
                <li>MongoDB</li>
              </ul>
            </article>

            <article className="project-card">
              <img src="https://placehold.co/600x200" alt="Blog uygulaması yazı listesi görünümü" />
              <h3>Blog Uygulaması</h3>
              <p>Kişisel blog platformu. Markdown destekli yazı editörü.</p>
              <ul className="skill-tags">
                <li>TypeScript</li>
                <li>Next.js</li>
              </ul>
            </article>

            <article className="project-card">
              <img src="https://placehold.co/600x200" alt="Hava durumu uygulaması arayüzü" />
              <h3>Hava Durumu</h3>
              <p>OpenWeather API ile anlık hava durumu bilgisi.</p>
              <ul className="skill-tags">
                <li>JavaScript</li>
                <li>API</li>
              </ul>
            </article>
          </div>
        </section>

        {/* İLETİŞİM */}
        <section id="iletisim">
          <h2>İletişim</h2>

          <form noValidate>

            <div className="form-group">
              <label htmlFor="ad">Ad</label>
              <input
                id="ad"
                name="ad"
                type="text"
                required
                minLength={3}
                aria-describedby="ad-hata"
              />
              <small id="ad-hata" role="alert">
                Ad en az 3 karakter olmalıdır.
              </small>
            </div>

            <div className="form-group">
              <label htmlFor="email">E-posta</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                aria-describedby="email-hata"
              />
              <small id="email-hata" role="alert">
                Geçerli bir e-posta adresi giriniz.
              </small>
            </div>

            <div className="form-group">
              <label htmlFor="konu">Konu</label>
              <select
                id="konu"
                name="konu"
                required
                aria-describedby="konu-hata"
              >
                <option value="">Seçiniz</option>
                <option value="genel">Genel Soru</option>
                <option value="proje">Proje Hakkında</option>
                <option value="is">İş Teklifi</option>
              </select>
              <small id="konu-hata" role="alert">
                Lütfen bir konu seçiniz.
              </small>
            </div>

            <div className="form-group">
              <label htmlFor="mesaj">Mesaj</label>
              <textarea
                id="mesaj"
                name="mesaj"
                required
                minLength={10}
                rows={4}
                aria-describedby="mesaj-hata"
              ></textarea>
              <small id="mesaj-hata" role="alert">
                Mesaj en az 10 karakter olmalıdır.
              </small>
            </div>

            <button type="submit">Gönder</button>
          </form>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <p>&copy; 2025 Berat Doğan. Tüm hakları saklıdır.</p>

        <nav aria-label="Sosyal medya bağlantıları">
          <ul>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  )
}

export default App