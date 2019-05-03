function betterTrim(str, trimChar) {
	return str.replace(new RegExp("^[" + trimChar + "]+|[" + trimChar + "]+$", "g"), "");
}

function buildBookmark(bookmark, folder, index) {
	let id = bookmark.id;
	let title = bookmark.title;
	let url = bookmark.url;
	let short_url = betterTrim(bookmark.url.split("://")[1].split("#")[0], "/");

	let folderSection = "";
	if (folder != undefined) {
		folderSection = `<span class="col-cv-collections-span">${folder}</span>`;
	}

	console.log(index);

	let offset = "left: " + (270 + ((192 + 14) * index)) + "px; top: 89px;";

	let tmp = document.createElement("span");
	tmp.innerHTML = `<a id="lc_${id}" tabindex="0" aria-label="${title}" role="listitem" href="${url}" class="col-cv" style="${offset} width: 192px; height: 224px;">
						<div class="col-cv-overlay" style="user-select: none; left: 0px; top: 0px; width: 192px; height: 144px;"></div>
						<div>
							<div class="col-context-menu-button" role="button" aria-expanded="false" tabindex="-1" aria-haspopup="true" aria-label="More options" style="user-select: none; left: 168px; top: 152px; width: 24px; height: 24px;">
								<div class="goog-inline-block goog-flat-menu-button-caption"></div>
								<div class="goog-inline-block goog-flat-menu-button-dropdown" aria-hidden="true">&nbsp;</div>
							</div>
						</div>
						<div class="col-cv-content" style="left: 0px; top: 0px; width: 192px; height: 224px;">
							<div class="col-cv-image-base">
								<div class="col-cv-bg col-cv-bg-shown" style="background-image: url(&quot;images/tile-bg-3.jpg&quot;); left: 0px; top: 0px; width: 192px; height: 144px;">
									<div class="col-cv-bg-title">${short_url}</div>
									<div class="col-cv-bg-domain-icon"></div>
								</div>
							</div>
							<div class="col-cv-collections" style="left: 0px; top: 120px;">${folderSection}</div>
							<div class="col-cv-descbg" style="left: 0px; top: 144px; width: 176px; height: 68px;">
								<div class="col-cv-title" title="${title}" style="left: 0px; top: 0px;">${title}</div>
								<div class="col-cv-url" title="${url}" style="left: 0px; top: 0px;">${short_url}</div>
							</div><img class="col-cv-favicon" src="chrome://favicon/${url}" aria-hidden="true" style="display: none; opacity: 0;">
							<div class="col-cv-select" style="left: 150px; top: 14px;">
								<div class="col-list-checkbox"></div>
							</div>
						</div>
					</a>`;

	return tmp.firstChild;
}

chrome.bookmarks.getTree(function(results) {
	results[0].children[1].children.forEach(result => {
		createItem(result);

		if (result.url == undefined) {
			addFolder(result);
		}
	});
});

const bookmarksSection = document.querySelector(".col-tiles-container");
let bookmark_index = 0;
function createItem(item, folder) {
	if (item.url) {
		bookmarksSection.appendChild(buildBookmark(item, folder, bookmark_index));
		bookmark_index++;
	}

	if (item.children && item.children.length >= 1) {
		item.children.forEach(subItem => {
			createItem(subItem, item.title);
		});	
	}
}

function addFolder(folder) {
	const folderList = document.querySelector("div.col-nav-section.col-nav-tags > ul");

	let folderItem = document.createElement("li");
	folderItem.setAttribute("tabindex", "-1");
	folderItem.setAttribute("role", "listitem");
	folderItem.className = "col-nav-item";
	folderItem.innerText = folder.title;

	let folderExpand = document.createElement("div");
	folderExpand.className = "col-nav-expander";
	folderItem.appendChild(folderExpand);

	folderList.appendChild(folderItem);
}

function resize() {
	let navBtnOffset = document.body.clientWidth - 410;
	if (navBtnOffset < 532) {
		navBtnOffset = 532;
	}

	document.querySelector(".col-tb-buttons").style.transform = "translate(" + navBtnOffset + "px, 0px)";
}
window.addEventListener("resize", resize);
resize();