(function () {
  'use strict';

  const D = window.CLUB_DATA;
  const STORAGE_KEY = '6eclub_mobile_clone_v1';

  const SVG = {
    back: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>',
    chevRight: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>',
    chevDown: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',
    chevDouble: '<svg viewBox="0 0 20 21" fill="none"><path d="M1.5 1.5L9.5 10.3L1.5 19.1" stroke="#6BFD87" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.5 1.5L18.5 10.3L10.5 19.1" stroke="#6BFD87" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    copy: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
    refresh: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>',
    eyeOpen: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
    eyeClosed: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>',
    headset: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>',
    receipt: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16l3-2 2 2 3-2 2 2 3-2 3 2V4a2 2 0 0 0-2-2z"/><line x1="8" y1="9" x2="16" y2="9"/><line x1="8" y1="13" x2="14" y2="13"/></svg>',
    historyDoc: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h7"/><line x1="8" y1="8" x2="14" y2="8"/><line x1="8" y1="12" x2="12" y2="12"/><circle cx="17.5" cy="17.5" r="4.5"/><polyline points="17.5 15.2 17.5 17.5 19 18.5"/></svg>',
    whClock: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="12 5.5 12 12.5 16.5 16.5"/></svg>',
    plusCircle: '<svg width="20" height="20" viewBox="0 0 24 24" fill="#2bc484"><circle cx="12" cy="12" r="10"/><line x1="12" y1="7.5" x2="12" y2="16.5" stroke="#06281d" stroke-width="2.4" stroke-linecap="round"/><line x1="7.5" y1="12" x2="16.5" y2="12" stroke="#06281d" stroke-width="2.4" stroke-linecap="round"/></svg>',
    download: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
    ukFlag: '<svg width="20" height="20" viewBox="0 0 60 60"><clipPath id="fc"><circle cx="30" cy="30" r="30"/></clipPath><g clip-path="url(#fc)"><rect width="60" height="60" fill="#012169"/><path d="M0,0 L60,60 M60,0 L0,60" stroke="#fff" stroke-width="10"/><path d="M0,0 L60,60 M60,0 L0,60" stroke="#C8102E" stroke-width="5"/><path d="M30,0 V60 M0,30 H60" stroke="#fff" stroke-width="14"/><path d="M30,0 V60 M0,30 H60" stroke="#C8102E" stroke-width="8"/></g></svg>',
    inFlag: '<svg width="20" height="20" viewBox="0 0 60 60"><clipPath id="fi"><circle cx="30" cy="30" r="30"/></clipPath><g clip-path="url(#fi)"><rect y="0" width="60" height="20" fill="#FF9933"/><rect y="20" width="60" height="20" fill="#FFFFFF"/><rect y="40" width="60" height="20" fill="#138808"/><circle cx="30" cy="30" r="7" fill="none" stroke="#000080" stroke-width="2"/></g></svg>',
    lock: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
    phone: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2bc484" stroke-width="2"><rect x="6" y="2" width="12" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>',
    bell: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2bc484" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>',
    wallet: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2bc484" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M16 12h4"/></svg>',
    chart: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2bc484" stroke-width="2"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>',
    shield: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2bc484" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    gift: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2bc484" stroke-width="2"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><path d="M12 22V7"/></svg>',
    settings: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2bc484" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.26.604.852.997 1.51 1H21a2 2 0 1 1 0 4h-.09c-.658.003-1.25.396-1.51 1z"/></svg>',
    globe: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2bc484" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
    ticket: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2bc484" stroke-width="2"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/></svg>',
    history: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2bc484" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    soundOn: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>',
    soundOff: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>'
  };

  function esc(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function fmtMoney(n) {
    return '₹' + Number(n || 0).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  function nowStr() {
    const d = new Date();
    const p = (v) => String(v).padStart(2, '0');
    return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`;
  }

  function defaultWithdrawAccountsFromUser(user) {
    const bc = (user && user.bankCard) || D.defaultAccount.bankCard;
    if (!bc) return [];
    return [{
      id: 'acct_default_bank',
      type: 'BankCard',
      label: bc.bankName,
      detail: bc.accountNo,
      ifsc: bc.ifsc || ''
    }];
  }

  function loadState() {
    const defAccts = defaultWithdrawAccountsFromUser(D.defaultAccount);
    const base = {
      isLoggedIn: true,
      language: 'EN',
      showAppBar: true,
      soundEnabled: false,
      rememberPassword: true,
      user: { ...D.defaultAccount },
      usersDb: [
        { phone: D.defaultAccount.phone, password: D.defaultAccount.password, uid: D.defaultAccount.uid, nickname: D.defaultAccount.nickname }
      ],
      heroIdx: 0,
      popPage: 0,
      activeCat: 'lottery',
      promoTab: 'Regular',
      earnSlide: 0,
      invTab: 'subordinate',
      invSearch: '',
      invDate: '',
      invLevel: 0,
      invSortBy: '',
      invSortDir: 'desc',
      wheelTier: 'silver',
      wheelSpins: 2,
      wheelRotation: 0,
      wheelSpinning: false,
      wheelHistory: [
        { time: '2026-11-11 08:12:40', tier: 'Silver', prize: '₹6.00' },
        { time: '2026-11-10 21:04:11', tier: 'Silver', prize: '₹6.00' }
      ],
      depAmount: 200,
      depChannel: 'upi-qr',
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
        presets: [...(D.depositPresets || [])],
        channels: (D.depositChannels || []).map(ch => Object.assign({ enabled: true }, ch))
      },
      withdrawMethod: 'bank',
      withdrawAmount: '',
      withdrawConfig: {
        minAmount: 110,
        maxAmount: 50000,
        remainingLimit: 50000,
        dailyLimit: 5,
        arrivalText: '24 hours'
      },
      withdrawAccounts: defAccts,
      selectedWdAccountId: defAccts[0] ? defAccts[0].id : '',
      whPeriod: '1 Day',
      withdrawalHistory: [...D.withdrawalHistory],
      vipInspectLevel: 0,
      rankingPeriod: 'Daily',
      balanceTab: 'All',
      notifTab: 'Personal',
      betHistCat: 'LOTTERY',
      statsRange: 'Today',
      giftHistory: [],
      balanceRecords: [...D.balanceRecords],
      wingoMode: 'WinGo_30S',
      wingoMult: 1,
      wingoHistoryTab: 'Game history',
      wingoRounds: [...D.wingoInitialHistory],
      wingoMyBets: [],
      wingoLastDrawTs: Date.now(),
      claimedMilestones: []
    };
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
      if (saved && saved.user) {
        const merged = Object.assign(base, saved);
        const allowEmpty = !!(merged.withdrawConfig && merged.withdrawConfig.allowEmptyAccounts);
        if (!Array.isArray(merged.withdrawAccounts) || (!merged.withdrawAccounts.length && !allowEmpty)) {
          merged.withdrawAccounts = defaultWithdrawAccountsFromUser(merged.user);
          merged.selectedWdAccountId = merged.withdrawAccounts[0] ? merged.withdrawAccounts[0].id : '';
        }
        // Invitees Overview should always default to "All" on entry/reload
        merged.invTab = 'subordinate';
        merged.invSearch = '';
        merged.invDate = '';
        merged.invLevel = 0;
        merged.invSortBy = '';
        merged.invSortDir = 'desc';
        return merged;
      }
    } catch (_) {}
    return base;
  }

  const SHARED_KEYS = [
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
  const SYNC_CLIENT_ID = 'c_' + Math.random().toString(36).slice(2, 9) + '_' + Date.now().toString(36);
  let syncEnabled = typeof window !== 'undefined' && /^https?:$/.test(window.location.protocol);
  let serverVersion = 0;
  let syncInFlight = false;
  let queuedSyncOpts = null;
  let pendingRemoteRender = false;
  let sseSource = null;
  let wsConn = null;
  let wsPath = '/api/ws';
  let wsReconnectTimer = null;
  let syncMode = 'sse';
  let pollIntervalMs = 1500;
  let pollTimer = null;
  let pollInFlight = false;

  function pickSharedState(src) {
    const out = {};
    for (const k of SHARED_KEYS) {
      if (src[k] !== undefined) out[k] = src[k];
    }
    return out;
  }

  function writeLocalCache() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (_) {}
  }

  function applyRemoteState(shared, meta) {
    if (!shared || typeof shared !== 'object') return false;
    const nextVer = Number(meta?.version || 0);
    if (nextVer && nextVer < serverVersion) return false;
    if (nextVer && nextVer === serverVersion && meta?.clientId === SYNC_CLIENT_ID) return false;

    for (const k of SHARED_KEYS) {
      if (Object.prototype.hasOwnProperty.call(shared, k) && shared[k] !== undefined) {
        state[k] = shared[k];
      }
    }
    const allowEmpty = !!(state.withdrawConfig && state.withdrawConfig.allowEmptyAccounts);
    if (!Array.isArray(state.withdrawAccounts) || (!state.withdrawAccounts.length && !allowEmpty)) {
      state.withdrawAccounts = defaultWithdrawAccountsFromUser(state.user);
      if (!state.selectedWdAccountId && state.withdrawAccounts[0]) {
        state.selectedWdAccountId = state.withdrawAccounts[0].id;
      }
    }
    if (nextVer) serverVersion = nextVer;
    writeLocalCache();

    if (meta?.renderNow !== false) {
      const ae = document.activeElement;
      const isTyping = ae && /^(INPUT|TEXTAREA|SELECT)$/.test(ae.tagName);
      if (isTyping) {
        pendingRemoteRender = true;
      } else {
        pendingRemoteRender = false;
        render();
      }
    }
    return true;
  }

  async function flushStateToServer(opts) {
    if (!syncEnabled) return;
    if (syncInFlight) {
      if (!queuedSyncOpts || opts?.reason !== 'wingo_auto') {
        queuedSyncOpts = opts || {};
      }
      return;
    }
    syncInFlight = true;
    try {
      const res = await fetch('/api/state', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        cache: 'no-store',
        body: JSON.stringify({
          clientId: SYNC_CLIENT_ID,
          baseVersion: serverVersion,
          reason: opts?.reason || 'manual',
          period: opts?.period,
          shared: pickSharedState(state)
        })
      });
      if (res.status === 404 || res.status === 405 || res.status === 501) {
        syncEnabled = false;
        return;
      }
      const data = await res.json().catch(() => null);
      if (res.status === 409 && data && data.shared) {
        applyRemoteState(data.shared, { version: data.version, renderNow: true });
      } else if (res.ok && data && data.version) {
        serverVersion = Math.max(serverVersion, Number(data.version));
      }
    } catch (_) {
      // Fallback gracefully when running offline / without backend
    } finally {
      syncInFlight = false;
      if (queuedSyncOpts) {
        const nextOpts = queuedSyncOpts;
        queuedSyncOpts = null;
        flushStateToServer(nextOpts);
      }
    }
  }

  async function fetchStateFromServer(opts) {
    if (!syncEnabled) return null;
    const isDelta = !!(opts && opts.deltaCheck && serverVersion > 0);
    if (isDelta && pollInFlight) return null;
    if (isDelta) pollInFlight = true;
    try {
      const qs = isDelta ? ('?since=' + encodeURIComponent(serverVersion)) : '';
      const res = await fetch('/api/state' + qs, { cache: 'no-store' });
      if (res.status === 404 || res.status === 405 || res.status === 501) {
        syncEnabled = false;
        if (pollTimer) { clearInterval(pollTimer); pollTimer = null; }
        return null;
      }
      if (!res.ok) return null;
      const data = await res.json();
      if (data && data.syncMode === 'ws') {
        syncMode = 'ws';
        if (data.wsPath) wsPath = data.wsPath;
        if (data.pollIntervalMs) pollIntervalMs = Math.max(2000, Number(data.pollIntervalMs));
      } else if (data && (data.syncMode === 'poll' || data.sse === false)) {
        syncMode = 'poll';
        if (data.pollIntervalMs) pollIntervalMs = Math.max(1000, Number(data.pollIntervalMs));
      }
      if (data && data.unchanged) return data;
      if (data && data.shared) {
        applyRemoteState(data.shared, { version: data.version, renderNow: true });
      }
      return data;
    } catch (_) {
      return null;
    } finally {
      if (isDelta) pollInFlight = false;
    }
  }

  function startAdaptiveSyncLoop() {
    if (!syncEnabled) return;
    if (syncMode === 'ws' && typeof WebSocket === 'function') {
      if (sseSource) { try { sseSource.close(); } catch (_) {} sseSource = null; }
      if (pollTimer) { clearInterval(pollTimer); pollTimer = null; }
      clearTimeout(wsReconnectTimer);
      try {
        if (wsConn && (wsConn.readyState === WebSocket.OPEN || wsConn.readyState === WebSocket.CONNECTING)) return;
        const wsProto = window.location.protocol === 'https:' ? 'wss://' : 'ws://';
        wsConn = new WebSocket(wsProto + window.location.host + wsPath);
        wsConn.addEventListener('message', (ev) => {
          try {
            if (!ev.data || ev.data === 'pong') return;
            const payload = JSON.parse(ev.data);
            if (payload && payload.shared) {
              applyRemoteState(payload.shared, {
                version: payload.version,
                clientId: payload.clientId,
                renderNow: true
              });
            }
          } catch (_) {}
        });
        wsConn.addEventListener('close', () => {
          wsConn = null;
          clearTimeout(wsReconnectTimer);
          wsReconnectTimer = setTimeout(() => {
            if (!syncEnabled || syncMode !== 'ws') return;
            fetchStateFromServer({ deltaCheck: serverVersion > 0 });
            startAdaptiveSyncLoop();
          }, 2500);
        });
        wsConn.addEventListener('error', () => {
          try { if (wsConn) wsConn.close(); } catch (_) {}
        });
      } catch (_) {
        syncMode = 'poll';
        pollIntervalMs = 2000;
        startAdaptiveSyncLoop();
      }
      return;
    }
    if (syncMode === 'poll' || typeof EventSource !== 'function') {
      if (sseSource) { try { sseSource.close(); } catch (_) {} sseSource = null; }
      if (!pollTimer) {
        pollTimer = setInterval(() => {
          if (!syncEnabled || document.hidden) return;
          fetchStateFromServer({ deltaCheck: true });
        }, pollIntervalMs);
      }
      return;
    }
    try {
      if (sseSource) sseSource.close();
      sseSource = new EventSource('/api/events');
      sseSource.addEventListener('state', (ev) => {
        try {
          const payload = JSON.parse(ev.data || 'null');
          if (payload && payload.shared) {
            applyRemoteState(payload.shared, {
              version: payload.version,
              clientId: payload.clientId,
              renderNow: true
            });
          }
        } catch (_) {}
      });
      sseSource.onerror = () => {
        // Fallback smoothly to WS or lightweight polling if SSE stream fails (e.g. serverless edge)
        fetchStateFromServer().then((d) => {
          if (d && (syncMode === 'ws' || syncMode === 'poll')) startAdaptiveSyncLoop();
        });
      };
    } catch (_) {
      syncMode = 'poll';
      startAdaptiveSyncLoop();
    }
  }

  function initRemoteSync() {
    if (!syncEnabled) return;
    fetchStateFromServer().then(() => {
      startAdaptiveSyncLoop();
    });

    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) fetchStateFromServer({ deltaCheck: serverVersion > 0 });
    });
    window.addEventListener('focus', () => {
      fetchStateFromServer({ deltaCheck: serverVersion > 0 });
    });
    document.addEventListener('focusout', () => {
      if (!pendingRemoteRender) return;
      setTimeout(() => {
        const ae = document.activeElement;
        if (!ae || !/^(INPUT|TEXTAREA|SELECT)$/.test(ae.tagName)) {
          pendingRemoteRender = false;
          render();
        }
      }, 60);
    });
  }

  let state = loadState();
  function saveState(opts) {
    pendingRemoteRender = false;
    writeLocalCache();
    flushStateToServer(opts);
  }

  // Global UI state (ephemeral)
  const DATA_ROUTES = new Set([
    '/earn',
    '/invitees',
    '/main',
    '/wallet',
    '/wallet/recharge',
    '/wallet/withdraw',
    '/wallet/withdrawHistory',
    '/records',
    '/betRecords',
    '/vip',
    '/ranking',
    '/gift'
  ]);
  let currentRoute = getRouteFromHash();
  let routeDataReady = true;
  let routeLoadTimer = null;
  let routeLoadRaf = null;
  let betSlip = null; // { targetType, targetVal, label, colorClass, unit, qty, mult, total }
  let toastTimer = null;
  let heroTimer = null;
  let wingoTickerTimer = null;

  function getRouteFromHash() {
    const raw = (window.location.hash || '#/').replace(/^#/, '') || '/';
    return raw.startsWith('/') ? raw : '/' + raw;
  }

  /** Simulates the brief API settle delay after initial paint on reload or route/filter change. */
  function beginRouteView(route, delayOverrideMs) {
    clearTimeout(routeLoadTimer);
    if (routeLoadRaf && typeof cancelAnimationFrame === 'function') cancelAnimationFrame(routeLoadRaf);
    routeLoadRaf = null;
    if (!DATA_ROUTES.has(route)) {
      routeDataReady = true;
      render();
      return;
    }
    routeDataReady = false;
    render();
    const targetRoute = route;
    const startTimer = () => {
      const delayMs = typeof delayOverrideMs === 'number'
        ? delayOverrideMs
        : (targetRoute === '/invitees' ? 300 : 340 + Math.floor(Math.random() * 110));
      routeLoadTimer = setTimeout(() => {
        if (currentRoute !== targetRoute) return;
        routeDataReady = true;
        render();
      }, delayMs);
    };
    if (typeof requestAnimationFrame === 'function') {
      routeLoadRaf = requestAnimationFrame(() => {
        routeLoadRaf = null;
        if (currentRoute !== targetRoute) return;
        startTimer();
      });
    } else {
      startTimer();
    }
  }

  function resetInviteesOverviewFilters() {
    state.invTab = 'subordinate';
    state.invSearch = '';
    state.invDate = '';
    state.invLevel = 0;
    state.invSortBy = '';
    state.invSortDir = 'desc';
  }

  function navigate(path) {
    if (!path) return;
    if (path === '/invitees') resetInviteesOverviewFilters();
    if (path === currentRoute) {
      beginRouteView(path);
      return;
    }
    window.location.hash = '#' + path;
  }

  window.addEventListener('hashchange', () => {
    const prevRoute = currentRoute;
    currentRoute = getRouteFromHash();
    if (currentRoute === '/invitees' && prevRoute !== '/invitees') {
      resetInviteesOverviewFilters();
    }
    window.scrollTo(0, 0);
    beginRouteView(currentRoute);
  });

  function showToast(msg) {
    const root = document.getElementById('toast-root');
    root.innerHTML = `<div class="toast-banner">${esc(msg)}</div>`;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { root.innerHTML = ''; }, 2400);
  }

  function copyText(text, label) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).catch(() => {});
    }
    showToast(`${label || 'Copied'}: ${text}`);
  }

  function closeModal() {
    document.getElementById('modal-root').innerHTML = '';
  }

  function openDialog(html, centered) {
    const root = document.getElementById('modal-root');
    root.innerHTML = `<div class="modal-backdrop ${centered ? 'centered' : ''}" data-action="close-backdrop">${html}</div>`;
  }

  // Helper: WinGo color/size math
  function numColorInfo(n) {
    if (n === 0) return { colors: ['#ee5253', '#9b51e0'], text: 'Red/Violet', cls: 'btn-red' };
    if (n === 5) return { colors: ['#19a966', '#9b51e0'], text: 'Green/Violet', cls: 'btn-green' };
    if ([1, 3, 7, 9].includes(n)) return { colors: ['#19a966'], text: 'Green', cls: 'btn-green' };
    return { colors: ['#ee5253'], text: 'Red', cls: 'btn-red' };
  }

  function getWingoModeObj() {
    return D.wingoModes.find(m => m.code === state.wingoMode) || D.wingoModes[0];
  }

  function getWingoRemainingSec() {
    const sec = getWingoModeObj().seconds;
    const epochSec = Math.floor(Date.now() / 1000);
    return sec - (epochSec % sec);
  }

  function getCurrentWingoPeriod() {
    const base = BigInt(state.wingoRounds[0]?.period || '20261111100050896') + 1n;
    return base.toString();
  }

  function processWingoTick() {
    const rem = getWingoRemainingSec();
    const elDigits = document.getElementById('wingo-clock-digits');
    const elMark = document.getElementById('wingo-lock-mark');
    if (currentRoute.startsWith('/WinGo/')) {
      const m = String(Math.floor(rem / 60)).padStart(2, '0');
      const s = String(rem % 60).padStart(2, '0');
      if (elDigits) {
        elDigits.innerHTML = `<span>${m[0]}</span><span>${m[1]}</span><span class="colon">:</span><span>${s[0]}</span><span>${s[1]}</span>`;
      }
      if (elMark) {
        if (rem <= 5 && rem > 0) {
          elMark.style.display = 'flex';
          elMark.innerHTML = `<div>${s[0]}</div><div>${s[1]}</div>`;
        } else {
          elMark.style.display = 'none';
        }
      }
    }
    // Check period rollover only when WinGo is open or a bet is waiting settlement
    const sec = getWingoModeObj().seconds;
    if ((currentRoute.startsWith('/WinGo/') || state.wingoMyBets.some(b => b.status === 'Pending')) && rem === sec && Date.now() - state.wingoLastDrawTs > 1500) {
      state.wingoLastDrawTs = Date.now();
      resolveWingoRound();
    }
  }

  function resolveWingoRound() {
    const period = getCurrentWingoPeriod();
    if (state.wingoRounds.some(r => r && String(r.period) === String(period))) return;
    const rng = makeDailyRng('6ECLUB_WINGO_' + period);
    const drawn = Math.floor(rng() * 10);
    state.wingoRounds.unshift({ period, num: drawn });
    if (state.wingoRounds.length > 30) state.wingoRounds.length = 30;

    // Resolve bets matching this period
    const info = numColorInfo(drawn);
    const drawnSize = drawn >= 5 ? 'Big' : 'Small';
    let roundNetWin = 0;
    let hadBet = false;

    state.wingoMyBets.forEach(bet => {
      if (bet.period === period && bet.status === 'Pending') {
        hadBet = true;
        let multWin = 0;
        if (bet.targetType === 'num' && Number(bet.targetVal) === drawn) multWin = 9;
        else if (bet.targetType === 'size' && bet.targetVal === drawnSize) multWin = 2;
        else if (bet.targetType === 'color') {
          if (bet.targetVal === 'Violet' && (drawn === 0 || drawn === 5)) multWin = 4.5;
          else if (bet.targetVal === 'Green' && [1, 3, 7, 9].includes(drawn)) multWin = 2;
          else if (bet.targetVal === 'Green' && drawn === 5) multWin = 1.5;
          else if (bet.targetVal === 'Red' && [2, 4, 6, 8].includes(drawn)) multWin = 2;
          else if (bet.targetVal === 'Red' && drawn === 0) multWin = 1.5;
        }
        const payout = +(bet.amount * multWin).toFixed(2);
        bet.resultNum = drawn;
        if (payout > 0) {
          bet.status = 'Win';
          bet.payout = payout;
          state.user.balance = +(state.user.balance + payout).toFixed(2);
          state.balanceRecords.unshift({
            type: 'WinGo Win',
            category: 'Income',
            time: nowStr(),
            change: `+${payout}`,
            balance: state.user.balance.toFixed(2),
            isIncome: true
          });
          roundNetWin += payout;
        } else {
          bet.status = 'Lose';
          bet.payout = 0;
        }
      }
    });

    saveState({ reason: 'wingo_auto', period });
    if (currentRoute.startsWith('/WinGo/')) {
      render();
      if (hadBet) {
        const won = roundNetWin > 0;
        openDialog(`
          <div class="dialog-card" style="background: url('${won ? D.brand.winBg : D.brand.loseBg}') center/cover no-repeat; padding-top: 1.8rem; border-color: ${won ? '#ffca47' : '#58786e'};">
            <h2 style="margin:0; font-size:0.54rem; color:${won ? '#ffe38f' : '#ffffff'}">${won ? 'Congratulations!' : 'Sorry'}</h2>
            <p style="margin:0.18rem 0; font-size:0.32rem; color:#e6fff5;">Period: ${esc(period)} • Number <b>${drawn}</b> (${info.text} / ${drawnSize})</p>
            <div style="font-size:0.56rem; font-weight:800; color:${won ? '#ffda00' : '#ff8a80'}; margin:0.24rem 0;">
              ${won ? `+ ${fmtMoney(roundNetWin)}` : 'Lose'}
            </div>
            <button class="btn-primary-full" style="height:0.94rem; margin-top:0.24rem;" data-action="close-modal">Confirm</button>
          </div>
        `, true);
      }
    }
  }

  // Reusable Header & TabBar
  function renderTopHeader() {
    if (state.isLoggedIn) {
      return `
        <header class="s16-header">
          <div class="s16-header__logo" data-nav="/"><img src="${D.brand.logoHeader}" alt="6E.CLUB"></div>
          <div class="s16-header__right">
            <button class="s16-balance-pill" data-nav="/wallet/recharge">
              <img class="coin" src="${D.brand.navCoin}" alt="Coin">
              <span class="val">${fmtMoney(state.user.balance)}</span>
              <img class="add" src="${D.brand.navDeposit}" alt="Deposit">
            </button>
            <button class="s16-msg-btn" data-nav="/notifications" aria-label="Notifications">
              <img src="${D.brand.navMessage}" alt="Messages">
              <span class="s16-msg-dot"></span>
            </button>
            <button class="s16-lang-pill" data-nav="/language">
              <span class="s16-lang-flag">${state.language === 'HI' ? SVG.inFlag : SVG.ukFlag}</span>
              <span>${esc(state.language)}</span>
            </button>
          </div>
        </header>
      `;
    }
    return `
      <header class="s16-header">
        <div class="s16-header__logo" data-nav="/"><img src="${D.brand.logoHeader}" alt="6E.CLUB"></div>
        <div class="s16-auth-btns">
          <button class="btn-outline-sm" data-nav="/login">Login</button>
          <button class="btn-grad-sm" data-nav="/register">Register</button>
          <button class="s16-lang-pill" data-nav="/language">
            <span class="s16-lang-flag">${state.language === 'HI' ? SVG.inFlag : SVG.ukFlag}</span>
            <span>${esc(state.language)}</span>
          </button>
        </div>
      </header>
    `;
  }

  function renderSubNav(title, backRoute, rightHtml, transparent, backSvg) {
    return `
      <header class="sub-nav ${transparent ? 'transparent' : ''}">
        <button class="sub-nav__back" data-action="go-back" data-fallback="${esc(backRoute || '/')}" aria-label="Back">${backSvg || SVG.back}</button>
        <div class="sub-nav__title">${esc(title)}</div>
        <div class="sub-nav__right">${rightHtml || ''}</div>
      </header>
    `;
  }

  function renderTabBar() {
    const items = D.tabBar.items;
    const isRoute = (r) => {
      if (r === '/') return currentRoute === '/' || currentRoute === '';
      return currentRoute.startsWith(r);
    };
    const sideHtml = items.filter(it => it.id !== 'wheel').map(it => {
      const act = isRoute(it.route);
      return `
        <button class="s16-tabbar__item is-${it.id} ${act ? 'is-active' : ''}" data-nav="${it.route}">
          <span class="s16-tabbar__icon">
            <img src="${act ? it.sel : it.nor}" alt="${it.label}">
          </span>
          <span>${it.label}</span>
        </button>
      `;
    }).join('');
    const wheelItem = items.find(i => i.id === 'wheel');
    const wheelAct = isRoute('/rechargeTurntable');
    return `
      <nav class="s16-tabbar" aria-label="Bottom Navigation">
        <div class="s16-tabbar__frame">
          <img class="s16-tabbar__bar" src="${D.tabBar.frameImg}" alt="" aria-hidden="true">
          ${sideHtml}
          <button class="s16-tabbar__wheel ${wheelAct ? 'is-active' : ''}" data-nav="${wheelItem.route}">
            <span class="wheel-orb">
              <span class="tabbar-wheel-stage">
                <img class="tabbar-wheel-disc" src="assets/tabs/tab_wheel_disc.png" alt="Wheel">
                <img class="tabbar-wheel-ptr" src="assets/tabs/tab_wheel_ptr.png" alt="">
                <img class="tabbar-wheel-hub" src="assets/tabs/tab_wheel_hub.png" alt="">
              </span>
            </span>
            <span>${wheelItem.label}</span>
          </button>
        </div>
      </nav>
    `;
  }

  // ==================== VIEWS ====================
  function renderHome() {
    const slidesHtml = D.heroBanners.map(b => `
      <div class="s16-hero__slide" data-nav="${b.route}"><img src="${b.img}" alt="${esc(b.title)}"></div>
    `).join('');
    const dotsHtml = D.heroBanners.map((_, i) => `<i class="s16-hero__dot ${i === state.heroIdx ? 'active' : ''}" data-action="set-hero" data-idx="${i}"></i>`).join('');

    const popStart = state.popPage * 9;
    const popItems = D.popularGames.slice(popStart, popStart + 9);
    const popHtml = popItems.map(g => `
      <div class="s16-game-card" data-nav="${g.route}">
        <img class="cover" src="${g.img}" alt="${esc(g.name)}">
        ${g.rank && D.popularFrames[g.rank] ? `<img class="pop-frame" src="${D.popularFrames[g.rank]}" alt="" aria-hidden="true">` : ''}
      </div>
    `).join('');

    const winPills = [...D.winningFeed, ...D.winningFeed].map(w => `
      <div class="s16-win-pill">
        <img src="${w.img}" alt="">
        <div>
          <div class="amt">${esc(w.amount)}</div>
          <div class="usr">${esc(w.user)}</div>
        </div>
      </div>
    `).join('');

    const catTabsHtml = D.categories.map(c => `
      <button class="s16-cat-tab ${state.activeCat === c.id ? 'active' : ''}" data-action="set-cat" data-cat="${c.id}">
        <img src="${c.icon}" alt="${c.name}">
        <span>${c.name}</span>
      </button>
    `).join('');

    const catFiltered = D.popularGames.filter(g => state.activeCat === 'lottery' ? g.category === 'lottery' : (g.category === state.activeCat || (state.activeCat === 'slots' && g.provider === 'JILI') || (['sports', 'fishing', 'casino', 'poker'].includes(state.activeCat))));
    const activeCatObj = D.categories.find(c => c.id === state.activeCat) || D.categories[0];

    const categorySectionHtml = state.activeCat === 'lottery'
      ? `
        <div class="s16-lottery-grid">
          ${D.lotteryCards.map(lc => `
            <div class="s16-lottery-card" data-nav="${lc.route}">
              <img src="${lc.img}" alt="${esc(lc.title)}">
            </div>
          `).join('')}
        </div>
      `
      : `
        <div class="s16-pop-grid">
          ${catFiltered.slice(0, 9).map(g => `
            <div class="s16-game-card" data-nav="${g.route}">
              <img class="cover" src="${g.img}" alt="${esc(g.name)}">
            </div>
          `).join('')}
        </div>
      `;

    const pod1 = D.profitRanking.podium.find(p => p.rank === 1);
    const pod2 = D.profitRanking.podium.find(p => p.rank === 2);
    const pod3 = D.profitRanking.podium.find(p => p.rank === 3);

    return `
      <div class="page-view home-bg-ambient">
        ${renderTopHeader()}

        <div class="s16-hero">
          <div class="s16-hero__track" style="transform: translateX(-${state.heroIdx * 100}%);">
            ${slidesHtml}
          </div>
          <div class="s16-hero__dots">${dotsHtml}</div>
          <img class="s16-hero__edge" src="${D.brand.bannerEdge}" alt="" aria-hidden="true">
        </div>

        <div class="s16-notice">
          <img class="s16-notice__horn" src="${D.brand.noticeHorn}" alt="Notice">
          <div class="s16-notice__marquee">
            <div class="s16-notice__marquee-inner">${esc(D.notices.join('   •   ') + '   •   ' + D.notices.join('   •   '))}</div>
          </div>
          <button class="s16-notice__detail" data-nav="/notifications">Detail</button>
        </div>

        <section class="side-distance">
          <div class="s16-sec-head">
            <h2 class="s16-sec-title"><img src="${D.brand.titlePopular}" alt=""><span>Popular Games</span></h2>
            <button class="s16-view-all" data-action="open-all-games"><span>View All</span>${SVG.chevDouble}</button>
          </div>
          <div class="s16-pop-grid">${popHtml}</div>
          <div class="s16-pop-dots">
            ${[0, 1].map(p => `<span class="${state.popPage === p ? 'active' : ''}" data-action="set-pop-page" data-page="${p}"></span>`).join('')}
          </div>
        </section>

        <section class="s16-win-section">
          <div class="side-distance s16-sec-head">
            <h2 class="s16-sec-title"><img src="${D.brand.titleWinning}" alt=""><span>Winning Now</span></h2>
          </div>
          <div class="s16-win-viewport">
            <div class="s16-win-track">${winPills}</div>
          </div>
        </section>

        <div class="s16-cat-strip">${catTabsHtml}</div>

        <section class="side-distance">
          <div class="s16-sec-head">
            <h2 class="s16-sec-title white"><img src="${activeCatObj.icon}" alt=""><span>${esc(activeCatObj.name)}</span></h2>
            <div class="s16-controls-inline">
              <button class="s16-mini-pill" data-action="open-all-games">All</button>
              <button class="s16-mini-pill" data-action="prev-cat">${SVG.back.replace('22', '12')}</button>
              <button class="s16-mini-pill" data-action="next-cat">${SVG.chevRight}</button>
            </div>
          </div>
          ${categorySectionHtml}
        </section>

        <div class="side-distance s16-slots-duo">
          <img src="${D.homeSlots.inviteLeft.img}" alt="${esc(D.homeSlots.inviteLeft.alt)}" data-nav="${D.homeSlots.inviteLeft.route}">
          <img src="${D.homeSlots.wheelRight.img}" alt="${esc(D.homeSlots.wheelRight.alt)}" data-nav="${D.homeSlots.wheelRight.route}">
        </div>

        <section class="side-distance s16-rank">
          <div class="s16-sec-head">
            <h2 class="s16-sec-title white"><img src="assets/ranks/rank_title_icon-BfdpEHps.webp" alt=""><span>Today's Profit Ranking</span></h2>
            <button class="s16-view-all" data-nav="/ranking"><span>Leaderboard</span>${SVG.chevDouble}</button>
          </div>
          <div class="s16-podium-grid">
            ${[pod2, pod1, pod3].map(p => `
              <div class="podium-card rank-${p.rank}">
                <div class="podium-avatar-wrap">
                  <img class="av" src="${D.brand.avatar}" alt="">
                  <img class="podium-crown" src="${p.crown}" alt="">
                </div>
                <span class="podium-plate">NO.${p.rank}</span>
                <div class="podium-name">${esc(p.name)}</div>
                <div class="podium-amt">${esc(p.amount)}</div>
              </div>
            `).join('')}
          </div>
          <div class="s16-rank-list">
            ${D.profitRanking.list.map(r => `
              <div class="s16-rank-row">
                <span class="no">${r.rank}</span>
                <img class="av" src="${D.brand.avatar}" alt="">
                <span class="name">${esc(r.name)}</span>
                <span class="amt">${esc(r.amount)}</span>
              </div>
            `).join('')}
          </div>
        </section>

        <div class="side-distance s16-full-banner" data-nav="${D.homeSlots.domainBanner.route}">
          <img src="${D.homeSlots.domainBanner.img}" alt="${esc(D.homeSlots.domainBanner.alt)}">
        </div>

        <section class="side-distance s16-social">
          <h3 class="s16-social__title">Social Networks</h3>
          <div class="s16-social__list">
            ${D.socialNetworks.map(s => `
              <button data-action="social-toast" data-name="${esc(s.label)}"><img src="${s.img}" alt="${esc(s.label)}"></button>
            `).join('')}
          </div>
        </section>

        ${state.showAppBar ? `
          <div class="floating-app-bar">
            <span class="dl-badge" data-action="download-app">${SVG.download}</span>
            <span class="dl-text" data-action="download-app">Download APP for a Better<br>Experience</span>
            <button class="dl-close" data-action="dismiss-app-bar" aria-label="Close">✕</button>
          </div>
        ` : ''}

        <div class="floating-support-dock">
          <button class="floating-support-btn" data-action="social-toast" data-name="WhatsApp Support">
            <img src="assets/social/social_whatsapp-DN6H63rh.webp" alt="WhatsApp">
          </button>
          <button class="floating-support-btn" data-action="social-toast" data-name="Telegram Channel">
            <img src="assets/social/social_telegram-BWkKcS-D.webp" alt="Telegram">
          </button>
        </div>

        ${renderTabBar()}
      </div>
    `;
  }

  function renderAuthPage(mode) {
    const isReg = mode === 'register';
    const prePhone = !isReg && state.rememberPassword ? state.user.phone : '';
    const prePass = !isReg && state.rememberPassword ? state.user.password : '';
    return `
      <div class="auth-page">
        <div class="auth-hero">
          <div class="auth-hero__top">
            <button class="sub-nav__back" data-action="go-back" data-fallback="/">${SVG.back}</button>
            <button class="s16-lang-pill" data-nav="/language">
              <span class="s16-lang-flag">${state.language === 'HI' ? SVG.inFlag : SVG.ukFlag}</span>
              <span>${esc(state.language)}</span>
            </button>
          </div>
          <img class="banner" src="${D.brand.loginHero}" alt="6ECLUB">
        </div>
        <div class="auth-hero__logo-center">
          <img src="${D.brand.logoLogin}" alt="6ECLUB">
          <h1>${isReg ? 'Create Your Account' : 'Welcome Back'}</h1>
        </div>

        <form class="auth-form" id="auth-form" data-mode="${mode}">
          <div class="auth-field-wrap">
            <div class="auth-label">${SVG.phone}<span>Phone number</span></div>
            <div class="auth-input-box">
              <button type="button" class="country-code-btn" data-action="pick-country">${esc(state.user.countryCode || '+91')} ${SVG.chevDown}</button>
              <input id="auth-phone" type="tel" maxlength="10" placeholder="Please enter the phone number" value="${esc(prePhone)}" required>
            </div>
          </div>

          <div class="auth-field-wrap">
            <div class="auth-label">${SVG.lock}<span>${isReg ? 'Set password' : 'Password'}</span></div>
            <div class="auth-input-box">
              <input id="auth-pass" type="password" placeholder="Please enter password" value="${esc(prePass)}" required>
              <button type="button" data-action="toggle-eye" data-target="auth-pass">${SVG.eyeClosed}</button>
            </div>
          </div>

          ${isReg ? `
            <div class="auth-field-wrap">
              <div class="auth-label">${SVG.lock}<span>Confirm password</span></div>
              <div class="auth-input-box">
                <input id="auth-pass2" type="password" placeholder="Please confirm password" required>
                <button type="button" data-action="toggle-eye" data-target="auth-pass2">${SVG.eyeClosed}</button>
              </div>
            </div>
            <div class="auth-field-wrap">
              <div class="auth-label">${SVG.gift}<span>Invite code (Optional)</span></div>
              <div class="auth-input-box">
                <input id="auth-invite" type="text" placeholder="Enter invite code" value="QZ54MEN">
              </div>
            </div>
            <label class="checkbox-row" style="margin:0.18rem 0 0.42rem;">
              <input type="checkbox" id="reg-agree" checked style="accent-color:#2bc484; width:0.42rem; height:0.42rem;">
              <span>I have read and agree <b style="color:#ffca47;">【Privacy Agreement】</b></span>
            </label>
          ` : `
            <div class="auth-row-between">
              <div class="checkbox-row" data-action="toggle-remember">
                <span class="checkbox-dot ${state.rememberPassword ? 'checked' : ''}">${state.rememberPassword ? '✓' : ''}</span>
                <span>Remember password</span>
              </div>
              <button type="button" style="color:#2bc484; font-weight:600;" data-action="forgot-pw">Forgot Password</button>
            </div>
          `}

          <button type="submit" class="btn-primary-full">${isReg ? 'Register' : 'Login'}</button>
          <button type="button" class="btn-outline-full" data-nav="${isReg ? '/login' : '/register'}">
            ${isReg ? 'Already have an account? Login' : 'Register Now'}
          </button>

          ${!isReg ? `
            <div class="demo-hint-chip">
              <span>Saved Demo Account: <b>8102318421</b></span>
              <button type="button" style="color:#ffca47; font-weight:700;" data-action="fill-demo-login">Auto Fill</button>
            </div>
          ` : ''}
        </form>
      </div>
    `;
  }

  function renderPromo() {
    const filtered = D.promotions.filter(p => p.tab === state.promoTab);
    return `
      <div class="page-view">
        ${renderSubNav('Promotions', '/')}
        <div class="promo-quick-grid">
          <button class="promo-quick-item" data-nav="/vip"><img src="assets/theme/common/icon_VIP0-e96f7a12.webp" alt=""><span>VIP Club</span></button>
          <button class="promo-quick-item" data-nav="/rechargeTurntable"><img src="assets/theme/common/rechargeWheel/gold_icon-daa43809.webp" alt=""><span>Deposit Wheel</span></button>
          <button class="promo-quick-item" data-nav="/gift"><img src="assets/theme/common/box-b6e837de.webp" alt=""><span>Gift Code</span></button>
          <button class="promo-quick-item" data-nav="/share"><img src="assets/theme/common/share_coin_open-f943c843.webp" alt=""><span>Invite Rewards</span></button>
        </div>
        <div class="promo-tabs">
          ${['Regular', 'Mystery', 'Piggy Bank'].map(t => `
            <button class="promo-tab-pill ${state.promoTab === t ? 'active' : ''}" data-action="set-promo-tab" data-tab="${t}">${t}</button>
          `).join('')}
        </div>
        <div>
          ${filtered.map(p => `
            <div class="promo-card" data-action="open-promo" data-id="${p.id}">
              <img src="${p.img}" alt="${esc(p.title)}">
              <div class="promo-card__body">
                <div class="promo-card__title">${esc(p.title)}</div>
                <span class="promo-card__tag">${esc(p.tag)}</span>
              </div>
            </div>
          `).join('')}
        </div>
        ${renderTabBar()}
      </div>
    `;
  }

  function renderWheelDiscSvg(tier) {
    const palettes = {
      silver: { fills: ['#dce9ff', '#588cf5'], texts: ['#123370', '#ffffff'], ring: '#98bcff' },
      gold: { fills: ['#fff0c2', '#e08914'], texts: ['#5c2a00', '#ffffff'], ring: '#ffd56a' },
      diamond: { fills: ['#efe1ff', '#7d44e2'], texts: ['#340e68', '#ffffff'], ring: '#c09bff' },
      special: { fills: ['#ffe0e0', '#d13d3d'], texts: ['#610909', '#ffffff'], ring: '#ff9494' }
    };
    const pal = palettes[tier.id] || palettes.silver;
    const cx = 250, cy = 250, r = 216;
    const n = tier.prizes.length;
    const step = 360 / n;
    const toRad = deg => (deg - 90) * Math.PI / 180;
    const slices = tier.prizes.map((label, i) => {
      const a0 = i * step - step / 2;
      const a1 = a0 + step;
      const mid = i * step;
      const x1 = cx + r * Math.cos(toRad(a0));
      const y1 = cy + r * Math.sin(toRad(a0));
      const x2 = cx + r * Math.cos(toRad(a1));
      const y2 = cy + r * Math.sin(toRad(a1));
      const fill = pal.fills[i % 2];
      const txtCol = pal.texts[i % 2];
      const isShort = label.length <= 7;
      const badgeIcon = label.includes('Spin') ? '↻' : (label.includes('Phone') || label.includes('MacBook') ? '📱' : '₹');
      return `
        <path d="M${cx},${cy} L${x1.toFixed(1)},${y1.toFixed(1)} A${r},${r} 0 0,1 ${x2.toFixed(1)},${y2.toFixed(1)} Z" fill="${fill}" stroke="${pal.ring}" stroke-width="2"/>
        <g transform="rotate(${mid} ${cx} ${cy})">
          <text x="${cx}" y="${cy - 148}" fill="${txtCol}" font-size="${isShort ? 21 : 16}" font-weight="800" text-anchor="middle" font-family="Poppins, sans-serif">${esc(label)}</text>
          <circle cx="${cx}" cy="${cy - 102}" r="18" fill="${i % 2 === 0 ? 'rgba(255,193,7,0.22)' : 'rgba(255,255,255,0.2)'}"/>
          <text x="${cx}" y="${cy - 95}" fill="${i % 2 === 0 ? '#b86b00' : '#ffea61'}" font-size="18" font-weight="800" text-anchor="middle">${badgeIcon}</text>
        </g>
      `;
    }).join('');
    return `<svg class="wheel-svg" viewBox="0 0 500 500" aria-hidden="true">${slices}<circle cx="${cx}" cy="${cy}" r="54" fill="${pal.ring}"/></svg>`;
  }

  function renderWheel() {
    const tier = D.wheelTiers.find(t => t.id === state.wheelTier) || D.wheelTiers[0];
    const rightCoin = `<span style="display:inline-flex;align-items:center;gap:0.1rem;background:#0f4534;padding:0.08rem 0.24rem;border-radius:99px;font-size:0.32rem;font-weight:700;color:#ffca47;"><img src="${D.brand.navCoin}" style="width:0.42rem;height:0.42rem;"> ${fmtMoney(state.user.balance)}</span>`;
    return `
      <div class="page-view">
        ${renderSubNav('Deposit Wheel', '/', rightCoin)}
        <div class="wheel-page-top">
          <div class="wheel-ticker-bar">
            <button class="wheel-pill-btn" data-action="open-wheel-history">History</button>
            <div class="wheel-ticker-txt">🔊 Me**ZY win ₹6.00</div>
            <button class="wheel-pill-btn" data-action="open-wheel-rules">Rules</button>
          </div>
          <div class="wheel-headline">Reward up to <span>₹324,900</span></div>
          <div class="wheel-sub">Complete the deposit task to participate in the wheel spin activity and win up to <span>₹324,900</span></div>
          <button class="btn-primary-full" style="height:0.98rem;" data-nav="/wallet/recharge">Deposit now</button>
        </div>

        <div class="wheel-tier-tabs">
          ${D.wheelTiers.map(t => `
            <button class="wheel-tier-tab ${state.wheelTier === t.id ? 'active' : ''}" data-tier="${t.id}" data-action="set-wheel-tier">
              <img src="${t.icon}" alt="${t.id}">
              <span>${esc(t.label)}</span>
              ${t.locked ? '<span style="position:absolute;top:0.16rem;right:0.16rem;color:#ff4d4f;">🔒</span>' : ''}
            </button>
          `).join('')}
        </div>

        <div class="wheel-stage ${tier.id}">
          <div style="font-size:0.36rem;font-weight:700;color:#fff;">
            Deposit ₹${tier.minDep.toLocaleString('en-IN')} to get 1 spins • Available: <span style="color:#ffea61;">${state.wheelSpins} Spins</span>
          </div>
          <div class="wheel-progress-track">
            <div class="wheel-progress-line"></div>
            ${[500, 3000, 5000, 10000].map(amt => `
              <div class="wheel-step">
                <img src="${tier.icon}" alt="">
                <b>₹${amt.toLocaleString('en-IN')}</b>
                <span>+1 Spin</span>
              </div>
            `).join('')}
          </div>

          <div class="wheel-spinner-wrap">
            <div class="wheel-rotor" id="wheel-disc-img" style="transform: rotate(${state.wheelRotation}deg);">
              ${renderWheelDiscSvg(tier)}
              <img class="wheel-disc-rim" src="${tier.wheelImg}" alt="Spin Wheel">
            </div>
            <div class="wheel-pointer-btn" data-action="spin-wheel">
              <img src="assets/theme/common/rechargeWheel/pointer-e0868e59.webp" alt="GO">
            </div>
          </div>
        </div>
        ${renderTabBar()}
      </div>
    `;
  }

  const PLATFORM_LAUNCH_KEY = '2026-11-09';

  function getLocalDateKey(d = new Date()) {
    const p = (v) => String(v).padStart(2, '0');
    return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
  }

  function getReportBaseDate(d = new Date()) {
    return new Date(d.getFullYear(), d.getMonth(), d.getDate() - 1);
  }

  function getReportDateKey(d = new Date()) {
    return getLocalDateKey(getReportBaseDate(d));
  }

  function getActiveReportDates(maxDays = 30, baseDate = getReportBaseDate()) {
    const dates = [];
    for (let i = 0; i < maxDays; i++) {
      const d = new Date(baseDate.getFullYear(), baseDate.getMonth(), baseDate.getDate() - i);
      const dk = getLocalDateKey(d);
      if (dk < PLATFORM_LAUNCH_KEY) break;
      dates.push(dk);
    }
    return dates;
  }

  function makeDailyRng(seedStr) {
    let h = 2166136261 >>> 0;
    for (let i = 0; i < seedStr.length; i++) {
      h ^= seedStr.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    let s = h >>> 0;
    return () => {
      s = (s + 0x6D2B79F5) >>> 0;
      let t = Math.imul(s ^ (s >>> 15), 1 | s);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function getDailyEarnStats(dateKey) {
    const key = dateKey || getReportDateKey();
    const rng = makeDailyRng('6ECLUB_DAILY_EARN_' + key);
    const randInt = (min, max) => min + Math.floor(rng() * (max - min + 1));

    const yesterdayCommission = +(7561 + Math.floor(rng() * 6800) + (randInt(1, 99) / 100)).toFixed(2);
    const totalDepUsers = randInt(306, 344);
    const depGap = randInt(10, 24);
    const dirDepUsers = Math.floor((totalDepUsers - depGap) / 2);
    const teamDepUsers = totalDepUsers - dirDepUsers;

    const dirReg = dirDepUsers + randInt(24, 42);
    const teamReg = Math.max(dirReg + randInt(6, 18), teamDepUsers + randInt(24, 44));

    const dirExtra = randInt(500, 12500);
    const teamExtra = dirExtra + randInt(500, 7500);
    const dirDepAmountVal = dirDepUsers * 500 + 5000 + dirExtra;
    const teamDepAmountVal = teamDepUsers * 500 + 5000 + teamExtra;

    const dirFirstDep = dirDepUsers - randInt(18, 30);
    const teamFirstDep = teamDepUsers - randInt(20, 32);

    const thisWeek = +(yesterdayCommission * (4.2 + rng() * 2.1)).toFixed(2);
    const totalCommission = +(thisWeek * (2.6 + rng() * 1.4)).toFixed(2);

    return {
      dateKey: key,
      yesterdayCommission,
      thisWeek,
      totalCommission,
      directCount: dirReg,
      teamCount: teamReg,
      direct: {
        registered: dirReg,
        depositUsers: dirDepUsers,
        depositAmount: fmtMoney(dirDepAmountVal),
        depositAmountNum: dirDepAmountVal,
        firstDepositUsers: dirFirstDep
      },
      team: {
        registered: teamReg,
        depositUsers: teamDepUsers,
        depositAmount: fmtMoney(teamDepAmountVal),
        depositAmountNum: teamDepAmountVal,
        firstDepositUsers: teamFirstDep
      }
    };
  }

  function getWeeklyEarnStats(baseDate = getReportBaseDate()) {
    let weeklyCommission = 0;
    let weeklyDirectDeposits = 0;
    let weeklyTeamDeposits = 0;
    let totalCommission = 0;
    const dates = getActiveReportDates(30, baseDate);
    for (let i = 0; i < dates.length; i++) {
      const ds = getDailyEarnStats(dates[i]);
      totalCommission += ds.yesterdayCommission;
      if (i < 7) {
        weeklyCommission += ds.yesterdayCommission;
        weeklyDirectDeposits += ds.direct.depositUsers;
        weeklyTeamDeposits += ds.team.depositUsers;
      }
    }
    return {
      weeklyCommission: +weeklyCommission.toFixed(2),
      totalCommission: +totalCommission.toFixed(2),
      weeklyDirectDeposits,
      weeklyTeamDeposits
    };
  }

  function computeSingleDayOverview(key, levelFilter) {
    const lvl = Number(levelFilter || 0);
    const earn = getDailyEarnStats(key);
    const rng = makeDailyRng('6ECLUB_DAILY_OVERVIEW_' + key + (lvl > 1 ? '_L' + lvl : ''));
    const randInt = (min, max) => min + Math.floor(rng() * (max - min + 1));

    let depositNumber = earn.direct.depositUsers + earn.team.depositUsers;
    let firstDepositCount = earn.direct.firstDepositUsers + earn.team.firstDepositUsers;
    let depositAmount = earn.direct.depositAmountNum + earn.team.depositAmountNum;

    if (lvl >= 2) {
      const ratios = { 2: 0.45, 3: 0.32, 4: 0.28, 5: 0.25, 6: 0.22 };
      const f = ratios[lvl] || 0.22;
      depositNumber = Math.max(55, Math.round(depositNumber * f) + randInt(-6, 8));
      firstDepositCount = Math.max(35, depositNumber - randInt(14, 24));
      depositAmount = Math.max(40000, depositNumber * 500 + 5000 + randInt(1200, 14000));
    }

    const numberOfBettors = depositNumber + randInt(30, 52);
    const totalBet = +(depositAmount * (3.1 + rng() * 0.85)).toFixed(2);
    const firstDepositAmount = Math.max(15000, depositAmount - randInt(Math.round(depositAmount * 0.14), Math.round(depositAmount * 0.24)));

    const cardSpecs = lvl >= 1
      ? [
          { prefix: String(171 + lvl), level: lvl },
          { prefix: String(172 + (lvl % 2)), level: lvl },
          { prefix: String(173 + (lvl % 2)), level: lvl },
          { prefix: String(172 + (lvl % 3)), level: lvl },
          ...(lvl === 1 ? [{ prefix: '173', level: 1 }, { prefix: '172', level: 1 }] : [])
        ]
      : [
          { prefix: '173', level: 1 },
          { prefix: '172', level: 1 },
          { prefix: '172', level: 1 },
          { prefix: '173', level: 1 },
          { prefix: '174', level: 2 },
          { prefix: '175', level: 2 }
        ];

    const usedUids = new Set();
    const records = cardSpecs.map((sp) => {
      let uid = '';
      do {
        uid = sp.prefix + String(randInt(100, 999));
      } while (usedUids.has(uid));
      usedUids.add(uid);
      const deposit = randInt(1000, 5000);
      const bet = +(deposit * (3 + rng())).toFixed(2);
      const commission = +(bet * 0.006).toFixed(2);
      return { uid, level: sp.level, deposit, bet, commission, firstDeposit: true, time: key };
    });

    const invitees = records.map(r => ({ uid: r.uid, level: r.level, joinedAt: key, firstDeposit: r.deposit }));
    for (let j = 0; j < 2; j++) {
      let pUid = '';
      do {
        pUid = '171' + String(randInt(100, 999));
      } while (usedUids.has(pUid));
      usedUids.add(pUid);
      invitees.push({ uid: pUid, level: lvl >= 1 ? lvl : 1, joinedAt: key, firstDeposit: 0 });
    }

    return {
      dateKey: key,
      summary: {
        depositNumber,
        depositAmount,
        numberOfBettors,
        totalBet,
        firstDepositCount,
        firstDepositAmount
      },
      records,
      invitees
    };
  }

  function getOverviewDataForDate(dateKey, levelFilter) {
    const lvl = Number(levelFilter || 0);
    const reportDate = getReportBaseDate();
    const reportKey = getLocalDateKey(reportDate);
    const activeDates = getActiveReportDates(30, reportDate);
    const minKey = activeDates[activeDates.length - 1] || PLATFORM_LAUNCH_KEY;

    // Data exists only from platform launch (2026-11-09) up to 1 day behind today (e.g. 2026-11-10)
    if (dateKey && (dateKey > reportKey || dateKey < minKey)) {
      return {
        dateKey,
        summary: { depositNumber: 0, depositAmount: 0, numberOfBettors: 0, totalBet: 0, firstDepositCount: 0, firstDepositAmount: 0 },
        records: [],
        invitees: []
      };
    }

    // When a specific Level (1..6) is chosen -> always show that particular day's Daily Basis data
    if (lvl >= 1) {
      return computeSingleDayOverview(dateKey || reportKey, lvl);
    }

    // When 'All' + explicit calendar date chosen -> show that day's data
    if (dateKey) {
      return computeSingleDayOverview(dateKey, 0);
    }

    // When 'All' + no calendar date chosen -> cumulative total across active days since launch (up to 30 days)
    const summary = {
      depositNumber: 0,
      depositAmount: 0,
      numberOfBettors: 0,
      totalBet: 0,
      firstDepositCount: 0,
      firstDepositAmount: 0
    };
    const records = [];
    const invitees = [];
    for (let i = 0; i < activeDates.length; i++) {
      const dk = activeDates[i];
      const dayOv = computeSingleDayOverview(dk, 0);
      summary.depositNumber += dayOv.summary.depositNumber;
      summary.depositAmount += dayOv.summary.depositAmount;
      summary.numberOfBettors += dayOv.summary.numberOfBettors;
      summary.totalBet = +(summary.totalBet + dayOv.summary.totalBet).toFixed(2);
      summary.firstDepositCount += dayOv.summary.firstDepositCount;
      summary.firstDepositAmount += dayOv.summary.firstDepositAmount;
      if (i < 5) {
        records.push(...dayOv.records.slice(0, 4));
        invitees.push(...dayOv.invitees.slice(0, 4));
      }
    }

    return {
      dateKey: reportKey,
      summary,
      records,
      invitees
    };
  }

  function renderEarn() {
    const ready = routeDataReady;
    const emptyKpi = { registered: 0, depositUsers: 0, depositAmount: fmtMoney(0), firstDepositUsers: 0 };
    const earnStats = ready
      ? getDailyEarnStats()
      : { yesterdayCommission: 0, direct: emptyKpi, team: emptyKpi };
    const weeklyStats = ready
      ? getWeeklyEarnStats()
      : { weeklyCommission: 0, totalCommission: 0, weeklyDirectDeposits: 0, weeklyTeamDeposits: 0 };
    const dir = earnStats.direct;
    const team = earnStats.team;
    const icoPartner = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="9.5" cy="8.5" r="3.5" fill="#ffd27d"/><path d="M3 19.5c0-3.2 2.9-5.5 6.5-5.5s6.5 2.3 6.5 5.5" fill="#f0b654"/><path d="M18 4l1.1 2.2 2.4.3-1.7 1.7.4 2.4L18 9.5l-2.2 1.1.4-2.4-1.7-1.7 2.4-.3L18 4z" fill="#2bc484"/></svg>';
    const icoInvite = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="16" rx="3.5" fill="#d9a86c"/><path d="M3 9h18v1.5H3z" fill="#8b5e2b" opacity="0.45"/><rect x="9" y="7" width="6" height="3.5" rx="1.5" fill="#fff3d6"/></svg>';
    const icoComm = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="3" fill="#dc900c"/><path d="M4 5l4 4v3l2 1.5V9l4-4H4z" fill="#ffca47"/><path d="M12 11h5M12 15h5M8 17h9" stroke="#052218" stroke-width="1.6" stroke-linecap="round"/></svg>';
    const icoOverview = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="4" y="5" width="16" height="15" rx="2.5" fill="#dc900c"/><path d="M8 3v3M16 3v3" stroke="#ffca47" stroke-width="2" stroke-linecap="round"/><path d="M8 11h8M8 15h5" stroke="#052218" stroke-width="1.8" stroke-linecap="round"/></svg>';
    const icoNewInv = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="14" height="16" rx="2.5" fill="#dc900c"/><path d="M6.5 9l1.5 1.5 2.5-2.5M6.5 14l1.5 1.5 2.5-2.5" stroke="#052218" stroke-width="1.6" stroke-linecap="round"/><circle cx="17.5" cy="17.5" r="4" fill="#ffca47" stroke="#07261D" stroke-width="1.4"/><circle cx="17.5" cy="16.5" r="1.2" fill="#07261D"/><path d="M15.3 19.8c.5-.9 1.3-1.3 2.2-1.3s1.7.4 2.2 1.3" stroke="#07261D" stroke-width="1.2" stroke-linecap="round"/></svg>';
    const icoRules = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="5" y="3" width="14" height="18" rx="2.5" fill="#dc900c"/><path d="M9 3h6v7l-3-2-3 2V3z" fill="#ffe194"/><path d="M8 14h8M8 17h6" stroke="#052218" stroke-width="1.6" stroke-linecap="round"/></svg>';
    const icoRebate = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M8.5 6.5L7 4h10l-1.5 2.5C18.5 8.2 20 11 20 14.5c0 4-3.1 6-8 6s-8-2-8-6c0-3.5 1.5-6.3 4.5-8z" fill="#dc900c"/><rect x="8.5" y="6" width="7" height="1.8" rx="0.9" fill="#ffca47"/><text x="12" y="16.5" fill="#052218" font-size="9.5" font-weight="900" text-anchor="middle" font-family="sans-serif">$</text></svg>';
    const icoGift = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3.5" y="4" width="17" height="16" rx="2.5" fill="#b37212" stroke="#ffd27d" stroke-width="1.2"/><rect x="6.5" y="7" width="4" height="4" fill="#ffe3a1"/><rect x="13.5" y="7" width="4" height="4" fill="#ffe3a1"/><rect x="6.5" y="13.5" width="4" height="4" fill="#ffe3a1"/><path d="M14 14h3v3h-3zM14 18h1.5" stroke="#ffe3a1" stroke-width="1.5"/></svg>';
    const earnMenuRows = [
      { ico: icoPartner, title: 'Agent Partner', attr: 'data-action="open-agent-partner"', right: SVG.chevRight },
      { ico: icoInvite, title: 'Invite Code', attr: 'data-action="copy-invite"', right: `<b style="color:#d6f0e6;font-weight:500;">${ready ? esc(state.user.inviteCode) : ''}</b><span style="color:#2bc484;display:inline-flex;">${SVG.copy}</span>` },
      { ico: icoComm, title: 'Commission Details', attr: 'data-nav="/records"', right: SVG.chevRight },
      { ico: icoOverview, title: 'Invitees Overview', attr: 'data-nav="/invitees"', right: SVG.chevRight },
      { ico: icoNewInv, title: 'New Invitees', attr: 'data-action="open-new-invitees"', right: SVG.chevRight },
      { ico: icoRules, title: 'Invitation Rules', attr: 'data-action="show-invite-rules"', right: SVG.chevRight },
      { ico: icoRebate, title: 'Rebate Ratio', attr: 'data-action="open-rebate-ratio"', right: SVG.chevRight },
      { ico: icoGift, title: 'Gift Code', attr: 'data-nav="/gift"', right: SVG.chevRight }
    ];
    const colHtml = (kpis) => `
      <div class="earn-dual-col">
        <div class="earn-metric"><div class="em-val white">${kpis.registered}</div><div class="em-lbl">Registered Users</div></div>
        <div class="earn-metric"><div class="em-val green">${kpis.depositUsers}</div><div class="em-lbl">Deposit Users</div></div>
        <div class="earn-metric"><div class="em-val gold">${esc(kpis.depositAmount)}</div><div class="em-lbl">Deposit Amount</div></div>
        <div class="earn-metric"><div class="em-val white">${kpis.firstDepositUsers}</div><div class="em-lbl">First Deposit Users</div></div>
      </div>
    `;
    const slideContent = state.earnSlide === 0
      ? `
        <div class="earn-dual-head"><div>Direct Invitees</div><div>Team Invitees</div></div>
        <div class="earn-dual-body">${colHtml(dir)}${colHtml(team)}</div>
      `
      : `
        <div class="earn-s2-top">
          <div class="earn-s2-cell">
            <div class="earn-s2-pill">${fmtMoney(weeklyStats.weeklyCommission)}</div>
            <div class="earn-s2-lbl">This Week</div>
          </div>
          <div class="earn-s2-cell">
            <div class="earn-s2-pill">${fmtMoney(weeklyStats.totalCommission)}</div>
            <div class="earn-s2-lbl">total commission</div>
          </div>
        </div>
        <div class="earn-s2-divider"></div>
        <div class="earn-s2-bottom">
          <div class="earn-s2-cell">
            <div class="earn-s2-cnt">${weeklyStats.weeklyDirectDeposits.toLocaleString('en-IN')}</div>
            <div class="earn-s2-lbl">Direct Invitees</div>
          </div>
          <div class="earn-s2-cell">
            <div class="earn-s2-cnt">${weeklyStats.weeklyTeamDeposits.toLocaleString('en-IN')}</div>
            <div class="earn-s2-lbl">Team Invitees</div>
          </div>
        </div>
      `;
    return `
      <div class="page-view">
        ${renderSubNav('Earn', '/')}
        <div class="earn-yesterday-card">
          <div class="lbl">Yesterday's commission</div>
          <div class="val">${fmtMoney(earnStats.yesterdayCommission)}</div>
        </div>

        <div class="earn-dual-box" id="earn-swipe-box">${slideContent}</div>

        <div class="earn-dots">
          <button class="earn-dot ${state.earnSlide === 0 ? 'active' : ''}" data-action="set-earn-slide" data-slide="0" aria-label="Slide 1"></button>
          <button class="earn-dot ${state.earnSlide === 1 ? 'active' : ''}" data-action="set-earn-slide" data-slide="1" aria-label="Slide 2"></button>
        </div>

        <button class="earn-cta-pill" data-nav="/share">INVITE FRIENDS TO GET MONEY</button>

        <div class="earn-menu-list">
          ${earnMenuRows.map(row => `
            <button class="earn-menu-row" ${row.attr}>
              <span class="em-left-ico">${row.ico}</span>
              <span class="em-title">${row.title}</span>
              <span class="em-right">${row.right}</span>
            </button>
          `).join('')}
        </div>
        ${renderTabBar()}
      </div>
    `;
  }

  function renderShare() {
    return `
      <div class="page-view no-tabbar">
        ${renderSubNav('Share', '/earn')}
        <div class="share-social-row">
          ${[
            { n: 'Whatsapp', i: 'WA' }, { n: 'Telegram', i: 'TG' },
            { n: 'Facebook', i: 'FB' }, { n: 'X', i: 'X' }, { n: 'Copy Link', i: '🔗' }
          ].map(s => `
            <button class="share-social-btn" data-action="copy-invite-link" data-ch="${s.n}">
              <span class="share-social-circle">${s.i}</span>
              <span>${s.n}</span>
            </button>
          `).join('')}
        </div>

        <div class="side-distance s16-sec-head">
          <h2 class="s16-sec-title white">${SVG.gift}<span>Invitation Rewards</span></h2>
          <button style="color:#2bc484;font-size:0.32rem;" data-action="show-invite-rules">Rules ?</button>
        </div>

        <div class="share-chest-grid">
          ${D.shareMilestones.map(m => `
            <div class="share-chest-card" data-action="claim-chest" data-ppl="${m.people}" data-amt="${m.reward}">
              <div class="top-amt">+${m.reward} <img src="${D.brand.goldCoin}" style="width:0.34rem;height:0.34rem;"></div>
              <div class="chest-art"></div>
              <span class="badge-ppl">👥 +${m.people}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  function renderMine() {
    if (!state.isLoggedIn) return renderAuthPage('login');
    const vipObj = D.vipLevels[state.user.vipLevel] || D.vipLevels[0];
    const mIco = {
      bell: '<svg width="21" height="21" viewBox="0 0 24 24" fill="none"><path d="M12 2.8a1.4 1.4 0 0 1 1.4 1.4v.35A5.8 5.8 0 0 1 17.8 10v4.1l1.5 1.7a.85.85 0 0 1-.64 1.4H5.34a.85.85 0 0 1-.64-1.4L6.2 14.1V10a5.8 5.8 0 0 1 4.4-5.45V4.2A1.4 1.4 0 0 1 12 2.8Z" fill="#25ca83"/><path d="M9.4 18.2h5.2a2.7 2.7 0 0 1-5.2 0Z" fill="#25ca83"/></svg>',
      coupon: '<svg width="21" height="21" viewBox="0 0 24 24" fill="none"><path d="M4.5 6.5h15a2 2 0 0 1 2 2v1.8a1.7 1.7 0 0 0 0 3.4v1.8a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2v-1.8a1.7 1.7 0 0 0 0-3.4V8.5a2 2 0 0 1 2-2Z" fill="#25ca83"/><path d="M7.5 10.5h9M7.5 13.5h6" stroke="#06241b" stroke-width="1.6" stroke-linecap="round"/></svg>',
      wallet: '<svg width="21" height="21" viewBox="0 0 24 24" fill="none"><path d="M4.5 5.5A2.5 2.5 0 0 1 7 3h10.5a1.5 1.5 0 0 1 0 3H6.8a1 1 0 0 0 0 2H19a2 2 0 0 1 2 2v7.5a2.5 2.5 0 0 1-2.5 2.5H6a3 3 0 0 1-3-3V8a2.5 2.5 0 0 1 1.5-2.5Z" fill="#25ca83"/><circle cx="17.2" cy="13.8" r="1.4" fill="#06241b"/></svg>',
      gameHist: '<svg width="21" height="21" viewBox="0 0 24 24" fill="none"><path d="M6.8 6.5h10.4a4.6 4.6 0 0 1 4.5 5.5l-.7 3.8a2.5 2.5 0 0 1-4.3 1.2l-1.5-1.5H8.8l-1.5 1.5A2.5 2.5 0 0 1 3 15.8l-.7-3.8a4.6 4.6 0 0 1 4.5-5.5Z" fill="#25ca83"/><path d="M6.8 9.2v3.6M5 11h3.6" stroke="#06241b" stroke-width="1.6" stroke-linecap="round"/><circle cx="15" cy="10.2" r=".9" fill="#06241b"/><circle cx="17.2" cy="11.8" r=".9" fill="#06241b"/><circle cx="17.5" cy="17.2" r="4.6" fill="#25ca83" stroke="#06241b" stroke-width="1.5"/><path d="M17.5 15v2.3l1.6 1" stroke="#06241b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      gameStats: '<svg width="21" height="21" viewBox="0 0 24 24" fill="none"><path d="M6.8 6.5h10.4a4.6 4.6 0 0 1 4.5 5.5l-.7 3.8a2.5 2.5 0 0 1-4.3 1.2l-1.5-1.5H8.8l-1.5 1.5A2.5 2.5 0 0 1 3 15.8l-.7-3.8a4.6 4.6 0 0 1 4.5-5.5Z" fill="#25ca83"/><path d="M6.8 9.2v3.6M5 11h3.6" stroke="#06241b" stroke-width="1.6" stroke-linecap="round"/><circle cx="15" cy="10.2" r=".9" fill="#06241b"/><circle cx="17.2" cy="11.8" r=".9" fill="#06241b"/><circle cx="17.5" cy="17.2" r="4.6" fill="#25ca83" stroke="#06241b" stroke-width="1.5"/><path d="M14.7 17.5l1.6-1.5 1.3 1.5 1.8-1.9" stroke="#06241b" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      security: '<svg width="21" height="21" viewBox="0 0 24 24" fill="none"><path d="M12 2.5 4.2 5.6v5.9c0 4.9 3.3 9.2 7.8 10.5 4.5-1.3 7.8-5.6 7.8-10.5V5.6L12 2.5Z" fill="#25ca83"/><path d="M8.8 12.2 11 14.4l4.5-4.6" stroke="#06241b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      support: '<svg width="21" height="21" viewBox="0 0 24 24" fill="none"><path d="M4.5 13v-1a7.5 7.5 0 0 1 15 0v1" stroke="#25ca83" stroke-width="2.2" stroke-linecap="round"/><rect x="2.8" y="11" width="3.8" height="6.2" rx="1.8" fill="#25ca83"/><rect x="17.4" y="11" width="3.8" height="6.2" rx="1.8" fill="#25ca83"/><path d="M18.8 17.2c-.3 1.9-1.9 3-4.3 3h-1.8" stroke="#25ca83" stroke-width="1.9" stroke-linecap="round"/><circle cx="12" cy="20.2" r="1.3" fill="#25ca83"/></svg>',
      gift: '<svg width="21" height="21" viewBox="0 0 24 24" fill="none"><path d="M9.5 6.8C7.8 6.8 6.8 5.6 7.3 4.3c.5-1.2 2.1-1.2 3.3 0L12 5.7l1.4-1.4c1.2-1.2 2.8-1.2 3.3 0 .5 1.3-.5 2.5-2.2 2.5" stroke="#25ca83" stroke-width="1.6" stroke-linecap="round"/><rect x="3.5" y="7" width="17" height="4.2" rx="1.2" fill="#25ca83"/><rect x="4.6" y="11.2" width="14.8" height="9.2" rx="1.6" fill="#25ca83"/><path d="M12 7v13.4M4.6 12h14.8" stroke="#06241b" stroke-width="1.7"/></svg>',
      language: '<svg width="21" height="21" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="11.5" height="11.5" rx="2.2" fill="#25ca83"/><path d="M6.4 11.4 8.75 5.7l2.35 5.7M7.2 9.8h3.1" stroke="#06241b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><rect x="9.5" y="9.5" width="11.5" height="11.5" rx="2.2" fill="#1aa86a" stroke="#06241b" stroke-width="1.4"/><path d="M12.5 13.5h5.5M12.5 16.5h4.2M15.2 12v1.5" stroke="#06241b" stroke-width="1.5" stroke-linecap="round"/></svg>',
      settings: '<svg width="21" height="21" viewBox="0 0 24 24" fill="none"><path d="M10.3 2.4h3.4l.6 2.3c.6.2 1.2.4 1.7.8l2-1.2 2.4 2.4-1.2 2c.4.5.6 1.1.8 1.7l2.3.6v3.4l-2.3.6c-.2.6-.4 1.2-.8 1.7l1.2 2-2.4 2.4-2-1.2c-.5.4-1.1.6-1.7.8l-.6 2.3h-3.4l-.6-2.3c-.6-.2-1.2-.4-1.7-.8l-2 1.2-2.4-2.4 1.2-2c-.4-.5-.6-1.1-.8-1.7l-2.3-.6v-3.4l2.3-.6c.2-.6.4-1.2.8-1.7l-1.2-2 2.4-2.4 2 1.2c.5-.4 1.1-.6 1.7-.8l.6-2.3Z" fill="#25ca83"/><circle cx="12" cy="12" r="3.2" fill="#06241b"/></svg>'
    };
    const menuItems = [
      { icon: mIco.bell, label: 'Notifications', nav: '/notifications' },
      { icon: mIco.coupon, label: 'Coupons', nav: '/ticket' },
      { icon: mIco.wallet, label: 'Balance Record', nav: '/records' },
      { icon: mIco.gameHist, label: 'Game History', nav: '/betRecords' },
      { icon: mIco.gameStats, label: 'Game Statistics', nav: '/gameStats' },
      { icon: mIco.security, label: 'Account & Security', nav: '/security' },
      { icon: mIco.support, label: 'Live Support', action: 'social-toast', data: '24/7 Live Customer Service' },
      { icon: mIco.gift, label: 'Gifts', nav: '/gift' },
      { icon: mIco.language, label: 'Language', val: routeDataReady ? state.language : ' ', nav: '/language' },
      { icon: mIco.settings, label: 'Settings', action: 'edit-nickname' }
    ];
    const copyWhite = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="12" height="14" rx="2" fill="rgba(255,255,255,0.65)"/><rect x="9" y="7" width="12" height="14" rx="2" fill="#ffffff"/></svg>';
    const editPencil = '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>';
    const mineBal = routeDataReady ? state.user.balance : 0;
    return `
      <div class="page-view">
        <div class="mine-header-card">
          <div class="mine-profile-row">
            <img class="mine-avatar" src="${D.brand.avatar}" alt="Avatar">
            <div class="mine-profile-meta">
              <div class="mine-uid-row">
                <span>UID：${routeDataReady ? esc(state.user.uid) : ''}</span>
                <button class="mine-icon-btn" data-action="copy-uid" aria-label="Copy UID">${copyWhite}</button>
              </div>
              <div class="mine-name-row">
                <span class="nick">${routeDataReady ? esc(state.user.nickname) : '&nbsp;'}</span>
                <button class="mine-icon-btn" data-action="edit-nickname" aria-label="Edit Nickname">${editPencil}</button>
              </div>
            </div>
            <div class="mine-vip-col" data-nav="/vip">
              <img class="mine-vip-badge" src="${vipObj.icon}" alt="${vipObj.name}">
              <span class="mine-vip-pill">${routeDataReady ? esc(vipObj.name) : 'VIP0'}</span>
            </div>
          </div>

          <div class="mine-balance-card">
            <div class="mine-balance-amt">
              <span>${fmtMoney(mineBal)}</span>
              <button class="mine-refresh-btn" data-action="refresh-balance" aria-label="Refresh Balance">${SVG.refresh}</button>
            </div>
            <div class="mine-dw-grid">
              <button class="mine-dw-btn" data-nav="/wallet/recharge"><img src="${D.brand.depIcon}" alt=""><span>Deposit</span></button>
              <button class="mine-dw-btn" data-nav="/wallet/withdraw"><img src="${D.brand.withIcon}" alt=""><span>Withdraw</span></button>
            </div>
          </div>
        </div>

        <div class="mine-menu-card">
          ${menuItems.map(it => `
            <button class="mine-menu-row" ${it.nav ? `data-nav="${it.nav}"` : `data-action="${it.action}" data-name="${esc(it.data || '')}"`}>
              <span>${it.icon}</span>
              <span class="lbl">${it.label}</span>
              ${it.val ? `<span class="val">${esc(it.val)}</span>` : ''}
              <span style="color:#54a78e;">${SVG.chevRight}</span>
            </button>
          `).join('')}
        </div>

        <div class="side-distance" style="margin-bottom:0.4rem;">
          <button class="btn-outline-full" data-action="logout">Log out</button>
        </div>
        ${renderTabBar()}
      </div>
    `;
  }

  function renderWallet() {
    const bal = routeDataReady ? state.user.balance : 0;
    const wdr = routeDataReady ? state.user.withdrawable : 0;
    return `
      <div class="page-view no-tabbar">
        ${renderSubNav('Wallet', '/main')}
        <div class="earn-hero-card">
          <div class="lbl">My Balance</div>
          <div class="val">${fmtMoney(bal)}</div>
          <div style="font-size:0.29rem;color:#d6fff0;margin-top:0.1rem;">Withdrawable: ${fmtMoney(wdr)}</div>
        </div>
        <div class="wallet-dual-cards">
          <div class="wallet-mini-card" data-nav="/wallet/recharge">
            <img src="${D.brand.depIcon}" style="width:0.88rem;margin-bottom:0.1rem;">
            <div class="t">Deposit</div>
            <p style="font-size:0.25rem;color:#8cb8a8;margin:0.1rem 0 0;">Credited within 1-5 mins</p>
          </div>
          <div class="wallet-mini-card" data-nav="/wallet/withdraw">
            <img src="${D.brand.withIcon}" style="width:0.88rem;margin-bottom:0.1rem;">
            <div class="t">Withdraw</div>
            <p style="font-size:0.25rem;color:#8cb8a8;margin:0.1rem 0 0;">Instant bank settlement</p>
          </div>
        </div>
        <div class="mine-menu-card">
          <button class="mine-menu-row" data-nav="/records"><span>${SVG.receipt}</span><span class="lbl">Balance Record</span><span>${SVG.chevRight}</span></button>
          <button class="mine-menu-row" data-nav="/vip"><span>${SVG.chart}</span><span class="lbl">VIP Withdrawal Benefits</span><span>${SVG.chevRight}</span></button>
        </div>
      </div>
    `;
  }

  function getInviteLink() {
    const custom = String(state.user && state.user.inviteLink || '').trim();
    if (custom) return custom;
    return `https://6eclubt3o.com/#/register?code=${state.user && state.user.inviteCode || ''}`;
  }

  function getDepositConfig() {
    const defTips = [
      '1. Each deposit will be credited within 1-5 minutes.',
      '2. After payment is successful, return to 6ECLUB to check balance.',
      '3. Please do not modify the payment amount or reuse saved QR codes.'
    ];
    const cfg = state.depositConfig && typeof state.depositConfig === 'object' ? state.depositConfig : {};
    const minAmount = Number.isFinite(Number(cfg.minAmount)) && Number(cfg.minAmount) > 0 ? Number(cfg.minAmount) : 100;
    const rawMax = Number.isFinite(Number(cfg.maxAmount)) ? Number(cfg.maxAmount) : 50000;
    const maxAmount = rawMax >= minAmount ? rawMax : Math.max(minAmount, 50000);
    const fallbackBonusPct = Number.isFinite(Number(cfg.fallbackBonusPct)) && Number(cfg.fallbackBonusPct) >= 0 ? Number(cfg.fallbackBonusPct) : 15;
    const checkoutTitle = typeof cfg.checkoutTitle === 'string' && cfg.checkoutTitle.trim() ? cfg.checkoutTitle.trim() : 'UPI-QR Instant Checkout';
    const tips = Array.isArray(cfg.tips) && cfg.tips.length ? cfg.tips : defTips;
    const presets = Array.isArray(cfg.presets) ? cfg.presets : (D.depositPresets || []);
    const baseChannels = Array.isArray(cfg.channels)
      ? cfg.channels
      : (D.depositChannels || []).map(ch => Object.assign({ enabled: true }, ch));
    const channels = baseChannels.filter(c => c && c.enabled !== false);
    return { minAmount, maxAmount, fallbackBonusPct, checkoutTitle, tips, presets, channels };
  }

  function getWithdrawConfig() {
    const cfg = state.withdrawConfig && typeof state.withdrawConfig === 'object' ? state.withdrawConfig : {};
    const minAmount = Number.isFinite(Number(cfg.minAmount)) && Number(cfg.minAmount) >= 0 ? Number(cfg.minAmount) : 110;
    const maxAmount = Number.isFinite(Number(cfg.maxAmount)) && Number(cfg.maxAmount) >= 0 ? Number(cfg.maxAmount) : 50000;
    const remainingLimit = Number.isFinite(Number(cfg.remainingLimit)) && Number(cfg.remainingLimit) >= 0 ? Number(cfg.remainingLimit) : 50000;
    const dailyLimit = cfg.dailyLimit !== undefined && cfg.dailyLimit !== null && String(cfg.dailyLimit).trim() !== '' ? String(cfg.dailyLimit).trim() : '5';
    const arrivalText = typeof cfg.arrivalText === 'string' && cfg.arrivalText.trim() ? cfg.arrivalText.trim() : '24 hours';
    return { minAmount, maxAmount, remainingLimit, dailyLimit, arrivalText };
  }

  function renderDeposit() {
    const depCfg = getDepositConfig();
    const minAmt = depCfg.minAmount;
    const maxAmt = depCfg.maxAmount;
    const fmtInt = (n) => Number(n || 0).toLocaleString('en-IN');
    const presetObj = depCfg.presets.find(p => Number(p.amount) === Number(state.depAmount));
    const bonus = presetObj ? Number(presetObj.bonus || 0) : Math.floor(Number(state.depAmount || 0) * (depCfg.fallbackBonusPct / 100));
    const balFloor = routeDataReady ? Math.floor(state.user.balance) : 0;
    const wdrFloor = routeDataReady ? Math.floor(state.user.withdrawable) : 0;
    const rightIcons = `<button data-action="social-toast" data-name="Deposit Support">${SVG.headset}</button><button data-nav="/records">${SVG.receipt}</button>`;
    const channels = depCfg.channels;
    const fallbackImg = (D.depositChannels && D.depositChannels[0] && D.depositChannels[0].img) || 'assets/misc/020036351-156512-file_20261001140036327.webp';
    return `
      <div class="page-view no-tabbar" style="padding-bottom:1.9rem;">
        ${renderSubNav('Deposit', '/main', rightIcons)}
        <div class="wallet-dual-cards">
          <div class="wallet-mini-card">
            <div class="t">Cash Balance <button data-action="refresh-balance">${SVG.refresh}</button></div>
            <div class="a">₹${balFloor}</div>
          </div>
          <div class="wallet-mini-card" data-nav="/wallet/withdraw">
            <div class="t">Withdrawable ${SVG.chevRight}</div>
            <div class="a">₹${wdrFloor}</div>
          </div>
        </div>

        <div class="side-distance" style="font-size:0.32rem;color:#fff;margin-top:0.1rem;">Deposit amount: Min: ₹${fmtInt(minAmt)} Max: ₹${fmtInt(maxAmt)}</div>
        <div class="dep-amount-input">
          <span class="rupee">₹</span>
          <input id="dep-amt-input" type="number" min="${minAmt}" max="${maxAmt}" value="${esc(state.depAmount)}" placeholder="Enter amount">
        </div>
        <div class="side-distance" style="font-size:0.32rem;margin:0.18rem 0;">
          Get <b style="color:#ffca28;">₹${Number(state.depAmount || 0)}</b> + Bonus <b style="color:#ffca28;">₹${bonus}</b>
        </div>

        <div class="dep-presets-grid">
          ${depCfg.presets.map(p => {
            const pAmt = Number(p.amount || 0);
            const pLabel = p.label || ('₹' + fmtInt(pAmt));
            const pBadge = p.badge !== undefined ? p.badge : (Number(p.bonus) > 0 ? '+' + p.bonus : '');
            return `
            <button class="dep-chip ${Number(state.depAmount) === pAmt ? 'active' : ''}" data-action="set-dep-amt" data-amt="${pAmt}">
              <span>${esc(pLabel)}</span>
              ${pBadge ? `<span class="b-tag">${esc(pBadge)}</span>` : ''}
            </button>
          `;
          }).join('')}
        </div>

        <div class="side-distance" style="font-size:0.34rem;font-weight:700;margin:0.26rem 0 0.1rem;">
          Payment methods <span style="color:#ff4b4b;">*</span>
        </div>
        <div class="pay-methods-grid">
          ${channels.map(ch => `
            <button class="pay-method-card ${state.depChannel === ch.id ? 'active' : ''}" data-action="set-dep-ch" data-ch="${esc(ch.id)}">
              ${ch.recommended ? '<span style="position:absolute;top:-0.14rem;left:-0.12rem;width:0.42rem;height:0.42rem;border-radius:50%;background:#ff4b4b;display:flex;align-items:center;justify-content:center;font-size:0.24rem;">👍</span>' : ''}
              ${ch.bonusTag ? `<span class="pm-tag">${esc(ch.bonusTag)}</span>` : ''}
              <img class="${ch.lightBg ? 'light-bg' : ''}" src="${esc(ch.img || fallbackImg)}" alt="${esc(ch.name)}">
              <span class="pm-name">${esc(ch.name)}</span>
            </button>
          `).join('')}
        </div>

        <div class="mine-menu-card" style="padding:0.28rem;font-size:0.28rem;color:#9cc7b8;line-height:1.55;">
          <div style="font-weight:700;color:#fff;margin-bottom:0.08rem;">Deposit tips:</div>
          ${depCfg.tips.map(t => esc(t)).join('<br>')}
        </div>

        <div class="sticky-pay-bar">
          <button class="btn-primary-full" data-action="submit-deposit">Pay now</button>
        </div>
      </div>
    `;
  }

  function renderWithdraw() {
    const ready = routeDataReady;
    const wdCfg = getWithdrawConfig();
    const accounts = ready ? (state.withdrawAccounts || []) : [];
    const hasAcct = accounts.length > 0;
    const activeAcct = accounts.find(a => a.id === state.selectedWdAccountId) || accounts[0] || null;
    const methodObj = activeAcct && (D.withdrawMethods || []).find(m => m.name.toLowerCase() === String(activeAcct.type || '').toLowerCase());
    const acctImg = (methodObj && methodObj.img) || 'assets/misc/020359299-156530-file_20261001140359291.webp';
    const minAmt = hasAcct ? Number(wdCfg.minAmount).toLocaleString('en-IN') : 0;
    const maxAmt = hasAcct ? Number(wdCfg.maxAmount).toLocaleString('en-IN') : 0;
    const remLimit = hasAcct ? fmtMoney(wdCfg.remainingLimit) : '₹0.00';
    const dailyLimit = hasAcct ? esc(wdCfg.dailyLimit) : '';
    const wagerReq = ready ? (state.user.wagerRequired != null ? state.user.wagerRequired : 450) : 0;
    const isReady = ready && Number(state.withdrawAmount) > 0;
    const balFloor = ready ? Math.floor(state.user.balance) : 0;
    const wdrFloor = ready ? Math.floor(state.user.withdrawable) : 0;
    const wdBackIco = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>';
    const rightIcons = `<button data-action="social-toast" data-name="Withdrawal Support">${SVG.headset}</button><button data-nav="/wallet/withdrawHistory" aria-label="Withdrawal history">${SVG.historyDoc}</button>`;
    return `
      <div class="page-view no-tabbar wd-page">
        ${renderSubNav('Withdraw', '/main', rightIcons, false, wdBackIco)}
        <div class="wd-dual-cards">
          <div class="wd-mini-card">
            <img class="wd-card-wm" src="assets/theme/ar_saas16/wallet/icon_cash_b-863f9c1f.webp" alt="">
            <div class="wd-mini-inner">
              <div class="t"><span>Cash Balance</span><button data-action="refresh-balance" aria-label="Refresh">${SVG.refresh}</button></div>
              <div class="a">₹${balFloor}</div>
            </div>
          </div>
          <div class="wd-mini-card">
            <img class="wd-card-wm" src="assets/theme/ar_saas16/wallet/icon_with2-aab94719.webp" alt="">
            <div class="wd-mini-inner">
              <div class="t"><span>Withdrawable</span></div>
              <div class="a">₹${wdrFloor}</div>
            </div>
          </div>
        </div>

        <div class="wd-range-label">
          <span>Withdrawal amount:</span>
          <span class="g">Min: ₹${minAmt} Max: ₹${maxAmt}</span>
        </div>

        <div class="wd-input-bar">
          <span class="rupee">₹</span>
          <span class="sep"></span>
          <input id="wd-amt-input" type="number" value="${esc(state.withdrawAmount)}" placeholder="Enter amount">
          <button class="wd-all-btn" data-action="withdraw-all">All</button>
        </div>

        ${hasAcct && activeAcct ? `
          <div class="wd-bank-card" data-action="open-add-wd-acct">
            <div class="wd-bank-left">
              <img class="wd-bank-ico" src="${acctImg}" alt="${esc(activeAcct.type)}">
              <div class="wd-bank-name">${esc(activeAcct.label)}</div>
            </div>
            <div class="wd-bank-vsep"></div>
            <div class="wd-bank-right">
              <span class="wd-bank-num">${esc(activeAcct.detail)}</span>
              <span class="wd-bank-arrow">${SVG.chevRight}</span>
            </div>
          </div>
        ` : `
          <button class="wd-add-acct-btn" data-action="open-add-wd-acct">
            ${SVG.plusCircle}
            <span>Add Withdrawal Account</span>
          </button>

          <div class="wd-section-title">
            Payment methods <span class="req">*</span>
          </div>
        `}

        <div class="wd-divider-line"></div>

        <div class="wd-limit-row">
          <span>Remaining Withdrawal Limit:</span>
          <b>${remLimit}</b>
        </div>
        <div class="wd-limit-row">
          <span>Withdrawal Daily Limit:</span>
          <b>${dailyLimit}</b>
        </div>
        <div class="wd-limit-row">
          <span>Wager Required to Withdraw:</span>
          <b>${fmtMoney(wagerReq)}</b>
        </div>

        <div class="wd-notice-box">
          <div class="t">Remaining Withdrawal Limit:</div>
          <p>Under normal circumstances, the withdrawal amount will arrive in your account in about <span class="hl">${esc(wdCfg.arrivalText)}</span>.</p>
        </div>

        <div class="wd-submit-wrap">
          <button id="wd-submit-btn" class="wd-submit-btn ${isReady ? 'is-ready' : ''}" data-action="submit-withdraw">Withdraw</button>
        </div>
      </div>
    `;
  }

  function renderWithdrawHistory() {
    const periods = [
      { id: '1 Day', range: '2026-11-10 to 2026-11-11', maxDays: 1 },
      { id: '7 Days', range: '2026-11-04 to 2026-11-11', maxDays: 7 },
      { id: '30 Days', range: '2026-10-12 to 2026-11-11', maxDays: 30 }
    ];
    const activePeriod = periods.find(p => p.id === state.whPeriod) || periods[0];
    const records = routeDataReady
      ? (state.withdrawalHistory || D.withdrawalHistory).filter(item => Number(item.daysAgo || 0) <= activePeriod.maxDays)
      : [];
    const fmtCash = (n) => '₹' + Number(n || 0).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const whCopySvg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="12" height="14" rx="2" fill="rgba(37,202,131,0.55)"/><rect x="9" y="7" width="12" height="14" rx="2" fill="#25ca83"/></svg>';

    return `
      <div class="page-view no-tabbar wh-page">
        ${renderSubNav('Withdrawal history', '/wallet/withdraw')}
        <div class="wh-tabs">
          ${periods.map(p => `<button class="wh-tab ${activePeriod.id === p.id ? 'active' : ''}" data-action="set-wh-period" data-p="${esc(p.id)}">${esc(p.id)}</button>`).join('')}
        </div>
        <div class="wh-date-range">${activePeriod.range}</div>
        <div class="wh-list">
          ${!routeDataReady ? '' : (records.length ? records.map(item => `
            <div class="wh-card">
              <div class="wh-card-top">
                <div class="wh-clock-badge">${SVG.whClock}</div>
                <div class="wh-card-info">
                  <div class="wh-row">
                    <span class="wh-time">${esc(item.time)}</span>
                    <span class="wh-cash">Cash: <b>${fmtCash(item.cash)}</b></span>
                  </div>
                  <div class="wh-row wh-order-row">
                    <span class="wh-order">Order ID: ${esc(item.id)}</span>
                    <button class="wh-copy-btn" data-action="copy-wh-order" data-id="${esc(item.id)}" aria-label="Copy Order ID">${whCopySvg}</button>
                  </div>
                  <div class="wh-row">
                    <span class="wh-method">Method: <b>${esc(item.method)}</b></span>
                    <span class="wh-status">${esc(item.status)}</span>
                  </div>
                </div>
              </div>
              ${item.status === 'Processing' ? `
                <button class="wh-card-btn" data-action="wh-reminder" data-id="${esc(item.id)}">Reminder</button>
              ` : ''}
              ${item.status === 'Completed' ? `
                <button class="wh-card-btn" data-action="wh-voucher" data-id="${esc(item.id)}">Submit Withdrawal Voucher</button>
              ` : ''}
              ${item.status === 'Rejected' && (item.remarkTitle || item.remarkBody) ? `
                <div class="wh-remark-box">
                  ${item.remarkTitle ? `<div>${esc(item.remarkTitle)}</div>` : ''}
                  ${item.remarkBody ? `<div>${esc(item.remarkBody)}</div>` : ''}
                </div>
              ` : ''}
            </div>
          `).join('') : `<div class="inv-empty"><div class="t">No Records</div></div>`) + `<div class="wh-nomore">no more</div>`}
        </div>
      </div>
    `;
  }

  function renderVip() {
    const ready = routeDataReady;
    const lv = D.vipLevels[state.vipInspectLevel] || D.vipLevels[0];
    const cur = D.vipLevels[state.user.vipLevel] || D.vipLevels[0];
    return `
      <div class="page-view">
        ${renderSubNav('VIP', '/main')}
        <div class="vip-hero-card">
          <div style="display:flex;align-items:center;justify-content:space-between;">
            <div style="display:flex;align-items:center;gap:0.2rem;">
              <img src="${cur.icon}" style="height:0.9rem;">
              <div>
                <div style="font-size:0.44rem;font-weight:800;color:#ffcc7e;">${cur.name}</div>
                <div style="font-size:0.27rem;color:#b5ddd0;">Deposit: 0 / ${ready ? D.vipLevels[1].depReq : 0}</div>
                <div style="font-size:0.27rem;color:#b5ddd0;">Bet: 0 / ${ready ? D.vipLevels[1].betReq : 0}</div>
              </div>
            </div>
            <img src="assets/theme/common/vip_rule1-aced8851.webp" style="height:0.68rem;" data-action="open-vip-rules">
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.2rem;margin-top:0.28rem;">
            <div class="earn-kpi-cell"><div class="n">${ready ? cur.dailyLimit : '₹0'}</div><div class="t">Daily Withdrawal Limit</div></div>
            <div class="earn-kpi-cell"><div class="n">${ready ? cur.freeTx : 0}</div><div class="t">Fee-free Transactions</div></div>
          </div>
        </div>

        <div class="vip-levels-scroll">
          ${D.vipLevels.map(v => `
            <button class="vip-chip-card ${state.vipInspectLevel === v.level ? 'active' : ''}" data-action="set-vip-inspect" data-lv="${v.level}">
              <img src="${v.icon}" alt="${v.name}">
              <span>${v.name}</span>
            </button>
          `).join('')}
        </div>

        <div class="mine-menu-card" style="padding:0.3rem;">
          <h3 style="margin:0 0 0.2rem;font-size:0.38rem;color:#ffcc7e;">${lv.name} Benefits</h3>
          <div class="earn-kpi-grid">
            <div class="earn-kpi-cell"><div class="n">₹${(ready ? lv.levelReward : 0).toLocaleString('en-IN')}</div><div class="t">Level Up Bonus</div></div>
            <div class="earn-kpi-cell"><div class="n">₹${(ready ? lv.monthlyReward : 0).toLocaleString('en-IN')}</div><div class="t">Monthly Reward</div></div>
            <div class="earn-kpi-cell"><div class="n">${ready ? lv.rebateRate : '0%'}</div><div class="t">Betting Rebate</div></div>
            <div class="earn-kpi-cell"><div class="n">₹${(ready ? lv.depReq : 0).toLocaleString('en-IN')}</div><div class="t">Unlock Deposit Req</div></div>
          </div>
        </div>
      </div>
    `;
  }

  function renderRanking() {
    const ready = routeDataReady;
    const r = D.rankingPageData;
    const p1 = r.podium.find(x => x.rank === 1), p2 = r.podium.find(x => x.rank === 2), p3 = r.podium.find(x => x.rank === 3);
    const digits = ready ? r.jackpotDigits : r.jackpotDigits.map(() => '0');
    return `
      <div class="page-view no-tabbar" style="padding-bottom:2rem;">
        ${renderSubNav('Profit Leaderboard', '/')}
        <div class="promo-tabs">
          ${['Daily', 'Weekly', 'Monthly'].map(t => `
            <button class="promo-tab-pill ${state.rankingPeriod === t ? 'active' : ''}" data-action="set-rank-period" data-p="${t}">${t}</button>
          `).join('')}
        </div>

        <div class="side-distance" style="text-align:center;margin:0.2rem 0 0.34rem;">
          <img src="assets/theme/ar_saas16/jackpot-79467f55.webp" alt="JACKPOT" style="width:100%;max-width:7.2rem;">
          <div style="display:flex;justify-content:center;gap:0.08rem;margin-top:0.12rem;">
            ${digits.map(d => `<span style="width:0.56rem;height:0.84rem;line-height:0.84rem;background:#19a966;border:1px solid #ffd35b;border-radius:0.1rem;font-size:0.46rem;font-weight:800;color:#ffe677;">${d}</span>`).join('')}
          </div>
          <div style="font-size:0.28rem;color:#9cc7b8;margin-top:0.16rem;">1.4% of the total bet of selected games</div>
        </div>

        <div class="side-distance s16-podium-grid">
          ${[p2, p1, p3].map(p => `
            <div class="podium-card rank-${p.rank}">
              <div class="podium-avatar-wrap">
                <img class="av" src="${D.brand.avatar}" alt="">
              </div>
              <span class="podium-plate">NO.${p.rank}</span>
              <div class="podium-name">${ready ? esc(p.name) : '&nbsp;'}</div>
              <div class="podium-amt">${ready ? esc(p.turnover) : '₹0.00'}</div>
              <div style="font-size:0.24rem;color:#ffca47;margin-top:0.04rem;">${ready ? esc(p.reward) : '₹0.00'}</div>
            </div>
          `).join('')}
        </div>

        <div class="side-distance">
          <div class="s16-rank-list">
            ${ready ? r.list.map(row => `
              <div class="s16-rank-row">
                <span class="no">${row.rank}</span>
                <img class="av" src="${D.brand.avatar}" alt="">
                <span class="name">${esc(row.name)}<br><small style="color:#ffca47;">${esc(row.turnover)}</small></span>
                <span class="amt">${esc(row.reward)}</span>
              </div>
            `).join('') : ''}
          </div>
        </div>

        <div class="sticky-pay-bar">
          <button class="btn-primary-full" data-nav="/WinGo/WinGo_30S">Go To Attend</button>
        </div>
      </div>
    `;
  }

  function renderRecordsPage() {
    const filtered = routeDataReady
      ? state.balanceRecords.filter(r => state.balanceTab === 'All' || r.category === state.balanceTab)
      : [];
    const recBackIco = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>';
    return `
      <div class="page-view no-tabbar rec-page">
        ${renderSubNav('Details', '/main', '', false, recBackIco)}
        <div class="rec-tabs">
          ${['All', 'Income', 'Expense'].map(t => `
            <button class="rec-tab ${state.balanceTab === t ? 'active' : ''}" data-action="set-bal-tab" data-tab="${t}">${t}</button>
          `).join('')}
        </div>
        <div class="rec-thead">
          <div class="col-type">Type</div>
          <div class="col-chg">Change</div>
          <div class="col-bal">Balance</div>
        </div>
        ${!routeDataReady ? '' : (!filtered.length ? `
          <div class="empty-state"><img src="${D.brand.emptyIcon}" alt="Empty"><div>No Records</div></div>
        ` : `
          <div class="rec-list">
            ${filtered.map(r => `
              <div class="rec-row-wrap">
                <div class="rec-row-main">
                  <div class="rec-type-col">
                    <div class="rec-title">${esc(r.type)}</div>
                    <div class="rec-time">${esc(r.time)}</div>
                  </div>
                  <div class="rec-chg-col">
                    <img class="rec-coin" src="${D.brand.goldCoin}" alt="">
                    <span class="rec-chg-val">${esc(r.change)}</span>
                  </div>
                  <div class="rec-bal-col">${esc(r.balance)}</div>
                </div>
                ${r.note ? `<div class="rec-note-box">${esc(r.note)}</div>` : ''}
              </div>
            `).join('')}
            <div class="rec-nomore">no more</div>
          </div>
        `)}
      </div>
    `;
  }

  function renderNotifications() {
    return `
      <div class="page-view no-tabbar">
        ${renderSubNav('Notifications', '/main')}
        <div class="promo-tabs">
          ${['Personal', 'Platform'].map(t => `
            <button class="promo-tab-pill ${state.notifTab === t ? 'active' : ''}" data-action="set-notif-tab" data-tab="${t}">${t}</button>
          `).join('')}
        </div>
        ${state.notifTab === 'Personal' ? `
          <div class="empty-state">
            <img src="${D.brand.emptyIcon}" alt="Empty">
            <div>You have not received any personal notifications.</div>
          </div>
        ` : `
          <div class="mine-menu-card" style="padding:0.28rem;font-size:0.31rem;color:#d6f5ea;line-height:1.5;">
            <b>Welcome to 6E.CLUB!</b><br>Enjoy instant UPI-QR +50% bonuses and VIP weekly rewards.
          </div>
        `}
      </div>
    `;
  }

  function renderGameHistory() {
    return `
      <div class="page-view no-tabbar">
        ${renderSubNav('Game History', '/main')}
        <div class="promo-tabs">
          ${['LOTTERY', 'SLOTS', 'CASINO', 'POKER'].map(c => `
            <button class="promo-tab-pill ${state.betHistCat === c ? 'active' : ''}" data-action="set-bh-cat" data-c="${c}">${c}</button>
          `).join('')}
        </div>
        ${!routeDataReady ? '' : (state.betHistCat === 'LOTTERY' && state.wingoMyBets.length ? `
          <div class="mine-menu-card" style="padding:0 0.28rem;">
            ${state.wingoMyBets.map(b => `
              <div style="display:flex;justify-content:space-between;padding:0.24rem 0;border-bottom:1px solid rgba(43,196,132,0.12);font-size:0.31rem;">
                <div><b>${esc(b.label)}</b> • #${esc(b.period.slice(-6))}<br><small style="color:#7ea699;">${esc(b.time)}</small></div>
                <div style="text-align:right;"><b style="color:${b.status === 'Win' ? '#2bc484' : '#ff6b6b'};">${esc(b.status)}</b><br><span>${fmtMoney(b.amount)}</span></div>
              </div>
            `).join('')}
          </div>
        ` : `
          <div class="empty-state"><img src="${D.brand.emptyIcon}" alt=""><div>No Records</div></div>
        `)}
      </div>
    `;
  }

  function renderGameStats() {
    return `
      <div class="page-view no-tabbar">
        ${renderSubNav('Game Statistics', '/main')}
        <div class="promo-tabs">
          ${['Today', 'Yesterday', 'This Week', 'This month'].map(t => `
            <button class="promo-tab-pill ${state.statsRange === t ? 'active' : ''}" data-action="set-stats-range" data-r="${t}">${t}</button>
          `).join('')}
        </div>
        <div class="empty-state"><img src="${D.brand.emptyIcon}" alt=""><div>No Records</div></div>
      </div>
    `;
  }

  function renderGiftPage() {
    return `
      <div class="page-view no-tabbar">
        ${renderSubNav('Reward Redemption Code', '/main')}
        <div class="earn-kpi-card" style="margin-top:0.32rem;">
          <div style="font-size:0.34rem;color:#2bc484;margin-bottom:0.2rem;">Hi! We have a gift for you</div>
          <div class="auth-input-box" style="margin-bottom:0.28rem;">
            <input id="gift-code-input" type="text" placeholder="Please enter the gift code (try 6ECLUB88)">
          </div>
          <button class="btn-primary-full" style="height:0.96rem;" data-action="redeem-gift">Confirm</button>
        </div>
        ${!routeDataReady ? '' : (state.giftHistory.length ? `
          <div class="mine-menu-card" style="padding:0.24rem 0.28rem;">
            ${state.giftHistory.map(g => `<div style="display:flex;justify-content:space-between;padding:0.14rem 0;font-size:0.31rem;"><span>${esc(g.time)} (${esc(g.code)})</span><b style="color:#ffca47;">+${fmtMoney(g.bonus)}</b></div>`).join('')}
          </div>
        ` : `<div class="empty-state"><img src="${D.brand.emptyIcon}" alt=""><div>No Records</div></div>`)}
      </div>
    `;
  }

  function renderLanguagePage() {
    return `
      <div class="page-view no-tabbar">
        ${renderSubNav('Language', '/')}
        <div class="mine-menu-card" style="margin-top:0.36rem;">
          <button class="mine-menu-row" data-action="set-lang" data-lang="HI">
            <span>${SVG.inFlag}</span><span class="lbl">हिन्दी</span><span>${state.language === 'HI' ? '✓' : ''}</span>
          </button>
          <button class="mine-menu-row" data-action="set-lang" data-lang="EN">
            <span>${SVG.ukFlag}</span><span class="lbl">ENGLISH</span><span>${state.language === 'EN' ? '✓' : ''}</span>
          </button>
        </div>
      </div>
    `;
  }

  function renderSecurityPage() {
    return `
      <div class="page-view no-tabbar">
        ${renderSubNav('Account & Security', '/main')}
        <div class="mine-menu-card" style="margin-top:0.28rem;">
          <div class="mine-menu-row"><span class="lbl">Mobile Number</span><span class="val">+91 ${esc(state.user.phone.slice(0, 3) + '****' + state.user.phone.slice(-3))}</span></div>
          <div class="mine-menu-row"><span class="lbl">UID</span><span class="val">${esc(state.user.uid)}</span></div>
          <button class="mine-menu-row" data-action="edit-nickname"><span class="lbl">Modify Nickname</span><span class="val">${esc(state.user.nickname)}</span><span>${SVG.chevRight}</span></button>
          <button class="mine-menu-row" data-action="forgot-pw"><span class="lbl">Change Login Password</span><span>${SVG.chevRight}</span></button>
          <button class="mine-menu-row" data-nav="/wallet/withdraw"><span class="lbl">Bound Bank Account</span><span class="val">JIO PAYMENTS...</span><span>${SVG.chevRight}</span></button>
        </div>
      </div>
    `;
  }

  function renderWinGo() {
    const modeObj = getWingoModeObj();
    const rem = getWingoRemainingSec();
    const m = String(Math.floor(rem / 60)).padStart(2, '0');
    const s = String(rem % 60).padStart(2, '0');
    const period = getCurrentWingoPeriod();
    const last5 = state.wingoRounds.slice(0, 5);

    const rightControls = `
      <button data-action="social-toast" data-name="WinGo Support">${SVG.headset}</button>
      <button data-action="toggle-sound">${state.soundEnabled ? SVG.soundOn : SVG.soundOff}</button>
    `;

    let tableBody = '';
    if (state.wingoHistoryTab === 'Game history') {
      tableBody = `
        <div class="wingo-table">
          <div class="wingo-table-head"><div>Period</div><div>Number</div><div>Big Small</div><div>Color</div></div>
          ${state.wingoRounds.slice(0, 10).map(r => {
            const c = numColorInfo(r.num);
            return `
              <div class="wingo-table-row">
                <div style="font-size:0.28rem;">${esc(r.period)}</div>
                <div style="font-size:0.44rem;font-weight:800;color:${c.colors[0]};">${r.num}</div>
                <div>${r.num >= 5 ? 'Big' : 'Small'}</div>
                <div>${c.colors.map(col => `<span class="dot-badge" style="background:${col};"></span>`).join('')}</div>
              </div>
            `;
          }).join('')}
        </div>
      `;
    } else if (state.wingoHistoryTab === 'Chart') {
      tableBody = `
        <div class="wingo-table" style="padding:0.26rem;">
          ${state.wingoRounds.slice(0, 10).map(r => `
            <div style="display:flex;align-items:center;justify-content:space-between;padding:0.14rem 0;border-bottom:1px solid rgba(43,196,132,0.1);">
              <span style="font-size:0.27rem;color:#9cc7b8;">${esc(r.period.slice(-6))}</span>
              <div style="display:flex;gap:0.08rem;">
                ${Array.from({ length: 10 }, (_, d) => `
                  <span style="width:0.46rem;height:0.46rem;line-height:0.46rem;text-align:center;border-radius:50%;font-size:0.25rem;${d === r.num ? `background:${numColorInfo(d).colors[0]};color:#fff;font-weight:700;` : 'border:1px solid #265445;color:#547d70;'}">${d}</span>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      `;
    } else {
      tableBody = state.wingoMyBets.length
        ? `<div class="wingo-table">${state.wingoMyBets.map(b => `
            <div style="display:flex;justify-content:space-between;padding:0.24rem 0.28rem;border-bottom:1px solid rgba(43,196,132,0.12);font-size:0.3rem;">
              <div><b>${esc(b.label)}</b><br><small style="color:#7ea699;">${esc(b.period)}</small></div>
              <div style="text-align:right;"><b style="color:${b.status === 'Win' ? '#2bc484' : b.status === 'Pending' ? '#ffca47' : '#ff6b6b'};">${b.status}${b.status === 'Win' ? ` (+₹${b.payout})` : ''}</b><br><span>${fmtMoney(b.amount)}</span></div>
            </div>
          `).join('')}</div>`
        : `<div class="empty-state"><img src="${D.brand.emptyIcon}" alt=""><div>No Records</div></div>`;
    }

    return `
      <div class="wingo-page">
        ${renderSubNav('WinGo', '/', rightControls)}

        <div class="wingo-wallet-box">
          <div class="wingo-wallet-amt">
            <span>${fmtMoney(state.user.balance)}</span>
            <button data-action="refresh-balance">${SVG.refresh}</button>
          </div>
          <div class="wingo-wallet-sub">${SVG.wallet}<span>Wallet balance</span></div>
          <div class="wingo-dw-btns">
            <button class="wingo-btn-withdraw" data-nav="/wallet/withdraw">Withdraw</button>
            <button class="wingo-btn-deposit" data-nav="/wallet/recharge">Deposit</button>
          </div>
        </div>

        <div class="wingo-mode-tabs">
          ${D.wingoModes.map(md => `
            <button class="wingo-mode-tab ${state.wingoMode === md.code ? 'active' : ''}" data-action="set-wingo-mode" data-code="${md.code}">${md.label}</button>
          `).join('')}
        </div>

        <div class="TimeLeft__C">
          <div class="TimeLeft__divider"></div>
          <div class="TimeLeft__left">
            <button class="TimeLeft__how" data-action="wingo-rules">How To Play</button>
            <div class="TimeLeft__name">${esc(modeObj.code)}</div>
            <div class="TimeLeft__balls">
              ${last5.map(item => `<img src="${D.wingoBallsLarge[item.num]}" alt="${item.num}">`).join('')}
            </div>
          </div>
          <div class="TimeLeft__right">
            <div class="TimeLeft__label">Time remaining</div>
            <div class="TimeLeft__digits" id="wingo-clock-digits">
              <span>${m[0]}</span><span>${m[1]}</span><span class="colon">:</span><span>${s[0]}</span><span>${s[1]}</span>
            </div>
            <div class="TimeLeft__period">${esc(period)}</div>
          </div>
        </div>

        <div class="Betting__C">
          <div class="Betting__C-mark" id="wingo-lock-mark" style="display:${rem <= 5 ? 'flex' : 'none'};">
            <div>${s[0]}</div><div>${s[1]}</div>
          </div>
          <div class="Betting__C-head">
            <button class="btn-green" data-action="open-bet" data-type="color" data-val="Green" data-cls="btn-green">Green</button>
            <button class="btn-violet" data-action="open-bet" data-type="color" data-val="Violet" data-cls="btn-violet">Violet</button>
            <button class="btn-red" data-action="open-bet" data-type="color" data-val="Red" data-cls="btn-red">Red</button>
          </div>
          <div class="Betting__C-numC">
            ${D.wingoBallsLarge.map((img, n) => `
              <button class="Betting__num-btn" data-action="open-bet" data-type="num" data-val="${n}" data-cls="${numColorInfo(n).cls}">
                <img src="${img}" alt="Ball ${n}">
              </button>
            `).join('')}
          </div>
          <div class="Betting__C-multiple">
            <button class="Betting__random" data-action="random-bet">Random</button>
            <div class="Betting__mult-list">
              ${[1, 5, 10, 20, 50, 100].map(mx => `
                <button class="Betting__mult-chip ${state.wingoMult === mx ? 'active' : ''}" data-action="set-wingo-mult" data-m="${mx}">X${mx}</button>
              `).join('')}
            </div>
          </div>
          <div class="Betting__C-foot">
            <button class="Betting__big" data-action="open-bet" data-type="size" data-val="Big" data-cls="btn-green">Big</button>
            <button class="Betting__small" data-action="open-bet" data-type="size" data-val="Small" data-cls="btn-red">Small</button>
          </div>
        </div>

        <div class="wingo-history-tabs">
          ${['Game history', 'Chart', 'My history'].map(t => `
            <button class="wingo-history-tab ${state.wingoHistoryTab === t ? 'active' : ''}" data-action="set-wingo-htab" data-tab="${t}">${t}</button>
          `).join('')}
        </div>
        ${tableBody}
      </div>
    `;
  }

  function getFilteredSubordinates(baseRecords) {
    const q = (state.invSearch || '').trim();
    const src = baseRecords || getOverviewDataForDate(state.invDate, state.invLevel).records;
    const list = src.filter(r => {
      if (q && !r.uid.includes(q)) return false;
      return true;
    });
    if (state.invSortBy) {
      const key = state.invSortBy;
      const mult = state.invSortDir === 'asc' ? 1 : -1;
      list.sort((a, b) => (a[key] - b[key]) * mult);
    }
    return list;
  }

  const INV_COPY_SVG = '<svg viewBox="0 0 24 24" fill="#34B890" aria-hidden="true"><rect x="3.5" y="7.2" width="12" height="14.6" rx="2.2"/><path d="M8.5 5.6V4.4A2.2 2.2 0 0 1 10.7 2.2h7.6a2.2 2.2 0 0 1 2.2 2.2v10.2a2.2 2.2 0 0 1-2.2 2.2h-1.2V9.4a3.8 3.8 0 0 0-3.8-3.8H8.5z"/></svg>';

  function renderInvDynamicHtml() {
    const ready = routeDataReady;
    const ov = ready ? getOverviewDataForDate(state.invDate, state.invLevel) : null;
    const invEmptyHtml = `<div class="inv-empty-card"><img src="${D.brand.emptyIcon}" alt="No Records"><div>No Records</div></div>`;
    if (state.invTab === 'invitees') {
      if (!ready) return invEmptyHtml;
      const q = (state.invSearch || '').trim();
      const items = ov.invitees.filter(u => !q || u.uid.includes(q));
      return items.length ? items.map(u => `
        <div class="inv-uid-card">
          <div class="inv-uid-head">
            <button class="uid-copy" data-action="copy-sub-uid" data-uid="${u.uid}"><span>UID:${u.uid}</span><span class="inv-copy-ico">${INV_COPY_SVG}</span></button>
            <span>Level ${u.level}</span>
          </div>
          <div class="inv-kv-row"><span class="k">First Deposit</span><span class="${u.firstDeposit ? 'val-gold' : 'val-muted'}">${u.firstDeposit ? fmtMoney(u.firstDeposit) : 'Pending'}</span></div>
          <div class="inv-kv-row"><span class="k">Registration time</span><span class="val-muted">${u.joinedAt}</span></div>
        </div>
      `).join('') : invEmptyHtml;
    }

    const emptySum = { depositNumber: 0, depositAmount: 0, numberOfBettors: 0, totalBet: 0, firstDepositCount: 0, firstDepositAmount: 0 };
    const q = (state.invSearch || '').trim();
    const isSearchActive = !!q;
    const rows = ready ? getFilteredSubordinates(ov.records) : [];
    const sum = (!ready || !rows.length)
      ? emptySum
      : isSearchActive
        ? {
            depositNumber: rows.length,
            depositAmount: rows.reduce((s, r) => s + r.deposit, 0),
            numberOfBettors: rows.length,
            totalBet: rows.reduce((s, r) => s + r.bet, 0),
            firstDepositCount: rows.filter(r => r.firstDeposit).length,
            firstDepositAmount: rows.filter(r => r.firstDeposit).reduce((s, r) => s + r.deposit, 0)
          }
        : ov.summary;
    const sortArrow = (k) => {
      const cls = state.invSortBy === k ? (state.invSortDir === 'asc' ? 'is-asc' : 'is-desc') : '';
      return `<svg class="inv-sort-ico ${cls}" viewBox="0 0 24 24" aria-hidden="true"><path class="arr-up" d="M10.5 3v18H7.8V10.5H4L10.5 3z"/><path class="arr-down" d="M13.5 21V3h2.7v10.5H20L13.5 21z"/></svg>`;
    };
    const fmtComma = (v) => '₹' + Number(v || 0).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const fmtCnt = (v) => Number(v || 0).toLocaleString('en-IN');

    const cardsHtml = (ready && rows.length) ? rows.map(r => `
      <div class="inv-uid-card">
        <div class="inv-uid-head">
          <button class="uid-copy" data-action="copy-sub-uid" data-uid="${r.uid}"><span>UID:${r.uid}</span><span class="inv-copy-ico">${INV_COPY_SVG}</span></button>
          <span>Level ${r.level}</span>
        </div>
        <div class="inv-kv-row"><span class="k">Deposit amount</span><span class="val-white">${fmtComma(r.deposit)}</span></div>
        <div class="inv-kv-row"><span class="k">Bet amount</span><span class="val-gold">${fmtComma(r.bet)}</span></div>
        <div class="inv-kv-row"><span class="k">Commission</span><span class="val-white">${fmtComma(r.commission)}</span></div>
        <div class="inv-kv-row"><span class="k">Time</span><span class="val-muted">${r.time}</span></div>
      </div>
    `).join('') : invEmptyHtml;

    return `
      <div class="inv-summary-box">
        <div class="inv-sum-cell"><div class="v white">${fmtCnt(sum.depositNumber)}</div><div class="l">Deposit number</div></div>
        <div class="inv-sum-cell"><div class="v white">${fmtComma(sum.depositAmount)}</div><div class="l">Deposit amount</div></div>
        <div class="inv-sum-cell"><div class="v green">${fmtCnt(sum.numberOfBettors)}</div><div class="l">Number of bettors</div></div>
        <div class="inv-sum-cell"><div class="v green">${fmtComma(sum.totalBet)}</div><div class="l">Total Bet</div></div>
        <div class="inv-sum-cell"><div class="v gold">${fmtCnt(sum.firstDepositCount)}</div><div class="l">Number of people making first deposit</div></div>
        <div class="inv-sum-cell"><div class="v gold">${fmtComma(sum.firstDepositAmount)}</div><div class="l">First Deposit Amount</div></div>
      </div>
      <div class="inv-sort-row">
        <button class="inv-sort-btn ${state.invSortBy === 'deposit' ? 'active' : ''}" data-action="inv-sort" data-key="deposit"><span>Deposit</span>${sortArrow('deposit')}</button>
        <button class="inv-sort-btn ${state.invSortBy === 'bet' ? 'active' : ''}" data-action="inv-sort" data-key="bet"><span>Bet</span>${sortArrow('bet')}</button>
        <button class="inv-sort-btn ${state.invSortBy === 'commission' ? 'active' : ''}" data-action="inv-sort" data-key="commission"><span>Commission</span>${sortArrow('commission')}</button>
      </div>
      ${cardsHtml}
    `;
  }

  function renderInviteesOverviewPage() {
    const invBackIco = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 3.5 7.5 12 16 20.5"/></svg>';
    const searchIco = '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#8ab8a6" stroke-width="2"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>';
    const calIco = '<svg viewBox="0 0 24 24" fill="#34B890" aria-hidden="true"><rect x="7.1" y="1.8" width="2" height="3.2" rx="1"/><rect x="14.9" y="1.8" width="2" height="3.2" rx="1"/><path d="M4.5 5h2a1.6 1.6 0 0 0 3.2 0h4.6a1.6 1.6 0 0 0 3.2 0h2A2.5 2.5 0 0 1 22 7.5v2H2v-2A2.5 2.5 0 0 1 4.5 5zM2 11h20v8.5A2.5 2.5 0 0 1 19.5 22h-15A2.5 2.5 0 0 1 2 19.5V11z"/></svg>';
    const dateLabel = state.invDate ? state.invDate.replace('-0', '-') : 'Select Date';
    const lvlLabel = state.invLevel ? `Level ${state.invLevel}` : 'All';
    return `
      <div class="page-view no-tabbar inv-page">
        ${renderSubNav('Invitees Overview', '/earn', '', false, invBackIco)}
        <div class="inv-seg-tabs">
          <button class="inv-seg-btn ${state.invTab === 'subordinate' ? 'active' : ''}" data-action="inv-seg" data-tab="subordinate">Subordinate Data</button>
          <button class="inv-seg-btn ${state.invTab === 'invitees' ? 'active' : ''}" data-action="inv-seg" data-tab="invitees">Invitees</button>
        </div>
        <div class="inv-search-box">
          ${searchIco}
          <input id="inv-search-input" type="text" value="${esc(state.invSearch)}" placeholder="Search subordinate ID">
        </div>
        <div class="inv-filters-row">
          <button class="inv-filter-btn" data-action="open-inv-date"><span>${esc(dateLabel)}</span><span>${calIco}</span></button>
          <button class="inv-filter-btn" data-action="open-inv-level"><span>${esc(lvlLabel)}</span><span>${SVG.chevDown}</span></button>
        </div>
        <div id="inv-dynamic-area">${renderInvDynamicHtml()}</div>
      </div>
    `;
  }

  function renderGameLaunch(gameId) {
    const g = D.popularGames.find(x => x.id === gameId) || D.popularGames[1];
    return `
      <div class="page-view no-tabbar">
        ${renderSubNav(g.name, '/')}
        <div class="earn-hero-card" style="padding:0.5rem 0.34rem;">
          <img src="${g.img}" style="width:2.8rem;border-radius:0.28rem;box-shadow:0 8px 24px rgba(0,0,0,0.45);margin-bottom:0.22rem;">
          <div style="font-size:0.46rem;font-weight:800;color:#fff;">${esc(g.name)} (${esc(g.provider)})</div>
          <div style="font-size:0.3rem;color:#b8f7dc;margin:0.12rem 0 0.32rem;">Wallet Balance: <b>${fmtMoney(state.user.balance)}</b></div>
          <button class="btn-primary-full" style="height:1rem;" data-action="play-demo-spin" data-name="${esc(g.name)}">Play Instant Round (₹10)</button>
          <button class="btn-outline-full" data-nav="/">Back to Lobby</button>
        </div>
      </div>
    `;
  }

  // Main Router Render
  function render() {
    const app = document.getElementById('app');
    const r = currentRoute;

    if (r === '/admin') { window.location.href = (window.location.protocol === 'file:' ? 'admin.html' : '/admin.html'); return; }
    else if (r === '/login') app.innerHTML = renderAuthPage('login');
    else if (r === '/register') app.innerHTML = renderAuthPage('register');
    else if (r === '/activity') app.innerHTML = renderPromo();
    else if (r === '/rechargeTurntable') app.innerHTML = renderWheel();
    else if (r === '/earn') app.innerHTML = renderEarn();
    else if (r === '/invitees') app.innerHTML = renderInviteesOverviewPage();
    else if (r === '/share') app.innerHTML = renderShare();
    else if (r === '/main') app.innerHTML = renderMine();
    else if (r === '/wallet') app.innerHTML = renderWallet();
    else if (r === '/wallet/recharge') app.innerHTML = renderDeposit();
    else if (r === '/wallet/withdraw') app.innerHTML = renderWithdraw();
    else if (r === '/wallet/withdrawHistory') app.innerHTML = renderWithdrawHistory();
    else if (r === '/vip') app.innerHTML = renderVip();
    else if (r === '/ranking') app.innerHTML = renderRanking();
    else if (r === '/records') app.innerHTML = renderRecordsPage();
    else if (r === '/notifications') app.innerHTML = renderNotifications();
    else if (r === '/betRecords') app.innerHTML = renderGameHistory();
    else if (r === '/gameStats') app.innerHTML = renderGameStats();
    else if (r === '/gift') app.innerHTML = renderGiftPage();
    else if (r === '/ticket') app.innerHTML = `<div class="page-view no-tabbar">${renderSubNav('Coupons', '/main')}<div class="empty-state"><img src="${D.brand.emptyIcon}"><div>You have no tickets</div></div></div>`;
    else if (r === '/language') app.innerHTML = renderLanguagePage();
    else if (r === '/security') app.innerHTML = renderSecurityPage();
    else if (r.startsWith('/WinGo/')) app.innerHTML = renderWinGo();
    else if (r.startsWith('/game/')) app.innerHTML = renderGameLaunch(r.replace('/game/', ''));
    else app.innerHTML = renderHome();
  }

  // Sheet Helpers
  function openBetSlip(targetType, targetVal) {
    betSlip = {
      targetType,
      targetVal,
      label: targetType === 'num' ? `Number ${targetVal}` : targetVal,
      unit: 1,
      qty: 1,
      mult: state.wingoMult || 1
    };
    renderBetSlipModal();
  }

  function renderBetSlipModal() {
    if (!betSlip) return;
    const total = betSlip.unit * betSlip.qty * betSlip.mult;
    openDialog(`
      <div class="bottom-sheet" style="padding:0.34rem;">
        <div style="text-align:center;font-size:0.42rem;font-weight:700;color:#2bc484;margin-bottom:0.2rem;">WinGo — ${esc(getWingoModeObj().label)}</div>
        <div style="background:#001710;padding:0.22rem;border-radius:0.18rem;text-align:center;font-size:0.34rem;margin-bottom:0.24rem;">Select: <b style="color:#ffca47;">${esc(betSlip.label)}</b></div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.22rem;font-size:0.32rem;">
          <span>Balance</span>
          <div style="display:flex;gap:0.12rem;">
            ${[1, 10, 100, 1000].map(u => `<button class="Betting__mult-chip ${betSlip.unit === u ? 'active' : ''}" data-action="bs-unit" data-u="${u}">₹${u}</button>`).join('')}
          </div>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.22rem;font-size:0.32rem;">
          <span>Quantity</span>
          <div style="display:flex;align-items:center;gap:0.22rem;">
            <button class="Betting__mult-chip" data-action="bs-qty" data-d="-1">-</button>
            <b>${betSlip.qty}</b>
            <button class="Betting__mult-chip" data-action="bs-qty" data-d="1">+</button>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 2fr;gap:0.22rem;margin-top:0.3rem;">
          <button class="btn-outline-full" style="margin:0;height:0.98rem;" data-action="close-modal">Cancel</button>
          <button class="btn-primary-full" style="height:0.98rem;" data-action="confirm-bet">Total Bet ₹${total}</button>
        </div>
      </div>
    `, false);
  }

  // Event Delegation (Click & Input & Submit)
  document.addEventListener('click', (e) => {
    const navEl = e.target.closest('[data-nav]');
    const actEl = e.target.closest('[data-action]');

    if (actEl) {
      const action = actEl.dataset.action;
      if (action === 'close-modal' || (action === 'close-backdrop' && e.target === actEl)) {
        closeModal();
        return;
      }
      if (action === 'go-back') {
        const fb = actEl.dataset.fallback || '/';
        if (window.history.length > 1) window.history.back();
        else navigate(fb);
        return;
      }
      if (action === 'set-hero') { state.heroIdx = Number(actEl.dataset.idx); render(); return; }
      if (action === 'set-pop-page') { state.popPage = Number(actEl.dataset.page); render(); return; }
      if (action === 'set-cat') { state.activeCat = actEl.dataset.cat; render(); return; }
      if (action === 'prev-cat' || action === 'next-cat') {
        const idx = D.categories.findIndex(c => c.id === state.activeCat);
        const next = action === 'next-cat' ? (idx + 1) % D.categories.length : (idx - 1 + D.categories.length) % D.categories.length;
        state.activeCat = D.categories[next].id;
        render();
        return;
      }
      if (action === 'open-all-games') {
        openDialog(`<div class="bottom-sheet" style="max-height:75dvh;overflow-y:auto;padding:0.34rem;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.24rem;"><b style="font-size:0.4rem;">All Games (${D.popularGames.length})</b><button data-action="close-modal">✕</button></div>
          <div class="s16-pop-grid">${D.popularGames.map(g => `<div class="s16-game-card" data-nav="${g.route}" data-action="close-modal"><img class="cover" src="${g.img}" alt="${esc(g.name)}"></div>`).join('')}</div>
        </div>`, false);
        return;
      }
      if (action === 'dismiss-app-bar') { state.showAppBar = false; saveState(); render(); return; }
      if (action === 'download-app') { showToast('6E.CLUB Android APK installer queued (Demo)'); return; }
      if (action === 'social-toast') { showToast(`Opening ${actEl.dataset.name}...`); return; }
      if (action === 'toggle-eye') {
        const inp = document.getElementById(actEl.dataset.target);
        if (inp) {
          inp.type = inp.type === 'password' ? 'text' : 'password';
          actEl.innerHTML = inp.type === 'password' ? SVG.eyeClosed : SVG.eyeOpen;
        }
        return;
      }
      if (action === 'toggle-remember') { state.rememberPassword = !state.rememberPassword; saveState(); render(); return; }
      if (action === 'fill-demo-login') {
        const p = document.getElementById('auth-phone'), pw = document.getElementById('auth-pass');
        if (p) p.value = D.defaultAccount.phone;
        if (pw) pw.value = D.defaultAccount.password;
        showToast('Filled demo login credentials');
        return;
      }
      if (action === 'pick-country') {
        openDialog(`<div class="dialog-card"><h3 style="margin-top:0;">Select Country Code</h3>
          ${['+91 India', '+971 UAE', '+44 United Kingdom', '+65 Singapore'].map(c => `<button class="mine-menu-row" data-action="set-country" data-code="${c.split(' ')[0]}"><span class="lbl">${c}</span></button>`).join('')}
        </div>`, true);
        return;
      }
      if (action === 'set-country') { state.user.countryCode = actEl.dataset.code; closeModal(); render(); return; }
      if (action === 'forgot-pw') { showToast('Password reset OTP verified via SMS'); return; }
      if (action === 'set-promo-tab') { state.promoTab = actEl.dataset.tab; render(); return; }
      if (action === 'open-promo') {
        const p = D.promotions.find(x => x.id === actEl.dataset.id);
        if (p) openDialog(`<div class="dialog-card"><img src="${p.img}" style="width:100%;border-radius:0.18rem;margin-bottom:0.2rem;"><h3 style="margin:0 0 0.14rem;font-size:0.38rem;color:#ffca47;">${esc(p.title)}</h3><p style="font-size:0.3rem;color:#c2e8d9;">${esc(p.desc)}</p><button class="btn-primary-full" style="height:0.9rem;margin-top:0.22rem;" data-nav="${p.route}" data-action="close-modal">Participate Now</button></div>`, true);
        return;
      }
      if (action === 'set-wheel-tier') {
        const t = D.wheelTiers.find(x => x.id === actEl.dataset.tier);
        if (t && t.locked) { showToast('Deposit ₹10,000+ to unlock Special Wheel'); return; }
        state.wheelTier = actEl.dataset.tier;
        render();
        return;
      }
      if (action === 'spin-wheel') {
        if (state.wheelSpinning) return;
        if (state.wheelSpins <= 0) {
          state.wheelSpins = 1; // Grant free retry spin in interactive clone
          showToast('Granted +1 bonus demo spin!');
        }
        state.wheelSpinning = true;
        state.wheelSpins--;
        const tier = D.wheelTiers.find(x => x.id === state.wheelTier) || D.wheelTiers[0];
        const prizeIdx = Math.floor(Math.random() * tier.prizes.length);
        const prize = tier.prizes[prizeIdx];
        const sliceDeg = 360 / tier.prizes.length;
        const targetDeg = (360 - Math.round(prizeIdx * sliceDeg)) % 360;
        const deltaDeg = (targetDeg - (state.wheelRotation % 360) + 360) % 360;
        state.wheelRotation += 1440 + deltaDeg;
        const disc = document.getElementById('wheel-disc-img');
        if (disc) disc.style.transform = `rotate(${state.wheelRotation}deg)`;
        setTimeout(() => {
          state.wheelSpinning = false;
          const cashMatch = prize.match(/₹([\d,]+)/);
          if (cashMatch) {
            const wonAmt = Math.min(Number(cashMatch[1].replace(/,/g, '')), 888);
            state.user.balance = +(state.user.balance + wonAmt).toFixed(2);
            state.balanceRecords.unshift({ type: 'Wheel Bonus', category: 'Income', time: nowStr(), change: `+${wonAmt}`, balance: state.user.balance.toFixed(2), isIncome: true });
          }
          state.wheelHistory.unshift({ time: nowStr(), tier: tier.id, prize });
          saveState();
          render();
          openDialog(`<div class="dialog-card"><h2 style="margin:0 0 0.14rem;color:#ffca47;">Wheel Result!</h2><p style="font-size:0.38rem;">You won <b>${esc(prize)}</b></p><button class="btn-primary-full" style="height:0.9rem;margin-top:0.2rem;" data-action="close-modal">Claim</button></div>`, true);
        }, 4300);
        return;
      }
      if (action === 'open-wheel-history') {
        openDialog(`<div class="dialog-card"><h3 style="margin-top:0;">Spin History</h3>${state.wheelHistory.map(h => `<div style="display:flex;justify-content:space-between;padding:0.12rem 0;font-size:0.29rem;"><span>${esc(h.time)}</span><b style="color:#ffca47;">${esc(h.prize)}</b></div>`).join('')}<button class="btn-primary-full" style="height:0.86rem;margin-top:0.2rem;" data-action="close-modal">Close</button></div>`, true);
        return;
      }
      if (action === 'open-wheel-rules' || action === 'show-invite-rules' || action === 'open-vip-rules') {
        openDialog(`<div class="dialog-card"><h3 style="margin-top:0;color:#2bc484;">Activity Rules</h3><p style="font-size:0.3rem;color:#c2e8d9;line-height:1.5;">Complete qualifying deposits or invite friends via code <b>${esc(state.user.inviteCode)}</b> to automatically unlock rewards, wheel spins, and VIP progression.</p><button class="btn-primary-full" style="height:0.88rem;margin-top:0.2rem;" data-action="close-modal">Got it</button></div>`, true);
        return;
      }
      if (action === 'set-earn-slide') { state.earnSlide = Number(actEl.dataset.slide); render(); return; }
      if (action === 'open-agent-partner') {
        const es = getDailyEarnStats();
        const ws = getWeeklyEarnStats();
        openDialog(`<div class="dialog-card"><h3 style="margin-top:0;color:#ffca47;">Agent Partner</h3><img src="${D.earnStats.invitersBanner}" style="width:100%;border-radius:0.18rem;margin-bottom:0.18rem;" alt="Agent Partner"><p style="font-size:0.29rem;color:#c2e8d9;line-height:1.45;">Direct Invitees: <b>${es.directCount}</b> • Team Commission: <b style="color:#ffd000;">${fmtMoney(ws.totalCommission)}</b></p><button class="btn-primary-full" style="height:0.88rem;margin-top:0.12rem;" data-nav="/share" data-action="close-modal">Open Share & Chests</button></div>`, true);
        return;
      }
      if (action === 'inv-seg') { state.invTab = actEl.dataset.tab; beginRouteView('/invitees', 300); return; }
      if (action === 'copy-sub-uid') { copyText(actEl.dataset.uid, 'UID'); return; }
      if (action === 'inv-sort') {
        const k = actEl.dataset.key;
        state.invSortDir = state.invSortBy === k && state.invSortDir === 'desc' ? 'asc' : 'desc';
        state.invSortBy = k;
        beginRouteView('/invitees', 300);
        return;
      }
      if (action === 'open-inv-level') {
        state.tempInvLevel = state.invLevel || 0;
        const lvls = [0, 1, 2, 3, 4, 5, 6];
        openDialog(`<div class="bottom-sheet">
          <div class="lvl-picker-head">
            <button style="color:#8aa89e;" data-action="close-modal">Cancel</button>
            <button style="color:#2bc484;font-weight:700;" data-action="confirm-inv-level">Confirm</button>
          </div>
          <div class="lvl-picker-list">
            ${lvls.map(lv => `<button class="lvl-picker-opt ${state.tempInvLevel === lv ? 'selected' : ''}" data-action="pick-inv-level" data-lvl="${lv}">${lv === 0 ? 'All' : `Level ${lv}`}</button>`).join('')}
          </div>
        </div>`, false);
        return;
      }
      if (action === 'pick-inv-level') {
        state.tempInvLevel = Number(actEl.dataset.lvl);
        document.querySelectorAll('.lvl-picker-opt').forEach(b => b.classList.toggle('selected', Number(b.dataset.lvl) === state.tempInvLevel));
        return;
      }
      if (action === 'confirm-inv-level') {
        state.invLevel = state.tempInvLevel || 0;
        if (state.invLevel === 0) state.invDate = '';
        closeModal();
        beginRouteView('/invitees', 300);
        return;
      }
      if (action === 'open-inv-date') {
        const reportKey = getReportDateKey();
        const isAvailable = (ds) => ds >= PLATFORM_LAUNCH_KEY && ds <= reportKey;
        state.tempInvDate = (state.invDate && isAvailable(state.invDate)) ? state.invDate : reportKey;
        const octDays = [25, 26, 27, 28, 29, 30, 31];
        const novDays = Array.from({ length: 30 }, (_, i) => i + 1);
        openDialog(`<div class="cal-sheet">
          <div class="cal-head">Calendar<button class="cal-close" data-action="close-modal">✕</button></div>
          <div class="cal-weekdays"><span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span></div>
          <div class="cal-month-title">2026/10</div>
          <div class="cal-grid">
            ${octDays.map(d => {
              const ds = `2026-10-${String(d).padStart(2, '0')}`;
              return `<button class="cal-day ${state.tempInvDate === ds ? 'selected' : ''} ${!isAvailable(ds) ? 'is-unavailable' : ''}" data-action="pick-cal-date" data-date="${ds}">${d}</button>`;
            }).join('')}
          </div>
          <div class="cal-month-title">2026/11</div>
          <div class="cal-month-wrap">
            <div class="cal-watermark">11</div>
            <div class="cal-grid">
              ${novDays.map(d => {
                const ds = `2026-11-${String(d).padStart(2, '0')}`;
                return `<button class="cal-day ${state.tempInvDate === ds ? 'selected' : ''} ${!isAvailable(ds) ? 'is-unavailable' : ''}" data-action="pick-cal-date" data-date="${ds}">${d}</button>`;
              }).join('')}
            </div>
          </div>
          <div class="cal-actions-row">
            <button class="cal-all-btn" data-action="clear-cal-date">All Days</button>
            <button class="btn-primary-full" style="height:0.96rem;margin-top:0;" data-action="confirm-cal-date">Confirm</button>
          </div>
        </div>`, false);
        return;
      }
      if (action === 'pick-cal-date') {
        state.tempInvDate = actEl.dataset.date;
        document.querySelectorAll('.cal-day').forEach(b => b.classList.toggle('selected', b.dataset.date === state.tempInvDate));
        return;
      }
      if (action === 'clear-cal-date') { state.invDate = ''; state.tempInvDate = ''; closeModal(); beginRouteView('/invitees', 300); return; }
      if (action === 'confirm-cal-date') { state.invDate = state.tempInvDate || ''; closeModal(); beginRouteView('/invitees', 300); return; }
      if (action === 'open-invitees-overview') { navigate('/invitees'); return; }
      if (action === 'open-new-invitees') {
        const activeDates = getActiveReportDates(7);
        const d0 = activeDates[0] || getReportDateKey();
        const d1 = activeDates[1] || d0;
        const sampleRows = [
          { uid: '158240', date: d0, status: 'Deposited ₹200' },
          { uid: '158109', date: d0, status: 'Deposited ₹150' },
          { uid: '157992', date: d1, status: 'Registered' },
          { uid: '157804', date: d1, status: 'Deposited ₹150' }
        ];
        openDialog(`<div class="dialog-card"><h3 style="margin-top:0;color:#ffca47;">New Invitees</h3>${sampleRows.map(r => `<div style="display:flex;justify-content:space-between;padding:0.12rem 0;border-bottom:1px solid rgba(255,255,255,0.06);font-size:0.28rem;"><span>UID ${r.uid} <small style="color:#6b9e8b;">(${r.date})</small></span><b style="color:${r.status.includes('Deposited') ? '#26df76' : '#ffd000'};">${r.status}</b></div>`).join('')}<button class="btn-primary-full" style="height:0.86rem;margin-top:0.2rem;" data-action="close-modal">Close</button></div>`, true);
        return;
      }
      if (action === 'open-rebate-ratio') {
        const rates = [['Lottery', '0.60%'], ['Slots', '0.50%'], ['Original', '0.45%'], ['Fishing', '0.50%'], ['Casino', '0.35%'], ['Sports', '0.30%']];
        openDialog(`<div class="dialog-card"><h3 style="margin-top:0;color:#ffca47;">Rebate Ratio</h3>${rates.map(([k, v]) => `<div style="display:flex;justify-content:space-between;padding:0.11rem 0;border-bottom:1px solid rgba(255,255,255,0.06);font-size:0.3rem;"><span>${k} Rebate</span><b style="color:#26df76;">${v}</b></div>`).join('')}<button class="btn-primary-full" style="height:0.86rem;margin-top:0.2rem;" data-action="close-modal">Got it</button></div>`, true);
        return;
      }
      if (action === 'copy-invite') { copyText(state.user.inviteCode, 'Invite Code'); return; }
      if (action === 'copy-invite-link') { copyText(getInviteLink(), `${actEl.dataset.ch} Link`); return; }
      if (action === 'claim-chest') {
        const ppl = Number(actEl.dataset.ppl), amt = Number(actEl.dataset.amt);
        if (state.claimedMilestones.includes(ppl)) { showToast('Milestone chest already claimed'); return; }
        state.claimedMilestones.push(ppl);
        state.user.balance = +(state.user.balance + amt).toFixed(2);
        state.balanceRecords.unshift({ type: `Invite +${ppl} Chest`, category: 'Income', time: nowStr(), change: `+${amt}`, balance: state.user.balance.toFixed(2), isIncome: true });
        saveState();
        showToast(`Opened +${ppl} chest! +₹${amt} added`);
        return;
      }
      if (action === 'copy-uid') { copyText(state.user.uid, 'UID'); return; }
      if (action === 'refresh-balance') { showToast(`Balance refreshed: ${fmtMoney(state.user.balance)}`); return; }
      if (action === 'edit-nickname') {
        openDialog(`<div class="dialog-card"><h3 style="margin-top:0;">Modify Nickname</h3><div class="auth-input-box" style="margin:0.2rem 0;"><input id="new-nick-inp" type="text" value="${esc(state.user.nickname)}" maxlength="20"></div><button class="btn-primary-full" style="height:0.9rem;" data-action="save-nickname">Save</button></div>`, true);
        return;
      }
      if (action === 'save-nickname') {
        const val = (document.getElementById('new-nick-inp')?.value || '').trim();
        if (val) { state.user.nickname = val; saveState(); showToast('Nickname updated'); }
        closeModal(); render();
        return;
      }
      if (action === 'logout') { state.isLoggedIn = false; saveState(); showToast('Logged out'); navigate('/login'); return; }
      if (action === 'set-dep-amt') { state.depAmount = Number(actEl.dataset.amt); render(); return; }
      if (action === 'set-dep-ch') { state.depChannel = actEl.dataset.ch; render(); return; }
      if (action === 'submit-deposit') {
        const depCfg = getDepositConfig();
        const amt = Number(state.depAmount);
        const fmtInt = (n) => Number(n || 0).toLocaleString('en-IN');
        if (!amt || amt < depCfg.minAmount || amt > depCfg.maxAmount) {
          showToast(`Enter amount between ₹${fmtInt(depCfg.minAmount)} and ₹${fmtInt(depCfg.maxAmount)}`);
          return;
        }
        const preset = depCfg.presets.find(p => Number(p.amount) === amt);
        const bonus = preset ? Number(preset.bonus || 0) : Math.floor(amt * (depCfg.fallbackBonusPct / 100));
        const activeChObj = depCfg.channels.find(c => c.id === state.depChannel) || depCfg.channels[0];
        const chName = activeChObj ? activeChObj.name : String(state.depChannel || 'UPI-QR').toUpperCase();
        openDialog(`<div class="dialog-card"><h3 style="margin-top:0;color:#2bc484;">${esc(depCfg.checkoutTitle)}</h3><p style="font-size:0.32rem;">Pay <b>₹${amt}</b> (+₹${bonus} Bonus)<br>Channel: <b>${esc(chName)}</b></p><div style="width:3.2rem;height:3.2rem;margin:0.2rem auto;background:#fff;border-radius:0.2rem;display:flex;align-items:center;justify-content:center;color:#001710;font-weight:800;font-size:0.34rem;">6E.CLUB QR<br>₹${amt}</div><button class="btn-primary-full" style="height:0.92rem;" data-action="confirm-deposit" data-amt="${amt}" data-bonus="${bonus}">Simulate Payment Success</button><button class="btn-outline-full" style="height:0.86rem;" data-action="close-modal">Cancel</button></div>`, true);
        return;
      }
      if (action === 'confirm-deposit') {
        const amt = Number(actEl.dataset.amt), bonus = Number(actEl.dataset.bonus);
        const tot = amt + bonus;
        state.user.balance = +(state.user.balance + tot).toFixed(2);
        state.user.withdrawable = +(state.user.withdrawable + amt).toFixed(2);
        if (amt >= 500) state.wheelSpins += 1;
        state.balanceRecords.unshift({ type: 'Deposit + Bonus', category: 'Income', time: nowStr(), change: `+${tot}`, balance: state.user.balance.toFixed(2), isIncome: true });
        saveState();
        closeModal();
        showToast(`Deposit Successful! +${fmtMoney(tot)}`);
        render();
        return;
      }
      if (action === 'withdraw-all') { state.withdrawAmount = Math.floor(state.user.withdrawable); render(); return; }
      if (action === 'open-add-wd-acct') {
        state.tempWdType = 'BankCard';
        const existingAccts = state.withdrawAccounts || [];
        const existingHtml = existingAccts.length ? `
          <div class="wd-accts-list" style="margin:0 0 0.24rem;">
            ${existingAccts.map(a => `
              <div class="wd-acct-item ${state.selectedWdAccountId === a.id ? 'active' : ''}" data-action="select-wd-acct" data-id="${esc(a.id)}">
                <div class="wd-acct-badge">${esc(a.type)}</div>
                <div class="wd-acct-meta">
                  <div class="title">${esc(a.label)}</div>
                  <div class="sub">${esc(a.detail)}</div>
                </div>
                <span class="wd-acct-check">${state.selectedWdAccountId === a.id ? '✓' : ''}</span>
              </div>
            `).join('')}
          </div>
        ` : '';
        openDialog(`<div class="bottom-sheet" style="padding:0.34rem;">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.24rem;">
            <span style="font-size:0.36rem;font-weight:700;color:#fff;">Withdrawal Account</span>
            <button data-action="close-modal" style="color:#8cb8a8;font-size:0.38rem;">✕</button>
          </div>
          ${existingHtml}
          <div style="font-size:0.28rem;color:#8cb8a8;margin-bottom:0.16rem;">Add New Withdrawal Account</div>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.16rem;margin-bottom:0.24rem;" id="wd-acct-type-tabs">
            ${['BankCard', 'USDT', 'UPI'].map(t => `<button class="dep-chip ${t === 'BankCard' ? 'active' : ''}" style="height:0.78rem;font-size:0.28rem;" data-action="pick-add-wd-type" data-type="${t}">${t}</button>`).join('')}
          </div>
          <div id="wd-acct-fields">
            <div class="auth-input-box" style="margin-bottom:0.16rem;"><input id="wd-f1" type="text" placeholder="Bank Name (e.g. JIO PAYMENTS BANK)"></div>
            <div class="auth-input-box" style="margin-bottom:0.16rem;"><input id="wd-f2" type="text" placeholder="Account Number"></div>
            <div class="auth-input-box" style="margin-bottom:0.22rem;"><input id="wd-f3" type="text" placeholder="IFSC Code"></div>
          </div>
          <button class="btn-primary-full" style="height:0.94rem;" data-action="save-wd-acct">Save Account</button>
        </div>`, false);
        return;
      }
      if (action === 'pick-add-wd-type') {
        state.tempWdType = actEl.dataset.type;
        document.querySelectorAll('#wd-acct-type-tabs .dep-chip').forEach(b => b.classList.toggle('active', b.dataset.type === state.tempWdType));
        const box = document.getElementById('wd-acct-fields');
        if (box) {
          if (state.tempWdType === 'BankCard') {
            box.innerHTML = `<div class="auth-input-box" style="margin-bottom:0.16rem;"><input id="wd-f1" type="text" placeholder="Bank Name (e.g. JIO PAYMENTS BANK)"></div><div class="auth-input-box" style="margin-bottom:0.16rem;"><input id="wd-f2" type="text" placeholder="Account Number"></div><div class="auth-input-box" style="margin-bottom:0.22rem;"><input id="wd-f3" type="text" placeholder="IFSC Code"></div>`;
          } else if (state.tempWdType === 'USDT') {
            box.innerHTML = `<div class="auth-input-box" style="margin-bottom:0.16rem;"><input id="wd-f1" type="text" value="TRC20" readonly></div><div class="auth-input-box" style="margin-bottom:0.22rem;"><input id="wd-f2" type="text" placeholder="Enter USDT TRC20 Wallet Address"></div>`;
          } else {
            box.innerHTML = `<div class="auth-input-box" style="margin-bottom:0.16rem;"><input id="wd-f1" type="text" placeholder="Account Holder Name"></div><div class="auth-input-box" style="margin-bottom:0.22rem;"><input id="wd-f2" type="text" placeholder="UPI ID (e.g. name@upi)"></div>`;
          }
        }
        return;
      }
      if (action === 'save-wd-acct') {
        const type = state.tempWdType || 'BankCard';
        const f1 = (document.getElementById('wd-f1')?.value || '').trim();
        const f2 = (document.getElementById('wd-f2')?.value || '').trim();
        if (!f2) { showToast(`Please enter ${type === 'USDT' ? 'wallet address' : type === 'UPI' ? 'UPI ID' : 'account number'}`); return; }
        const id = 'acct_' + Date.now();
        const acct = { id, type, label: f1 || type, detail: f2 };
        state.withdrawAccounts = state.withdrawAccounts || [];
        state.withdrawAccounts.push(acct);
        state.selectedWdAccountId = id;
        saveState();
        closeModal();
        showToast(`${type} withdrawal account bound`);
        render();
        return;
      }
      if (action === 'select-wd-acct') {
        state.selectedWdAccountId = actEl.dataset.id;
        saveState();
        closeModal();
        render();
        return;
      }
      if (action === 'set-wh-period') {
        state.whPeriod = actEl.dataset.p;
        render();
        return;
      }
      if (action === 'copy-wh-order') {
        copyText(actEl.dataset.id, 'Order ID');
        return;
      }
      if (action === 'wh-reminder') {
        openDialog(`<div class="wh-loading-box"><div class="wh-spinner"></div><span>loading</span></div>`, true);
        setTimeout(() => {
          closeModal();
          showToast('Reminder submitted! Order queued for priority processing');
        }, 450);
        return;
      }
      if (action === 'wh-voucher') {
        const oid = actEl.dataset.id;
        openDialog(`<div class="wh-loading-box"><div class="wh-spinner"></div><span>loading</span></div>`, true);
        setTimeout(() => {
          openDialog(`<div class="dialog-card">
            <h3 style="margin-top:0;color:#2bc484;">Submit Withdrawal Voucher</h3>
            <p style="font-size:0.28rem;color:#9cc7b8;margin-bottom:0.18rem;">Order ID: <b style="color:#fff;">${esc(oid)}</b></p>
            <div class="auth-input-box" style="margin-bottom:0.2rem;"><input id="wh-utr-inp" type="text" placeholder="Enter Bank Statement Ref / UTR Note"></div>
            <button class="btn-primary-full" style="height:0.88rem;" data-action="submit-wh-voucher" data-id="${esc(oid)}">Confirm Upload</button>
            <button class="btn-outline-full" style="height:0.82rem;" data-action="close-modal">Cancel</button>
          </div>`, true);
        }, 480);
        return;
      }
      if (action === 'submit-wh-voucher') {
        closeModal();
        showToast('Withdrawal voucher uploaded successfully!');
        return;
      }
      if (action === 'submit-withdraw') {
        const wdCfg = getWithdrawConfig();
        if (!(state.withdrawAccounts || []).length) { showToast('Please add a withdrawal account first'); return; }
        const amt = Number(state.withdrawAmount);
        if (!amt || amt < wdCfg.minAmount) { showToast(`Minimum withdrawal amount is ₹${wdCfg.minAmount}`); return; }
        if (wdCfg.maxAmount > 0 && amt > wdCfg.maxAmount) { showToast(`Maximum withdrawal amount is ₹${wdCfg.maxAmount}`); return; }
        if (amt > state.user.withdrawable) { showToast('Insufficient withdrawable balance'); return; }
        const acct = state.withdrawAccounts.find(a => a.id === state.selectedWdAccountId) || state.withdrawAccounts[0];
        state.user.balance = +(state.user.balance - amt).toFixed(2);
        state.user.withdrawable = +(state.user.withdrawable - amt).toFixed(2);
        state.withdrawAmount = '';
        state.withdrawalHistory = state.withdrawalHistory || [...D.withdrawalHistory];
        state.withdrawalHistory.unshift({
          id: 'WD' + Date.now() + 'kHmAdtEepK',
          time: nowStr(),
          cash: amt,
          method: acct ? acct.type : 'BankCard',
          status: 'Processing',
          daysAgo: 0
        });
        state.balanceRecords.unshift({ type: 'Withdraw', category: 'Expense', time: nowStr(), change: `-${amt}`, balance: state.user.balance.toFixed(2), isIncome: false });
        saveState();
        showToast(`Withdrawal request of ₹${amt} submitted!`);
        render();
        return;
      }
      if (action === 'set-vip-inspect') { state.vipInspectLevel = Number(actEl.dataset.lv); render(); return; }
      if (action === 'set-rank-period') { state.rankingPeriod = actEl.dataset.p; render(); return; }
      if (action === 'set-bal-tab') { state.balanceTab = actEl.dataset.tab; render(); return; }
      if (action === 'set-notif-tab') { state.notifTab = actEl.dataset.tab; render(); return; }
      if (action === 'set-bh-cat') { state.betHistCat = actEl.dataset.c; render(); return; }
      if (action === 'set-stats-range') { state.statsRange = actEl.dataset.r; render(); return; }
      if (action === 'set-lang') { state.language = actEl.dataset.lang; saveState(); showToast(`Language: ${state.language}`); navigate('/'); return; }
      if (action === 'redeem-gift') {
        const code = (document.getElementById('gift-code-input')?.value || '').trim();
        if (!code) { showToast('Please enter the gift code'); return; }
        const bonus = 88;
        state.user.balance = +(state.user.balance + bonus).toFixed(2);
        state.giftHistory.unshift({ time: nowStr(), code, bonus });
        state.balanceRecords.unshift({ type: 'Gift Code Bonus', category: 'Income', time: nowStr(), change: `+${bonus}`, balance: state.user.balance.toFixed(2), isIncome: true });
        saveState();
        showToast(`Gift redeemed! +₹${bonus}`);
        render();
        return;
      }
      if (action === 'set-wingo-mode') { state.wingoMode = actEl.dataset.code; render(); return; }
      if (action === 'set-wingo-mult') { state.wingoMult = Number(actEl.dataset.m); render(); return; }
      if (action === 'set-wingo-htab') { state.wingoHistoryTab = actEl.dataset.tab; render(); return; }
      if (action === 'toggle-sound') { state.soundEnabled = !state.soundEnabled; render(); return; }
      if (action === 'wingo-rules') {
        openDialog(`<div class="dialog-card"><h3 style="margin-top:0;color:#2bc484;">How To Play WinGo</h3><p style="font-size:0.29rem;color:#c2e8d9;line-height:1.5;text-align:left;">1. Choose Green, Red, Violet, Big/Small, or exact numbers 0–9.<br>2. Betting locks 5 seconds before draw.<br>3. Matching Color pays 2x (1.5x on 0/5), Violet pays 4.5x, Big/Small pays 2x, Exact Number pays 9x.</p><button class="btn-primary-full" style="height:0.88rem;" data-action="close-modal">Close</button></div>`, true);
        return;
      }
      if (action === 'open-bet') {
        if (getWingoRemainingSec() <= 5) { showToast('Round locked! Wait for next period'); return; }
        openBetSlip(actEl.dataset.type, actEl.dataset.val);
        return;
      }
      if (action === 'random-bet') {
        if (getWingoRemainingSec() <= 5) { showToast('Round locked!'); return; }
        const r = Math.floor(Math.random() * 10);
        openBetSlip('num', String(r));
        return;
      }
      if (action === 'bs-unit' && betSlip) { betSlip.unit = Number(actEl.dataset.u); renderBetSlipModal(); return; }
      if (action === 'bs-qty' && betSlip) { betSlip.qty = Math.max(1, betSlip.qty + Number(actEl.dataset.d)); renderBetSlipModal(); return; }
      if (action === 'confirm-bet' && betSlip) {
        const amt = betSlip.unit * betSlip.qty * betSlip.mult;
        if (amt > state.user.balance) { showToast('Insufficient balance! Deposit to play'); closeModal(); return; }
        const period = getCurrentWingoPeriod();
        state.user.balance = +(state.user.balance - amt).toFixed(2);
        state.wingoMyBets.unshift({
          period,
          label: betSlip.label,
          targetType: betSlip.targetType,
          targetVal: betSlip.targetVal,
          amount: amt,
          status: 'Pending',
          time: nowStr()
        });
        state.balanceRecords.unshift({ type: 'WinGo Bet', category: 'Expense', time: nowStr(), change: `-${amt}`, balance: state.user.balance.toFixed(2), isIncome: false });
        saveState();
        closeModal();
        showToast(`Bet ₹${amt} placed on ${betSlip.label}`);
        render();
        return;
      }
      if (action === 'play-demo-spin') {
        if (state.user.balance < 10) { showToast('Balance below ₹10 — Deposit first!'); return; }
        const win = Math.random() > 0.45 ? 18 : 0;
        state.user.balance = +(state.user.balance - 10 + win).toFixed(2);
        state.balanceRecords.unshift({ type: actEl.dataset.name, category: win ? 'Income' : 'Expense', time: nowStr(), change: win ? '+8' : '-10', balance: state.user.balance.toFixed(2), isIncome: !!win });
        saveState();
        showToast(win ? `Won ₹${win}!` : 'Try next spin!');
        render();
        return;
      }
    }

    if (navEl) {
      navigate(navEl.dataset.nav);
    }
  });

  document.addEventListener('input', (e) => {
    if (e.target.id === 'dep-amt-input') state.depAmount = e.target.value;
    if (e.target.id === 'wd-amt-input') {
      state.withdrawAmount = e.target.value;
      const btn = document.getElementById('wd-submit-btn');
      if (btn) btn.classList.toggle('is-ready', Number(state.withdrawAmount) > 0);
    }
    if (e.target.id === 'inv-search-input') {
      state.invSearch = e.target.value;
      clearTimeout(routeLoadTimer);
      if (routeLoadRaf && typeof cancelAnimationFrame === 'function') cancelAnimationFrame(routeLoadRaf);
      routeLoadRaf = null;
      routeDataReady = false;
      const box = document.getElementById('inv-dynamic-area');
      if (box) box.innerHTML = renderInvDynamicHtml();
      routeLoadTimer = setTimeout(() => {
        if (currentRoute !== '/invitees') return;
        routeDataReady = true;
        const b = document.getElementById('inv-dynamic-area');
        if (b) b.innerHTML = renderInvDynamicHtml();
      }, 300);
    }
  });

  document.addEventListener('submit', (e) => {
    if (e.target.id === 'auth-form') {
      e.preventDefault();
      const mode = e.target.dataset.mode;
      const phone = (document.getElementById('auth-phone')?.value || '').trim();
      const pass = document.getElementById('auth-pass')?.value || '';
      if (phone.length < 8) { showToast('Enter valid mobile number'); return; }
      if (pass.length < 6) { showToast('Password must be at least 6 characters'); return; }

      if (mode === 'register') {
        const pass2 = document.getElementById('auth-pass2')?.value || '';
        const agreed = document.getElementById('reg-agree')?.checked;
        if (pass !== pass2) { showToast('Passwords do not match'); return; }
        if (!agreed) { showToast('Please accept Privacy Agreement'); return; }
        const uid = String(155886 + state.usersDb.length);
        state.usersDb.push({ phone, password: pass, uid, nickname: 'Member' + phone.slice(-4).toUpperCase() });
        state.user.phone = phone;
        state.user.password = pass;
        state.user.uid = uid;
        state.user.nickname = 'Member' + phone.slice(-4).toUpperCase();
        state.isLoggedIn = true;
        saveState();
        showToast('Account registered & logged in!');
        navigate('/');
      } else {
        const match = state.usersDb.find(u => u.phone === phone && u.password === pass);
        if (!match) { showToast('Incorrect mobile number or password'); return; }
        state.user.phone = match.phone;
        state.user.uid = match.uid;
        state.user.nickname = match.nickname;
        state.isLoggedIn = true;
        saveState();
        showToast('Login successful!');
        navigate('/');
      }
    }
  });

  let earnSwipeStart = null;
  function handleEarnSwipeStart(x, y, target) {
    if (target && target.closest && target.closest('#earn-swipe-box')) {
      earnSwipeStart = { x, y };
    }
  }
  function handleEarnSwipeEnd(x, y) {
    if (!earnSwipeStart) return;
    const dx = x - earnSwipeStart.x;
    const dy = y - earnSwipeStart.y;
    earnSwipeStart = null;
    if (Math.abs(dx) > 28 && Math.abs(dx) > Math.abs(dy)) {
      const next = dx < 0 ? 1 : 0;
      if (state.earnSlide !== next) {
        state.earnSlide = next;
        render();
      }
    }
  }
  document.addEventListener('touchstart', (e) => {
    if (e.touches && e.touches[0]) handleEarnSwipeStart(e.touches[0].clientX, e.touches[0].clientY, e.target);
  }, { passive: true });
  document.addEventListener('touchend', (e) => {
    if (e.changedTouches && e.changedTouches[0]) handleEarnSwipeEnd(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
  }, { passive: true });
  document.addEventListener('pointerdown', (e) => {
    if (e.pointerType !== 'touch') handleEarnSwipeStart(e.clientX, e.clientY, e.target);
  });
  document.addEventListener('pointerup', (e) => {
    if (e.pointerType !== 'touch') handleEarnSwipeEnd(e.clientX, e.clientY);
  });

  // Boot Timers, Remote Sync & Render
  if (/^\/admin\/?$/i.test(window.location.pathname)) {
    window.location.replace(window.location.protocol === 'file:' ? 'admin.html' : '/admin.html');
    return;
  }
  beginRouteView(currentRoute);
  initRemoteSync();
  clearInterval(heroTimer);
  heroTimer = setInterval(() => {
    if (currentRoute === '/') {
      state.heroIdx = (state.heroIdx + 1) % D.heroBanners.length;
      const track = document.querySelector('.s16-hero__track');
      if (track) track.style.transform = `translateX(-${state.heroIdx * 100}%)`;
      document.querySelectorAll('.s16-hero__dot').forEach((d, idx) => d.classList.toggle('active', idx === state.heroIdx));
    }
  }, 4200);

  clearInterval(wingoTickerTimer);
  wingoTickerTimer = setInterval(processWingoTick, 1000);
})();
