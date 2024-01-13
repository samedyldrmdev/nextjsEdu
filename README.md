I'm learning Nextjs with Nextjs Documentation!
<br>
to review: 
<br>
https://nextjs.org/learn

---

Türkçe Notlarım:

Eğitimle beraber yükleme yapmak için:

`npx create-next-app@latest nextjs-dashboard --use-npm --example "https://github.com/vercel/next-learn/tree/main/dashboard/starter-example"`

/app/ui klasöründeki ***global.css*** projedeki ana css dosyasıdır.

/app/layout.tsx dosyasına ***global.css’i import*** etmemiz gerekiyor.

`import '@/app/ui/global.css';`

Üzerinde çalıştığımız projede Tailwind kullanıyoruz.

Tailwind hızlı bir şekilde yazmamıza olanak tanıyarak geliştirme sürecini hızlandıran bir CSS Framework’üdür.

Tailwind ile örnek css şu şekilde yazılır:

`<h1 className="text-blue-500">I'm blue!</h1>`

CSS stilleri global olarak paylaşılsa da her sınıf, her öğeye tekil olarak uygulanır. Bu, bir öğeyi ekler veya silerseniz, ayrı stil sayfaları, stil çarpışmaları veya uygulamanız ölçeklendikçe CSS paketinizin boyutunun artması konusunda endişelenmenize gerek olmadığı anlamına gelir.

Yeni bir projeye başlamak için `create-next-app`kullandığınızda Next.js, Tailwind'i kullanmak isteyip istemediğinizi soracaktır. `yes` dersek Next.js gerekli paketleri otomatik olarak yükleyecek ve uygulamanızda Tailwind'i yapılandıracaktır.

Eğer bakarsanız `/app/page.tsx`örnekte Tailwind sınıflarını kullandığımızı göreceksiniz.

Ayrıca app/ui altında örneğin home.module.css adlı bir dosya oluşturup örneğin şu şekilde bir css girebiliriz:

/app/ui/home.module.css

```css
.shape {
    height: 0;
    width: 0;
    border-bottom: 30px solid black;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
  }
```

/app/page.tsx 

`import styles from '@/app/ui/home.module.css';`

`<div className={styles.shape}>`

**Yazı Tipleri**

`/app/ui`içinde `fonts.ts` adında bir dosya oluşturuyoruz. Bu dosyayı uygulama genelinde kullanılacak yazı tiplerini saklamak için kullanacağız.

İçerik şu şekilde /app/ui/fonts.ts:

`import { Inter } from 'next/font/google';`

`export const inter = Inter({ subsets: ['latin'] });`

/app/layout.tsx

`import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';`

`export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return (
<html lang="en">
<body className={${inter.className} antialiased}>{children}</body>
</html>
);
}`

**Image Ekleme**

Image eklemek için öncelikle image’i import ediyoruz.

`import Image from 'next/image';`

Daha sonra yine aynı sayfada Image etiketi açarak örneğin şu şekilde fotoğrafı ekliyoruz.

`<Image
src="/hero-desktop.png"
width={1000}
height={760}
className="hidden md:block" 
alt="Screenshots of the dashboard project showing desktop version"
/>`

## İç içe yönlendirme

**Next.js, iç içe rotalar oluşturmak için klasörlerin** kullanıldığı dosya sistemi yönlendirmesini kullanır . Her klasör, bir **URL segmentiyle** eşlenen bir **rota segmentini** temsil eder .

layout.tsx ve page.tsx dosyalarını kullanarak her yol için ayrı UI’ler oluşturabiliriz.

Zaten page.tsx dosyamız var. Bu bizim projemizin anasayfasıdır. 

## **Kontrol paneli sayfasını oluşturma**

✅ ***/app***’in içinde ***dashboard*** isimli yeni bir klasör oluşturuyoruz.

✅ Ardından ***dashboard***’ın içinde ***page.tsx*** isimli başka bir sayfa daha oluşturuyoruz.

✅ Örnek olarak içeriğine “Dashboard Page” yazıyoruz ve [localhost:3000/dashboard](http://localhost:3000/dashboard) linkine gidiyoruz.

Dashboard’daki page.tsx’in içeriği:

`export default function Page() {
return <p>Dashboard Page</p>;`
}

***DİKKAT!*** 

Burada dosyayı direkt olarak /app klasörünün altında açmamız gerekiyor!
