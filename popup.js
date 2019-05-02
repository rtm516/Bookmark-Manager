chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	let tab = tabs[0];

	document.querySelector(".colc-tilea>input[type='text']").value = tab.title;
	document.querySelector(".colc-tilea>input[type='url']").value = tab.url;

	document.querySelector(".colc-img").style = "background-image: url('images/tile-bg-" + (Math.round(Math.random() * 7) + 1) + ".jpg');";
});

document.querySelector(".colc-viewt").onclick = function() {
	chrome.tabs.create({url: 'chrome://bookmarks/'});
};

document.querySelector(".colc-confi").onclick = function() {
	window.close();
};