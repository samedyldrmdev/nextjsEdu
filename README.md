I'm learning Nextjs with Nextjs Documentation!
<br>
to review: 
<br>
https://nextjs.org/learn

---

- BÖLÜM 1: BAŞLANGIÇ
    
    Nextjs Dökümantasyonu ile Başlangıç Yapmak İçin:
    
    ```visual-basic
    npx create-next-app@latest nextjs-dashboard --use-npm --example "https://github.com/vercel/next-learn/tree/main/dashboard/starter-example"
    ```
    
- BÖLÜM 2: CSS
    
    /app/ui klasöründeki ***global.css*** projedeki ana css dosyasıdır.
    
    /app/layout.tsx dosyasına ***global.css’i import*** etmemiz gerekiyor.
    
    ```jsx
    import '@/app/ui/global.css';
    ```
    
    Üzerinde çalıştığımız projede Tailwind kullanıyoruz.
    
    Tailwind hızlı bir şekilde yazmamıza olanak tanıyarak geliştirme sürecini hızlandıran bir CSS Framework’üdür.
    
    Tailwind ile örnek css şu şekilde yazılır:
    
    ```css
    <h1 className="text-blue-500">I'm blue!</h1>
    ```
    
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
    
    ```jsx
    import styles from '@/app/ui/home.module.css';
    <div className={styles.shape}>
    ```
    
- BÖLÜM 3: YAZI TİPLERİ VE IMAGE
    
    **Yazı Tipleri**
    
    `/app/ui`içinde `fonts.ts` adında bir dosya oluşturuyoruz. Bu dosyayı uygulama genelinde kullanılacak yazı tiplerini saklamak için kullanacağız.
    
    İçerik şu şekilde:
    
    /app/ui/fonts.ts
    
    ```jsx
    import { Inter } from 'next/font/google';
     
    export const inter = Inter({ subsets: ['latin'] });
    ```
    
    /app/layout.tsx
    
    ```jsx
    import '@/app/ui/global.css';
    import { inter } from '@/app/ui/fonts';
     
    export default function RootLayout({
      children,
    }: {
      children: React.ReactNode;
    }) {
      return (
        <html lang="en">
          <body className={`${inter.className} antialiased`}>{children}</body>
        </html>
      );
    }
    ```
    
    **Image Ekleme**
    
    Image eklemek için öncelikle image’i import ediyoruz.
    
    /app/ui/fonts.ts
    
    ```jsx
    import Image from 'next/image';
    ```
    
    Daha sonra yine aynı sayfada Image etiketi açarak örneğin şu şekilde fotoğrafı ekliyoruz.
    
    /app/page.tsx
    
    ```jsx
    import AcmeLogo from '@/app/ui/acme-logo';
    import { ArrowRightIcon } from '@heroicons/react/24/outline';
    import Link from 'next/link';
    import { lusitana } from '@/app/ui/fonts';
    import Image from 'next/image';
     
    export default function Page() {
      return (
        // ...
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>
        //...
      );
    }
    ```
    
- BÖLÜM 4: LAYOUT VE SAYFALAR OLUŞTURMA
    
    ## İç içe yönlendirme
    
    **Next.js, iç içe rotalar oluşturmak için klasörlerin** kullanıldığı dosya sistemi yönlendirmesini kullanır . Her klasör, bir **URL segmentiyle** eşlenen bir **rota segmentini** temsil eder .
    
    layout.tsx ve page.tsx dosyalarını kullanarak her yol için ayrı UI’ler oluşturabiliriz.
    
    Zaten page.tsx dosyamız var. Bu bizim projemizin anasayfasıdır. 
    
    ## **Kontrol paneli sayfasını oluşturma**
    
    ✅ ***/app***’in içinde ***dashboard*** isimli yeni bir klasör oluşturuyoruz.
    
    ✅ Ardından ***dashboard***’ın içinde ***page.tsx*** isimli başka bir sayfa daha oluşturuyoruz.
    
    ✅ Örnek olarak içeriğine “Dashboard Page” yazıyoruz ve [localhost:3000/dashboard](http://localhost:3000/dashboard) linkine gidiyoruz.
    
    Dashboard’daki page.tsx’in içeriği:
    
    /app/dashboard/page.tsx
    
    ```jsx
    export default function Page() {
      return <p>Dashboard Page</p>;
    }
    ```
    
    ***DİKKAT!*** 
    
    Burada dosyayı direkt olarak /app klasörünün altında açmamız gerekiyor! 
    
    Örneğin dashboard sayfasının içinde müşteriler ve faturalar isimli iki sayfa oluşturacağız.
    
    http://localhost:3000/dashboard/customers
    
    http://localhost:3000/dashboard/invoices 
    
    Bunun için dashboard klasörünün içinde tekrar klasör açıyoruz ve içine page.tsx belgesini giriyoruz.
    
    Deneyelim!
    
    ## Dashboard Düzenini Oluşturma
    
    Dashboard’larda birden fazla sayfada paylaşılan bir çeşit gezinme vardır. 
    
    ✅ Eğer bir klasörün içine layout.tsx eklersen ve bunu düzenlersen o layout.tsx’deki her şey o klasördeki sayfada görünür. Örneğin dashboard klasörünün içine bir layout.tsx dosyası açalım!
    
    Ve içerisine şu kodu yazalım:
    
    /app/dashboard/layout.tsx
    
    ```jsx
    import SideNav from '@/app/ui/dashboard/sidenav';
     
    export default function Layout({ children }: { children: React.ReactNode }) {
      return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-64">
            <SideNav />
          </div>
          <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
      );
    }
    ```
    
    ***Kodu açıklayalım:***
    
    *Öncelikle SideNav componentini import ediyoruz.*
    
    *Bu dosyaya import ettiğimiz bütün componentler düzenin bir parçası olacaktır.*
    
    *Artık dashboard’ın içindeki tüm sayfalara bu layout.tsx eklenmiş oldu.*
    
    *<Layout /> componenti bir children prop’u alır. Bu children bir sayfa ya da bir layout (düzen) olabilir.* 
    
    Örneğin bir navbar oluşturduğumuzda bunu ayrı ayrı tüm sayfalara eklememize gerek yok. Ya da her sayfada görünmesini istediğimiz bir şeyi yalnızca layout.tsx dosyasına ekleyerek kullanabiliriz.
    
    ## Root Layout (Kök Düzeni)
    
    3.Bölümde Inter font’unu başka bir layout’a aktarmıştık.
    
    /app/layout.tsx
    
    ```jsx
    import '@/app/ui/global.css';
    import { inter } from '@/app/ui/fonts';
     
    export default function RootLayout({
      children,
    }: {
      children: React.ReactNode;
    }) {
      return (
        <html lang="en">
          <body className={`${inter.className} antialiased`}>{children}</body>
        </html>
      );
    }
    ```
    
    Buna kök düzeni yani ROOT LAYOUT denir ve gereklidir. Kök düzenine eklediğimiz herhangi bir UI uygulamamızdaki tüm sayfalarda paylaşılır. <html> ve <body> etiketlerini değiştirmek için kök düzenini kullanabilir ve meta veriler ekleyebiliriz. 
    Meta verilerle alakalı detaylı bilgi ileride…
    
    Yeni oluşturduğumuz layout (/app/dashboard/layout.tsx) dashboard sayfalarına özgü olduğundan dolayı yukarıdaki root layout’a herhangi bir UI eklememize gerek yok. 
    
    Zaten layout.tsx dosyası klasörün içinde bulunuyor!
    
- BÖLÜM 5: SAYFALAR ARASINDA GEZİNME : NAVIGATING BETWEEN PAGES
    
    <Link> componenti sayfalar arasında gezinirken sayfaların tam sayfa yenilenmemesi için kullanıyoruz.
    
    Link componentini kullanmak için `/app/ui/dashboard/nav-links.tsx`linkini açıyoruz, link componentini import ediyoruz ve <a> etiketini <Link> ile değiştiriyoruz.
    
    /app/ui/dashboard/nav-links.tsx
    
    ```jsx
    import {
      UserGroupIcon,
      HomeIcon,
      DocumentDuplicateIcon,
    } from '@heroicons/react/24/outline';
    import Link from 'next/link';
     
    // ...
     
    export default function NavLinks() {
      return (
        <>
          {links.map((link) => {
            const LinkIcon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
              >
                <LinkIcon className="w-6" />
                <p className="hidden md:block">{link.name}</p>
              </Link>
            );
          })}
        </>
      );
    }
    ```
    
    Bu sayede tam sayfa yenilemesi olmadan diğer sayfaya geçiş yapabildik!
    
    Next.js, bağlantılı rotanın kodunu arka planda otomatik olarak önceden getirir. Kullanıcı bağlantıyı tıkladığında, hedef sayfanın kodu zaten arka planda yüklenmiş olacaktır ve sayfa geçişini neredeyse anında yapan da budur!
    
    ***PATTERN: AKTİF BAĞLANTILARI GÖSTERME***
    
    Ortak bir UI modeli kullanıcıya şu anda hangi sayfada olduklarını belirtmek için etkin bir bağlantı göstermektir. Bunu yapmak için kullanıcının geçerli yolunu URL’den almamız gerekir. Bunun için usePathname() adlı bir hook sağlar bize Nextjs. usePathName() bir hook olduğundan dolayı nav-links.tsx’i bir Client Component’e dönüştürmemiz gerekiyor. 
    
    React’in ‘use client’ yönergesini dosyanın en üstüne ekliyoruz ve next/navigation’da içe aktarıyoruz.
    
    /app/ui/dashboard/nav-links.tsx
    
    ```jsx
    'use client';
     
    import {
      UserGroupIcon,
      HomeIcon,
      InboxIcon,
    } from '@heroicons/react/24/outline';
    import Link from 'next/link';
    import { usePathname } from 'next/navigation';
     
    // ...
    ```
    
    Ardından <NavLinks /> componentinin içinde pathname isimli değişkene yolu atıyoruz:
    
    /app/ui/dashboard/nav-links.tsx
    
    ```jsx
    export default function NavLinks() {
      const pathname = usePathname();
      // ...
    }
    ```
    
    Bağlantı etkin olduğunda sınıf adlarını koşullu olarak uygulamak için CSS stiliyle ilgili bölümde sunulan CLSX kütüphanesini kullanabiliriz. link.href yol adıyla eşleştiğinde bağlantı mavi metin ve açık mavi arka planla görüntülenmelidir. İşte nav-links.tsx için son kod:
    
    /app/ui/dashboard/nav-links.tsx
    
    ```jsx
    'use client';
     
    import {
      UserGroupIcon,
      HomeIcon,
      DocumentDuplicateIcon,
    } from '@heroicons/react/24/outline';
    import Link from 'next/link';
    import { usePathname } from 'next/navigation';
    **import clsx from 'clsx';**
     
    // ...
     
    export default function NavLinks() {
      const pathname = usePathname();
     
      return (
        <>
          {links.map((link) => {
            const LinkIcon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                  {
                    'bg-sky-100 text-blue-600': pathname === link.href,
                  },
                )}
              >
                <LinkIcon className="w-6" />
                <p className="hidden md:block">{link.name}</p>
              </Link>
            );
          })}
        </>
      );
    }
    ```
