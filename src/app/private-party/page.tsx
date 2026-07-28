import type { Metadata } from 'next'
import Link from 'next/link'

const BASE = 'https://lounge-rental.com'
const PHONE = '010-9778-8571'

export const metadata: Metadata = {
  title: '강남 프라이빗 파티 장소 | 청담 프라이빗 라운지 대관',
  description: '강남 프라이빗 파티 장소 전문. 청담·압구정 완전 프라이빗 라운지 대관. 생일파티·기념일·VIP모임·소규모 파티. 010-9778-8571',
  alternates: { canonical: `${BASE}/private-party` },
  openGraph: {
    title: '강남 프라이빗 파티 장소 | 청담 프라이빗 라운지 대관',
    description: '강남 청담 완전 프라이빗 라운지 파티 장소 전문.',
    url: `${BASE}/private-party`,
    images: [{ url: '/images/bellair-1.webp', width: 1200, height: 630, alt: '강남 프라이빗 파티' }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '홈', item: BASE },
        { '@type': 'ListItem', position: 2, name: '프라이빗 파티', item: `${BASE}/private-party` },
      ],
    },
  ],
}

export default function PrivatePartyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen pt-24 pb-20">

        <nav className="max-w-6xl mx-auto px-4 sm:px-6 pt-4 pb-2">
          <ol className="flex items-center gap-2 text-xs text-gray-500">
            <li><Link href="/" className="hover:text-neon-pink transition-colors">홈</Link></li>
            <li>/</li>
            <li className="text-gray-300">프라이빗 파티</li>
          </ol>
        </nav>

        <section className="relative overflow-hidden py-20 mb-16">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 via-dark-900 to-neon-pink/8" />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-neon-purple/30 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-neon-purple rounded-full animate-pulse" />
              <span className="text-neon-purple text-sm font-semibold tracking-widest">PRIVATE PARTY VENUE</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              강남 프라이빗 파티 <span className="text-gradient">장소</span>
            </h1>
            <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed tracking-wide mb-10 font-light">
              오직 우리만을 위한 공간. 청담·압구정 완전 프라이빗 라운지에서 특별한 파티를 즐기세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${PHONE}`} className="btn-primary px-8 py-4 text-base rounded-xl">📞 전화 문의</a>
              <Link href="/#contact" className="btn-outline px-8 py-4 text-base rounded-xl">📩 대관 문의하기</Link>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-6">프라이빗 파티 장소 추천</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { href: '/venues/bellair', name: '벨레어청담', badge: '소규모 프라이빗 추천', cap: '150+', desc: '어둡고 차분한 분위기의 완전 프라이빗 라운지. 연예인·셀럽 아지트로 유명. 프라이빗 룸 완비.' },
                { href: '/venues/arju', name: '아르쥬청담', badge: '파티 연출 전문', cap: '120+', desc: '생일·기념일 파티 연출 전문. 왕관·레터링·케이크 등 특별한 파티 서비스.' },
                { href: '/venues/people-terrace', name: '피플더테라스', badge: '테라스 프라이빗', cap: '200+', desc: '야외 테라스 프라이빗 파티. 유럽 감성 인테리어로 특별한 분위기 연출.' },
                { href: '/venues/castello', name: '카스텔로라운지', badge: '대규모 프라이빗', cap: '300+', desc: '전관 단독 대관. 10층 야경과 함께하는 완전한 프라이빗 공간.' },
              ].map((v) => (
                <Link key={v.href} href={v.href} className="glass-card border border-white/5 hover:border-neon-purple/30 rounded-2xl p-6 transition-all group">
                  <span className="inline-block text-neon-purple text-xs font-semibold border border-neon-purple/30 px-2 py-0.5 rounded-full mb-3">{v.badge}</span>
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-neon-pink transition-colors">{v.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{v.desc}</p>
                  <span className="text-neon-pink text-sm font-semibold">자세히 보기 →</span>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-xl font-black text-white mb-4">관련 페이지</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { href: '/gangnam-lounge', label: '강남 라운지 대관' },
                { href: '/birthday-party', label: '생일파티 장소' },
                { href: '/vip-lounge', label: 'VIP 라운지' },
                { href: '/corporate-event', label: '기업행사 장소' },
                { href: '/faq', label: 'FAQ' },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="text-sm text-gray-400 border border-white/10 hover:border-neon-pink/40 hover:text-neon-pink px-4 py-2 rounded-full transition-all">
                  {l.label}
                </Link>
              ))}
            </div>
          </section>

          <section className="glass-card border border-neon-pink/20 rounded-2xl p-10 text-center" style={{ boxShadow: '0 0 40px rgba(255,45,120,0.08)' }}>
            <h2 className="text-2xl font-black text-white mb-3">프라이빗 파티 대관 문의</h2>
            <p className="text-gray-400 mb-8">담당자가 1시간 이내 연락드립니다. 24시간 문의 가능.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${PHONE}`} className="btn-primary px-8 py-4 rounded-xl text-base">📞 {PHONE}</a>
              <Link href="/#contact" className="btn-outline px-8 py-4 rounded-xl text-base">📩 대관 문의 폼</Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
