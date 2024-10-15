export function loadMarkdownFile(broker) {
  return fetch(chrome.runtime.getURL(`markdown/${broker}/index.md`)).then((response) => response.text());
}

export function getBrokerList() {
  return fetch(chrome.runtime.getURL(`markdown/brokers-data.json`)).then((response) => response.json());
}
