function createPopup(tabID) {
	chrome.pageAction.setTitle({tabId:tabID,title:"Star page"});

	chrome.tabs.get(tabID, function(tab) {
		chrome.bookmarks.search({url: tab.url}, function(results) {
			if (results.length >= 1) {
				chrome.pageAction.setIcon({tabId:tabID,path:"icons/collected19.png"});
			}else{
				chrome.pageAction.setIcon({tabId:tabID,path:"icons/collected19_hollow.png"});
			}

			chrome.pageAction.setPopup({tabId:tabID, popup:"popup.html"});
			chrome.pageAction.show(tabID);
		});
	});
}

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	createPopup(tabs[0].id);
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	createPopup(tabId);
});