'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import LanguageSwitcher from '@/components/ui/LanguageSwitcher'
import ContactButtons from '@/components/ui/ContactButtons'

const navLabels = {
  ko: { home: '홈', venues: '대관 업장', contact: '대관 문의', inquiry: '📞 지금 문의' },
  en: { home: 'Home', venues: 'Venues', contact: 'Inquiry', inquiry: '📞 Contact Now' },
  zh: { home: '首页', venues: '场地列表', contact: '租场咨询', inquiry: '📞 立即咨询' },
  ja: { home: 'ホーム', venues: '会場一覧', contact: 'お問い合わせ', inquiry: '📞 今すぐ問合せ' },
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { lang } = useLanguage()
  const t = navLabels[lang] ?? navLabels.ko

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const links = [
    { href: '/', label: t.home },
    { href: '/#venues', label: t.venues },
    { href: '/#contact', label: t.contact },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-dark-800/95 backdrop-blur-md shadow-lg shadow-black/30' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 gap-4">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-pink to-neon-purple flex items-center justify-center">
              <span className="text-white font-black text-sm">GN</span>
            </div>
            <span className="text-white font-black text-xl tracking-tight">
              강남<span className="text-gradient">대관센터</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <Link key={l.href} href={l.href}
                className="text-gray-300 hover:text-neon-pink transition-colors duration-200 font-medium text-sm tracking-wide">
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            <ContactButtons size="sm" />
          </div>

          <div className="flex md:hidden items-center gap-2">
            <LanguageSwitcher />
            <button className="text-white p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="메뉴">
              <div className="w-6 h-0.5 bg-white mb-1.5" />
              <div className="w-6 h-0.5 bg-white mb-1.5" />
              <div className="w-6 h-0.5 bg-white" />
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-dark-800/98 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            {links.map((l) => (
              <Link key={l.href} href={l.href}
                className="block text-gray-300 hover:text-white py-2 font-medium"
                onClick={() => setMobileOpen(false)}>
                {l.label}
              </Link>
            ))}
            <div className="pt-4">
              <ContactButtons size="sm" />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
