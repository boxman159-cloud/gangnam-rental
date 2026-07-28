import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { LanguageProvider } from '@/context/LanguageContext'

const BASE = 'https://gangnam-rental.netlify.app'

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: '강남 대관센터 | 강남 클럽·라운지 대관 전문',
    template: '%s | 강남 대관센터',
  },
  description: '강남(청담·압구정) 클럽·라운지 대관 전문. 벨레어청담, 아르쥬청담, 피플더테라스, 카스텔로라운지 등 강남 최고의 베뉴 기업파티·브랜드론칭·팝업·촬영·피로연 대관 문의.',
  keywords: [
    '강남 대관', '클럽 대관', '라운지 대관', '청담 대관', '압구정 대관',
    '기업 파티 대관', '브랜드 론칭 파티', '프라이빗 파티 강남', '팝업스토어 대관',
    '벨레어청담 대관', '아르쥬청담 대관', '피플더테라스 대관', '카스텔로라운지 대관',
    '강남 행사장 대관', '청담 파티룸', '결혼식 피로연 강남',
    'gangnam venue rental', 'seoul club rental', 'cheongdam lounge rental',
    '江南场地租赁', '清潭俱乐部包场', '江南会場貸切',
  ],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    alternateLocale: ['en_US', 'zh_CN', 'ja_JP'],
    url: BASE,
    siteName: '강남 대관센터',
    title: '강남 대관센터 | 강남 클럽·라운지 대관 전문',
    description: '강남 최고의 클럽·라운지 대관 원스톱 서비스. 기업 파티·브랜드 론칭·촬영·팝업 모든 대관.',
    images: [{ url: '/images/bellair-1.webp', width: 1200, height: 630, alt: '강남 대관센터' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '강남 대관센터 | 강남 클럽·라운지 대관 전문',
    description: '강남 최고의 클럽·라운지 대관 원스톱 서비스. 기업 파티·브랜드 론칭·촬영·팝업 모든 대관.',
    images: ['/images/bellair-1.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: {
    canonical: BASE,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: '강남 대관센터',
  description: '강남(청담·압구정) 클럽·라운지 대관 전문 서비스',
  url: BASE,
  telephone: '010-8215-8571',
  address: {
    '@type': 'PostalAddress',
    addressLocality: '강남구',
    addressRegion: '서울특별시',
    addressCountry: 'KR',
  },
  openingHours: 'Mo-Su 00:00-24:00',
  priceRange: '₩₩₩',
  sameAs: [],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
