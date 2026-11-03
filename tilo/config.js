// Tilo site settings. The Paddle client-side token is public by design (it only opens checkouts).
// Until Paddle is approved, enabled stays false and the page collects founding-family emails instead.
window.TILO = {
  api: 'https://tilo-api.quietowl.app',
  paddle: {
    enabled: false,
    env: 'sandbox', // 'production' after Paddle approves the account
    token: '', // client-side token from Paddle > Developer tools > Authentication
    prices: { year: '', month: '', family: '' }, // pri_… ids from Paddle > Catalog
  },
};
