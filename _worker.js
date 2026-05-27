export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // API: список папок .RSF
    if (url.pathname === '/api/rsf-list') {
      return new Response(JSON.stringify([]), {
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
      });
    }

    // API: отправка ресурса
    if (url.pathname === '/api/send-resource' && request.method === 'POST') {
      return new Response(JSON.stringify({ success: true }), {
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
      });
    }

    // Всё остальное — статика
    return env.ASSETS.fetch(request);
  }
};
