import type { Metadata } from 'next'
import Link from 'next/link'

const BASE = 'https://lounge-rental.com'
const PHONE = '010-9778-8571'

export const metadata: Metadata = {
  title: '압구정 라운지 대관·예약 | 압구정 파티룸·행사장',
  description: '압구정 라운지 대관·예약 전문. 압구정로데오 프리미엄 라운지 기업행사·생일파티·테라스 파티 대관. 피플더테라스 010-9778-8571',
  alternates: { canonical: `${BASE}/apgujeong-lounge` },
  openGraph: {
    title: '압구정 라운지 대관·예약 | 압구정 파티룸·행사장',
    description: '압구정 프리미엄 라운지 대관 원스톱 서비스.',
    url: `${BASE}/apgujeong-lounge`,
    images: [{ url: '/images/people-1.webp', width: 1200, height: 630, alt: '압구정 라운지 대관' }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '홈', item: BASE },
        { '@type': 'ListItem', position: 2, name: '강남 라운지 대관', item: `${BASE}/gangnam-lounge` },
        { '@type': 'ListItem', position: 3, name: '압구정 라운지 대관', item: `${BASE}/apgujeong-lounge` },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: '압구정 라운지 대관 특징은?', acceptedAnswer: { '@type': 'Answer', text: '압구정은 청담과 함께 강남의 프리미엄 라운지 밀집 지역입니다. 특히 유럽 감성의 테라스 다이닝과 고급 인테리어로 유명한 피플더테라스가 위치해 있습니다.' } },
        { '@type': 'Question', name: '압구정 라운지 테라스 파티 가능한가요?', acceptedAnswer: { '@type': 'Answer', text: '네, 피플더테라스에서 유럽 휴양지 감성의 야외 테라스 파티가 가능합니다. 봄~가을 시즌에 특히 인기가 높습니다.' } },
      ],
    },
  ],
}

export default function ApgujeongLoungePage() {
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
            <li className="text-gray-300">압구정 라운지 대관</li>
          </ol>
        </nav>

        <section className="relative overflow-hidden py-20 mb-16">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 via-dark-900 to-neon-pink/8" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-neon-purple/30 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-neon-purple rounded-full animate-pulse" />
              <span className="text-neon-purple text-sm font-semibold tracking-widest">APGUJEONG LOUNGE RENTAL</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              압구정 라운지 <span className="text-gradient">대관·예약</span>
            </h1>
            <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed tracking-wide mb-10 font-light">
              압구정로데오 유럽 감성 테라스 라운지. 다이닝부터 샴페인 파티까지 올데이 대관.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${PHONE}`} className="btn-primary px-8 py-4 text-base rounded-xl">📞 전화 문의</a>
              <Link href="/#contact" className="btn-outline px-8 py-4 text-base rounded-xl">📩 대관 문의하기</Link>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-6">압구정 대관 라운지</h2>
            <Link href="/venues/people-terrace" className="glass-card border border-white/5 hover:border-neon-purple/30 rounded-2xl p-8 transition-all group block">
              <div className="flex items-start justify-between mb-4">
                <span className="text-neon-purple text-xs font-semibold border border-neon-purple/30 px-2 py-0.5 rounded-full">테라스 다이닝</span>
                <span className="text-gray-500 text-xs">수용 200+</span>
              </div>
              <h3 className="text-white font-bold text-2xl mb-3 group-hover:text-neon-pink transition-colors">피플더테라스</h3>
              <p className="text-gray-400 leading-relaxed mb-6">압구정로데오역 인근. 유럽 휴양지 감성의 이국적인 야외 테라스와 럭셔리 샹들리에 인테리어. 시그니처 버킷치킨·파스타·스테이크 다이닝부터 밤의 샴페인 파티까지 올데이 운영.</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['야외 테라스', '유럽 감성', '다이닝 & 파티', '200명+', '시그니처 메뉴'].map(tag => (
                  <span key={tag} className="text-xs text-gray-400 bg-white/5 px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
              <span className="text-neon-pink text-sm font-semibold">대관 상세보기 →</span>
            </Link>
          </section>

          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-6">압구정 라운지 대관 추천 행사</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: '🌿', title: '테라스 파티', desc: '봄~가을 야외 테라스 파티' },
                { icon: '🍽️', title: '다이닝 행사', desc: '코스 다이닝 기업 행사' },
                { icon: '🎂', title: '생일파티', desc: '테라스 생일 파티' },
                { icon: '🥂', title: '샴페인 파티', desc: '심야 샴페인 파티' },
                { icon: '🏢', title: '기업 회식', desc: '단체 회식·팀빌딩' },
                { icon: '💑', title: '기념일', desc: '커플·기념일 이벤트' },
              ].map((item) => (
                <div key={item.title} className="glass-card border border-white/5 rounded-xl p-5">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h3 className="text-white font-bold text-sm mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-xl font-black text-white mb-4">관련 페이지</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { href: '/gangnam-lounge', label: '강남 라운지 대관' },
                { href: '/cheongdam-lounge', label: '청담 라운지 대관' },
                { href: '/birthday-party', label: '생일파티 장소' },
                { href: '/corporate-event', label: '기업행사 장소' },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="text-sm text-gray-400 border border-white/10 hover:border-neon-pink/40 hover:text-neon-pink px-4 py-2 rounded-full transition-all">
                  {l.label}
                </Link>
              ))}
            </div>
          </section>

          <section className="glass-card border border-neon-pink/20 rounded-2xl p-10 text-center" style={{ boxShadow: '0 0 40px rgba(255,45,120,0.08)' }}>
            <h2 className="text-2xl font-black text-white mb-3">압구정 라운지 대관 문의</h2>
            <p className="text-gray-400 mb-8">담당자가 1시간 이내 연락드립니다.</p>
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
