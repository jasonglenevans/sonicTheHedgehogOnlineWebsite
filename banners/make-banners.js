var banners = {
	top:document.createElement("div"),
	topImage:document.createElement("img")
};
banners.top.appendChild(banners.topImage);
banners.topImage.src = "./src/favicon.png";
banners.topImage.style.float = "left";
banners.topImage.width = 40;
banners.topImage.height = 40;
var bannerLinks = [
{
	name:"Play!",
	id:"playlink",
	href:"play.html",
	openInNewTab:false
},
{
	name:"Home",
	id:"homelink",
	href:"index.html",
	openInNewTab:false
},
{
	name:"Visit Me",
	id:"visitmelink",
	href:"https://scratch.mit.edu/users/gvbvdxx",
	openInNewTab:true,
	float:"right"
},
{
	name:"Fourms",
	id:"sthofourms",
	href:"https://sonicthehedgehogonline.createaforum.com/",
	openInNewTab:true
}
];

banners.top.setAttribute("class","bannerTop");

document.body.appendChild(banners.top);

var i = 0;
var blJSON = null;
while (bannerLinks.length > i) {
	blJSON = bannerLinks[i];
	blJSON.element = document.createElement("a");
	if (blJSON.openInNewTab) {
		blJSON.element.target = "_blank";
	}
	blJSON.element.innerHTML = blJSON.name;
	if (window.bannerSetId == blJSON.id) {
		blJSON.element.setAttribute("class","bannerTopLinkDisabled");
	} else {
		blJSON.element.setAttribute("class","bannerTopLink");
		blJSON.element.href = blJSON.href;
	}
	if (blJSON.float) {
		blJSON.element.style.float = blJSON.float;
	} else {
		blJSON.element.style.float = "left";
	}
	banners.top.appendChild(blJSON.element);
	i += 1;
}