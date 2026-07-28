'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import ContactButtons from '@/components/ui/ContactButtons'
import { rentalVenues } from '@/data/venues'

const i18n = {
  ko: {
    badge: 'GANGNAM VENUE RENTAL',
    heroTitle: '강남 클럽·라운지',
    heroGradient: '대관, 한 곳에서.',
    heroDesc: '강남(신사·청담·압구정) 전역의 클럽·라운지 대관 전문 서비스. 기업 파티·브랜드 론칭·팝업·촬영·피로연까지 최적의 베뉴를 연결해 드립니다.',
    heroSub: '기업 파티 · 브랜드 론칭 · 팝업 스토어 · 촬영 대관 · 결혼식 피로연 · 프라이빗 파티',
    ctaInquiry: '📩 대관 문의하기',
    ctaBrowse: '🏢 업장 둘러보기',
    whyTitle: '⚡ 강남 대관센터만의 특장점',
    why: [
      { icon: '🏆', title: '원스톱 베뉴 매칭', desc: '원하는 컨셉만 말씀해 주시면, 강남 전역 최적의 베뉴 리스트를 즉시 제안합니다.' },
      { icon: '💰', title: '합리적인 견적 조율', desc: '각 베뉴와의 공식 제휴로 대관료·최소소비 거품 없는 합리적인 조건을 제공합니다.' },
      { icon: '🎛️', title: '행사 최적화 지원', desc: 'DJ 섭외, 음향·조명 세팅, 케이터링 등 행사에 필요한 모든 인프라 연계를 도와드립니다.' },
      { icon: '⚡', title: '빠른 응답 & 1:1 전담', desc: '문의 후 1시간 이내 전담 매니저가 연락드립니다. 24시간 언제든 문의 가능합니다.' },
    ],
    processTitle: '📋 대관 신청 절차',
    process: [
      { step: '01', title: '대관 문의 접수', desc: '아래 양식 또는 연락처로 희망 조건 전달' },
      { step: '02', title: '베뉴 큐레이팅', desc: '조건에 맞는 최적 베뉴 리스트업 및 견적 비교' },
      { step: '03', title: '조건 조율·확정', desc: '상세 대관 조건 및 일정 최종 확정' },
      { step: '04', title: '계약 및 행사', desc: '안전하고 성공적인 행사 진행' },
    ],
    venuesTitle: '🏢 대관 가능 업장',
    venuesDesc: '강남 클럽부터 하이엔드 라운지까지, 모든 행사 성격에 맞는 베뉴를 보유하고 있습니다.',

    capacity: '수용 인원',
    viewDetail: '대관 상세보기',
    formTitle: '📩 대관 문의 신청',
    formDesc: '기본 정보를 작성해 주시면 담당자가 1시간 이내 연락드립니다.',
    fields: {
      name: '신청자명 / 법인(단체)명', namePh: '홍길동 / (주)강남클럽앤라운지',
      phone: '연락처', phonePh: '010-0000-0000',
      eventType: '행사 성격',
      date: '희망 날짜 및 시간', datePh: '예: 2025.08.15 / 저녁 7시',
      headcount: '예상 참여 인원', headcountPh: '예: 50명',
      venueStyle: '선호 베뉴 스타일 또는 특정 매장', venueStylePh: '예: 압구정 힙합 라운지 / 라이언 슈퍼클럽',
      budget: '예상 예산 범위', budgetPh: '예: 500만원 내외 / 협의 가능',
      message: '기타 요청 사항', messagePh: 'DJ 섭외, 특수 조명, 케이터링 등',
    },
    eventTypes: ['기업 브랜드 론칭 파티', '기업 회식·단체 모임', '팝업 스토어', '촬영 대관', '결혼식 피로연', '프라이빗 파티', '생일 파티·기념일', '기타'],
    submitBtn: '📝 대관 문의 제출',
    submitNote: '제출 후 담당자가 1시간 이내 연락드립니다.',
    successTitle: '신청 완료!',
    successDesc: '대관 문의가 접수되었습니다. 담당자가 빠른 시간 내에 연락드리겠습니다.',
    quickContact: '📞 실시간 빠른 문의',
    quickContactSub: '전화·카카오톡·WeChat·LINE으로 즉시 상담',
  },
  en: {
    badge: 'GANGNAM VENUE RENTAL',
    heroTitle: 'Gangnam Clubs & Lounges —',
    heroGradient: 'Venue Rental, All in One.',
    heroDesc: 'Expert venue rental across Gangnam (Sinsa · Cheongdam · Apgujeong). We connect you with the perfect club or lounge for corporate parties, brand launches, pop-ups, filming, and private events.',
    heroSub: 'Corporate Party · Brand Launch · Pop-Up Store · Filming · Wedding Reception · Private Party',
    ctaInquiry: '📩 Submit Inquiry',
    ctaBrowse: '🏢 Browse Venues',
    whyTitle: '⚡ Why Choose Us',
    why: [
      { icon: '🏆', title: 'One-Stop Venue Matching', desc: 'Tell us your concept and we instantly suggest the best venues across Gangnam.' },
      { icon: '💰', title: 'Fair Price Negotiation', desc: 'Official partnerships with each venue mean no inflated fees — just fair terms.' },
      { icon: '🎛️', title: 'Event Optimization', desc: 'We coordinate DJs, sound & lighting, catering, and all event infrastructure.' },
      { icon: '⚡', title: 'Fast Response & Dedicated Manager', desc: 'A dedicated manager contacts you within 1 hour. Available 24/7.' },
    ],
    processTitle: '📋 Rental Process',
    process: [
      { step: '01', title: 'Submit Inquiry', desc: 'Send your requirements via the form or contact us directly' },
      { step: '02', title: 'Venue Curation', desc: 'We list the best matching venues and provide a quote comparison' },
      { step: '03', title: 'Confirm Terms', desc: 'Finalize rental details and schedule' },
      { step: '04', title: 'Contract & Event', desc: 'Enjoy a safe and successful event' },
    ],
    venuesTitle: '🏢 Available Venues',
    venuesDesc: 'From mega clubs to high-end lounges — we have the right venue for every event.',
    tabAll: 'All',
    tabClub: 'Club',
    tabLounge: 'Lounge',
    capacity: 'Capacity',
    viewDetail: 'View Rental Details',
    formTitle: '📩 Submit a Rental Inquiry',
    formDesc: 'Fill in the details and our team will contact you within 1 hour.',
    fields: {
      name: 'Your Name / Organization', namePh: 'John Doe / ABC Company',
      phone: 'Phone Number', phonePh: '010-0000-0000',
      eventType: 'Event Type',
      date: 'Preferred Date & Time', datePh: 'e.g. Aug 15, 2025 / 7PM',
      headcount: 'Expected Headcount', headcountPh: 'e.g. 50 people',
      venueStyle: 'Preferred Venue Style or Specific Venue', venueStylePh: 'e.g. Apgujeong hip-hop lounge / LION Super Club',
      budget: 'Estimated Budget', budgetPh: 'e.g. ~$3,500 / Open to discussion',
      message: 'Additional Requests', messagePh: 'DJ booking, special lighting, catering, etc.',
    },
    eventTypes: ['Corporate Brand Launch', 'Company Dinner · Group Gathering', 'Pop-Up Store', 'Filming Rental', 'Wedding Reception', 'Private Party', 'Birthday · Anniversary', 'Other'],
    submitBtn: '📝 Submit Rental Inquiry',
    submitNote: 'Our team will contact you within 1 hour of submission.',
    successTitle: 'Inquiry Received!',
    successDesc: 'Your rental inquiry has been submitted. We will contact you shortly.',
    quickContact: '📞 Quick Contact',
    quickContactSub: 'Instant consultation via Phone · WeChat · LINE',
  },
  zh: {
    badge: 'GANGNAM VENUE RENTAL',
    heroTitle: '江南俱乐部·酒廊',
    heroGradient: '场地租赁，一站搞定。',
    heroDesc: '专业提供江南全域（新沙·清潭·狎鸥亭）俱乐部·酒廊包场服务。企业派对·品牌发布·快闪店·拍摄·婚礼答谢宴等各类活动，为您匹配最优场地。',
    heroSub: '企业派对 · 品牌发布 · 快闪店 · 拍摄场地 · 婚礼答谢宴 · 私人派对',
    ctaInquiry: '📩 提交租场咨询',
    ctaBrowse: '🏢 浏览场地',
    whyTitle: '⚡ 我们的独特优势',
    why: [
      { icon: '🏆', title: '一站式场地匹配', desc: '只需告知需求，我们立即为您推荐江南全域最优场地列表。' },
      { icon: '💰', title: '合理报价协调', desc: '通过与各场地的官方合作，为您争取无水分的合理条件。' },
      { icon: '🎛️', title: '活动优化支持', desc: '协助DJ预约、音响灯光设置、餐饮配套等所有活动基础设施对接。' },
      { icon: '⚡', title: '快速响应 & 专属管理', desc: '咨询后1小时内专属经理联系您，24小时全年无休。' },
    ],
    processTitle: '📋 租场申请流程',
    process: [
      { step: '01', title: '提交申请', desc: '通过下方表格或联系方式提交需求' },
      { step: '02', title: '场地甄选', desc: '列出最优匹配场地并比较报价' },
      { step: '03', title: '确认条件', desc: '最终确认详细租场条件及日程' },
      { step: '04', title: '签约及活动', desc: '安全顺利地举办活动' },
    ],
    venuesTitle: '🏢 可租赁场地',
    venuesDesc: '从大型俱乐部到高端酒廊，各类活动均可找到合适场地。',
    tabAll: '全部',
    tabClub: '俱乐部',
    tabLounge: '酒廊',
    capacity: '容纳人数',
    viewDetail: '查看租场详情',
    formTitle: '📩 提交租场咨询',
    formDesc: '填写基本信息，负责人将在1小时内与您联系。',
    fields: {
      name: '申请人姓名 / 法人(团体)名称', namePh: '张三 / ABC公司',
      phone: '联系方式', phonePh: '010-0000-0000',
      eventType: '活动性质',
      date: '希望日期及时间', datePh: '例：2025.08.15 / 晚上7点',
      headcount: '预计参与人数', headcountPh: '例：50人',
      venueStyle: '偏好场地风格或指定场所', venueStylePh: '例：狎鸥亭嘻哈酒廊 / LION超级俱乐部',
      budget: '预计预算范围', budgetPh: '例：500万韩元左右 / 可协商',
      message: '其他要求', messagePh: 'DJ预约、特殊灯光、餐饮等',
    },
    eventTypes: ['企业品牌发布派对', '企业聚餐·团体聚会', '快闪店', '拍摄场地', '婚礼答谢宴', '私人派对', '生日·纪念日', '其他'],
    submitBtn: '📝 提交租场咨询',
    submitNote: '提交后负责人将在1小时内联系您。',
    successTitle: '申请成功！',
    successDesc: '您的租场咨询已提交，负责人将尽快与您联系。',
    quickContact: '📞 实时快速咨询',
    quickContactSub: '通过电话·WeChat·LINE即时咨询',
  },
  ja: {
    badge: 'GANGNAM VENUE RENTAL',
    heroTitle: '江南クラブ·ラウンジ —',
    heroGradient: '会場貸切、ここ一箇所で。',
    heroDesc: '江南全域（新沙·清潭·狎鷗亭）のクラブ·ラウンジ貸切専門サービス。企業パーティー·ブランドローンチ·ポップアップ·撮影·披露宴まで最適なベニューをご紹介。',
    heroSub: '企業パーティー · ブランドローンチ · ポップアップ · 撮影 · 披露宴 · プライベートパーティー',
    ctaInquiry: '📩 貸切お問い合わせ',
    ctaBrowse: '🏢 会場を見る',
    whyTitle: '⚡ 私たちが選ばれる理由',
    why: [
      { icon: '🏆', title: 'ワンストップマッチング', desc: 'ご希望をお伝えいただければ、江南全域の最適なベニューリストをすぐにご提案します。' },
      { icon: '💰', title: '合理的な見積もり調整', desc: '各ベニューとの公式提携により、透明で合理的な条件を提供します。' },
      { icon: '🎛️', title: 'イベント最適化サポート', desc: 'DJ手配、音響·照明、ケータリングなどすべてのインフラ連携をお手伝いします。' },
      { icon: '⚡', title: '迅速対応 & 専任担当', desc: 'お問い合わせから1時間以内に専任担当者がご連絡します。24時間対応。' },
    ],
    processTitle: '📋 貸切申請の流れ',
    process: [
      { step: '01', title: '申請受付', desc: '下記フォームまたはお問い合わせ先から条件を送信' },
      { step: '02', title: 'ベニュー選定', desc: '最適なベニューをリストアップし見積もり比較' },
      { step: '03', title: '条件確定', desc: '詳細な貸切条件と日程を最終確定' },
      { step: '04', title: '契約とイベント', desc: '安全で成功したイベントを実施' },
    ],
    venuesTitle: '🏢 貸切可能な会場',
    venuesDesc: '大型クラブからハイエンドラウンジまで、あらゆるイベントに対応するベニューを揃えています。',
    tabAll: '全て',
    tabClub: 'クラブ',
    tabLounge: 'ラウンジ',
    capacity: '収容人数',
    viewDetail: '貸切詳細を見る',
    formTitle: '📩 貸切お問い合わせ',
    formDesc: '基本情報をご記入ください。担当者が1時間以内にご連絡いたします。',
    fields: {
      name: '申請者名 / 法人(団体)名', namePh: '山田太郎 / ABC株式会社',
      phone: '電話番号', phonePh: '010-0000-0000',
      eventType: 'イベントの種類',
      date: 'ご希望日時', datePh: '例：2025.08.15 / 夜7時',
      headcount: '参加予定人数', headcountPh: '例：50名',
      venueStyle: 'ご希望のベニュースタイルまたは特定店舗', venueStylePh: '例：狎鷗亭ヒップホップラウンジ / LIONスーパークラブ',
      budget: '想定予算', budgetPh: '例：50万円程度 / 応相談',
      message: 'その他ご要望', messagePh: 'DJ手配、特殊照明、ケータリングなど',
    },
    eventTypes: ['企業ブランドローンチパーティー', '会社宴会·団体集まり', 'ポップアップストア', '撮影貸切', '結婚披露宴', 'プライベートパーティー', '誕生日·記念日', 'その他'],
    submitBtn: '📝 貸切お問い合わせを送信',
    submitNote: '送信後、担当者が1時間以内にご連絡いたします。',
    successTitle: '申請完了！',
    successDesc: '貸切のお問い合わせを受け付けました。担当者が早急にご連絡いたします。',
    quickContact: '📞 リアルタイムお問い合わせ',
    quickContactSub: '電話·WeChat·LINEで即時相談',
  },
}

export default function HomePage() {
  const { lang } = useLanguage()
  const c = i18n[lang] ?? i18n.ko
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', phone: '', eventType: '', date: '', headcount: '', venueStyle: '', budget: '', message: '',
  })

  const getTag = (v: typeof rentalVenues[0]) =>
    lang === 'en' ? v.tagEn : lang === 'zh' ? v.tagZh : lang === 'ja' ? v.tagJa : v.tag

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('https://formspree.io/f/xgoqjzpg', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        이름: form.name, 연락처: form.phone, 행사성격: form.eventType,
        희망날짜: form.date, 예상인원: form.headcount,
        베뉴스타일: form.venueStyle, 예산: form.budget, 기타: form.message,
      }),
    })
    if (res.ok) setSubmitted(true)
  }

  const inputClass = 'w-full bg-dark-700 border border-white/10 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neon-pink/60 focus:shadow-[0_0_0_2px_rgba(255,45,120,0.15)] transition-all'
  const labelClass = 'block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2'

  return (
    <div className="min-h-screen pt-24 pb-20">

      {/* Hero */}
      <section className="relative overflow-hidden py-24 mb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 via-dark-900 to-neon-pink/10" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-purple/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-pink/8 rounded-full blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-neon-purple/30 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 bg-neon-purple rounded-full animate-pulse" />
            <span className="text-neon-purple text-sm font-semibold tracking-widest">{c.badge}</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            {c.heroTitle}<br />
            <span className="text-gradient">{c.heroGradient}</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-4">{c.heroDesc}</p>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto mb-10">{c.heroSub}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:010-9778-8571" className="btn-primary px-8 py-4 text-base rounded-xl">{c.ctaInquiry}</a>
            <a href="#venues" className="btn-outline px-8 py-4 text-base rounded-xl">{c.ctaBrowse}</a>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Why */}
        <section className="mb-24">
          <h2 className="text-2xl md:text-3xl font-black text-white text-center mb-10">{c.whyTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {c.why.map((w, i) => (
              <div key={i} className="glass-card border border-neon-purple/15 rounded-2xl p-6"
                style={{ boxShadow: '0 0 30px rgba(191,0,255,0.06)' }}>
                <div className="text-3xl mb-4">{w.icon}</div>
                <h3 className="text-white font-bold text-base mb-2">{w.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="mb-24">
          <h2 className="text-2xl md:text-3xl font-black text-white text-center mb-10">{c.processTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {c.process.map((p, i) => (
              <div key={i} className="relative glass-card border border-white/5 rounded-2xl p-6 text-center">
                {i < c.process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-px bg-gradient-to-r from-neon-purple to-transparent z-10" />
                )}
                <div className="text-4xl font-black text-gradient mb-3 opacity-25">{p.step}</div>
                <h3 className="text-white font-bold text-sm mb-2">{p.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Venues */}
        <section id="venues" className="mb-24">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-2">{c.venuesTitle}</h2>
            <p className="text-gray-400 text-sm">{c.venuesDesc}</p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {rentalVenues.map((v) => (
              <Link key={v.id} href={`/venues/${v.id}`}
                className="glass-card border border-white/5 rounded-2xl overflow-hidden group hover:border-neon-purple/30 transition-all duration-300"
                style={{ boxShadow: '0 0 0 0 transparent' }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 0 30px rgba(191,0,255,0.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 0 0 0 transparent')}>
                <div className="relative h-44 bg-dark-700 overflow-hidden">
                  {v.thumbnail ? (
                    <Image src={v.thumbnail} alt={v.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-neon-pink/20 flex items-center justify-center">
                      <span className="text-5xl">🏢</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-dark-800/80 backdrop-blur-sm text-neon-purple text-xs font-semibold px-2 py-1 rounded-full border border-neon-purple/30">
                      {getTag(v)}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="bg-dark-800/80 backdrop-blur-sm text-gray-300 text-xs px-2 py-1 rounded-full">
                      {c.capacity} {v.capacity.toLocaleString()}+
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-white font-bold text-lg mb-1">{v.name}</h3>
                  <p className="text-gray-500 text-xs mb-4">{v.location}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {(lang === 'en' ? v.featuresEn : lang === 'zh' ? v.featuresZh : lang === 'ja' ? v.featuresJa : v.features)
                      .slice(0, 2).map((f, fi) => (
                        <span key={fi} className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded-full">{f}</span>
                      ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-neon-pink text-sm font-semibold group-hover:gap-2 transition-all">
                    {c.viewDetail} →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-20">
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-black text-white mb-2">{c.formTitle}</h2>
            <p className="text-gray-400 text-sm mb-8">{c.formDesc}</p>

            {submitted ? (
              <div className="glass-card neon-border rounded-2xl p-12 text-center">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-white mb-2">{c.successTitle}</h3>
                <p className="text-gray-400">{c.successDesc}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 space-y-5 border border-white/5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>{c.fields.name}</label>
                    <input type="text" required placeholder={c.fields.namePh}
                      value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>{c.fields.phone}</label>
                    <input type="tel" required placeholder={c.fields.phonePh}
                      value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>{c.fields.eventType}</label>
                  <div className="flex flex-wrap gap-2">
                    {c.eventTypes.map((type) => (
                      <button key={type} type="button"
                        onClick={() => setForm({ ...form, eventType: type })}
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                          form.eventType === type
                            ? 'border-neon-purple bg-neon-purple/10 text-neon-purple'
                            : 'border-white/10 text-gray-400 hover:border-white/30'
                        }`}>
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>{c.fields.date}</label>
                    <input type="text" placeholder={c.fields.datePh}
                      value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>{c.fields.headcount}</label>
                    <input type="text" placeholder={c.fields.headcountPh}
                      value={form.headcount} onChange={(e) => setForm({ ...form, headcount: e.target.value })}
                      className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>{c.fields.venueStyle}</label>
                  <input type="text" placeholder={c.fields.venueStylePh}
                    value={form.venueStyle} onChange={(e) => setForm({ ...form, venueStyle: e.target.value })}
                    className={inputClass} />
                </div>

                <div>
                  <label className={labelClass}>{c.fields.budget}</label>
                  <input type="text" placeholder={c.fields.budgetPh}
                    value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })}
                    className={inputClass} />
                </div>

                <div>
                  <label className={labelClass}>{c.fields.message}</label>
                  <textarea rows={4} placeholder={c.fields.messagePh}
                    value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputClass} resize-none`} />
                </div>

                <button type="submit" className="btn-primary w-full py-4 text-base rounded-xl">
                  {c.submitBtn}
                </button>
                <p className="text-center text-gray-600 text-xs">{c.submitNote}</p>
              </form>
            )}
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/20 via-neon-purple/10 to-neon-cyan/20 blur-sm" />
              <div className="relative glass-card border border-neon-pink/20 rounded-2xl p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 bg-neon-pink rounded-full animate-pulse" />
                  <p className="text-white font-bold text-sm">{c.quickContact}</p>
                  <div className="w-1.5 h-1.5 bg-neon-pink rounded-full animate-pulse" />
                </div>
                <p className="text-gray-400 text-xs mb-5">{c.quickContactSub}</p>
                <ContactButtons size="sm" />
              </div>
            </div>

            <div className="glass-card border border-white/5 rounded-2xl p-6">
              <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
                {lang === 'ko' ? '대관 가능 업장' : lang === 'en' ? 'Available Venues' : lang === 'zh' ? '可租赁场地' : '貸切可能な会場'}
              </h3>
              <ul className="space-y-2">
                {rentalVenues.map((v) => (
                  <li key={v.id} className="flex items-center justify-between">
                    <Link href={`/venues/${v.id}`} className="text-gray-300 text-sm hover:text-neon-pink transition-colors">
                      {v.name}
                    </Link>
                    <span className="text-xs text-gray-500 border border-white/10 px-2 py-0.5 rounded-full">{getTag(v)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
