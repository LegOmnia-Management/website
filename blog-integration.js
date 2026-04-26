const API_URL = window.API_URL || '/api';

function sanitizeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function showError(message) {
  const blogContainer = document.getElementById('blog-articles-container');
  if (blogContainer) {
    blogContainer.innerHTML =
      '<p style="grid-column:1/-1;text-align:center;color:var(--text-2);">' + sanitizeHtml(message) + '</p>';
  }
}

async function loadBlogArticles() {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    const response = await fetch(`${API_URL}/articles?limit=6`, {
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const json = await response.json();
    const articles = Array.isArray(json.data) ? json.data : [];

    const blogContainer = document.getElementById('blog-articles-container');
    if (!blogContainer) return;

    blogContainer.innerHTML = '';

    articles.forEach((article, index) => {
      const publishDate = new Date(article.published_at).toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      });

      const card = document.createElement('a');
      card.href = `/blog/${sanitizeHtml(article.slug)}`;
      card.className = 'bento-card reveal';
      card.style.animationDelay = `${index * 0.1}s`;
      card.style.cursor = 'pointer';

      const categoryEl = document.createElement('span');
      categoryEl.style.background = 'var(--vi)';
      categoryEl.style.color = 'white';
      categoryEl.style.padding = '4px 8px';
      categoryEl.style.borderRadius = '4px';
      categoryEl.style.fontSize = '10px';
      categoryEl.style.fontWeight = '600';
      categoryEl.textContent = article.category;

      const dateEl = document.createElement('span');
      dateEl.style.marginLeft = '8px';
      dateEl.textContent = publishDate;

      const headerDiv = document.createElement('div');
      headerDiv.style.fontSize = '12px';
      headerDiv.style.color = 'var(--text-2)';
      headerDiv.style.marginBottom = '12px';
      headerDiv.appendChild(categoryEl);
      headerDiv.appendChild(dateEl);

      const titleEl = document.createElement('h4');
      titleEl.textContent = article.title;

      const excerptEl = document.createElement('p');
      excerptEl.style.marginBottom = '16px';
      excerptEl.textContent = article.excerpt;

      const authorEl = document.createElement('span');
      authorEl.textContent = article.author || 'legOmnia';

      const readingTimeEl = document.createElement('span');
      readingTimeEl.textContent = article.reading_time_minutes + ' min';

      const footerDiv = document.createElement('div');
      footerDiv.style.display = 'flex';
      footerDiv.style.justifyContent = 'space-between';
      footerDiv.style.alignItems = 'center';
      footerDiv.style.fontSize = '12px';
      footerDiv.style.color = 'var(--text-3)';
      footerDiv.appendChild(authorEl);
      footerDiv.appendChild(readingTimeEl);

      const ctaEl = document.createElement('div');
      ctaEl.style.fontSize = '13px';
      ctaEl.style.fontWeight = '600';
      ctaEl.style.display = 'inline-flex';
      ctaEl.style.gap = '6px';
      ctaEl.style.color = 'var(--vi)';
      ctaEl.style.marginTop = '12px';
      ctaEl.textContent = 'Lire l\'article ';

      const arrowSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      arrowSvg.setAttribute('class', 'icon');
      arrowSvg.setAttribute('width', '16');
      arrowSvg.setAttribute('height', '16');
      arrowSvg.innerHTML = '<use href="#i-arrow"/>';
      ctaEl.appendChild(arrowSvg);

      card.appendChild(headerDiv);
      card.appendChild(titleEl);
      card.appendChild(excerptEl);
      card.appendChild(footerDiv);
      card.appendChild(ctaEl);

      blogContainer.appendChild(card);
    });

    const viewAllBtn = document.createElement('div');
    viewAllBtn.style.gridColumn = '1 / -1';
    viewAllBtn.style.textAlign = 'center';
    viewAllBtn.style.marginTop = '24px';

    const allArticlesLink = document.createElement('a');
    allArticlesLink.href = '/blog';
    allArticlesLink.className = 'btn btn-outline btn-lg';
    allArticlesLink.style.display = 'inline-flex';
    allArticlesLink.style.gap = '8px';
    allArticlesLink.textContent = 'Voir tous les articles ';

    const arrowSvgAll = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    arrowSvgAll.setAttribute('class', 'icon');
    arrowSvgAll.setAttribute('width', '20');
    arrowSvgAll.setAttribute('height', '20');
    arrowSvgAll.innerHTML = '<use href="#i-arrow"/>';
    allArticlesLink.appendChild(arrowSvgAll);

    viewAllBtn.appendChild(allArticlesLink);
    blogContainer.parentElement.appendChild(viewAllBtn);
  } catch (error) {
    console.error('Erreur lors du chargement des articles:', error);
    showError('Impossible de charger les articles pour le moment.');
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadBlogArticles);
} else {
  loadBlogArticles();
}
