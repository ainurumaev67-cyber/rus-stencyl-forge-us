export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (url.pathname === '/api/rsf-list') {
    return new Response(JSON.stringify([]), {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  if (url.pathname === '/api/send-resource' && context.request.method === 'POST') {
    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  return context.next();
}
