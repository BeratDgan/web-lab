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
          <h2>İletişim</h2>

          <form noValidate>

            {/* Ad */}
            <div>
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
                Ad alanı en az 3 karakter olmalıdır.
              </small>
            </div>

            {/* E-posta */}
            <div>
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

            {/* Konu */}
            <div>
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

            {/* Mesaj */}
            <div>
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

      <footer>
        <p>&copy; 2025 Berat Doğan. Tüm hakları saklıdır.</p>
      </footer>
    </>
  )
}

export default App