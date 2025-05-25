(() => {
  const BTN_ID = 'polysearch-btn';
  const DROPDOWN_ID = 'polysearch-dropdown';

  async function loadFavorites() {
    return new Promise(resolve => {
      chrome.storage.sync.get({ favorites: ['en','ja','es'] }, data => {
        resolve(data.favorites);
      });
    });
  }

  function onLanguageSelected(langCode) {
    const input = document.querySelector('input[name="q"]');
    if (!input) return;
    const query = input.value.trim();
    if (!query) return;

    const base = `${location.protocol}//${location.hostname}${location.pathname}`;
    const newUrl = `${base}?q=${encodeURIComponent(query)}&lr=lang_${langCode}`;
    location.href = newUrl;
  }

  async function injectUI() {
    const form = document.querySelector('form[role="search"]');
    if (!form) return;

    const wrapper = document.createElement('div');
    wrapper.style.display = 'inline-block';
    wrapper.style.position = 'relative';
    wrapper.style.marginLeft = '8px';

    const btn = document.createElement('button');
    btn.id = BTN_ID;
    btn.textContent = '🌐';
    btn.title = 'PolySearch';
    btn.style.padding = '4px 8px';
    btn.style.cursor = 'pointer';

    const dropdown = document.createElement('div');
    dropdown.id = DROPDOWN_ID;
    dropdown.style.position = 'absolute';
    dropdown.style.top = '100%';
    dropdown.style.left = '0';
    dropdown.style.background = '#fff';
    dropdown.style.border = '1px solid #ccc';
    dropdown.style.display = 'none';
    dropdown.style.zIndex = '1000';

    const favs = await loadFavorites();
    favs.forEach(code => {
      const opt = document.createElement('div');
      opt.textContent = code;
      opt.style.padding = '4px 8px';
      opt.style.cursor = 'pointer';
      opt.addEventListener('click', () => {
        dropdown.style.display = 'none';
        onLanguageSelected(code);
      });
      dropdown.appendChild(opt);
    });

    btn.addEventListener('click', e => {
      e.preventDefault();
      dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
    });

    wrapper.appendChild(btn);
    wrapper.appendChild(dropdown);
    const container = form.querySelector('div');
    container.appendChild(wrapper);
  }

  injectUI();
})();