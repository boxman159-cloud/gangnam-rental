import type { Metadata } from 'next'
import Link from 'next/link'

const BASE = 'https://helpful-fudge-b837eb.netlify.app'
const PHONE = '010-9778-8571'

export const metadata: Metadata = {
  title: '강남 VIP 라운지 | 청담 VIP 룸 대관·예약',
  description: '강남 VIP 라운지 대관·예약 전문. 청담·압구정 VIP 룸·프라이빗 다이닝·VIP 접대 전문 라운지. 기업 VIP 접대·임원 모임. 010-9778-8571',
  alternates: { canonical: `${BASE}/vip-lounge` },
  openGraph: {
    title: '강남 VIP 라운지 | 청담 VIP 룸 대관·예약',
    description: '강남 청담 VIP 라운지·룸 대관 전문. 기업 VIP 접대·임원 모임.',
    url: `${BASE}/vip-lounge`,
    images: [{ url: '/images/castello-대관-룸1.jpg', width: 1200, height: 630, alt: '강남 VIP 라운지' }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '홈', item: BASE },
        { '@type': 'ListItem', position: 2, name: 'VIP 라운지', item: `${BASE}/vip-lounge` },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: '강남 VIP 라운지 예약은 어떻게 하나요?', acceptedAnswer: { '@type': 'Answer', text: '010-9778-8571로 전화하시거나 카카오톡(alrep0410)으로 문의 주시면 VIP 전담 담당자가 연결됩니다.' } },
        { '@type': 'Question', name: 'VIP 룸 단독 예약 가능한가요?', acceptedAnswer: { '@type': 'Answer', text: '네, 벨레어청담과 카스텔로라운지에서 VIP 프라이빗 룸 단독 예약이 가능합니다. 완전히 분리된 독립 공간으로 운영됩니다.' } },
      ],
    },
  ],
}

export default function VipLoungePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen pt-24 pb-20">

        <nav className="max-w-6xl mx-auto px-4 sm:px-6 pt-4 pb-2">
          <ol className="flex items-center gap-2 text-xs text-gray-500">
            <li><Link href="/" className="hover:text-neon-pink transition-colors">홈</Link></li>
            <li>/</li>
            <li className="text-gray-300">VIP 라운지</li>
          </ol>
        </nav>

        <section className="relative overflow-hidden py-20 mb-16">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 via-dark-900 to-neon-pink/8" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/15 rounded-full blur-3xl" />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-neon-purple/30 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-neon-purple rounded-full animate-pulse" />
              <span className="text-neon-purple text-sm font-semibold tracking-widest">VIP LOUNGE RENTAL</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              강남 <span className="text-gradient">VIP 라운지</span>
            </h1>
            <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed tracking-wide mb-10 font-light">
              청담·압구정 최고의 VIP 라운지. 기업 VIP 접대·임원 모임·프라이빗 다이닝 전문.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${PHONE}`} className="btn-primary px-8 py-4 text-base rounded-xl">📞 VIP 문의</a>
              <Link href="/#contact" className="btn-outline px-8 py-4 text-base rounded-xl">📩 대관 문의하기</Link>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-6">VIP 라운지 특장점</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { icon: '👑', title: '완전 독립 VIP 룸', desc: '외부와 완전히 차단된 독립 VIP 룸. 기밀이 보장되는 프라이빗 환경.' },
                { icon: '🍾', title: '프리미엄 F&B 서비스', desc: '전담 서버와 함께하는 테이블 서비스. 명품 샴페인·프리미엄 위스키·파인 다이닝.' },
                { icon: '🔐', title: '완벽한 보안·프라이버시', desc: '연예인·기업 임원이 즐겨 찾는 검증된 보안 수준의 라운지.' },
                { icon: '🎯', title: 'VIP 전담 매니저', desc: '예약부터 행사 당일까지 VIP 전담 매니저가 1:1 케어.' },
              ].map((item, i) => (
                <div key={i} className="glass-card border border-neon-purple/15 rounded-2xl p-6 flex gap-4" style={{ boxShadow: '0 0 20px rgba(191,0,255,0.05)' }}>
                  <div className="text-3xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="text-white font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-6">VIP 추천 라운지</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { href: '/venues/bellair', name: '벨레어청담', badge: 'VIP 소규모 모임', cap: '150+', desc: '프라이빗 룸 완비. 연예인·인플루언서 아지트로 유명. 격조 있는 VIP 접대에 최적.' },
                { href: '/venues/castello', name: '카스텔로라운지', badge: 'VIP 대규모 행사', cap: '300+', desc: '10층 독립 VIP 룸 + 파노라마 야경. 대규모 VIP 행사·기업 론칭 전문.' },
              ].map((v) => (
                <Link key={v.href} href={v.href} className="glass-card border border-neon-purple/15 hover:border-neon-purple/40 rounded-2xl p-6 transition-all group" style={{ boxShadow: '0 0 20px rgba(191,0,255,0.05)' }}>
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
                { href: '/corporate-event', label: '기업행사 장소' },
                { href: '/private-party', label: '프라이빗 파티' },
                { href: '/cheongdam-lounge', label: '청담 라운지 대관' },
                { href: '/faq', label: 'FAQ' },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="text-sm text-gray-400 border border-white/10 hover:border-neon-pink/40 hover:text-neon-pink px-4 py-2 rounded-full transition-all">
                  {l.label}
                </Link>
              ))}
            </div>
          </section>

          <section className="glass-card border border-neon-purple/20 rounded-2xl p-10 text-center" style={{ boxShadow: '0 0 40px rgba(191,0,255,0.08)' }}>
            <h2 className="text-2xl font-black text-white mb-3">VIP 라운지 문의</h2>
            <p className="text-gray-400 mb-8">VIP 전담 담당자가 직접 연락드립니다. 24시간 문의 가능.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${PHONE}`} className="btn-primary px-8 py-4 rounded-xl text-base">📞 {PHONE}</a>
              <Link href="/#contact" className="btn-outline px-8 py-4 rounded-xl text-base">📩 VIP 문의 폼</Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
