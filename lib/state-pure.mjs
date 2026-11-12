export const SHARED_KEYS = [
  'user',
  'usersDb',
  'wheelSpins',
  'wheelHistory',
  'withdrawAccounts',
  'selectedWdAccountId',
  'withdrawalHistory',
  'giftHistory',
  'balanceRecords',
  'depositConfig',
  'withdrawConfig',
  'wingoRounds',
  'wingoMyBets',
  'wingoLastDrawTs',
  'claimedMilestones',
  'language'
];

export function cloneJson(v) {
  return JSON.parse(JSON.stringify(v));
}

export function buildDefaultsFromClubData(D) {
  if (!D || !D.defaultAccount) {
    throw new Error('Failed to load window.CLUB_DATA from js/data.js');
  }
  return {
    user: cloneJson(D.defaultAccount),
    usersDb: [
      {
        phone: D.defaultAccount.phone,
        password: D.defaultAccount.password,
        uid: D.defaultAccount.uid,
        nickname: D.defaultAccount.nickname
      }
    ],
    wheelSpins: 2,
    wheelHistory: [
      { time: '2026-11-11 08:12:40', tier: 'Silver', prize: '₹6.00' },
      { time: '2026-11-10 21:04:11', tier: 'Silver', prize: '₹6.00' }
    ],
    withdrawAccounts: D.defaultAccount.bankCard ? [{
      id: 'acct_default_bank',
      type: 'BankCard',
      label: D.defaultAccount.bankCard.bankName,
      detail: D.defaultAccount.bankCard.accountNo,
      ifsc: D.defaultAccount.bankCard.ifsc || ''
    }] : [],
    selectedWdAccountId: D.defaultAccount.bankCard ? 'acct_default_bank' : '',
    withdrawalHistory: cloneJson(D.withdrawalHistory || []),
    giftHistory: [],
    balanceRecords: cloneJson(D.balanceRecords || []),
    depositConfig: {
      minAmount: 100,
      maxAmount: 50000,
      fallbackBonusPct: 15,
      checkoutTitle: 'UPI-QR Instant Checkout',
      tips: [
        '1. Each deposit will be credited within 1-5 minutes.',
        '2. After payment is successful, return to 6ECLUB to check balance.',
        '3. Please do not modify the payment amount or reuse saved QR codes.'
      ],
      presets: cloneJson(D.depositPresets || []),
      channels: cloneJson((D.depositChannels || []).map((ch) => Object.assign({ enabled: true }, ch)))
    },
    withdrawConfig: {
      minAmount: 110,
      maxAmount: 50000,
      remainingLimit: 50000,
      dailyLimit: 5,
      arrivalText: '24 hours'
    },
    wingoRounds: cloneJson(D.wingoInitialHistory || []),
    wingoMyBets: [],
    wingoLastDrawTs: Date.now(),
    claimedMilestones: [],
    language: 'EN'
  };
}

export function sanitizeSharedState(incoming, fallback) {
  const out = {};
  const src = incoming && typeof incoming === 'object' ? incoming : {};
  const base = fallback && typeof fallback === 'object' ? fallback : {};
  for (const key of SHARED_KEYS) {
    if (Object.prototype.hasOwnProperty.call(src, key) && src[key] !== undefined) {
      out[key] = cloneJson(src[key]);
    } else if (Object.prototype.hasOwnProperty.call(base, key)) {
      out[key] = cloneJson(base[key]);
    }
  }
  return out;
}

export function prepareNextSnapshot(currentSnapshot, incomingShared, opts = {}) {
  if (opts.reason === 'wingo_auto') {
    const baseVer = Number(opts.baseVersion || 0);
    const period = opts.period ? String(opts.period) : '';
    const alreadyHasPeriod = period && Array.isArray(currentSnapshot.shared.wingoRounds)
      && currentSnapshot.shared.wingoRounds.some((item) => item && String(item.period) === period);
    if ((baseVer && baseVer !== currentSnapshot.version) || alreadyHasPeriod) {
      return { conflict: true, snapshot: currentSnapshot };
    }
  }
  const nextShared = sanitizeSharedState(incomingShared, currentSnapshot.shared);
  const nextVersion = Number(currentSnapshot.version || 0) + 1;
  const updatedAt = new Date().toISOString();
  return {
    conflict: false,
    snapshot: {
      version: nextVersion,
      shared: nextShared,
      updatedAt
    }
  };
}
