# CSS Kararlari

## 1. Breakpoint Secimi

**Neden 640px ve 1024px?**
640px, çoğu modern telefonun yatay genişliğinin üst sınırına denk gelir; bu noktada "about-content" dikey yığından yatay düzene geçer ve form butonu tam genişlikten çıkar. 1024px ise tablet ile masaüstü arasındaki geçiş noktasıdır; bu breakpoint'te proje grid'i `auto-fit` yerine sabit 3 sütuna kilitlenir ve `main` içeriği 1200px ile sınırlanır.

**İçerik bu noktalarda nasıl değişiyor?**
- 0–639px: Tek sütun, dikey akış, tam genişlik butonlar.
- 640px+: "Hakkımda" bölümü yan yana (fotoğraf sol, metin sağ); form butonu otomatik genişlikte.
- 1024px+: Ana içerik ortalı ve sınırlı (max-width: 1200px); proje kartları kesin 3 sütun.

---

## 2. Layout Tercihleri

**Header için neden Flexbox?**
Header yalnızca tek bir eksen boyunca (yatay) iki öğeyi hizalar: logo sola, navigasyon sağa. Flexbox bu tür tek-eksenli, sıra bazlı hizalamalar için idealdir. `justify-content: space-between` ile iki öğe otomatik olarak zıt uçlara yaslanır; Grid bu senaryo için gereksiz karmaşıklık ekler.

**Proje kartları için neden Grid?**
Kartlar iki boyutlu (satır ve sütun) bir ızgara düzeni gerektirir. `repeat(auto-fit, minmax(280px, 1fr))` sayesinde media query yazmadan ekran genişliğine göre sütun sayısı otomatik belirlenir. Flexbox ile aynı sonuca ulaşmak `flex-basis` ve `max-width` kombinasyonu gerektirirdi; Grid daha temiz ve okunabilir bir çözüm sunar.

**`auto-fit` mi `auto-fill` mi?**
`auto-fit` kullandım. `auto-fill`, boş sütun izleri oluşturarak kalan alanı kaplayabilir; bu durumda 1 kart varken sağda boş sütunlar belirip kartın küçük kalmasına yol açar. `auto-fit` ise boş izleri daraltarak mevcut kartların alanı eşit paylaşmasını sağlar — bu da portföy gibi az sayıda kartın olduğu durumlarda görsel olarak daha dengeli sonuç verir.

---

## 3. Design Tokens

**Renk paleti neden bu renkler?**
`#1E3A8A` (koyu lacivert) birincil renk olarak seçildi; profesyonel, güvenilir bir izlenim verir. `#2563EB` ikincil mavi, hover ve focus durumları için hafif daha canlı bir ton sağlar. `#7C3AED` accent rengi ise dikkat çekilmesi gereken yerlerde kullanılmak üzere görsel çeşitlilik için eklendi. Arka plan beyaz (`#FFFFFF`), yüzey açık gri (`#F9FAFB`) olarak belirlendi; bu ayrım kart ve section arkaplanlarını birbirinden ayırt etmeyi kolaylaştırır.

**Spacing skalası nasıl belirlendi?**
`0.25rem` (4px) temel birimden başlayarak her adım yaklaşık iki katına çıkacak şekilde 7 kademeli bir skala oluşturuldu: `xs → sm → md → lg → xl → 2xl → 3xl`. Bu yaklaşım, tasarımda tutarlı boşluklar kullanılmasını zorunlu kılar ve sabit piksel değerlerinin `rem` kullanımı sayesinde kullanıcının tarayıcı font ayarlarına saygı gösterir.

**Fluid typography için `clamp` değerleri nasıl ayarlandı?**
Her seviyede üç değer belirlendi: minimum (küçük ekranlar), tercih edilen (viewport genişliğine göre kayan değer `vw` ile), maksimum (büyük ekranlar). Örneğin `--text-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem)` değeri, dar ekranlarda 16px'de başlayıp genişledikçe 18px'e kadar yumuşakça büyür. Bu yöntemle tek bir media query yazmadan tüm ekran boyutlarında okunabilir tipografi sağlanır.

---

## 4. Responsive Stratejiler

**Mobile-first yaklaşımı nasıl uygulandı?**
Tüm temel stiller `index.css`'de medya sorgusu olmadan, yani mobil ekranlar için varsayılan olarak yazıldı. Daha geniş ekranlar için yalnızca değişmesi gereken özellikler `@media (min-width: ...)` bloklarına taşındı. Bu yaklaşım, CSS'in doğal kaskad mekanizmasıyla uyumlu çalışır ve gereksiz override sayısını azaltır.

**Hangi elemanlar breakpoint'lerde değişiyor?**
| Eleman | Mobil | 640px+ | 1024px+ |
|--------|-------|--------|---------|
| `.about-content` | `flex-direction: column` | `flex-direction: row` | — |
| `section` padding | `xl / md` | `2xl / xl` | `3xl / xl` |
| `button[type=submit]` | `width: 100%` | `width: auto` | — |
| `.project-grid` | `auto-fit` | `auto-fit` | `repeat(3, 1fr)` |
| `main` | tam genişlik | tam genişlik | `max-width: 1200px` |

**Görsel boyutları nasıl yönetildi?**
`img { max-width: 100%; height: auto; display: block; }` sıfırlama kuralı sayesinde tüm görseller kapsayıcılarından taşmaz ve orijinal en-boy oranlarını korur. Profil fotoğrafı için `aspect-ratio: 1` ve `object-fit: cover` kullanılarak dairesel çerçeve bozulmadan korunur. Proje kartı görselleri ise `height: 200px` sabit yüksekliği ve `object-fit: cover` ile farklı boyutlardaki görüntüleri tutarlı biçimde kırpar.
