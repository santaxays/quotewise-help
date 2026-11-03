// Tilo site settings. The Paddle client-side token is public by design (it only opens checkouts).
// enabled: false keeps the founding-family waitlist for everyone.
// Add ?checkout=test to the page URL to try the sandbox checkout with Paddle test cards.
window.TILO = {
  api: 'https://tilo-api.quietowl.app',
  paddle: {
    enabled: false,
    env: 'sandbox', // 'production' after Paddle approves the live account
    token: 'test_2be3a95d86b56ecfc5e1f76f8a0',
    prices: { year: 'pri_01m6gtzmjt5dc1s13qt1qd4x8n', month: 'pri_01m6gtybby7t7pa38bg0hv62v0', family: 'pri_01m6gv085wvs8c6hqc29f27ne2' },
    foundingCode: 'FOUNDING', // $30 off the first yearly payment
  },
};
