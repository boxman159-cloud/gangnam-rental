import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { LanguageProvider } from '@/context/LanguageContext'

const BASE = 'https://gangnam-rental.netlify.app'

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: '강남 클럽·라운지 대관 | 청담라운지·압구정 파티룸· 행사 대관 전문',
    template: '%s | 강남라운지대관',
  },
  description: '강남(청담·압구정) 클럽·라운지·파티룸 대관 전문. 벨레어청담, 아르쥬청담, 피플더테라스, 카스텔로라운지 기업파티·생일파티·브랜드론칭·팝업·촬영·피로연 대관 문의 010-9778-8571',
  keywords: [
    // 대관 핵심
    '강남 대관', '청담 대관', '압구정 대관', '강남 클럽 대관', '강남 라운지 대관',
    // 파티룸 (네이버 검색량 높음)
    '강남 파티룸', '청담 파티룸', '압구정 파티룸', '강남 파티 장소',
    // 행사장
    '강남 행사장 대관', '청담 행사장', '강남 기업 파티 장소', '브랜드 론칭 장소 강남',
    // 행사 유형별
    '생일파티 장소 강남', '생일 파티룸 청담', '기업 회식 장소 강남', '단체 회식 청담',
    '촬영 장소 강남', '결혼식 피로연 강남', '프라이빗 파티 강남',
    // 업장명 직접
    '벨레어청담', '벨레어청담 대관', '아르쥬청담', '아르쥬청담 대관',
    '피플더테라스', '피플더테라스 대관', '카스텔로라운지', '카스텔로라운지 대관',
    // 영문
    'gangnam venue rental', 'gangnam club rental', 'cheongdam party room',
    'seoul private party venue', 'gangnam event space',
    // 중문
    '清潭包场', '江南包厢', '江南场地租赁',
    // 일문
    '江南会場貸切', '清潭クラブ貸切',
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
  telephone: '010-9778-8571',
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
