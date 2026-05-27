export async function onRequest(context) {
  const url = new URL(context.request.url);

  // API для списка проектов
  if (url.pathname === '/api/rsf-list') {
    return new Response(JSON.stringify([]), {
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  }

  // API для отправки ресурса
  if (url.pathname === '/api/send-resource' && context.request.method === 'POST') {
    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  }

  // Если не API — отдаём статику
  return context.next();
}