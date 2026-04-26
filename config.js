(function () {
  if (window.API_URL !== undefined) return;

  const hostname = typeof window !== 'undefined' ? window.location.hostname : '';

  if (hostname === 'legomnia.com' || hostname === 'www.legomnia.com') {
    window.API_URL = '/api';
  } else if (hostname.includes('localhost') || hostname.includes('127.0.0.1')) {
    window.API_URL = 'http://localhost:3001/api';
  } else {
    window.API_URL = '/api';
  }

  window.CACHE_VERSION = '1.0.0';
})();
