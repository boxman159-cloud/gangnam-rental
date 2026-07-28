import type { Metadata } from 'next'
import Link from 'next/link'

const BASE = 'https://lounge-rental.com'
const PHONE = '010-9778-8571'

export const metadata: Metadata = {
  title: '강남 라운지 대관 FAQ | 자주 묻는 질문',
  description: '강남 라운지 대관 자주 묻는 질문 모음. 대관 비용·예약 방법·수용 인원·케이터링·DJ·세금계산서 등 궁금한 점을 모두 답변해 드립니다.',
  alternates: { canonical: `${BASE}/faq` },
  openGraph: {
    title: '강남 라운지 대관 FAQ | 자주 묻는 질문',
    description: '강남 라운지 대관 자주 묻는 질문 모음.',
    url: `${BASE}/faq`,
  },
}

const faqs = [
  {
    category: '예약·비용',
    items: [
      { q: '대관 비용은 얼마인가요?', a: '업장·날짜·인원·행사 유형에 따라 다릅니다. 정확한 견적은 010-9778-8571로 문의 주시면 1시간 이내 안내해 드립니다.' },
      { q: '예약은 어떻게 하나요?', a: '전화(010-9778-8571), 카카오톡(alrep0410), 홈페이지 문의 폼 중 편한 방법으로 연락 주세요. 담당자가 1시간 이내 연락드립니다.' },
      { q: '당일 예약도 가능한가요?', a: '주중은 가능할 수 있으나 주말·공휴일은 최소 1~2주 전 예약을 강력히 권장합니다.' },
      { q: '계약금·잔금은 어떻게 되나요?', a: '업장마다 다르며, 일반적으로 예약 확정 시 계약금(30~50%)을 납부하고 행사 전 잔금을 납부합니다.' },
    ],
  },
  {
    category: '행사·서비스',
    items: [
      { q: 'DJ·케이터링 섭외도 가능한가요?', a: '네, DJ·케이터링·특수조명·포토부스·사회자 등 행사에 필요한 모든 서비스를 원스톱으로 연계해 드립니다.' },
      { q: '생일 케이크·플레이트 연출 가능한가요?', a: '네, 생일 전용 케이크·플레이트·왕관·레터링·풍선 장식 등 파티 연출 서비스를 제공하는 라운지를 연결해 드립니다.' },
      { q: '세금계산서 발행 가능한가요?', a: '네, 대부분의 파트너 업장에서 세금계산서 발행이 가능합니다. 예약 시 사전에 요청해 주세요.' },
      { q: '외국인 손님도 이용 가능한가요?', a: '네, 영어·중국어·일본어 응대 가능한 업장도 있습니다. 외국인 VIP 접대 시 사전에 알려주시면 맞춤 안내해 드립니다.' },
    ],
  },
  {
    category: '업장·시설',
    items: [
      { q: '최소·최대 수용 인원은?', a: '업장마다 다르며, 최소 10명~최대 300명+까지 수용 가능합니다. 인원에 맞는 업장을 추천해 드립니다.' },
      { q: '주차는 가능한가요?', a: '대부분의 청담·압구정 라운지는 인근 유료 주차장을 이용합니다. 발렛 서비스 여부는 업장마다 상이하며 예약 시 확인해 드립니다.' },
      { q: '전관 단독 대관만 가능한가요?', a: '업장마다 다릅니다. 카스텔로라운지는 전관 단독 대관 전문이며, 다른 업장은 부분 대관도 가능합니다.' },
      { q: '어떤 업장들이 있나요?', a: '벨레어청담(150+), 아르쥬청담(120+), 피플더테라스(200+), 카스텔로라운지(300+) 4개 프리미엄 라운지를 보유하고 있습니다.' },
    ],
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      mainEntity: faqs.flatMap(({ items }) => items).map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '홈', item: BASE },
        { '@type': 'ListItem', position: 2, name: 'FAQ', item: `${BASE}/faq` },
      ],
    },
  ],
}

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen pt-24 pb-20">

        <nav className="max-w-4xl mx-auto px-4 sm:px-6 pt-4 pb-2">
          <ol className="flex items-center gap-2 text-xs text-gray-500">
            <li><Link href="/" className="hover:text-neon-pink transition-colors">홈</Link></li>
            <li>/</li>
            <li className="text-gray-300">FAQ</li>
          </ol>
        </nav>

        <section className="relative overflow-hidden py-16 mb-12">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/8 via-dark-900 to-neon-pink/6" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
              자주 묻는 <span className="text-gradient">질문</span>
            </h1>
            <p className="text-white/60 text-base max-w-xl mx-auto font-light">
              강남 라운지 대관에 대해 궁금한 점을 모두 모았습니다.
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map(({ category, items }) => (
            <section key={category} className="mb-14">
              <h2 className="text-xl font-black text-white mb-5 pb-3 border-b border-white/10">{category}</h2>
              <div className="space-y-4">
                {items.map(({ q, a }, i) => (
                  <div key={i} className="glass-card border border-white/5 rounded-2xl p-6">
                    <h3 className="text-white font-bold mb-3">Q. {q}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">A. {a}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}

          <section className="mb-14">
            <h2 className="text-xl font-black text-white mb-4">관련 페이지</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { href: '/gangnam-lounge', label: '강남 라운지 대관' },
                { href: '/cheongdam-lounge', label: '청담 라운지 대관' },
                { href: '/birthday-party', label: '생일파티 장소' },
                { href: '/corporate-event', label: '기업행사 장소' },
                { href: '/private-party', label: '프라이빗 파티' },
                { href: '/vip-lounge', label: 'VIP 라운지' },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="text-sm text-gray-400 border border-white/10 hover:border-neon-pink/40 hover:text-neon-pink px-4 py-2 rounded-full transition-all">
                  {l.label}
                </Link>
              ))}
            </div>
          </section>

          <section className="glass-card border border-neon-pink/20 rounded-2xl p-10 text-center" style={{ boxShadow: '0 0 40px rgba(255,45,120,0.08)' }}>
            <h2 className="text-2xl font-black text-white mb-3">더 궁금한 점이 있으신가요?</h2>
            <p className="text-gray-400 mb-8">담당자가 1시간 이내 친절하게 답변드립니다.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${PHONE}`} className="btn-primary px-8 py-4 rounded-xl text-base">📞 {PHONE}</a>
              <Link href="/#contact" className="btn-outline px-8 py-4 rounded-xl text-base">📩 문의하기</Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
