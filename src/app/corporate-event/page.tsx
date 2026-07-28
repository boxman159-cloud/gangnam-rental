import type { Metadata } from 'next'
import Link from 'next/link'

const BASE = 'https://helpful-fudge-b837eb.netlify.app'
const PHONE = '010-9778-8571'

export const metadata: Metadata = {
  title: '강남 기업행사 장소 | 청담 라운지 기업파티·브랜드론칭 대관',
  description: '강남 기업행사 장소 전문. 청담·압구정 프리미엄 라운지 기업파티·브랜드론칭·VIP접대·단체행사 대관. DJ·케이터링 원스톱 지원. 010-9778-8571',
  alternates: { canonical: `${BASE}/corporate-event` },
  openGraph: {
    title: '강남 기업행사 장소 | 청담 라운지 기업파티·브랜드론칭 대관',
    description: '강남 청담·압구정 프리미엄 라운지 기업행사 대관 전문.',
    url: `${BASE}/corporate-event`,
    images: [{ url: '/images/castello-대관-전경.jpg', width: 1200, height: 630, alt: '강남 기업행사 장소' }],
  },
}

const faqData = [
  { q: '기업행사 라운지 대관 시 세금계산서 발행 가능한가요?', a: '네, 대부분의 파트너 업장에서 세금계산서 발행이 가능합니다. 예약 시 사전에 요청해 주시면 안내해 드립니다.' },
  { q: '기업 브랜드 론칭 행사에 적합한 라운지는?', a: '카스텔로라운지(300명+, 10층 파노라마 야경)가 대규모 론칭 행사에 최적입니다. 피플더테라스도 유럽 감성 테라스로 론칭 파티에 인기가 높습니다.' },
  { q: 'DJ·케이터링·조명 섭외도 가능한가요?', a: '네, DJ·케이터링·특수조명·포토부스·사회자 등 행사에 필요한 모든 서비스를 원스톱으로 연계해 드립니다.' },
  { q: '최대 수용 인원은?', a: '카스텔로라운지 기준 최대 300명+ 수용 가능합니다. 인원·예산·행사 성격에 맞는 업장을 추천해 드립니다.' },
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
        { '@type': 'ListItem', position: 2, name: '기업행사 장소', item: `${BASE}/corporate-event` },
      ],
    },
  ],
}

export default function CorporateEventPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen pt-24 pb-20">

        <nav className="max-w-6xl mx-auto px-4 sm:px-6 pt-4 pb-2">
          <ol className="flex items-center gap-2 text-xs text-gray-500">
            <li><Link href="/" className="hover:text-neon-pink transition-colors">홈</Link></li>
            <li>/</li>
            <li className="text-gray-300">기업행사 장소</li>
          </ol>
        </nav>

        <section className="relative overflow-hidden py-20 mb-16">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 via-dark-900 to-neon-pink/8" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-neon-purple/30 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-neon-purple rounded-full animate-pulse" />
              <span className="text-neon-purple text-sm font-semibold tracking-widest">CORPORATE EVENT VENUE</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              강남 기업행사 <span className="text-gradient">장소 대관</span>
            </h1>
            <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed tracking-wide mb-10 font-light">
              청담·압구정 프리미엄 라운지에서 품격 있는 기업행사를. DJ·케이터링·조명까지 원스톱 지원.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${PHONE}`} className="btn-primary px-8 py-4 text-base rounded-xl">📞 기업행사 문의</a>
              <Link href="/#contact" className="btn-outline px-8 py-4 text-base rounded-xl">📩 대관 문의하기</Link>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-6">강남 기업행사 대관 가능 유형</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: '🚀', title: '브랜드 론칭' },
                { icon: '🏢', title: '기업 회식·단체' },
                { icon: '🤝', title: 'VIP 접대·미팅' },
                { icon: '🎤', title: '시상식·발표회' },
                { icon: '🎊', title: '창립기념 파티' },
                { icon: '📸', title: '제품 촬영·팝업' },
              ].map((item) => (
                <div key={item.title} className="glass-card border border-white/5 rounded-xl p-5 text-center">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="text-white font-bold text-sm">{item.title}</h3>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-6">기업행사 추천 라운지</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { href: '/venues/castello', name: '카스텔로라운지', badge: '대규모 행사 추천', desc: '300명+ 수용, 10층 파노라마 야경. DJ·케이터링·바텐더·시큐리티 원스톱 연계. 전관 단독 대관 전문.' },
                { href: '/venues/people-terrace', name: '피플더테라스', badge: '브랜드론칭 인기', desc: '유럽 감성 야외 테라스 + 럭셔리 인테리어. 200명 수용. 올데이 기업 행사 가능.' },
                { href: '/venues/bellair', name: '벨레어청담', badge: 'VIP 접대', desc: '격조 있는 프라이빗 분위기. VIP 접대·임원 회식·소규모 기업 미팅에 최적.' },
                { href: '/venues/arju', name: '아르쥬청담', badge: '트렌디한 행사', desc: '미디어 아트 인테리어. 트렌디한 브랜드·패션·뷰티 업계 기업행사에 인기.' },
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
                { href: '/vip-lounge', label: 'VIP 라운지' },
                { href: '/private-party', label: '프라이빗 파티' },
                { href: '/birthday-party', label: '생일파티 장소' },
                { href: '/faq', label: 'FAQ' },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="text-sm text-gray-400 border border-white/10 hover:border-neon-pink/40 hover:text-neon-pink px-4 py-2 rounded-full transition-all">
                  {l.label}
                </Link>
              ))}
            </div>
          </section>

          <section className="glass-card border border-neon-pink/20 rounded-2xl p-10 text-center" style={{ boxShadow: '0 0 40px rgba(255,45,120,0.08)' }}>
            <h2 className="text-2xl font-black text-white mb-3">기업행사 대관 문의</h2>
            <p className="text-gray-400 mb-8">세금계산서 발행 가능. 담당자가 1시간 이내 연락드립니다.</p>
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
