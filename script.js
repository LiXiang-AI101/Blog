// 示例文章数据
const articles = [
    {
        title: "一款最适合开发微信小程序的AI编程工具问世了！",
        summary: "腾讯出品腾讯云代码助手CodeBuddy，功能详解和使用方法，强大的生态生成开发微信小程序的不二之选",
        date: "2025-05-17",
        views: "2,791",
        link: "https://mp.weixin.qq.com/s/ldDPZVQwZLLze6RkRVYf2A?token=1400000985&lang=zh_CN"
    },
    {
        title: "字节跳动Trae重磅更新！开发效率飙升10倍！",
        summary: "Trae功能大更新，全新的规则、智能体、上下文大大增强。",
        date: "2025-04-24",
        views: "3,116",
        link: "http://mp.weixin.qq.com/s/ndGF__ngAXDhdMUAHXZL_A"
    },
    {
        title: "AI编程神器Cursor入门，看这一篇就够了！",
        summary: "Cursor入门级教学，从安装、注册到开发出人生第一款小游戏，让你打开AI编程的大门。",
        date: "2025-04-07",
        views: "2,842",
        link: "https://mp.weixin.qq.com/s/JtBx_KtZdqo2jkyuUTAjSg?token=1400000985&lang=zh_CN"
    }
];

// 加载文章卡片
function loadArticles() {
    const articlesContainer = document.querySelector('.articles-container');
    
    articles.forEach(article => {
        const articleCard = document.createElement('div');
        articleCard.className = 'article-card';
        articleCard.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.summary}</p>
            <div class="article-meta">
                <span class="date">${article.date}</span>
                <span class="views">阅读量：${article.views}</span>
            </div>
        `;
        
        // 添加点击事件
        articleCard.addEventListener('click', () => {
            window.open(article.link, '_blank');
        });
        
        articlesContainer.appendChild(articleCard);
    });
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    loadArticles();
    
    // 设置当前年份
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // 验证社交媒体链接
    const socialLinks = document.querySelectorAll('.social-icon[target="_blank"]');
    socialLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (!link.href || link.href === '#') {
                e.preventDefault();
                console.warn('社交媒体链接尚未设置');
            }
        });
    });
}); 