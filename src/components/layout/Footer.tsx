import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark-800 border-t border-white/5 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-pink to-neon-purple flex items-center justify-center">
                <span className="text-white font-black text-sm">GN</span>
              </div>
              <span className="text-white font-black text-xl">
                강남<span className="text-gradient">라운지대관</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              강남(신사·청담·압구정) 클럽 & 라운지 대관 전문. 기업 행사·파티·촬영·팝업 모든 대관 문의 환영합니다.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">대관 업장</h4>
            <ul className="space-y-2">
              {[
                { href: '/venues/bellair', label: '벨레어청담' },
                { href: '/venues/arju', label: '아르쥬청담' },
                { href: '/venues/people-terrace', label: '피플더테라스' },
                { href: '/venues/castello', label: '카스텔로라운지' },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-gray-400 hover:text-white text-sm transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">연락처</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>📞 전화: 010-9778-8571</li>
              <li>💬 카카오톡: alrep0410</li>
              <li>💚 WeChat: club_jack_livin</li>
              <li>💚 LINE: clubjacklivn</li>
              <li className="text-gray-500">24시간 연중무휴 대관 문의</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">© 2024 강남 대관센터. All rights reserved.</p>
          <div className="flex gap-6">
            {['이용약관', '개인정보처리방침'].map((t) => (
              <a key={t} href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">{t}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
