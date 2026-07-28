import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { LanguageProvider } from '@/context/LanguageContext'

const BASE = 'https://lounge-rental.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: '강남 라운지 대관·예약 | 청담·압구정 프리미엄 라운지 전문',
    template: '%s | 강남라운지대관',
  },
  description: '강남 라운지 대관·예약 전문. 청담·압구정 프리미엄 라운지 기업행사·생일파티·VIP모임·브랜드론칭 대관. 벨레어청담·아르쥬청담·피플더테라스·카스텔로라운지 010-9778-8571',
  keywords: [
    '강남 라운지', '강남 라운지 대관', '강남 라운지 예약',
    '청담 라운지', '청담 라운지 대관', '청담 라운지 예약',
    '압구정 라운지', '압구정 라운지 대관',
    'VIP 라운지', '프라이빗 라운지', '강남 파티룸',
    '생일파티 장소 강남', '기업행사 장소 강남',
    '벨레어청담', '아르쥬청담', '피플더테라스', '카스텔로라운지',
    'Gangnam Lounge', 'Venue Rental Seoul', 'Luxury Lounge Seoul',
    '清潭包场', '江南酒廊预约', '江南会場貸切',
  ],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    alternateLocale: ['en_US', 'zh_CN', 'ja_JP'],
    url: BASE,
    siteName: '강남라운지대관',
    title: '강남 라운지 대관·예약 | 청담·압구정 프리미엄 라운지 전문',
    description: '강남 청담·압구정 프리미엄 라운지 대관 원스톱 서비스. 기업행사·생일파티·VIP모임 전문.',
    images: [{ url: '/images/bellair-1.webp', width: 1200, height: 630, alt: '강남 라운지 대관' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '강남 라운지 대관·예약 | 청담·압구정 프리미엄 라운지 전문',
    description: '강남 청담·압구정 프리미엄 라운지 대관 원스톱 서비스.',
    images: ['/images/bellair-1.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: {
    canonical: BASE,
    languages: { 'en': `${BASE}/en`, 'ko': BASE },
  },
  verification: {
    google: '',
    other: { 'naver-site-verification': '162a41db035df5132497bd0f69dd2c30a576d907' },
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: '강남라운지대관',
  url: BASE,
  description: '강남 청담·압구정 프리미엄 라운지 대관·예약 전문 플랫폼',
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: `${BASE}/?q={search_term_string}` },
    'query-input': 'required name=search_term_string',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '강남라운지대관',
  url: BASE,
  telephone: '010-9778-8571',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '010-9778-8571',
    contactType: 'customer service',
    availableLanguage: ['Korean', 'English', 'Chinese', 'Japanese'],
    hoursAvailable: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '00:00', closes: '23:59' },
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: '강남라운지대관',
  description: '강남(청담·압구정) 프리미엄 라운지 대관·예약 전문. 기업행사·생일파티·VIP모임·브랜드론칭',
  url: BASE,
  telephone: '010-9778-8571',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '청담동',
    addressLocality: '강남구',
    addressRegion: '서울특별시',
    postalCode: '06015',
    addressCountry: 'KR',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 37.5270, longitude: 127.0414 },
  openingHours: 'Mo-Su 00:00-24:00',
  priceRange: '₩₩₩',
  areaServed: ['강남구', '청담동', '압구정동', '신사동'],
  serviceType: ['라운지 대관', '기업행사', '생일파티', 'VIP모임', '브랜드론칭'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      </head>
      <body>
        <LanguageProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
