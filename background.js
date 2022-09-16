chrome.runtime.onInstalled.addListener(() => {
	chrome.tabs.create({ url: 'welcome/index.html' });
});
chrome.action.onClicked.addListener(() => {
	const url = prompt('URL:');

});