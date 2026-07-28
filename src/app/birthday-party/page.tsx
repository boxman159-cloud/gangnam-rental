import type { Metadata } from 'next'
import Link from 'next/link'

const BASE = 'https://helpful-fudge-b837eb.netlify.app'
const PHONE = '010-9778-8571'

export const metadata: Metadata = {
  title: '강남 생일파티 장소 | 청담·압구정 파티룸 대관',
  description: '강남 생일파티 장소 추천. 청담·압구정 프라이빗 라운지 생일파티 대관. 생일 케이크·플레이트·왕관·레터링 파티 연출. 010-9778-8571',
  alternates: { canonical: `${BASE}/birthday-party` },
  openGraph: {
    title: '강남 생일파티 장소 | 청담·압구정 파티룸 대관',
    description: '강남 청담·압구정 프라이빗 라운지 생일파티 대관 전문.',
    url: `${BASE}/birthday-party`,
    images: [{ url: '/images/arju-1.webp', width: 1200, height: 630, alt: '강남 생일파티 장소' }],
  },
}

const faqData = [
  { q: '강남 생일파티 라운지 대관 비용은?', a: '인원·날짜·업장에 따라 다르며, 소규모 20명부터 대규모 300명까지 수용 가능합니다. 정확한 견적은 010-9778-8571로 문의 주세요.' },
  { q: '생일 케이크·플레이트 연출 가능한가요?', a: '네, 생일 전용 케이크·플레이트·왕관·레터링·풍선 장식 등 파티 연출 서비스를 제공하는 라운지를 연결해 드립니다.' },
  { q: '몇 명부터 대관 가능한가요?', a: '업장마다 다르지만 최소 10명~20명부터 대관 문의가 가능합니다. 소규모 프라이빗 파티도 환영합니다.' },
  { q: '당일 예약 가능한가요?', a: '주중은 가능할 수 있으나 주말·공휴일은 최소 1~2주 전 예약을 강력히 권장합니다.' },
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
        { '@type': 'ListItem', position: 2, name: '생일파티 장소', item: `${BASE}/birthday-party` },
      ],
    },
  ],
}

export default function BirthdayPartyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen pt-24 pb-20">

        <nav className="max-w-6xl mx-auto px-4 sm:px-6 pt-4 pb-2">
          <ol className="flex items-center gap-2 text-xs text-gray-500">
            <li><Link href="/" className="hover:text-neon-pink transition-colors">홈</Link></li>
            <li>/</li>
            <li className="text-gray-300">생일파티 장소</li>
          </ol>
        </nav>

        <section className="relative overflow-hidden py-20 mb-16">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 via-dark-900 to-neon-pink/8" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl" />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-neon-pink/30 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-neon-pink rounded-full animate-pulse" />
              <span className="text-neon-pink text-sm font-semibold tracking-widest">BIRTHDAY PARTY VENUE</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              강남 생일파티 <span className="text-gradient">장소 추천</span>
            </h1>
            <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed tracking-wide mb-10 font-light">
              청담·압구정 프리미엄 라운지에서 평생 기억에 남을 생일파티를. 케이크·플레이트·파티 연출까지 원스톱 지원.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${PHONE}`} className="btn-primary px-8 py-4 text-base rounded-xl">📞 생일파티 문의</a>
              <Link href="/#contact" className="btn-outline px-8 py-4 text-base rounded-xl">📩 대관 문의하기</Link>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-6">강남 생일파티 라운지 특장점</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { icon: '🎂', title: '생일 전용 파티 연출', desc: '케이크·플레이트·왕관·레터링·풍선 장식 등 생일파티 전용 연출 서비스 제공.' },
                { icon: '📸', title: '인생샷 보장 인테리어', desc: 'SNS에서 화제 되는 감각적 인테리어. 생일날 특별한 사진과 함께 추억을 남기세요.' },
                { icon: '🥂', title: '샴페인·칵테일 스페셜', desc: '생일 특별 샴페인 타워·시그니처 칵테일 등 특별한 음료 서비스.' },
                { icon: '🔒', title: '완전 프라이빗 공간', desc: '오롯이 우리만의 공간. 눈치 보지 않고 마음껏 즐길 수 있는 프라이빗 라운지.' },
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
            <h2 className="text-2xl md:text-3xl font-black text-white mb-6">생일파티 추천 라운지</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { href: '/venues/arju', name: '아르쥬청담', badge: '생일파티 인기 1위', desc: '인생샷 명소. 생일 전용 플레이트·왕관·레터링 파티 연출 전문. 여성 고객·커플에게 압도적 인기.' },
                { href: '/venues/bellair', name: '벨레어청담', badge: '프라이빗 분위기', desc: '고급스럽고 차분한 분위기. 프라이빗 룸 완비. 소규모 생일 모임에 최적.' },
                { href: '/venues/people-terrace', name: '피플더테라스', badge: '테라스 파티', desc: '유럽 감성 야외 테라스 생일파티. 낮부터 밤까지 올데이 파티 가능.' },
                { href: '/venues/castello', name: '카스텔로라운지', badge: '대규모 생일파티', desc: '300명+ 수용 스카이뷰 라운지. 대규모 생일 파티·서프라이즈 이벤트 전문.' },
              ].map((v) => (
                <Link key={v.href} href={v.href} className="glass-card border border-white/5 hover:border-neon-purple/30 rounded-2xl p-6 transition-all group">
                  <span className="inline-block text-neon-pink text-xs font-semibold border border-neon-pink/30 px-2 py-0.5 rounded-full mb-3">{v.badge}</span>
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
                { href: '/cheongdam-lounge', label: '청담 라운지 대관' },
                { href: '/private-party', label: '프라이빗 파티' },
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
            <h2 className="text-2xl font-black text-white mb-3">생일파티 대관 문의</h2>
            <p className="text-gray-400 mb-8">원하는 날짜와 인원을 알려주시면 최적의 생일파티 라운지를 추천해 드립니다.</p>
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
