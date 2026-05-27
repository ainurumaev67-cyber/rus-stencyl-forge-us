export async function onRequest(context) {
  const url = new URL(context.request.url);

  // API: список папок .RSF
  if (url.pathname === '/api/rsf-list') {
    return new Response(JSON.stringify([]), {
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  }

  // API: отправка ресурса
  if (url.pathname === '/api/send-resource' && context.request.method === 'POST') {
    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  }

  // Всё остальное — отдаём как есть (статика)
  try {
    return await context.env.ASSETS.fetch(context.request);
  } catch (e) {
    return context.next();
  }
}
