// Tilo site settings. Paddle client-side tokens are public by design (they can only open checkouts).
// enabled: false -> everyone sees the founding-family waitlist (switch to true when the iOS app is live).
// ?checkout=test on the page URL always uses the sandbox, so test cards work without touching live.
window.TILO = {
  api: 'https://tilo-api.quietowl.app',
  paddle: {
    enabled: false,
    foundingCode: 'FOUNDING', // $30 off the first yearly payment
    live: {
      token: 'live_b23c8083bfa17447345466ef30e',
      prices: { year: 'pri_01m6h0cfxszabtkd0h0j3yd5cf', month: 'pri_01m6h0bsm7qqf4aqbakd4d87ty', family: 'pri_01m6h0cxfdt8ggxmj2z4v1jbnh' },
    },
    sandbox: {
      token: 'test_2be3a95d86b56ecfc5e1f76f8a0',
      prices: { year: 'pri_01m6gtzmjt5dc1s13qt1qd4x8n', month: 'pri_01m6gtybby7t7pa38bg0hv62v0', family: 'pri_01m6gv085wvs8c6hqc29f27ne2' },
    },
  },
};
