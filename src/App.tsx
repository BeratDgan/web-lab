function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="hakkimda">
          <h2>Hakkımda</h2>
          <p>Ad Soyad: Berat Doğan</p>
          <p>Öğrenci No: 235541062</p>
          <p>Yaş: 21</p>
          <p>Cinsiyet: Erkek</p>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          <ul>
            <li>Proje 1: Web Tabanlı Not Alma Uygulaması</li>
            <li>Proje 2: Kişisel Blog Sitesi</li>
            <li>Proje 3: E-Ticaret Platformu</li>
          </ul>
        </section>

        <section id="iletisim">
          <h2>
            İletişim Bilgileri
            
          </h2>
          <p>Email:dgan.berat@gmail.com</p>
          <p>Telefon: 0555 555 55 55</p>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Berat Doğan. Tüm hakları saklıdır.</p>
      </footer>
    </>
  )
}

export default App