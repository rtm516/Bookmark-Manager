const bookmarkWidth = 192;
const bookmarkHeight = 224;
const bookmarkSeperation = 14;
const bookmarkXBorder = 36;
const bookmarkYBorder = 31;
const bookmarksSection = document.querySelector(".col-tiles-container");
const bookmarkSelect = document.querySelector(".col-ab-bar");
const bookmarkSelectCount = document.querySelector(".col-ab-count");

let bookmark_index = 0;
let bookmarkXCount = 0;

function betterTrim(str, trimChar) {
	return str.replace(new RegExp("^[" + trimChar + "]+|[" + trimChar + "]+$", "g"), "");
}

function buildBookmark(bookmark, folder, index) {
	let id = bookmark.id;
	let title = bookmark.title;
	let url = bookmark.url;
	let short_url = bookmark.url;
	if (short_url.startsWith("chrome") || short_url.startsWith("http")) {
		short_url = betterTrim(bookmark.url.split("://")[1].split("#")[0], "/");
	}

	let folderSection = "";
	if (folder != undefined) {
		folderSection = `<span class="col-cv-collections-span">${folder}</span>`;
	}

	let image = "images/tile-bg-" + (Math.round(Math.random() * 7) + 1) + ".jpg";

	let offset = "left: " + (234 + bookmarkXBorder + ((bookmarkWidth + bookmarkSeperation) * (index % bookmarkXCount))) + "px; top: " + (58 + bookmarkYBorder + ((bookmarkHeight + bookmarkSeperation) * Math.floor(index / bookmarkXCount))) + "px;";

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
								<div class="col-cv-bg col-cv-bg-shown" style="background-image: url(&quot;${image}&quot;); left: 0px; top: 0px; width: 192px; height: 144px;">
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

function renderFolder(folderID) {
	chrome.bookmarks.getSubTree(folderID, function(folder) {
		bookmarksSection.innerHTML = "";

		folder[0].children.forEach(result => {
			createItem(result);
		});

		resize();
	});
}

document.querySelector(".col-nav-all").addEventListener("click", function() {
	document.querySelectorAll("div.col-nav-section .col-nav-item-selected").forEach(element => {
		element.className = "col-nav-item";
	});

	renderFolder("2");
});

document.querySelector(".col-nav-bookmarks-bar").addEventListener("click", function() {
	document.querySelectorAll("div.col-nav-section .col-nav-item-selected").forEach(element => {
		element.className = "col-nav-item";
	});

	renderFolder("1");
});

chrome.bookmarks.getTree(function(results) {
	results[0].children[1].children.forEach(result => {
		createItem(result);

		if (result.url == undefined) {
			addFolder(result);
		}
	});

	resize();
});

function updateSelectDisplay() {
	//col-ab-bar
	//col-ab-bar-visible
	//bookmarkSelect

	let selected = document.querySelectorAll(".col-cv-selected");
	if (selected.length >= 2) {
		if (!bookmarkSelect.classList.contains("col-ab-bar-visible")) {
			bookmarkSelect.classList.add("col-ab-bar-visible");
		}

		bookmarkSelectCount.innerText = selected.length + " selected";
	}else{
		bookmarkSelect.classList.remove("col-ab-bar-visible");
	}
}

function createItem(item, folder) {
	if (item.url) {
		let newBookmark = buildBookmark(item, folder, bookmark_index);
		newBookmark.addEventListener("click", function() {
			if (newBookmark.classList.contains("col-cv-selected")) {
				newBookmark.classList.remove("col-cv-selected");
				updateSelectDisplay();
				
				event.preventDefault();
				return;
			}


			let closestSelect = event.target.closest(".col-cv-select");
			if (closestSelect && newBookmark.contains(closestSelect)) {
				newBookmark.classList.add("col-cv-selected");
				updateSelectDisplay();
				
				event.preventDefault();
				return;
			}

			let closestMenu = event.target.closest(".col-context-menu-button");
			if (closestMenu && newBookmark.contains(closestMenu)) {
				console.log(2);
				
				event.preventDefault();
				return;
			}

			window.open(item.url, "_blank");
			event.preventDefault();
		});

		bookmarksSection.appendChild(newBookmark);
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
	folderItem.setAttribute("data-id", folder.id);
	folderItem.className = "col-nav-item";
	folderItem.innerText = folder.title;

	folderItem.addEventListener("click", function() {
		document.querySelectorAll("div.col-nav-section .col-nav-item-selected").forEach(element => {
			element.className = "col-nav-item";
		});

		folderItem.className = "col-nav-item col-nav-item-selected";

		renderFolder(folder.id);
	});

	let folderExpand = document.createElement("div");
	folderExpand.className = "col-nav-expander";
	folderItem.appendChild(folderExpand);

	folderList.appendChild(folderItem);
}

function doSearch(searchQry) {
	const searchList = document.querySelector("ul.sbsb_b");
	searchList.parentElement.parentElement.parentElement.parentElement.style.display = "none";

	if (searchQry !== undefined) {
		document.querySelector("#colgbqfq").value = searchQry;
	}

	let searchStr = document.querySelector("#colgbqfq").value;
	if (searchStr === "") {
		renderFolder("2");
	}else{
		chrome.bookmarks.search(searchStr, function(searchResult) {
			bookmarksSection.innerHTML = "";
	
			searchResult.forEach(result => {
				createItem(result);
			});
	
			resize();
		});
	}
}

document.querySelector("#colgbqfq").addEventListener("input", function() {
	let searchQry = this.value;
	  
	let searchReq = new XMLHttpRequest();
	searchReq.addEventListener("load", function() {
		let searchData = JSON.parse(this.responseText);
		const searchList = document.querySelector("ul.sbsb_b");
		searchList.parentElement.parentElement.parentElement.parentElement.style.display = "unset";
		searchList.innerHTML = "";
		searchData[1].forEach((result, id) => {
			let text = result[0];

			let el = document.createElement('span');
			el.innerHTML = `<li role="presentation" class="sbsb_c col-ogb-text" dir="ltr" style="text-align: left;"><div role="option" id="sbse${id}"><div class="sbqs_a"></div><div class="sbqs_c">${text}</div></div></li>`;
			el.firstChild.addEventListener("mouseover", function(e) {
				e.path.forEach(elem => {
					if (elem.tagName === "LI") {
						elem.classList.add("sbsb_d");
					}
				});
			});
			el.firstChild.addEventListener("mouseout", function(e) {
				e.path.forEach(elem => {
					if (elem.tagName === "LI") {
						elem.classList.remove("sbsb_d");
					}
				});
			});

			el.firstChild.addEventListener("click", function(e) {
				e.path.forEach(elem => {
					if (elem.className === "sbqs_c") {
						doSearch(elem.innerText);
					}
				});
			});

			searchList.appendChild(el.firstChild);
		});
	});
	searchReq.open("GET", "https://clients1.google.com/complete/search?client=stars&gs_rn=64&gs_ri=stars&cp=" + searchQry.length + "&q=" + encodeURI(searchQry) + "&xhr=t");
	searchReq.send();
});

document.querySelector("#colgbqfq").addEventListener("keypress", function(e) {
	if (e.keyCode === 13) {
		doSearch();
    }
});










function sizePage() {
	let height = (58 + bookmarkYBorder + bookmarkYBorder - bookmarkSeperation + ((bookmarkHeight + bookmarkSeperation) * Math.ceil(bookmark_index / bookmarkXCount)));
	document.querySelector(".col-curationv").style.height = height + "px";
}

function resize() {
	let navBtnOffset = document.body.clientWidth - 410;
	if (navBtnOffset < 532) {
		navBtnOffset = 532;
	}

	document.querySelector(".col-tb-buttons").style.transform = "translate(" + navBtnOffset + "px, 0px)";

	let availableWidth = (document.body.clientWidth - 234 - (bookmarkXBorder * 2));
	bookmarkXCount = 0;
	while (availableWidth > 0) {
		availableWidth -= bookmarkWidth + bookmarkSeperation;
		bookmarkXCount++;
	}
	bookmarkXCount--;

	document.querySelector(".col-tlv").style.width = (bookmarkXCount * (bookmarkWidth + bookmarkSeperation) - bookmarkSeperation) + "px";

	document.querySelectorAll(".col-tiles-container > a").forEach((element, index) => {
		let offsetLeft = (234 + bookmarkXBorder + ((bookmarkWidth + bookmarkSeperation) * (index % bookmarkXCount))) + "px";
		let offsetTop = (58 + bookmarkYBorder + ((bookmarkHeight + bookmarkSeperation) * Math.floor(index / bookmarkXCount))) + "px";
		element.style.left = offsetLeft;
		element.style.top = offsetTop;
	});

	sizePage();
}
window.addEventListener("resize", resize);
resize();