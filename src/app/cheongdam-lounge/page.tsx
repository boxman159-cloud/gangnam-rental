import type { Metadata } from 'next'
import Link from 'next/link'

const BASE = 'https://helpful-fudge-b837eb.netlify.app'
const PHONE = '010-9778-8571'

export const metadata: Metadata = {
  title: '청담 라운지 대관·예약 | 청담동 프리미엄 라운지',
  description: '청담 라운지 대관·예약 전문. 청담동 하이엔드 라운지 기업행사·생일파티·VIP모임·브랜드론칭 대관. 벨레어청담·아르쥬청담 010-9778-8571',
  alternates: { canonical: `${BASE}/cheongdam-lounge` },
  openGraph: {
    title: '청담 라운지 대관·예약 | 청담동 프리미엄 라운지',
    description: '청담동 하이엔드 라운지 대관 원스톱 서비스. 기업행사·생일파티·VIP모임 전문.',
    url: `${BASE}/cheongdam-lounge`,
    images: [{ url: '/images/arju-1.webp', width: 1200, height: 630, alt: '청담 라운지 대관' }],
  },
}

const faqData = [
  { q: '청담 라운지가 강남 다른 지역과 다른 점은?', a: '청담동은 명품 브랜드와 셀럽 문화의 중심지로, 라운지 수준과 서비스 품질이 강남 내에서도 최상위급입니다. 연예인·인플루언서 방문이 잦아 격조 있는 행사 장소로 최적입니다.' },
  { q: '청담 라운지 대관 최소 비용은?', a: '업장과 날짜·인원에 따라 다르며, 정확한 견적은 010-9778-8571로 문의 주시면 바로 안내해 드립니다.' },
  { q: '청담 라운지에서 생일파티 가능한가요?', a: '네, 생일 전용 플레이트·케이크·왕관·레터링 등 생일파티 전문 연출 가능한 업장을 연결해 드립니다.' },
  { q: '주차는 가능한가요?', a: '대부분의 청담 라운지는 인근 유료 주차장을 이용하며, 발렛 서비스 여부는 업장마다 상이합니다. 예약 시 확인해 드립니다.' },
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
        { '@type': 'ListItem', position: 3, name: '청담 라운지 대관', item: `${BASE}/cheongdam-lounge` },
      ],
    },
  ],
}

export default function CheongdamLoungePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen pt-24 pb-20">

        <nav className="max-w-6xl mx-auto px-4 sm:px-6 pt-4 pb-2">
          <ol className="flex items-center gap-2 text-xs text-gray-500">
            <li><Link href="/" className="hover:text-neon-pink transition-colors">홈</Link></li>
            <li>/</li>
            <li><Link href="/gangnam-lounge" className="hover:text-neon-pink transition-colors">강남 라운지 대관</Link></li>
            <li>/</li>
            <li className="text-gray-300">청담 라운지 대관</li>
          </ol>
        </nav>

        <section className="relative overflow-hidden py-20 mb-16">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 via-dark-900 to-neon-pink/8" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-neon-purple/30 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-neon-purple rounded-full animate-pulse" />
              <span className="text-neon-purple text-sm font-semibold tracking-widest">CHEONGDAM LOUNGE RENTAL</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              청담 라운지 <span className="text-gradient">대관·예약</span>
            </h1>
            <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed tracking-wide mb-10 font-light">
              청담동 최고의 프리미엄 라운지. 셀럽이 찾는 공간에서 특별한 행사를 경험하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${PHONE}`} className="btn-primary px-8 py-4 text-base rounded-xl">📞 전화 문의</a>
              <Link href="/#contact" className="btn-outline px-8 py-4 text-base rounded-xl">📩 대관 문의하기</Link>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-6">청담 라운지 특징</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { icon: '👑', title: '셀럽·인플루언서 핫플', desc: '연예인·인플루언서가 즐겨 찾는 청담동 라운지. 격조 있는 프라이빗 분위기가 특징입니다.' },
                { icon: '🥂', title: '프리미엄 샴페인 & 다이닝', desc: '국내 최고 수준의 샴페인 라인업과 파인 다이닝 메뉴. 오감을 만족시키는 특별한 경험.' },
                { icon: '📸', title: '인생샷 인테리어', desc: '미디어 아트·대리석·샹들리에 등 SNS에서 화제가 되는 감각적인 인테리어 공간.' },
                { icon: '🔒', title: '프라이빗 룸', desc: '완전히 독립된 프라이빗 룸 보유. VIP 행사·기업 미팅·소규모 모임에 최적.' },
              ].map((item, i) => (
                <div key={i} className="glass-card border border-white/5 rounded-2xl p-6 flex gap-4">
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
            <h2 className="text-2xl md:text-3xl font-black text-white mb-6">청담 대관 가능 라운지</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { href: '/venues/bellair', name: '벨레어청담', tag: '하이엔드 라운지', cap: '150+', desc: '룩 벨레어 브랜드 아이덴티티 공간. 프라이빗 룸 · 고급 샴페인 라인업.' },
                { href: '/venues/arju', name: '아르쥬청담', tag: '럭셔리 라운지', cap: '120+', desc: '인생샷 명소. 미디어 아트 & 대리석. 생일 전용 파티 연출 전문.' },
                { href: '/venues/people-terrace', name: '피플더테라스', tag: '테라스 다이닝', cap: '200+', desc: '유럽 감성 테라스. 다이닝부터 샴페인 파티까지 올데이 대관.' },
                { href: '/venues/castello', name: '카스텔로라운지', tag: '스카이뷰 라운지', cap: '300+', desc: '10층 전관. 도산대로 파노라마 야경. 대규모 행사 전문.' },
              ].map((v) => (
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

          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-6">자주 묻는 질문</h2>
            <div className="space-y-4">
              {faqData.map(({ q, a }, i) => (
                <div key={i} className="glass-card border border-white/5 rounded-2xl p-6">
                  <h3 className="text-white font-bold mb-3">Q. {q}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">A. {a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-xl font-black text-white mb-4">관련 페이지</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { href: '/gangnam-lounge', label: '강남 라운지 대관' },
                { href: '/apgujeong-lounge', label: '압구정 라운지 대관' },
                { href: '/birthday-party', label: '생일파티 장소' },
                { href: '/corporate-event', label: '기업행사 장소' },
                { href: '/vip-lounge', label: 'VIP 라운지' },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="text-sm text-gray-400 border border-white/10 hover:border-neon-pink/40 hover:text-neon-pink px-4 py-2 rounded-full transition-all">
                  {l.label}
                </Link>
              ))}
            </div>
          </section>

          <section className="glass-card border border-neon-pink/20 rounded-2xl p-10 text-center" style={{ boxShadow: '0 0 40px rgba(255,45,120,0.08)' }}>
            <h2 className="text-2xl font-black text-white mb-3">청담 라운지 대관 문의</h2>
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
