import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Input from '../components/Input'
import Card from '../components/Card'
import Alert from '../components/Alert'

export default function UIKit() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 p-8 space-y-12">

      {/* Dark mode toggle */}
      <button
        onClick={() => document.documentElement.classList.toggle('dark')}
        className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="Tema değiştir"
      >
        <span className="dark:hidden">&#9790;</span>
        <span className="hidden dark:inline">&#9728;</span>
      </button>

      <div>
        <Link
          to="/"
          className="inline-flex items-center gap-1 text-sm text-blue-700 dark:text-blue-400 hover:underline mb-4"
        >
          ← Portfolio'ya dön
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">UI Kit</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Tüm bileşenler ve varyantları — 8+ varyant
        </p>
      </div>

      {/* ===== BUTTONS ===== */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
          Buttons
        </h2>

        {/* Varyant 1–4: Renkler */}
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide font-medium">Renkler</p>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </div>

        {/* Varyant 5–7: Boyutlar */}
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide font-medium">Boyutlar</p>
          <div className="flex flex-wrap items-end gap-3">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>

        {/* Disabled */}
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide font-medium">Disabled</p>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary" disabled>Primary</Button>
            <Button variant="secondary" disabled>Secondary</Button>
            <Button variant="danger" disabled>Danger</Button>
            <Button variant="ghost" disabled>Ghost</Button>
          </div>
        </div>
      </section>

      {/* ===== INPUTS ===== */}
      <section className="space-y-4 max-w-md">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
          Inputs
        </h2>

        {/* Varyant 8: Normal */}
        <Input id="ui-name" label="Normal Input" placeholder="Bir şey yazın..." />

        {/* Varyant 9: Hatalı */}
        <Input id="ui-err" label="Hatalı Input" error="Bu alan zorunludur" />

        {/* Varyant 10: Help text */}
        <Input
          id="ui-help"
          label="Help Text"
          type="email"
          placeholder="ornek@mail.com"
          helpText="E-posta adresinizi girin"
        />

        {/* Varyant 11: Disabled */}
        <Input id="ui-dis" label="Disabled" disabled value="Düzenlenemez" onChange={() => {}} />
      </section>

      {/* ===== CARDS ===== */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
          Cards
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Varyant 12: Elevated */}
          <Card
            variant="elevated"
            title="Elevated Card"
            image="https://placehold.co/600x192"
            imageAlt="Elevated kart görseli"
            footer={<Button size="sm" variant="primary">Detay</Button>}
          >
            Gölge ile yükseltilmiş kart.
          </Card>

          {/* Varyant 13: Outlined */}
          <Card
            variant="outlined"
            title="Outlined Card"
            footer={<Button size="sm" variant="ghost">Detay</Button>}
          >
            Çerçeveli kart.
          </Card>

          {/* Varyant 14: Filled */}
          <Card
            variant="filled"
            title="Filled Card"
            footer={<Button size="sm" variant="secondary">Detay</Button>}
          >
            Dolgulu arka plan.
          </Card>
        </div>
      </section>

      {/* ===== ALERTS ===== */}
      <section className="space-y-4 max-w-xl">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
          Alerts
        </h2>

        {/* Varyant 15: Info */}
        <Alert variant="info" title="Bilgi">
          Bilgilendirme mesajı.
        </Alert>

        {/* Varyant 16: Success */}
        <Alert variant="success" title="Başarılı">
          İşlem tamamlandı.
        </Alert>

        {/* Varyant 17: Warning */}
        <Alert variant="warning" title="Uyarı">
          Dikkat edilmesi gereken durum.
        </Alert>

        {/* Varyant 18: Error + dismissible */}
        <Alert variant="error" title="Hata" dismissible onDismiss={() => alert('Kapatıldı')}>
          Bir hata oluştu.
        </Alert>
      </section>

    </div>
  )
}
