const languages = [
  {name:'English', code:'en'},{name:'Japanese', code:'ja'},{name:'Spanish', code:'es'},
  {name:'French', code:'fr'},{name:'German', code:'de'},{name:'Chinese (Simplified)', code:'zh-CN'},
  {name:'Russian', code:'ru'},{name:'Portuguese', code:'pt'},{name:'Italian', code:'it'},
  {name:'Korean', code:'ko'},{name:'Arabic', code:'ar'}
];

function populateSelect(id) {
  const select = document.getElementById(id);
  languages.forEach(lang => {
    const opt = document.createElement('option');
    opt.value = lang.code;
    opt.textContent = lang.name;
    select.appendChild(opt);
  });
}

function saveOptions(e) {
  e.preventDefault();
  const favs = [
    document.getElementById('fav1').value,
    document.getElementById('fav2').value,
    document.getElementById('fav3').value
  ];
  chrome.storage.sync.set({ favorites: favs }, () => {
    alert('Favorites saved.');
  });
}

function restoreOptions() {
  chrome.storage.sync.get({ favorites: ['en','ja','es'] }, data => {
    ['fav1','fav2','fav3'].forEach((id, idx) => {
      document.getElementById(id).value = data.favorites[idx] || 'en';
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  populateSelect('fav1');
  populateSelect('fav2');
  populateSelect('fav3');
  restoreOptions();
  document.getElementById('options-form').addEventListener('submit', saveOptions);
});