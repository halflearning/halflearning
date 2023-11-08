let link = document.createElement("link");
link.rel = "stylesheet";
link.href = "/prenext.css"
document.head.appendChild(link);
/**_________url___ */
const url = new URL(window.location);
console.log(url.hostname);
console.log(url.pathname);
/*_____box  start */
let pnBox = document.createElement("div");
pnBox.className = "pnBox";
let preBtn = document.createElement("a");
preBtn.className = "preBtn";
let nextBtn = document.createElement("a");
nextBtn.className = "nextBtn";
let b = document.body.getElementsByClassName('right')[0].getElementsByClassName('container')[0];
const anchor = document.getElementById('left1').getElementsByTagName('a');
for (var i = 0; i < anchor.length; i++) {
    if (anchor[i].className == 'activel') {
        console.log(i);
        if (i == 0) {
            preBtn.appendChild(document.createTextNode("❮ Home"));
            preBtn.href = "https://" + url.hostname;
            /*_______next start________*/
            nextBtn.appendChild(document.createTextNode("Next ❯"));
            nextBtn.href = anchor[i + 1].href;
              /*___________slide sub post _______*/
             if(anchor[i].nextElementSibling.className=='subpost-title'){
                $(anchor[i].nextElementSibling).slideDown();  
             }
            /*____________slide subpost end ________*/
        } else if (i >= 1) {
            preBtn.appendChild(document.createTextNode("❮ Previous"));
            preBtn.href = anchor[i - 1].href;
            /*________next start______*/
            if (i < anchor.length - 1) {
                nextBtn.appendChild(document.createTextNode("Next ❯"));
                nextBtn.href = anchor[i + 1].href;
                /*___________slide sub post _______*/
                if(anchor[i].nextElementSibling.className=='subpost-title'){
                    $(anchor[i].nextElementSibling).slideDown();  
                 }
                /*____________slide subpost end ________*/

            } else if (i == anchor.length - 1) {
                nextBtn.appendChild(document.createTextNode("Next ❯"));
                nextBtn.href = "javascript:void(0)";
                nextBtn.style.background = "#EA2027";
                /*___________slide sub post _______*/
                if(anchor[i].nextElementSibling.className=='subpost-title'){
                  $(anchor[i].nextElementSibling).slideDown();  
                }
                /*____________slide subpost end ________*/
            }
        }
    }
}
pnBox.appendChild(preBtn);
pnBox.appendChild(nextBtn);
b.getElementsByTagName('h1')[0].insertAdjacentElement('afterend', pnBox);
b.insertAdjacentElement('beforeend', pnBox.cloneNode(true));