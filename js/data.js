// 6ECLUB Mobile Clone - Verified Extracted Data & Asset Catalog
window.CLUB_DATA = {
  brand: {
    name: '6ECLUB',
    display: '6E.CLUB',
    logoHeader: 'assets/branding/044453485-230290-file_20261102044453483.webp',
    logoLogin: 'assets/branding/044520894-230294-file_20261102044520892.webp',
    loginHero: 'assets/branding/051937221-233858-file_20261103051937208.webp',
    loginBg: 'assets/theme/ar_saas16/img_loginBG-3d6ca3a3.webp',
    chooseCheck: 'assets/theme/common/icon_choose2-194e677c.webp',
    navCoin: 'assets/ui/nav_coin-DDDgtSK5.webp',
    navDeposit: 'assets/ui/nav_deposit-CkkrxWWe.webp',
    navMessage: 'assets/ui/nav_message-CRG-CEXd.webp',
    bannerEdge: 'assets/ui/banner_edge-DYDt0pHJ.webp',
    noticeHorn: 'assets/ui/notice_horn-Bkjq89CD.webp',
    titlePopular: 'assets/ui/title_popular-BTz5vRMO.webp',
    titleWinning: 'assets/ui/title_winning-BBJD6mA2.webp',
    emptyIcon: 'assets/ui/empty-bg-CagnIzRR.webp',
    avatar: 'assets/ui/1-BpxbCNk8.webp',
    depIcon: 'assets/theme/ar_saas16/mine/icon_mine_dep-fa0b9280.webp',
    withIcon: 'assets/theme/ar_saas16/mine/icon_mine_with-4a98a92b.webp',
    dragonIcon: 'assets/ui/changlong-DkXUrPo9.svg',
    winBg: 'assets/ui/missningBg-CVBJxzJu.webp',
    loseBg: 'assets/ui/missningLBg-CJY3-D31.webp',
    closeImg: 'assets/ui/close-BQWAMfYu.webp',
    goldCoin: 'assets/ui/gold1-Cn3R-UBE.webp'
  },

  tabBar: {
    frameImg: 'assets/tabs/tab_bar-BPaq6eXQ.webp',
    items: [
      { id: 'home', label: 'Home', route: '/', nor: 'assets/tabs/tab_home_nor-BHXXvWy1.svg', sel: 'assets/tabs/tab_home_sel-D044vEwt.webp' },
      { id: 'promo', label: 'Promo', route: '/activity', nor: 'assets/tabs/tab_promo_nor-Bxv3Fsxq.svg', sel: 'assets/tabs/tab_promo_sel-wqN4sfGr.webp' },
      { id: 'wheel', label: 'Wheel', route: '/rechargeTurntable', icon: 'assets/tabs/tab_wheel-KEQnV6a0.webp', atlas: 'assets/tabs/tab_wheel_atlas-Cw4E79c0.webp' },
      { id: 'earn', label: 'Earn', route: '/earn', nor: 'assets/tabs/tab_earn_nor-CTsBsYdu.svg', sel: 'assets/tabs/tab_earn_sel-Dd6WbwVu.webp' },
      { id: 'mine', label: 'Mine', route: '/main', nor: 'assets/svgs/tab_mine_nor.svg', sel: 'assets/tabs/tab_menu_sel-BzpdG3h6.webp' }
    ]
  },

  defaultAccount: {
    phone: '8102318421',
    countryCode: '+91',
    password: 'Pk9082pk',
    uid: '155885',
    nickname: 'MemberNNG0DA0S',
    vipLevel: 0,
    balance: 11.87,
    withdrawable: 0,
    wagerRequired: 450,
    inviteCode: 'QZ54MEN',
    bankCard: {
      bankName: 'JIO PAYMENTS BANK LIMITED',
      accountNo: '001521711947196',
      holder: 'MemberNNG0DA0S',
      ifsc: 'JIOP0000001'
    }
  },

  heroBanners: [
    { id: 1, img: 'assets/branding/063103465-248107-file_20261107063103452.webp', title: 'Welcome to 6E.CLUB - Trusted By Millions', route: '/activity' },
    { id: 2, img: 'assets/branding/062656323-248089-file_20261107062656312.webp', title: '6E.CLUB +50% UPI Deposit Bonus Every Day', route: '/wallet/recharge' },
    { id: 3, img: 'assets/branding/064326364-248138-file_20261107064326352.webp', title: 'Invite Friends & Earn Instant Cash Commission', route: '/earn' },
    { id: 4, img: 'assets/branding/062603221-248082-file_20261107062603209.webp', title: 'VIP Upgrade Bonus & Monthly Salary Rewards', route: '/vip' }
  ],

  notices: [
    '【🎯 EXCLUSIVE OFFERS】 Deposit via UPI-QR now and claim up to +50% Instant Bonus!',
    '【🔥 DAILY WHEEL】 Deposit ₹500 to unlock Silver, Gold & Diamond Prize Wheel Spins!',
    '【🏆 CHAMPION RANK】 Daily Profit Ranking Prize Pool exceeds ₹609,610 — Join WinGo & Aviator now!'
  ],

  popularFrames: {
    1: 'assets/ui/pop_frame_1-DZ9rseFQ.webp',
    2: 'assets/ui/pop_frame_2-D6wkqpap.webp',
    3: 'assets/ui/pop_frame_3-D-hp-R1P.webp'
  },

  popularGames: [
    { id: 'wingo-30s', name: 'WinGo 30sec', provider: 'ARLottery', category: 'lottery', rank: 1, img: 'assets/games/ARLottery/100634909-141892-file_20260920100634902.webp', route: '/WinGo/WinGo_30S' },
    { id: 'aviator', name: 'Aviator', provider: 'SPRIBE', category: 'crash', rank: 2, img: 'assets/games/SPRIBE/aviator.png', route: '/game/aviator' },
    { id: 'chicken-road-2', name: 'Chicken Road 2', provider: 'TB_Chess', category: 'crash', rank: 3, img: 'assets/games/TB_Chess/073455287-160091-file_20261003193455284.webp', route: '/game/chicken-road-2' },
    { id: 'fortune-garuda-1000', name: 'Fortune Garuda 1000', provider: 'JILI', category: 'slots', img: 'assets/games/JILI/124428840-96589-file_20260806124428828.webp', route: '/game/fortune-garuda-1000' },
    { id: 'fortune-gems-2', name: 'Fortune Gems 2', provider: 'JILI', category: 'slots', img: 'assets/games/JILI/121851683-9353-223.png', route: '/game/fortune-gems-2' },
    { id: 'fortune-garuda-500', name: 'Fortune Garuda 500', provider: 'JILI', category: 'slots', img: 'assets/games/JILI/043843517-29298-file_20260402043843511.webp', route: '/game/fortune-garuda-500' },
    { id: 'fortune-gems-3', name: 'Fortune Gems 3', provider: 'JILI', category: 'slots', img: 'assets/games/JILI/121853358-9419-300.png', route: '/game/fortune-gems-3' },
    { id: 'fortune-gems', name: 'Fortune Gems', provider: 'JILI', category: 'slots', img: 'assets/games/JILI/121848285-9219-109.png', route: '/game/fortune-gems' },
    { id: 'money-coming', name: 'Money Coming', provider: 'JILI', category: 'slots', img: 'assets/games/JILI/121856416-9549-51.png', route: '/game/money-coming' },
    { id: 'lucky-jaguar-500', name: 'Lucky Jaguar 500', provider: 'JILI', category: 'slots', img: 'assets/games/JILI/082618324-20911-file_20251210082618315.webp', route: '/game/lucky-jaguar-500' },
    { id: 'go-rush', name: 'Go Rush', provider: 'JILI', category: 'crash', img: 'assets/games/JILI/121851773-9355-224.png', route: '/game/go-rush' },
    { id: 'fortune-gems-500', name: 'Fortune Gems 500', provider: 'JILI', category: 'slots', img: 'assets/games/JILI/540.png', route: '/game/fortune-gems-500' },
    { id: 'super-ace', name: 'Super Ace', provider: 'JILI', category: 'slots', img: 'assets/games/JILI/121856349-9543-49.png', route: '/game/super-ace' },
    { id: 'k3-1m', name: 'K3 1 Min', provider: 'ARLottery', category: 'lottery', img: 'assets/games/ARLottery/100252172-141859-file_20260920100252164.webp', route: '/WinGo/WinGo_1M' },
    { id: 'vortex', name: 'Vortex', provider: 'TB_Chess', category: 'crash', img: 'assets/games/TB_Chess/043259154-22917-file_20260114043259121.webp', route: '/game/vortex' },
    { id: 'mines-jili', name: 'Mines', provider: 'JILI', category: 'crash', img: 'assets/games/JILI/121851930-9361-229.png', route: '/game/mines-jili' },
    { id: 'wingo-1m', name: 'WinGo 1 Min', provider: 'ARLottery', category: 'lottery', img: 'assets/games/ARLottery/100622480-141890-file_20260920100622474.webp', route: '/WinGo/WinGo_1M' },
    { id: 'mines-pro', name: 'Mines Pro', provider: 'TB_Chess', category: 'crash', img: 'assets/games/TB_Chess/043300678-22941-file_20260114043300641.webp', route: '/game/mines-pro' },
    { id: 'fortune-ox', name: 'Fortune Ox', provider: 'PG', category: 'slots', img: 'assets/games/PG/043144953-22869-file_20260114043144918.webp', route: '/game/fortune-ox' },
    { id: 'mines-tb', name: 'Mines', provider: 'TB_Chess', category: 'crash', img: 'assets/games/TB_Chess/043256862-22871-file_20260114043256817.webp', route: '/game/mines-tb' }
  ],

  winningFeed: [
    { user: 'Memb**NB', amount: '₹88.2K', img: 'assets/games/ARLottery/100634909-141892-file_20260920100634902.webp' },
    { user: 'Memb**T8', amount: '₹58.8K', img: 'assets/games/ARLottery/100634909-141892-file_20260920100634902.webp' },
    { user: 'Memb**WG', amount: '₹39.2K', img: 'assets/games/SPRIBE/aviator.png' },
    { user: 'Memb**CC', amount: '₹5,880', img: 'assets/games/TB_Chess/073455287-160091-file_20261003193455284.webp' },
    { user: 'Memb**0G', amount: '₹44.1K', img: 'assets/games/JILI/124428840-96589-file_20260806124428828.webp' },
    { user: 'Memb**LQ', amount: '₹19.6K', img: 'assets/games/JILI/121851683-9353-223.png' },
    { user: 'Memb**NP', amount: '₹17.6K', img: 'assets/games/JILI/121853358-9419-300.png' },
    { user: 'Memb**CT', amount: '₹9,800', img: 'assets/games/JILI/121856416-9549-51.png' },
    { user: 'Memb**GA', amount: '₹3,920', img: 'assets/games/JILI/121851773-9355-224.png' },
    { user: 'Memb**CD', amount: '₹7,840', img: 'assets/games/TB_Chess/043259154-22917-file_20260114043259121.webp' }
  ],

  categories: [
    { id: 'lottery', name: 'Lottery', icon: 'assets/categories/cat_lottery-B5D-hx-X.webp' },
    { id: 'crash', name: 'Crash', icon: 'assets/categories/cat_mini-C_rMTlw9.webp' },
    { id: 'slots', name: 'Slots', icon: 'assets/categories/cat_slots-DxVvyQLu.webp' },
    { id: 'sports', name: 'Sports', icon: 'assets/categories/cat_sports-30XJ95_9.webp' },
    { id: 'fishing', name: 'Fishing', icon: 'assets/categories/cat_fishing-BZu7eOdU.webp' },
    { id: 'casino', name: 'Casino', icon: 'assets/categories/cat_casino-D3KovNCs.webp' },
    { id: 'poker', name: 'Poker', icon: 'assets/categories/cat_pvc-9DboI7uV.webp' }
  ],

  lotteryCards: [
    { id: 'wingo', title: 'WinGo', subtitle: '30sec', badge: 'Win Go', img: 'assets/lottery/lottery_wingo-D4mbUBHZ.webp', route: '/WinGo/WinGo_30S' },
    { id: 'k3', title: 'K3', subtitle: '1 Min', badge: 'K3', img: 'assets/lottery/lottery_k3-DERGL-nm.webp', route: '/WinGo/WinGo_1M' },
    { id: 'd5', title: '5D', subtitle: '1 Min', badge: '5D', img: 'assets/lottery/lottery_5d-Dl3iZfrq.webp', route: '/WinGo/WinGo_3M' },
    { id: 'moto', title: 'Moto Racing', subtitle: 'Turbo', badge: 'Moto Racing', img: 'assets/lottery/lottery_moto-DaT-dBwJ.webp', route: '/WinGo/WinGo_5M' }
  ],

  homeSlots: {
    inviteLeft: { img: 'assets/banners/020326874-246272-file_20261106140326144.webp', route: '/share', alt: 'Invite & Earn' },
    wheelRight: { img: 'assets/banners/014144370-246228-file_20261106134143834.webp', route: '/rechargeTurntable', alt: 'Deposit Wheel' },
    domainBanner: { img: 'assets/banners/031510251-243097-file_20261105151510202.webp', route: '/activity', alt: '6E.CLUB Domain Verification Center' }
  },

  profitRanking: {
    podium: [
      { rank: 1, name: 'Memb...47OE', amount: '₹31,360,000.00', plate: 'assets/ranks/rank1_plate-B3hqWlpn.webp', crown: 'assets/ranks/rank1_crown-C1Ebs93R.webp', top: 'assets/ranks/rank1_top-CzOgHUwc.webp', front: 'assets/ranks/rank1_front-C6Q1g4uc.webp', glow: 'assets/ranks/rank1_glow-BoG5hIKP.webp', ring: 'assets/ranks/rank1_ring_out-BNvi_79n.svg', wingA: 'assets/ranks/rank1_wing_a-D6uiupHu.webp', wingB: 'assets/ranks/rank1_wing_b-yPQjxujP.webp' },
      { rank: 2, name: 'Memb...VY55', amount: '₹5,506,260.00', plate: 'assets/ranks/rank2_plate-VRU1cfq5.webp', crown: 'assets/ranks/rank2_crown-CAODy_Ob.webp', top: 'assets/ranks/rank23_top-ByqGdDZI.webp', front: 'assets/ranks/rank23_front-DMb3WPHO.webp', ring: 'assets/ranks/rank2_ring_out-B0JC7eRw.svg', wing: 'assets/ranks/rank2_wing-D_6kQ12C.webp' },
      { rank: 3, name: 'Memb...EZMF', amount: '₹5,027,400.00', plate: 'assets/ranks/rank3_plate-CNwtbigr.webp', crown: 'assets/ranks/rank3_crown-jjdItpy6.webp', top: 'assets/ranks/rank23_top-ByqGdDZI.webp', front: 'assets/ranks/rank23_front-DMb3WPHO.webp', ring: 'assets/ranks/rank3_ring_out-DEZAoK9B.svg' }
    ],
    list: [
      { rank: 4, name: 'Memb...NJEL', amount: '₹4,174,800.00' },
      { rank: 5, name: 'Memb...1ZE1', amount: '₹3,415,300.00' },
      { rank: 6, name: 'Memb...8JCT', amount: '₹2,977,339.96' },
      { rank: 7, name: 'Memb...AWNB', amount: '₹2,072,700.00' },
      { rank: 8, name: 'Memb...AJGC', amount: '₹1,478,820.00' },
      { rank: 9, name: 'Memb...OVD3', amount: '₹822,220.00' }
    ]
  },

  socialNetworks: [
    { id: 'telegram', label: 'Telegram', img: 'assets/social/social_telegram-BWkKcS-D.webp' },
    { id: 'facebook', label: 'Facebook', img: 'assets/social/social_facebook-DRiI7XOV.webp' },
    { id: 'twitter', label: 'X', img: 'assets/social/social_twitter-S0__1xeg.webp' },
    { id: 'instagram', label: 'Instagram', img: 'assets/social/social_instagram-o4eAi0Oi.webp' },
    { id: 'youtube', label: 'YouTube', img: 'assets/social/social_youtube-DSgmFaBU.webp' },
    { id: 'whatsapp', label: 'WhatsApp', img: 'assets/social/social_whatsapp-DN6H63rh.webp' }
  ],

  promotions: [
    { id: 'p1', tab: 'Regular', title: 'Welcome to 6E.CLUB — Brand New iPhone Duo Giveaway', tag: 'Hot Event', img: 'assets/branding/062656323-248089-file_20261107062656312.webp', desc: 'Complete qualifying deposits during the event window to earn raffle tickets and win the iPhone 16 Pro Max Duo + instant bonus credits.', route: '/wallet/recharge' },
    { id: 'p2', tab: 'Regular', title: 'UPI-QR & USDT Instant Deposit +50% Bonus', tag: 'Deposit', img: 'assets/branding/063103465-248107-file_20261107063103452.webp', desc: 'Every deposit via UPI-QR, Innate UPI-QR, PayTM, or USDT-TRC20 automatically unlocks tiered cash bonuses up to ₹15,000 daily.', route: '/wallet/recharge' },
    { id: 'p3', tab: 'Regular', title: 'Invite Friends & Earn Up to ₹500 Per Referral Chest', tag: 'Agent', img: 'assets/branding/064326364-248138-file_20261107064326352.webp', desc: 'Share your invitation code QZ54MEN and open progressive treasure chests as your invited friends complete their first deposit.', route: '/share' },
    { id: 'p4', tab: 'Mystery', title: 'Lucky Deposit Wheel — Win Up to ₹324,900', tag: 'Mystery', img: 'assets/banners/080850174-227625-file_20261101080850165.webp', desc: 'Deposit ₹500, ₹3,000, ₹5,000, or ₹10,000 to claim Silver, Gold, Diamond & Special Wheel spins guaranteed to win cash or devices.', route: '/rechargeTurntable' },
    { id: 'p5', tab: 'Mystery', title: 'Championship Jackpot Profit Ranking Pool', tag: 'Jackpot', img: 'assets/banners/080209355-227609-file_20261101080209349.webp', desc: 'Top winners on Daily, Weekly, and Monthly leaderboards share 1.4% of platform betting volume automatically.', route: '/ranking' },
    { id: 'p6', tab: 'Piggy Bank', title: 'Daily VIP Rebate & Piggy Bank Cashback', tag: 'Piggy Bank', img: 'assets/banners/080235096-227611-file_20261101080235066.webp', desc: 'Level up through VIP0 to VIP12 to unlock higher daily withdrawal limits, fee-free transfers, level-up bonuses, and monthly VIP rewards.', route: '/vip' }
  ],

  depositPresets: [
    { amount: 200, bonus: 38, label: '₹200', badge: '+38' },
    { amount: 300, bonus: 38, label: '₹300', badge: '+38' },
    { amount: 400, bonus: 38, label: '₹400', badge: '+38' },
    { amount: 500, bonus: 68, label: '₹500', badge: '+68' },
    { amount: 600, bonus: 68, label: '₹600', badge: '+68' },
    { amount: 700, bonus: 68, label: '₹700', badge: '+68' },
    { amount: 1500, bonus: 118, label: '₹1,500', badge: '+118' },
    { amount: 3000, bonus: 228, label: '₹3,000', badge: '+228' },
    { amount: 5000, bonus: 228, label: '₹5,000', badge: '+228' }
  ],

  depositChannels: [
    { id: 'upi-qr', name: 'UPI-QR', bonusTag: '+50%', recommended: true, lightBg: true, img: 'assets/misc/020036351-156512-file_20261001140036327.webp' },
    { id: 'innate-upi', name: 'Innate UPI-QR', bonusTag: '+50%', recommended: false, lightBg: true, img: 'assets/misc/020110754-156513-file_20261001140110738.webp' },
    { id: 'paytm', name: 'PayTM', bonusTag: '+50%', recommended: false, img: 'assets/misc/020129301-156515-file_20261001140129279.webp' },
    { id: 'usdt-trc20', name: 'USDT-TRC20', bonusTag: '+50%', recommended: false, img: 'assets/misc/034631416-232569-file_20261102154631415.webp' },
    { id: 'usdt-bep20', name: 'USDT-BEP20', bonusTag: '+50%', recommended: false, img: 'assets/misc/034703398-232572-file_20261102154703397.webp' },
    { id: 'arpay', name: 'ARPay', bonusTag: '+50%', recommended: false, img: 'assets/misc/020228794-156525-file_20261001140228793.webp' }
  ],

  withdrawMethods: [
    { id: 'bank', name: 'BankCard', img: 'assets/misc/020359299-156530-file_20261001140359291.webp' },
    { id: 'upi', name: 'UPI', lightBg: true, img: 'assets/misc/020440187-156532-file_20261001140440186.webp' },
    { id: 'usdt', name: 'USDT', img: 'assets/misc/020518491-156534-file_20261001140518490.webp' },
    { id: 'arpay', name: 'ARPay', img: 'assets/misc/020542827-156536-file_20261001140542820.webp' }
  ],

  wheelTiers: [
    { id: 'silver', label: 'Up to ₹324,900', minDep: 500, icon: 'assets/theme/common/rechargeWheel/silver_icon-9b2d2695.webp', wheelImg: 'assets/theme/common/rechargeWheel/silver-37f9a48c.webp', locked: false, themeColor: '#8cb3ff', prizes: ['₹6', 'Silver Spin X1', '₹58', 'Fold Phone', '₹188', '₹324,900', '₹18', '₹888'] },
    { id: 'gold', label: 'Up to ₹324,900', minDep: 3000, icon: 'assets/theme/common/rechargeWheel/gold_icon-daa43809.webp', wheelImg: 'assets/theme/common/rechargeWheel/gold-eed3a2ce.webp', locked: false, themeColor: '#ffcc7e', prizes: ['₹38', 'Gold Spin X1', '₹188', 'iPhone 16', '₹888', '₹324,900', '₹68', '₹2,888'] },
    { id: 'diamond', label: 'Up to ₹324,900', minDep: 5000, icon: 'assets/theme/common/rechargeWheel/diamond_icon-47ffce1e.webp', wheelImg: 'assets/theme/common/rechargeWheel/diamond-cd6e5c25.webp', locked: false, themeColor: '#b78cff', prizes: ['₹88', 'Diamond Spin', '₹588', 'MacBook', '₹1,888', '₹324,900', '₹288', '₹8,888'] },
    { id: 'special', label: 'Special Wheel', minDep: 10000, icon: 'assets/theme/common/rechargeWheel/special_icon-d17dafcc.webp', wheelImg: 'assets/theme/common/rechargeWheel/special-1163d8c5.webp', locked: true, themeColor: '#ff7070', prizes: ['₹188', 'Grand Jackpot', '₹1,888', 'iPhone Duo', '₹8,888', '₹324,900', '₹588', '₹18,888'] }
  ],

  earnStats: {
    yesterdayCommission: 10.31,
    thisWeek: 10.31,
    totalCommission: 10.31,
    directCount: 10,
    teamCount: 10,
    direct: { registered: 10, depositUsers: 4, depositAmount: '₹500.00', firstDepositUsers: 4 },
    team: { registered: 10, depositUsers: 4, depositAmount: '₹500.00', firstDepositUsers: 4 },
    invitersBanner: 'assets/banners/020326874-246272-file_20261106140326144.webp'
  },

  subordinateRecords: [
    { uid: '172186', level: 1, deposit: 100.00, bet: 205.80, commission: 1.23, firstDeposit: true, time: '2026-11-10' },
    { uid: '172535', level: 1, deposit: 100.00, bet: 372.40, commission: 2.23, firstDeposit: true, time: '2026-11-10' },
    { uid: '173315', level: 1, deposit: 200.00, bet: 743.82, commission: 4.46, firstDeposit: true, time: '2026-11-10' },
    { uid: '173610', level: 1, deposit: 100.00, bet: 396.90, commission: 2.38, firstDeposit: true, time: '2026-11-10' }
  ],

  inviteesList: [
    { uid: '172186', level: 1, joinedAt: '2026-11-10', firstDeposit: 100.00 },
    { uid: '172535', level: 1, joinedAt: '2026-11-10', firstDeposit: 100.00 },
    { uid: '173315', level: 1, joinedAt: '2026-11-10', firstDeposit: 200.00 },
    { uid: '173610', level: 1, joinedAt: '2026-11-10', firstDeposit: 100.00 },
    { uid: '171904', level: 1, joinedAt: '2026-11-08', firstDeposit: 0 },
    { uid: '171652', level: 1, joinedAt: '2026-11-08', firstDeposit: 0 },
    { uid: '171420', level: 1, joinedAt: '2026-11-07', firstDeposit: 0 },
    { uid: '171211', level: 1, joinedAt: '2026-11-07', firstDeposit: 0 },
    { uid: '170988', level: 1, joinedAt: '2026-11-06', firstDeposit: 0 },
    { uid: '170745', level: 1, joinedAt: '2026-11-06', firstDeposit: 0 }
  ],

  shareMilestones: [
    { people: 1, reward: 50 }, { people: 2, reward: 50 }, { people: 3, reward: 50 }, { people: 4, reward: 50 },
    { people: 5, reward: 250 }, { people: 10, reward: 250 }, { people: 15, reward: 250 }, { people: 20, reward: 250 },
    { people: 30, reward: 500 }, { people: 40, reward: 500 }, { people: 50, reward: 500 }, { people: 60, reward: 500 }
  ],

  vipLevels: Array.from({ length: 13 }, (_, lv) => {
    const depTargets = [2000, 10000, 30000, 100000, 200000, 500000, 1000000, 2500000, 5000000, 10000000, 25000000, 50000000, 100000000];
    const betTargets = [6000, 30000, 90000, 300000, 600000, 1500000, 3000000, 7500000, 15000000, 30000000, 75000000, 150000000, 300000000];
    const levelBonus = [0, 68, 188, 588, 1288, 2888, 6888, 12888, 28888, 58888, 88888, 158888, 288888];
    const monthlyBonus = [0, 28, 88, 288, 588, 1288, 2888, 5888, 11888, 22888, 38888, 68888, 128888];
    const hashes = [
      'icon_VIP0-e96f7a12.webp', 'icon_VIP1-d082efdb.webp', 'icon_VIP2-ed3905fd.webp',
      'icon_VIP3-0b1c52ce.webp', 'icon_VIP4-9b54eb89.webp', 'icon_VIP5-cee35287.webp',
      'icon_VIP6-2ac54b14.webp', 'icon_VIP7-839aeb34.webp', 'icon_VIP8-025abfdf.webp',
      'icon_VIP9-416b3f53.webp', 'icon_VIP10-01b6c87f.webp', 'icon_VIP11-e710a510.webp',
      'icon_VIP12-9141690f.webp'
    ];
    return {
      level: lv,
      name: `VIP${lv}`,
      icon: `assets/theme/common/${hashes[lv]}`,
      depReq: depTargets[lv],
      betReq: betTargets[lv],
      levelReward: levelBonus[lv],
      monthlyReward: monthlyBonus[lv],
      rebateRate: (0.05 + lv * 0.05).toFixed(2) + '%',
      dailyLimit: lv === 0 ? '∞' : `₹${(lv * 50000).toLocaleString('en-IN')}`,
      freeTx: lv === 0 ? 0 : lv + 2
    };
  }),

  balanceRecords: [
    { type: 'Send Commission', category: 'Income', time: '2026-11-11 00:45:47', change: '+10.31', balance: '11.87', isIncome: true },
    { type: 'Withdraw', category: 'Expense', time: '2026-11-10 23:25:28', change: '-11000', balance: '1.56', isIncome: false },
    { type: 'Withdraw', category: 'Expense', time: '2026-11-10 22:53:47', change: '-4000', balance: '11001.56', isIncome: false },
    { type: 'Withdraw Reject', category: 'Income', time: '2026-11-10 22:51:51', change: '+15000', balance: '15001.56', isIncome: true },
    { type: 'Withdraw', category: 'Expense', time: '2026-11-10 19:47:44', change: '-15000', balance: '1.56', isIncome: false },
    { type: 'Bonus Deposit', category: 'Income', time: '2026-11-10 19:31:13', change: '+15000', balance: '15001.56', note: 'ads funds', isIncome: true },
    { type: 'Lucky Multiplier Bonus', category: 'Income', time: '2026-11-10 13:09:43', change: '+1.56', balance: '1.56', isIncome: true }
  ],

  withdrawalHistory: [
    {
      id: 'WD261110175528575kHmAdtEepK',
      time: '2026-11-10 23:25:28',
      cash: 11000,
      method: 'USDT',
      status: 'Processing',
      daysAgo: 1
    },
    {
      id: 'WD261110172347162kNmAdtEepK',
      time: '2026-11-10 22:53:47',
      cash: 4000,
      method: 'BankCard',
      status: 'Completed',
      daysAgo: 1
    },
    {
      id: 'WD2611101744320kHmAdtEepK',
      time: '2026-11-10 19:47:44',
      cash: 15000,
      method: 'BankCard',
      status: 'Rejected',
      remarkTitle: '【Withdrawal Cancelled Successfully】',
      remarkBody: 'Your withdrawal request has been successfully canceled as per your request. Thank you!',
      daysAgo: 1
    },
    {
      id: 'WD261106141109302pQrStUvWxY',
      time: '2026-11-06 14:11:09',
      cash: 5500,
      method: 'BankCard',
      status: 'Completed',
      daysAgo: 5
    },
    {
      id: 'WD261025093218440aBcDeFgHiJ',
      time: '2026-10-25 09:32:18',
      cash: 8000,
      method: 'USDT',
      status: 'Completed',
      daysAgo: 17
    }
  ],

  wingoBallsLarge: [
    'assets/lottery/ball_0-Ca74Ns3T.webp',
    'assets/lottery/ball_1-CA5nKxei.webp',
    'assets/lottery/ball_2-COP-h3Xp.webp',
    'assets/lottery/ball_3-PCU_ynUn.webp',
    'assets/lottery/ball_4-BL5_7sSn.webp',
    'assets/lottery/ball_5-DgoWY--i.webp',
    'assets/lottery/ball_6-CQQWyfmL.webp',
    'assets/lottery/ball_7-CPGDphqq.webp',
    'assets/lottery/ball_8-BRnYUrpp.webp',
    'assets/lottery/ball_9-BXzIaJqy.webp'
  ],

  wingoBallsSmall: [
    'assets/lottery/ball_0-0chiXV78.webp',
    'assets/lottery/ball_1-BxPoMWIQ.webp',
    'assets/lottery/ball_2-CfTcIstT.webp',
    'assets/lottery/ball_3-fN8aRLDn.webp',
    'assets/lottery/ball_4-BvFm2RT1.webp',
    'assets/lottery/ball_5-DNM-mzx2.webp',
    'assets/lottery/ball_6-DCigRp5p.webp',
    'assets/lottery/ball_7-DymLu5Ob.webp',
    'assets/lottery/ball_8-DckNEDZy.webp',
    'assets/lottery/ball_9-G4LbB3WG.webp'
  ],

  wingoModes: [
    { code: 'WinGo_30S', label: 'WinGo 30sec', seconds: 30 },
    { code: 'WinGo_1M', label: 'WinGo 1 Min', seconds: 60 },
    { code: 'WinGo_3M', label: 'WinGo 3 Min', seconds: 180 },
    { code: 'WinGo_5M', label: 'WinGo 5 Min', seconds: 300 }
  ],

  wingoInitialHistory: [
    { period: '20261111100050896', num: 6 },
    { period: '20261111100050895', num: 1 },
    { period: '20261111100050894', num: 5 },
    { period: '20261111100050893', num: 6 },
    { period: '20261111100050892', num: 8 },
    { period: '20261111100050891', num: 1 },
    { period: '20261111100050890', num: 3 },
    { period: '20261111100050889', num: 0 },
    { period: '20261111100050888', num: 7 },
    { period: '20261111100050887', num: 6 }
  ],

  rankingPageData: {
    jackpotDigits: ['0', '0', '0', '0', '0', '6', '0', '9', '6', '1'],
    podium: [
      { rank: 1, name: 'Memb...Y6FV', turnover: '178.1K', reward: '₹5.8K (9.50%)' },
      { rank: 2, name: 'Memb...5CAD', turnover: '173K', reward: '₹3.7K (6.00%)' },
      { rank: 3, name: 'Memb...BHO5', turnover: '144K', reward: '₹2.7K (4.50%)' }
    ],
    list: [
      { rank: 4, name: 'MemberNNGVJORR', turnover: '₹131.9K', reward: '₹1.8K (2.97%)' },
      { rank: 5, name: 'MemberNNGMTKFW', turnover: '₹118.4K', reward: '₹1.5K (2.45%)' },
      { rank: 6, name: 'MemberNNG8JCT1', turnover: '₹96.2K', reward: '₹1.2K (1.96%)' },
      { rank: 7, name: 'MemberNNGAWNB9', turnover: '₹84.5K', reward: '₹950 (1.55%)' }
    ]
  }
};
