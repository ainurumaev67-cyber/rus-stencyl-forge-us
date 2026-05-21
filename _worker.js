// _worker.js
// Этот файл работает как серверная функция при прямой загрузке на Cloudflare Pages.
export default {
  async fetch(request, env) {
    // Получаем URL, на который пришел запрос
    const url = new URL(request.url);

    // Если запрос к нашему списку проектов, отдаем данные
    if (url.pathname === '/api/rsf-list') {
      // Здесь вы будете вести список своих .RSF папок
      const projects = [
        // Пример готового проекта:
        // { 
        //   folder: "Космический герой.RSF", 
        //   name: "Космический герой", 
        //   description: "Анимированный персонаж для платформеров.", 
        //   category: "actors", 
        //   author: "Иван Петров", 
        //   tags: ["платформер", "космос"], 
        //   rating: 4.8, 
        //   downloads: 240 
        // }
      ];
      
      // Возвращаем список в формате JSON
      return new Response(JSON.stringify(projects), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Для всех остальных запросов (к страницам, картинкам) отдаем статику
    return env.ASSETS.fetch(request);
  }
}