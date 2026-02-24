function App() {
  return (
    <>
      {/* Skip Link */}
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      <header>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        <section id="hakkimda">
          <h2>Hakkımda</h2>
          <figure>
            <img src="images.png" alt="Berat Doğan fotoğrafı" />
            <figcaption>Berat Doğan</figcaption>
          </figure>
          <p>Ad Soyad: Berat Doğan</p>
          <p>Öğrenci No: 235541062</p>
          <p>Yaş: 21</p>
          <p>Cinsiyet: Erkek</p>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          <ul>
            <li>
              Proje 1: Web Tabanlı Not Alma Uygulaması
              <figure>
                <img src="image.png" alt="Not alma uygulaması ekran görüntüsü" />
                <figcaption>Web Tabanlı Not Alma Uygulaması</figcaption>
              </figure>
            </li>
            <li>Proje 2: Kişisel Blog Sitesi</li>
            <li>Proje 3: E-Ticaret Platformu</li>
          </ul>
        </section>

        <section id="iletisim">
          <h2>İletişim Bilgileri</h2>
          <p>Email: <a href="mailto:dgan.berat@gmail.com">dgan.berat@gmail.com</a></p>
          <p>Telefon: <a href="tel:05555555555">0555 555 55 55</a></p>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Berat Doğan. Tüm hakları saklıdır.</p>
      </footer>
    </>
  )
}

export default App