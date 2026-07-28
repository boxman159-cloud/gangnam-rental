import type { Metadata } from 'next'
import Link from 'next/link'

const BASE = 'https://lounge-rental.com'
const PHONE = '010-9778-8571'

export const metadata: Metadata = {
  title: '강남 라운지 대관·예약 | 청담·압구정 프리미엄 라운지',
  description: '강남 라운지 대관 전문. 청담·압구정 프리미엄 라운지 기업행사·생일파티·VIP모임 대관·예약. 벨레어청담·아르쥬청담·피플더테라스·카스텔로라운지 010-9778-8571',
  alternates: { canonical: `${BASE}/gangnam-lounge` },
  openGraph: {
    title: '강남 라운지 대관·예약 | 청담·압구정 프리미엄 라운지',
    description: '강남 청담·압구정 프리미엄 라운지 대관 원스톱. 기업행사·생일파티·VIP모임 전문.',
    url: `${BASE}/gangnam-lounge`,
    images: [{ url: '/images/bellair-1.webp', width: 1200, height: 630, alt: '강남 라운지 대관' }],
  },
}

const faqData = [
  { q: '강남 라운지 대관 최소 인원은?', a: '업장마다 다르지만 보통 20명~300명까지 수용 가능합니다. 소규모 VIP 모임부터 대규모 기업행사까지 맞춤 안내해 드립니다.' },
  { q: '강남 라운지 대관 비용은?', a: '업장, 날짜, 인원, 행사 형태에 따라 달라집니다. 정확한 견적은 010-9778-8571로 문의 주시면 1시간 이내 안내해 드립니다.' },
  { q: '당일 예약도 가능한가요?', a: '가능한 경우도 있으나 주말·성수기는 최소 1~2주 전 예약을 권장합니다.' },
  { q: '케이터링·DJ 섭외도 도움받을 수 있나요?', a: '네, 케이터링·DJ·조명·포토부스 등 행사에 필요한 모든 서비스를 원스톱으로 연계해 드립니다.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      mainEntity: faqData.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '홈', item: BASE },
        { '@type': 'ListItem', position: 2, name: '강남 라운지 대관', item: `${BASE}/gangnam-lounge` },
      ],
    },
  ],
}

const venues = [
  { href: '/venues/bellair', name: '벨레어청담', tag: '하이엔드 라운지', cap: '150+', desc: '룩 벨레어 브랜드 아이덴티티 공간. 프라이빗 룸 · 연예인·인플루언서 방문.' },
  { href: '/venues/arju', name: '아르쥬청담', tag: '럭셔리 라운지', cap: '120+', desc: '인생샷 명소. 미디어 아트 & 대리석 인테리어. 생일 전용 플레이트 연출.' },
  { href: '/venues/people-terrace', name: '피플더테라스', tag: '테라스 다이닝', cap: '200+', desc: '유럽 휴양지 감성 야외 테라스. 낮엔 다이닝, 밤엔 샴페인 파티.' },
  { href: '/venues/castello', name: '카스텔로라운지', tag: '스카이뷰 라운지', cap: '300+', desc: '삼이빌딩 10층 파노라마 야경. 약 120평 전관 단독 대관 전문.' },
]

export default function GangnamLoungePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen pt-24 pb-20">

        {/* Breadcrumb */}
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 pt-4 pb-2">
          <ol className="flex items-center gap-2 text-xs text-gray-500">
            <li><Link href="/" className="hover:text-neon-pink transition-colors">홈</Link></li>
            <li>/</li>
            <li className="text-gray-300">강남 라운지 대관</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="relative overflow-hidden py-20 mb-16">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 via-dark-900 to-neon-pink/8" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-neon-purple/30 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-neon-purple rounded-full animate-pulse" />
              <span className="text-neon-purple text-sm font-semibold tracking-widest">GANGNAM LOUNGE RENTAL</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              강남 라운지 <span className="text-gradient">대관·예약</span>
            </h1>
            <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed tracking-wide mb-10 font-light">
              청담·압구정 프리미엄 라운지 대관 전문. 기업행사·생일파티·VIP모임·브랜드론칭까지 최적의 베뉴를 연결해 드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${PHONE}`} className="btn-primary px-8 py-4 text-base rounded-xl">📞 전화 문의</a>
              <Link href="/#contact" className="btn-outline px-8 py-4 text-base rounded-xl">📩 대관 문의하기</Link>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* 강남 라운지란? */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-6">강남 라운지란?</h2>
            <div className="glass-card border border-white/5 rounded-2xl p-8">
              <p className="text-gray-300 leading-relaxed mb-4">
                강남 라운지는 서울 강남구 청담·압구정동을 중심으로 운영되는 프리미엄 라운지 바입니다. 일반 클럽과 달리 프라이빗한 분위기 속에서 고급 음료·다이닝과 함께 특별한 시간을 즐길 수 있어, 기업행사·VIP 접대·생일파티·브랜드 런칭 등 다양한 행사 대관 장소로 인기가 높습니다.
              </p>
              <p className="text-gray-300 leading-relaxed">
                강남라운지대관은 청담동 일대 검증된 프리미엄 라운지 4곳을 파트너로 보유하고 있으며, 행사 목적·인원·예산에 맞는 최적의 베뉴를 1:1로 매칭해 드립니다.
              </p>
            </div>
          </section>

          {/* 대관 가능 업장 */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-6">강남 대관 가능 라운지</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {venues.map((v) => (
                <Link key={v.href} href={v.href} className="glass-card border border-white/5 hover:border-neon-purple/30 rounded-2xl p-6 transition-all group">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-neon-purple text-xs font-semibold border border-neon-purple/30 px-2 py-0.5 rounded-full">{v.tag}</span>
                    <span className="text-gray-500 text-xs">수용 {v.cap}</span>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-neon-pink transition-colors">{v.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{v.desc}</p>
                  <span className="text-neon-pink text-sm font-semibold">대관 상세보기 →</span>
                </Link>
              ))}
            </div>
          </section>

          {/* 대관 가능 행사 */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-6">강남 라운지 대관 가능 행사</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: '🎂', title: '생일파티', link: '/birthday-party' },
                { icon: '🏢', title: '기업행사', link: '/corporate-event' },
                { icon: '👑', title: 'VIP 모임', link: '/vip-lounge' },
                { icon: '🚀', title: '브랜드 런칭', link: '/corporate-event' },
                { icon: '🎊', title: '프라이빗 파티', link: '/private-party' },
                { icon: '📸', title: '촬영·팝업', link: '/#contact' },
              ].map((item) => (
                <Link key={item.title} href={item.link} className="glass-card border border-white/5 hover:border-neon-pink/30 rounded-xl p-5 text-center transition-all group">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="text-white font-bold text-sm group-hover:text-neon-pink transition-colors">{item.title}</h3>
                </Link>
              ))}
            </div>
          </section>

          {/* 예약 절차 */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-6">강남 라운지 대관 예약 절차</h2>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              {[
                { step: '01', title: '문의 접수', desc: '전화·카카오톡·폼으로 희망 조건 전달' },
                { step: '02', title: '베뉴 추천', desc: '조건에 맞는 최적 라운지 추천 및 견적' },
                { step: '03', title: '조건 확정', desc: '날짜·인원·가격 최종 확정' },
                { step: '04', title: '행사 진행', desc: '케이터링·DJ 등 원스톱 지원' },
              ].map((p, i) => (
                <div key={i} className="glass-card border border-white/5 rounded-2xl p-6 text-center">
                  <div className="text-4xl font-black text-gradient mb-3 opacity-30">{p.step}</div>
                  <h3 className="text-white font-bold text-sm mb-2">{p.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-6">강남 라운지 대관 자주 묻는 질문</h2>
            <div className="space-y-4">
              {faqData.map(({ q, a }, i) => (
                <div key={i} className="glass-card border border-white/5 rounded-2xl p-6">
                  <h3 className="text-white font-bold mb-3">Q. {q}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">A. {a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 관련 페이지 내부링크 */}
          <section className="mb-20">
            <h2 className="text-xl font-black text-white mb-4">관련 페이지</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { href: '/cheongdam-lounge', label: '청담 라운지 대관' },
                { href: '/apgujeong-lounge', label: '압구정 라운지 대관' },
                { href: '/birthday-party', label: '생일파티 장소' },
                { href: '/corporate-event', label: '기업행사 장소' },
                { href: '/private-party', label: '프라이빗 파티' },
                { href: '/vip-lounge', label: 'VIP 라운지' },
                { href: '/faq', label: 'FAQ' },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="text-sm text-gray-400 border border-white/10 hover:border-neon-pink/40 hover:text-neon-pink px-4 py-2 rounded-full transition-all">
                  {l.label}
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="glass-card border border-neon-pink/20 rounded-2xl p-10 text-center mb-8" style={{ boxShadow: '0 0 40px rgba(255,45,120,0.08)' }}>
            <h2 className="text-2xl font-black text-white mb-3">강남 라운지 대관 문의</h2>
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
