'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useParams, notFound } from 'next/navigation'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import ContactButtons from '@/components/ui/ContactButtons'
import { rentalVenues } from '@/data/venues'

const ui = {
  ko: {
    back: '← 업장 목록으로',
    tagClub: '클럽',
    tagLounge: '라운지',
    capacity: '최대 수용 인원',
    minCharge: '최소 대관 비용',
    featuresTitle: '✅ 대관 특장점',
    packagesTitle: '📦 대관 패키지',
    inquiryTitle: '📩 대관 문의',
    inquiryDesc: '기본 정보를 작성해 주시면 담당자가 1시간 이내 연락드립니다.',
    fields: {
      name: '신청자명 / 법인명', namePh: '홍길동 / (주)강남클럽앤라운지',
      phone: '연락처', phonePh: '010-0000-0000',
      eventType: '행사 성격',
      date: '희망 날짜 및 시간', datePh: '예: 2025.08.15 / 저녁 7시',
      headcount: '예상 인원', headcountPh: '예: 50명',
      budget: '예상 예산', budgetPh: '예: 500만원 / 협의 가능',
      message: '기타 요청 사항', messagePh: 'DJ 섭외, 특수 조명, 케이터링 등',
    },
    eventTypes: ['기업 브랜드 론칭', '기업 회식·단체', '팝업 스토어', '촬영 대관', '결혼식 피로연', '프라이빗 파티', '생일·기념일', '기타'],
    submitBtn: '📝 이 업장 대관 문의하기',
    submitNote: '담당자가 1시간 이내 연락드립니다.',
    successTitle: '신청 완료!',
    successDesc: '대관 문의가 접수되었습니다. 담당자가 빠른 시간 내에 연락드리겠습니다.',
    quickContact: '📞 빠른 문의',
    quickContactSub: '전화·카카오톡·WeChat·LINE으로 즉시 상담',
    otherVenues: '다른 대관 가능 업장',
  },
  en: {
    back: '← Back to Venues',
    tagClub: 'Club',
    tagLounge: 'Lounge',
    capacity: 'Max Capacity',
    minCharge: 'Min Rental Cost',
    featuresTitle: '✅ Key Features',
    packagesTitle: '📦 Rental Packages',
    inquiryTitle: '📩 Rental Inquiry',
    inquiryDesc: 'Fill in the details and our team will contact you within 1 hour.',
    fields: {
      name: 'Your Name / Organization', namePh: 'John Doe / ABC Company',
      phone: 'Phone Number', phonePh: '010-0000-0000',
      eventType: 'Event Type',
      date: 'Preferred Date & Time', datePh: 'e.g. Aug 15, 2025 / 7PM',
      headcount: 'Expected Headcount', headcountPh: 'e.g. 50 people',
      budget: 'Estimated Budget', budgetPh: 'e.g. ~$3,500 / Open to discussion',
      message: 'Additional Requests', messagePh: 'DJ booking, special lighting, catering, etc.',
    },
    eventTypes: ['Corporate Brand Launch', 'Company Dinner', 'Pop-Up Store', 'Filming Rental', 'Wedding Reception', 'Private Party', 'Birthday · Anniversary', 'Other'],
    submitBtn: '📝 Submit Inquiry for This Venue',
    submitNote: 'Our team will contact you within 1 hour.',
    successTitle: 'Inquiry Received!',
    successDesc: 'Your rental inquiry has been submitted. We will contact you shortly.',
    quickContact: '📞 Quick Contact',
    quickContactSub: 'Instant consultation via Phone · WeChat · LINE',
    otherVenues: 'Other Available Venues',
  },
  zh: {
    back: '← 返回场地列表',
    tagClub: '俱乐部',
    tagLounge: '酒廊',
    capacity: '最大容纳人数',
    minCharge: '最低租场费用',
    featuresTitle: '✅ 场地特色',
    packagesTitle: '📦 租场套餐',
    inquiryTitle: '📩 提交租场咨询',
    inquiryDesc: '填写基本信息，负责人将在1小时内与您联系。',
    fields: {
      name: '申请人姓名 / 法人名称', namePh: '张三 / ABC公司',
      phone: '联系方式', phonePh: '010-0000-0000',
      eventType: '活动性质',
      date: '希望日期及时间', datePh: '例：2025.08.15 / 晚上7点',
      headcount: '预计参与人数', headcountPh: '例：50人',
      budget: '预计预算范围', budgetPh: '例：500万韩元 / 可协商',
      message: '其他要求', messagePh: 'DJ预约、特殊灯光、餐饮等',
    },
    eventTypes: ['企业品牌发布', '企业聚餐·团体', '快闪店', '拍摄场地', '婚礼答谢宴', '私人派对', '生日·纪念日', '其他'],
    submitBtn: '📝 咨询此场地包场',
    submitNote: '提交后负责人将在1小时内联系您。',
    successTitle: '申请成功！',
    successDesc: '您的租场咨询已提交，负责人将尽快与您联系。',
    quickContact: '📞 快速咨询',
    quickContactSub: '通过电话·WeChat·LINE即时咨询',
    otherVenues: '其他可租赁场地',
  },
  ja: {
    back: '← 会場一覧へ戻る',
    tagClub: 'クラブ',
    tagLounge: 'ラウンジ',
    capacity: '最大収容人数',
    minCharge: '最低貸切費用',
    featuresTitle: '✅ 貸切の特長',
    packagesTitle: '📦 貸切パッケージ',
    inquiryTitle: '📩 貸切お問い合わせ',
    inquiryDesc: '基本情報をご記入ください。担当者が1時間以内にご連絡いたします。',
    fields: {
      name: '申請者名 / 法人名', namePh: '山田太郎 / ABC株式会社',
      phone: '電話番号', phonePh: '010-0000-0000',
      eventType: 'イベントの種類',
      date: 'ご希望日時', datePh: '例：2025.08.15 / 夜7時',
      headcount: '参加予定人数', headcountPh: '例：50名',
      budget: '想定予算', budgetPh: '例：50万円 / 応相談',
      message: 'その他ご要望', messagePh: 'DJ手配、特殊照明、ケータリングなど',
    },
    eventTypes: ['企業ブランドローンチ', '会社宴会·団体', 'ポップアップ', '撮影貸切', '結婚披露宴', 'プライベートパーティー', '誕生日·記念日', 'その他'],
    submitBtn: '📝 この会場の貸切を問い合わせる',
    submitNote: '送信後、担当者が1時間以内にご連絡いたします。',
    successTitle: '申請完了！',
    successDesc: '貸切のお問い合わせを受け付けました。担当者が早急にご連絡いたします。',
    quickContact: '📞 リアルタイム問い合わせ',
    quickContactSub: '電話·WeChat·LINEで即時相談',
    otherVenues: '他の貸切可能な会場',
  },
}

export default function VenueDetailPage() {
  const params = useParams()
  const { lang } = useLanguage()
  const venue = rentalVenues.find((v) => v.id === params.id)

  const [activeImg, setActiveImg] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', phone: '', eventType: '', date: '', headcount: '', budget: '', message: '',
  })

  if (!venue) return notFound()

  const t = ui[lang] ?? ui.ko

  const rentalDesc = lang === 'en' ? venue.rentalDescEn
    : lang === 'zh' ? venue.rentalDescZh
    : lang === 'ja' ? venue.rentalDescJa
    : venue.rentalDesc

  const features = lang === 'en' ? venue.featuresEn
    : lang === 'zh' ? venue.featuresZh
    : lang === 'ja' ? venue.featuresJa
    : venue.features

  const minCharge = lang === 'en' ? venue.minChargeEn
    : lang === 'zh' ? venue.minChargeZh
    : lang === 'ja' ? venue.minChargeJa
    : venue.minCharge

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('https://formspree.io/f/xgoqjzpg', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        업장: venue.name, 이름: form.name, 연락처: form.phone,
        행사성격: form.eventType, 희망날짜: form.date,
        예상인원: form.headcount, 예산: form.budget, 기타: form.message,
      }),
    })
    if (res.ok) setSubmitted(true)
  }

  const inputClass = 'w-full bg-dark-700 border border-white/10 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neon-pink/60 focus:shadow-[0_0_0_2px_rgba(255,45,120,0.15)] transition-all'
  const labelClass = 'block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2'

  const otherVenues = rentalVenues.filter((v) => v.id !== venue.id).slice(0, 4)

  return (
    <div className="min-h-screen pt-24 pb-20">

      {/* Hero */}
      <section className="relative overflow-hidden py-20 mb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 via-dark-900 to-neon-pink/8" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <Link href="/#venues" className="inline-flex items-center text-gray-400 hover:text-white text-sm mb-8 transition-colors">
            {t.back}
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-neon-purple/10 border border-neon-purple/30 text-neon-purple text-xs font-semibold px-3 py-1 rounded-full">
              {venue.type === 'club' ? t.tagClub : t.tagLounge}
            </span>
            <span className="text-gray-400 text-sm">{venue.location}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">{venue.name}</h1>
          <p className="text-gray-300 text-lg max-w-3xl leading-relaxed">{rentalDesc}</p>

          <div className="flex flex-wrap gap-6 mt-8">
            <div className="glass-card border border-white/10 rounded-xl px-5 py-3">
              <div className="text-xs text-gray-500 mb-1">{t.capacity}</div>
              <div className="text-white font-bold text-lg">{venue.capacity.toLocaleString()}+</div>
            </div>
            <div className="glass-card border border-white/10 rounded-xl px-5 py-3">
              <div className="text-xs text-gray-500 mb-1">{t.minCharge}</div>
              <div className="text-white font-bold text-lg">{minCharge}</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-20">

          {/* Left content */}
          <div className="lg:col-span-3 space-y-10">

            {/* Gallery */}
            {venue.gallery && venue.gallery.length > 0 && (
              <div>
                <div className="relative w-full h-72 rounded-2xl overflow-hidden mb-3">
                  <Image src={venue.gallery[activeImg]} alt={venue.name} fill className="object-cover" />
                </div>
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {venue.gallery.map((img, i) => (
                    <button key={i} onClick={() => setActiveImg(i)}
                      className={`relative flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${activeImg === i ? 'border-neon-pink' : 'border-white/10 opacity-60 hover:opacity-100'}`}>
                      <Image src={img} alt="" fill className="object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Features */}
            <div>
              <h2 className="text-xl font-black text-white mb-5">{t.featuresTitle}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((f, i) => (
                  <div key={i} className="flex items-start gap-3 glass-card border border-white/5 rounded-xl p-4">
                    <span className="text-neon-pink mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-300 text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Packages */}
            <div>
              <h2 className="text-xl font-black text-white mb-5">{t.packagesTitle}</h2>
              <div className="space-y-4">
                {venue.packages.map((pkg, i) => {
                  const name = lang === 'en' ? pkg.nameEn : lang === 'zh' ? pkg.nameZh : lang === 'ja' ? pkg.nameJa : pkg.name
                  const desc = lang === 'en' ? pkg.descEn : lang === 'zh' ? pkg.descZh : lang === 'ja' ? pkg.descJa : pkg.desc
                  return (
                    <div key={i} className="glass-card border border-neon-purple/15 rounded-2xl p-5"
                      style={{ boxShadow: '0 0 20px rgba(191,0,255,0.05)' }}>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-white font-bold text-base mb-2">{name}</h3>
                          <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                        </div>
                        <span className="text-neon-pink text-sm font-semibold whitespace-nowrap border border-neon-pink/30 px-3 py-1 rounded-full bg-neon-pink/5">
                          {pkg.price}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="text-xl font-black text-white mb-2">{t.inquiryTitle}</h2>
              <p className="text-gray-400 text-sm mb-6">{t.inquiryDesc}</p>

              {submitted ? (
                <div className="glass-card neon-border rounded-2xl p-12 text-center">
                  <div className="text-5xl mb-4">🎉</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{t.successTitle}</h3>
                  <p className="text-gray-400">{t.successDesc}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 space-y-5 border border-white/5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>{t.fields.name}</label>
                      <input type="text" required placeholder={t.fields.namePh}
                        value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>{t.fields.phone}</label>
                      <input type="tel" required placeholder={t.fields.phonePh}
                        value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className={inputClass} />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>{t.fields.eventType}</label>
                    <div className="flex flex-wrap gap-2">
                      {t.eventTypes.map((type) => (
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
                      <label className={labelClass}>{t.fields.date}</label>
                      <input type="text" placeholder={t.fields.datePh}
                        value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })}
                        className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>{t.fields.headcount}</label>
                      <input type="text" placeholder={t.fields.headcountPh}
                        value={form.headcount} onChange={(e) => setForm({ ...form, headcount: e.target.value })}
                        className={inputClass} />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>{t.fields.budget}</label>
                    <input type="text" placeholder={t.fields.budgetPh}
                      value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })}
                      className={inputClass} />
                  </div>

                  <div>
                    <label className={labelClass}>{t.fields.message}</label>
                    <textarea rows={3} placeholder={t.fields.messagePh}
                      value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`${inputClass} resize-none`} />
                  </div>

                  <button type="submit" className="btn-primary w-full py-4 text-base rounded-xl">
                    {t.submitBtn}
                  </button>
                  <p className="text-center text-gray-600 text-xs">{t.submitNote}</p>
                </form>
              )}
            </div>
          </div>

          {/* Right sidebar */}
          <div className="lg:col-span-2 space-y-6">
            <div className="sticky top-24">
              <div className="relative rounded-2xl overflow-hidden mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/20 via-neon-purple/10 to-neon-cyan/20 blur-sm" />
                <div className="relative glass-card border border-neon-pink/20 rounded-2xl p-6 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 bg-neon-pink rounded-full animate-pulse" />
                    <p className="text-white font-bold text-sm">{t.quickContact}</p>
                    <div className="w-1.5 h-1.5 bg-neon-pink rounded-full animate-pulse" />
                  </div>
                  <p className="text-gray-400 text-xs mb-5">{t.quickContactSub}</p>
                  <ContactButtons size="sm" />
                </div>
              </div>

              <div className="glass-card border border-white/5 rounded-2xl p-5">
                <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">{t.otherVenues}</h3>
                <ul className="space-y-3">
                  {otherVenues.map((v) => (
                    <li key={v.id}>
                      <Link href={`/venues/${v.id}`}
                        className="flex items-center justify-between group">
                        <span className="text-gray-300 text-sm group-hover:text-neon-pink transition-colors">{v.name}</span>
                        <span className="text-xs text-gray-500 border border-white/10 px-2 py-0.5 rounded-full">
                          {lang === 'en' ? v.tagEn : lang === 'zh' ? v.tagZh : lang === 'ja' ? v.tagJa : v.tag}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
