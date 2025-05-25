chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.get('favorites', data => {
    if (!data.favorites) {
      chrome.storage.sync.set({ favorites: ['en','ja','es'] });
    }
  });
});