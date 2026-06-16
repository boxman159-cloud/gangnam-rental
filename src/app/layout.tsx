import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { LanguageProvider } from '@/context/LanguageContext'

const BASE = 'https://gangnam-rental.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: '강남 대관센터 | 강남 클럽·라운지 대관 전문',
    template: '%s | 강남 대관센터',
  },
  description: '강남(신사·청담·압구정) 클럽·라운지 대관 전문. 라이언 슈퍼클럽, 클럽 에이스(레이스), 벨레어청담, 아르쥬청담, 피플더테라스 등 강남 최고의 베뉴 대관·파티·행사 문의.',
  keywords: [
    '강남 대관', '클럽 대관', '라운지 대관', '청담 대관', '압구정 대관', '기업 파티 대관',
    '브랜드 론칭 파티', '프라이빗 파티 강남', '라이언 슈퍼클럽 대관', '클럽 에이스 대관',
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
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
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
