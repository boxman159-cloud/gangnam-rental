export interface RentalVenue {
  id: string
  type: 'club' | 'lounge'
  name: string
  nameEn: string
  location: string
  thumbnail: string
  heroImage: string
  gallery?: string[]
  capacity: number
  tag: string
  tagEn: string
  tagZh: string
  tagJa: string
  minCharge: string
  minChargeEn: string
  minChargeZh: string
  minChargeJa: string
  features: string[]
  featuresEn: string[]
  featuresZh: string[]
  featuresJa: string[]
  packages: {
    name: string
    nameEn: string
    nameZh: string
    nameJa: string
    desc: string
    descEn: string
    descZh: string
    descJa: string
    price: string
  }[]
  rentalDesc: string
  rentalDescEn: string
  rentalDescZh: string
  rentalDescJa: string
}

export const rentalVenues: RentalVenue[] = [
  {
    id: 'bellair',
    type: 'lounge',
    name: '벨레어청담',
    nameEn: 'Bellair Cheongdam',
    location: '강남구 청담동',
    thumbnail: '/images/bellair-1.webp',
    heroImage: '/images/bellair-2.webp',
    gallery: ['/images/bellair-1.webp', '/images/bellair-2.webp', '/images/bellair-3.webp', '/images/bellair-4.webp', '/images/bellair-5.webp'],
    capacity: 150,
    tag: '하이엔드 라운지',
    tagEn: 'High-End Lounge',
    tagZh: '高端酒廊',
    tagJa: 'ハイエンドラウンジ',
    minCharge: '문의 후 안내',
    minChargeEn: 'Contact for pricing',
    minChargeZh: '请联系询价',
    minChargeJa: 'お問い合わせください',
    features: ['룩 벨레어 브랜드 아이덴티티 공간', '프라이빗 룸 · 연예인·인플루언서 방문', '고급 샴페인 라인업', '생일파티 · 데이트 · 소모임 최적'],
    featuresEn: ['Luc Belaire Brand Identity Space', 'Private Room · Celebrity & Influencer Hotspot', 'Premium Champagne Lineup', 'Birthday Party · Date · Small Gathering'],
    featuresZh: ['Luc Belaire品牌理念空间', '私密包房 · 明星·网红常来打卡', '高端香槟阵容', '生日派对 · 约会 · 小型聚会最佳'],
    featuresJa: ['Luc Belairブランドアイデンティティ空間', 'プライベートルーム · 芸能人・インフルエンサー御用達', 'プレミアムシャンパンラインナップ', '誕生日パーティー · デート · 少人数集まり最適'],
    packages: [],
    rentalDesc: '명품 샴페인 브랜드 \'룩 벨레어(Luc Belaire)\'의 아이덴티티를 공간으로 풀어낸 고급스럽고 트렌디한 청담 라운지 바. 어둡고 차분한 톤의 인테리어에 벨레어 특유의 화려한 네온 조명과 고급스러운 소파 좌석이 조화를 이루며, 감각적인 조형물들이 프라이빗하면서도 트렌디한 청담 무드를 자아냅니다. 생일파티·모임·데이트 코스로 인기가 매우 높으며, 프라이빗 룸도 잘 갖춰져 있어 연예인과 인플루언서들이 자주 찾는 아지트로도 유명합니다.',
    rentalDescEn: 'A luxurious and trendy lounge bar in Cheongdam that embodies the identity of the premium champagne brand "Luc Belaire." Dark, sophisticated interiors blend with Bellair\'s signature neon lighting and premium sofas, while artistic installations create a private yet trendy Cheongdam atmosphere. Extremely popular for birthday parties, gatherings, and romantic dates. The well-equipped private room is a well-known hideaway for celebrities and influencers.',
    rentalDescZh: '以名品香槟品牌"Luc Belaire"为空间理念打造的高端时尚清潭洞酒廊吧。昏暗沉稳的室内装修与Bellair标志性的霓虹灯光和高级沙发完美融合，感性的艺术装置营造出私密而时尚的清潭风情。深受生日派对、聚会和约会人群喜爱，私密包房设施完善，也是明星和网红的秘密据点。',
    rentalDescJa: 'プレミアムシャンパンブランド「Luc Belaire」のアイデンティティを空間で体現した清潭洞の高級トレンディラウンジバー。ダークで落ち着いたインテリアにBellair特有のネオン照明と高級ソファが調和し、感性的なオブジェがプライベートかつトレンディな清潭ムードを醸し出します。誕生日パーティー・集まり・デートコースとして非常に人気が高く、プライベートルームも充実しており、芸能人やインフルエンサーが通うアジトとしても有名です。',
  },
  {
    id: 'arju',
    type: 'lounge',
    name: '아르쥬청담',
    nameEn: 'Arju Cheongdam',
    location: '강남구 청담동',
    thumbnail: '/images/arju-1.webp',
    heroImage: '/images/arju-2.webp',
    gallery: ['/images/arju-1.webp', '/images/arju-2.webp', '/images/arju-3.webp', '/images/arju-4.webp', '/images/arju-5.webp', '/images/arju-6.webp', '/images/arju-7.webp'],
    capacity: 120,
    tag: '럭셔리 라운지',
    tagEn: 'Luxury Lounge',
    tagZh: '奢华酒廊',
    tagJa: 'ラグジュアリーラウンジ',
    minCharge: '문의 후 안내',
    minChargeEn: 'Contact for pricing',
    minChargeZh: '请联系询价',
    minChargeJa: 'お問い合わせください',
    features: ['인생샷 명소 · 미디어 아트 & 대리석 인테리어', '생일 전용 플레이트 · 왕관 · 레터링 파티 연출', '비주얼 시그니처 칵테일', '주말 하우스 음악 · 청담 파티 분위기'],
    featuresEn: ['Instagram Hotspot · Media Art & Marble Interior', 'Birthday Plates · Tiara · Lettering Party Service', 'Visual Signature Cocktails', 'Weekend House Music · Cheongdam Party Vibes'],
    featuresZh: ['人生照片圣地 · 媒体艺术 & 大理石室内', '生日专属拼盘 · 皇冠 · 字母装饰派对演出', '视觉系招牌鸡尾酒', '周末House音乐 · 清潭派对氛围'],
    featuresJa: ['インスタ映えスポット · メディアアート & 大理石インテリア', '誕生日専用プレート · ティアラ · レタリングパーティー演出', 'ビジュアル系シグネチャーカクテル', '週末ハウスミュージック · 清潭パーティーバイブス'],
    packages: [],
    rentalDesc: '압구정로데오역과 청담 명품거리 인근에 위치한 "인생샷 명소"로 입소문을 타며 여성 고객·커플에게 독보적인 지지를 받는 럭셔리 라운지. 화려한 미디어 아트·대형 샹들리에·거울·세련된 대리석 인테리어가 시선을 사로잡으며, 인물을 화사하게 살려주는 조명 톤 덕분에 SNS에서 가장 핫하게 소비되는 공간 중 하나입니다. 생일파티 전용 플레이트·왕관·레터링 등 섬세한 파티 연출이 돋보이며, 비주얼에 신경 쓴 시그니처 칵테일로 보는 재미와 마시는 재미를 동시에 충족합니다.',
    rentalDescEn: 'A luxury lounge near Apgujeong Rodeo Station and Cheongdam\'s luxury street, renowned as an "Instagram-worthy spot" with unrivaled popularity among female guests and couples. Stunning media art, grand chandeliers, mirrors, and refined marble interiors captivate from the moment you enter. Exquisite birthday party setups including dedicated plates, tiaras, and lettering services stand out, along with visually stunning signature cocktails.',
    rentalDescZh: '位于狎鸥亭罗德奥站和清潭名品街附近，以"人生照片圣地"著称，深受女性顾客和情侣追捧的奢华酒廊。华丽的媒体艺术、大型吊灯、镜面装饰与精致大理石室内设计令人一进门便目不转睛。生日专属拼盘、皇冠、字母装饰等细腻的派对演出令人印象深刻，视觉系招牌鸡尾酒也深受欢迎。',
    rentalDescJa: '狎鷗亭ロデオ駅と清潭洞のラグジュアリーストリート近くに位置し、「インスタ映えスポット」として女性客やカップルに絶大な支持を受けるラグジュアリーラウンジ。入口から目を奪う華やかなメディアアート・大型シャンデリア・鏡・大理石インテリアが特徴的で、誕生日専用プレート・ティアラ・レタリングなど繊細なパーティー演出が光り、ビジュアル系のシグネチャーカクテルも人気です。',
  },
  {
    id: 'people-terrace',
    type: 'lounge',
    name: '피플더테라스',
    nameEn: 'People the Terrace',
    location: '강남구 압구정동',
    thumbnail: '/images/people-1.webp',
    heroImage: '/images/people-2.webp',
    gallery: ['/images/people-1.webp', '/images/people-2.webp', '/images/people-3.webp', '/images/people-4.webp', '/images/people-5.webp', '/images/people-6.webp', '/images/people-7.webp'],
    capacity: 200,
    tag: '테라스 다이닝',
    tagEn: 'Terrace Dining',
    tagZh: '露台餐饮',
    tagJa: 'テラスダイニング',
    minCharge: '문의 후 안내',
    minChargeEn: 'Contact for pricing',
    minChargeZh: '请联系询价',
    minChargeJa: 'お問い合わせください',
    features: ['유럽 휴양지 감성 야외 테라스석', '대형 샹들리에 · 골드 톤 럭셔리 인테리어', '시그니처 버킷치킨 · 파스타 · 스테이크', '낮엔 다이닝 · 밤엔 샴페인 파티로 반전'],
    featuresEn: ['European Resort-Style Outdoor Terrace', 'Grand Chandelier · Gold-Tone Luxury Interior', 'Signature Bucket Chicken · Pasta · Steak', 'Evening Dining → Night Champagne Party Transformation'],
    featuresZh: ['欧洲度假胜地感性露天露台', '大型吊灯 · 金色调奢华室内', '招牌水桶炸鸡 · 意面 · 牛排', '傍晚餐饮 → 深夜香槟派对华丽变身'],
    featuresJa: ['ヨーロッパリゾート感性のアウトドアテラス席', '大型シャンデリア · ゴールドトーン豪華インテリア', 'シグネチャーバケツチキン · パスタ · ステーキ', '夕方ダイニング → 深夜シャンパンパーティーへ変身'],
    packages: [],
    rentalDesc: '청담동 한복판에서 유럽 휴양지 감성의 이국적인 야외 테라스를 느낄 수 있는 다이닝 라운지 바. 화이트 톤의 건물에 아치형 창문과 조경이 어우러진 야외 테라스석이 시그니처이며, 내부는 럭셔리한 대형 샹들리에와 골드 톤 조명으로 화려하게 꾸며져 있습니다. \'안주가 맛있는 라운지\'로도 손꼽히며 시그니처 버킷 치킨·파스타·스테이크 등 훌륭한 다이닝 메뉴를 자랑합니다. 이른 저녁에는 브런치·다이닝 무드였다가 밤이 깊어질수록 화려한 샴페인 플레이스로 변신하며, 봄·여름·가을 테라스석은 예약 경쟁이 치열할 정도로 인기입니다.',
    rentalDescEn: 'A dining lounge bar in the heart of Cheongdam where you can experience the exotic feel of a European resort outdoor terrace. The signature outdoor terrace with its white building, arched windows, and lush landscaping is iconic. Known as "a lounge with great food," it boasts signature bucket chicken, pasta, steak, and more. The venue transforms from a calm dining mood in the early evening to a champagne party spot as the night progresses.',
    rentalDescZh: '清潭洞中心地带，可以感受欧洲度假胜地感性的异国风情露天露台的餐饮酒廊吧。白色建筑配以拱形窗户和绿植景观的露天露台是标志性特色，内部以豪华大型吊灯和金色调灯光华丽装饰。以"下酒菜好吃的酒廊"著称，招牌水桶炸鸡、意大利面、牛排等餐饮菜单出色。傍晚可享受安静的餐饮氛围，随着夜色深沉华丽转变为香槟派对场所。',
    rentalDescJa: '清潭洞の中心部で、ヨーロッパのリゾート感性の異国情緒あふれるアウトドアテラスを体感できるダイニングラウンジバー。白いトーンの建物にアーチ窓と緑豊かな造景が融合したテラス席がシグネチャーで、内部は豪華な大型シャンデリアとゴールドトーンの照明で華やかに飾られています。「フードが美味しいラウンジ」としても名高く、シグネチャーバケツチキン・パスタ・ステーキなど優れたダイニングメニューを誇ります。',
  },
  {
    id: 'castello',
    type: 'lounge',
    name: '카스텔로라운지',
    nameEn: 'Castello Lounge',
    location: '서울시 강남구 도산대로 삼이빌딩 10층 (청담동)',
    thumbnail: '/images/castello-대관-전경.jpg',
    heroImage: '/images/castello-대관-광각.jpg',
    gallery: [
      '/images/castello-대관-전경.jpg',
      '/images/castello-대관-광각.jpg',
      '/images/castello-대관-바-내부.jpg',
      '/images/castello-내부.jpg',
      '/images/castello-대관-메인테이블.jpg',
      '/images/castello-대관-룸1.jpg',
      '/images/castello-대관-룸뷰1.jpg',
      '/images/castello-대관-디제이-장비.jpg',
      '/images/castello-대관-디제이.jpg',
      '/images/castello-대관-테이블.jpg',
    ],
    capacity: 300,
    tag: '스카이뷰 라운지',
    tagEn: 'Skyview Lounge',
    tagZh: '天空景观酒廊',
    tagJa: 'スカイビューラウンジ',
    minCharge: '문의 후 안내',
    minChargeEn: 'Contact for pricing',
    minChargeZh: '请联系询价',
    minChargeJa: 'お問い合わせください',
    features: [
      '최대 300+명 수용 · 약 120평',
      '삼이빌딩 최고층 10F · 전면 통창 도산대로 파노라마 야경',
      '프라이빗 VIP 룸 별도 운영 · 독립 야경 뷰',
      '자체 프리미엄 주방 · 코스 다이닝 현장 조리 가능',
      '전관 단독 대관만 진행 (부분 대관 없음)',
      '케이터링 · 하우스 DJ · 바텐더 · 시큐리티 원스톱 연계',
    ],
    featuresEn: [
      'Capacity 300+ guests · approx. 120 pyeong',
      'Top floor 10F of Sami Building · full-width panoramic night view',
      'Private VIP room with independent night view',
      'In-house premium kitchen · live cooking & course dining',
      'Exclusive full-venue rental only (no partial rental)',
      'One-stop add-ons: catering, house DJ, bartender, security',
    ],
    featuresZh: [
      '最大容纳300+人，约120坪',
      '三益大厦最高层10F，全面落地窗道山大路全景夜景',
      '独立夜景VIP包厢',
      '自有高端厨房，可提供现场烹饪及套餐料理',
      '仅提供全场独家包场（不提供部分包场）',
      '一站式配套：餐饮、驻场DJ、调酒师、安保',
    ],
    featuresJa: [
      '最大300名以上収容 · 約120坪',
      '三益ビル最上階10F · 全面通窓パノラマ夜景',
      '独立夜景ビューのプライベートVIPルーム',
      '自社プレミアムキッチン · コースダイニング現地調理可',
      '全館独占貸切のみ（部分貸切不可）',
      'ワンストップ連携：ケータリング・ハウスDJ・バーテンダー・セキュリティ',
    ],
    packages: [
      {
        name: '하프 타임 대관 (6시간)',
        nameEn: 'Half-Time Rental (6 hrs)',
        nameZh: '半场包场（6小时）',
        nameJa: 'ハーフタイム貸切（6時間）',
        desc: '라운지 전체 공간(120평) 6시간 단독 사용. 메인 홀 + 프라이빗 야경 룸 + 기본 조명·음향 포함.',
        descEn: 'Exclusive 6-hour use of the full venue (120 pyeong). Includes main hall + private night-view room + basic lighting & sound system.',
        descZh: '全场（120坪）6小时独家使用，含主厅+私人夜景包厢+基础灯光音响。',
        descJa: '全スペース（120坪）6時間独占使用。メインホール＋プライベート夜景ルーム＋基本照明・音響込み。',
        price: '협의',
      },
      {
        name: '풀 타임 대관 (12시간)',
        nameEn: 'Full-Time Rental (12 hrs)',
        nameZh: '全天包场（12小时）',
        nameJa: 'フルタイム貸切（12時間）',
        desc: '라운지 전체 공간(120평) 12시간 단독 사용. 메인 홀 + 프라이빗 야경 룸 + 기본 조명·음향 포함. 평일·주말 동일 요금.',
        descEn: 'Exclusive 12-hour use of the full venue (120 pyeong). Includes main hall + private night-view room + basic lighting & sound. Same rate on weekdays & weekends.',
        descZh: '全场（120坪）12小时独家使用，含主厅+私人夜景包厢+基础灯光音响。平日周末同价。',
        descJa: '全スペース（120坪）12時間独占使用。メインホール＋プライベート夜景ルーム＋基本照明・音響込み。平日・週末同一料金。',
        price: '협의',
      },
    ],
    rentalDesc: '서울 청담 도산대로 삼이빌딩 10층에 위치한 루프탑 라운지. 약 120평 규모에 최대 300+명을 수용하며, 전면 통창으로 펼쳐지는 도산대로 파노라마 야경과 압도적인 층고가 특징입니다. 전관 단독 대관만 운영하며, 케이터링·하우스 DJ·바텐더·시큐리티까지 원스톱으로 연계합니다.',
    rentalDescEn: 'A rooftop lounge on the top floor (10F) of Sami Building on Dosan-daero in Cheongdam, Seoul. Spanning approximately 120 pyeong with a capacity of 300+, it features panoramic night views through full-width windows and an impressively high ceiling. Exclusive full-venue rental only, with one-stop add-ons including catering, house DJ, bartender, and security.',
    rentalDescZh: '位于首尔清潭道山大路三益大厦10层的天台酒廊。约120坪规模，最大容纳300人以上，全面落地窗呈现道山大路全景夜景，层高震撼人心。仅提供全场独家包场，并一站式提供餐饮、驻场DJ、调酒师、安保等配套服务。',
    rentalDescJa: 'ソウル清潭ドサン通り三益ビル最上階（10F）に位置するルーフトップラウンジ。約120坪の規模で最大300名以上収容可能。全面通窓から広がるドサン通りのパノラマ夜景と圧倒的な層高が特徴です。全館独占貸切のみの運営で、ケータリング・ハウスDJ・バーテンダー・セキュリティをワンストップで連携します。',
  },
]
