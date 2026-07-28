import type { Metadata } from 'next'
import Link from 'next/link'

const BASE = 'https://lounge-rental.com'
const PHONE = '010-9778-8571'

export const metadata: Metadata = {
  title: 'Gangnam Lounge Venue Rental | Private Event Seoul',
  description: 'Gangnam lounge venue rental specialist. Premium private lounges in Cheongdam & Apgujeong, Seoul. Corporate events, birthday parties, VIP gatherings, brand launches. Contact: +82-10-9778-8571',
  alternates: {
    canonical: `${BASE}/en`,
    languages: { 'en': `${BASE}/en`, 'ko': BASE },
  },
  openGraph: {
    title: 'Gangnam Lounge Venue Rental | Private Event Seoul',
    description: 'Premium private lounge venue rental in Gangnam, Seoul. Corporate events, birthday parties, VIP gatherings.',
    url: `${BASE}/en`,
    locale: 'en_US',
    images: [{ url: '/images/bellair-1.webp', width: 1200, height: 630, alt: 'Gangnam Lounge Venue Rental' }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE}/en` },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How do I book a Gangnam lounge?', acceptedAnswer: { '@type': 'Answer', text: 'Contact us via phone (+82-10-9778-8571), KakaoTalk (alrep0410), WeChat (club_jack_livin), LINE (clubjacklivn), or the inquiry form. We respond within 1 hour.' } },
        { '@type': 'Question', name: 'What types of events can be held?', acceptedAnswer: { '@type': 'Answer', text: 'Corporate events, brand launches, birthday parties, VIP gatherings, private parties, filming, pop-up stores, and more.' } },
        { '@type': 'Question', name: 'How many guests can the venues accommodate?', acceptedAnswer: { '@type': 'Answer', text: 'From 20 to 300+ guests. We have venues ranging from intimate private rooms to full-floor exclusive rentals.' } },
      ],
    },
  ],
}

const venues = [
  { href: '/venues/bellair', name: 'Bellair Cheongdam', tag: 'High-End Lounge', cap: '150+', desc: 'Luc Belaire brand identity space. Private room · Celebrity & influencer hotspot.' },
  { href: '/venues/arju', name: 'Arju Cheongdam', tag: 'Luxury Lounge', cap: '120+', desc: 'Instagram hotspot. Media art & marble interior. Birthday party specialist.' },
  { href: '/venues/people-terrace', name: 'People the Terrace', tag: 'Terrace Dining', cap: '200+', desc: 'European resort-style terrace. All-day dining to champagne party.' },
  { href: '/venues/castello', name: 'Castello Lounge', tag: 'Skyview Lounge', cap: '300+', desc: '10th floor panoramic night view. Exclusive full-venue rental specialist.' },
]

export default function EnglishPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen pt-24 pb-20">

        <section className="relative overflow-hidden py-20 mb-16">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 via-dark-900 to-neon-pink/8" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-neon-purple/30 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-neon-purple rounded-full animate-pulse" />
              <span className="text-neon-purple text-sm font-semibold tracking-widest">GANGNAM LOUNGE RENTAL</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Gangnam Lounge <span className="text-gradient">Venue Rental</span>
            </h1>
            <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed tracking-wide mb-10 font-light">
              Premium private lounge venue rental in Cheongdam & Apgujeong, Seoul. Corporate events · birthday parties · VIP gatherings · brand launches.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${PHONE}`} className="btn-primary px-8 py-4 text-base rounded-xl">📞 Call Now</a>
              <Link href="/#contact" className="btn-outline px-8 py-4 text-base rounded-xl">📩 Send Inquiry</Link>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-6">Available Venues in Gangnam</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {venues.map((v) => (
                <Link key={v.href} href={v.href} className="glass-card border border-white/5 hover:border-neon-purple/30 rounded-2xl p-6 transition-all group">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-neon-purple text-xs font-semibold border border-neon-purple/30 px-2 py-0.5 rounded-full">{v.tag}</span>
                    <span className="text-gray-500 text-xs">Capacity {v.cap}</span>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-neon-pink transition-colors">{v.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{v.desc}</p>
                  <span className="text-neon-pink text-sm font-semibold">View Details →</span>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-6">Event Types</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: '🎂', title: 'Birthday Party' },
                { icon: '🏢', title: 'Corporate Event' },
                { icon: '👑', title: 'VIP Gathering' },
                { icon: '🚀', title: 'Brand Launch' },
                { icon: '🎊', title: 'Private Party' },
                { icon: '📸', title: 'Filming / Pop-up' },
              ].map((item) => (
                <div key={item.title} className="glass-card border border-white/5 rounded-xl p-5 text-center">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="text-white font-bold text-sm">{item.title}</h3>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-6">How to Book</h2>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              {[
                { step: '01', title: 'Contact Us', desc: 'Call, KakaoTalk, WeChat, LINE, or form' },
                { step: '02', title: 'Venue Match', desc: 'We recommend the best venue for your needs' },
                { step: '03', title: 'Confirm', desc: 'Finalize date, headcount, and price' },
                { step: '04', title: 'Event Day', desc: 'Full support with DJ, catering & more' },
              ].map((p, i) => (
                <div key={i} className="glass-card border border-white/5 rounded-2xl p-6 text-center">
                  <div className="text-4xl font-black text-gradient mb-3 opacity-30">{p.step}</div>
                  <h3 className="text-white font-bold text-sm mb-2">{p.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="glass-card border border-neon-pink/20 rounded-2xl p-10 text-center" style={{ boxShadow: '0 0 40px rgba(255,45,120,0.08)' }}>
            <h2 className="text-2xl font-black text-white mb-3">Contact Us</h2>
            <p className="text-gray-400 mb-2">We respond within 1 hour · Available 24/7</p>
            <p className="text-gray-500 text-sm mb-8">KakaoTalk: alrep0410 · WeChat: club_jack_livin · LINE: clubjacklivn</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${PHONE}`} className="btn-primary px-8 py-4 rounded-xl text-base">📞 +82-10-9778-8571</a>
              <Link href="/#contact" className="btn-outline px-8 py-4 rounded-xl text-base">📩 Send Inquiry</Link>
            </div>
          </section>

        </div>
      </div>
    </>
  )
}
