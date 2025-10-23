import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'मराठा समाज प्रतिष्ठान - एकतेतून सशक्त भविष्य',
  description: 'मराठा समाज प्रतिष्ठान ही सर्व मराठा बांधवांची एकत्रित समुदाय संस्था आहे, जी समाजाच्या सर्वांगीण उन्नती आणि सशक्तीकरणासाठी कार्य करते.',
  keywords: 'मराठा समाज, NGO, non-profit, शिक्षण, उद्योजकता, समाजसशक्तीकरण, मराठी संस्कृती',
  authors: [{ name: 'मराठा समाज प्रतिष्ठान' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="mr">
      <head>
        {/* Google Fonts - Marathi Support */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@100..900&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        
        {/* libraries CSS */}
        <link rel="stylesheet" href="/assets/icon/flaticon_charitics.css" />
        <link rel="stylesheet" href="/assets/vendor/bootstrap/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/vendor/splide/splide.min.css" />
        <link rel="stylesheet" href="/assets/vendor/swiper/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/vendor/slim-select/slimselect.css" />
        <link rel="stylesheet" href="/assets/vendor/animate-wow/animate.min.css" />
        <link rel="stylesheet" href="/assets/vendor/flatpickr/flatpickr.min.css" />
        
        {/* custom CSS */}
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      <body>
        {children}
        
        {/* libraries JS */}
        <script src="/assets/vendor/bootstrap/bootstrap.bundle.min.js"></script>
        <script src="/assets/vendor/splide/splide.min.js"></script>
        <script src="/assets/vendor/splide/splide-extension-auto-scroll.min.js"></script>
        <script src="/assets/vendor/swiper/swiper-bundle.min.js"></script>
        <script src="/assets/vendor/slim-select/slimselect.min.js"></script>
        <script src="/assets/vendor/animate-wow/wow.min.js"></script>
        <script src="/assets/vendor/splittype/index.min.js"></script>
        <script src="/assets/vendor/mixitup/mixitup.min.js"></script>
        <script src="/assets/vendor/fslightbox/fslightbox.js"></script>
        <script src="/assets/vendor/flatpickr/flatpickr.js"></script>

        {/* custom JS */}
        <script src="/assets/js/main.js"></script>
        <script src="/assets/js/tab.js"></script>
        <script src="/assets/js/accordion.js"></script>
        <script src="/assets/js/progressbar.js"></script>
        <script src="/assets/js/donate-form.js"></script>
      </body>
    </html>
  )
}