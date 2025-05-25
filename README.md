# PolySearch – Multi-Language Search

PolySearch is a lightweight Chrome extension that enhances Google Search by adding a button beside the search bar. It allows you to quickly re-run your current query in one of your three favorite languages using Google’s `lr=lang_<CODE>` parameter.

## Features

- 🌐 Adds a button next to Google’s search input on supported domains (`www.google.com`, `www.google.co.jp`, `www.google.es`).
- ⭐ Save up to three favorite languages for quick access.
- 🔄 Re-runs the current search with `&lr=lang_<CODE>` to filter results by language.
- 🔒 Minimal permissions: only the `storage` permission is needed to remember your language choices.

## Installation

1. Download or clone this repository to your local machine.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** in the top-right corner.
4. Click **Load unpacked** and select the `PolySearch` folder.
5. Ensure the extension is enabled; it will automatically inject the UI on supported Google Search pages.

## Usage

1. Click on the **Options** link under the PolySearch extension listing, or visit `chrome-extension://<EXTENSION_ID>/options.html`.
2. Select your three favorite languages from the dropdown menus and click **Save**.
3. Go to a supported Google Search page and enter your query.
4. Click the 🌐 button next to the search box and choose a language. The page will reload with results filtered in that language.

## Supported Language Codes

| Code   | Language              |
|--------|-----------------------|
| `en`   | English               |
| `ja`   | Japanese              |
| `es`   | Spanish               |
| `fr`   | French                |
| `de`   | German                |
| `zh-CN`| Chinese (Simplified)  |
| `ru`   | Russian               |
| `pt`   | Portuguese            |
| `it`   | Italian               |
| `ko`   | Korean                |
| `ar`   | Arabic                |

## Permissions

- **`storage`**: Used to save and sync your selected favorite languages across devices where you’re signed into Chrome.
- **No host permissions** are required in the minimal build since the extension operates entirely by manipulating the current page’s URL.

## File Structure

```
PolySearch/
├─ manifest.json      # Extension metadata and permissions
├─ background.js      # Sets defaults on installation
├─ content.js         # Injects the button and handles language selection
├─ styles.css         # Dropdown hover styling
├─ options.html       # UI for selecting favorites
└─ options.js         # Saves and restores favorites via chrome.storage
```

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to:

- Open an issue in this repository for bugs or enhancement ideas.
- Fork the project and submit a pull request with your improvements.

---

**Enjoy PolySearch!**
