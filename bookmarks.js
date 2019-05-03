/*chrome.bookmarks.getTree(function(results) {
	let list = document.createElement("ul");
	document.body.appendChild(list);
	results[0].children.forEach(result => {
		createItem(result, list);
	});
});

function createItem(item, parent) {
	let itemNode = document.createElement("li");
	parent.appendChild(itemNode);

	itemNode.setAttribute("data-id", item.id);

	if (item.url) {
		let itemLink = document.createElement("a");
		itemLink.innerHTML = item.title;
		itemLink.href = item.url;

		itemNode.appendChild(itemLink);
	}else{
		itemNode.innerHTML = item.title;
	}


	if (item.children && item.children.length >= 1) {
		let folder = document.createElement("ul");
		itemNode.appendChild(folder);  

		item.children.forEach(subItem => {
			createItem(subItem, folder);
		});	
	}
}*/

// document.querySelector("div.col-nav-section.col-nav-tags > ul")

chrome.bookmarks.getSubTree("2", function(result){
	const folders = result[0].children;
	const folderList = document.querySelector("div.col-nav-section.col-nav-tags > ul");
	folders.forEach(folder => {
		if (folder.url == undefined) {
			let folderItem = document.createElement("li");
			folderItem.setAttribute("tabindex", "-1");
			folderItem.setAttribute("role", "listitem");
			folderItem.className = "col-nav-item";
			folderItem.innerText = folder.title;

			let folderExpand = document.createElement("div");
			folderExpand.className = "col-nav-expander";
			folderItem.appendChild(folderExpand);

			folderList.appendChild(folderItem);

			//<li tabindex="-1" role="listitem" class="col-nav-item">3D Printer<div class="col-nav-expander"></div></li>
		}
	});
});

window.addEventListener("resize", function() {
	let navBtnOffset = document.body.clientWidth - 410;
	if (navBtnOffset < 532) {
		navBtnOffset = 532;
	}
	
	document.querySelector(".col-tb-buttons").style.transform = "translate(" + navBtnOffset + "px, 0px)"
});