console.log(window.innerHeight);

const bar = document.getElementsByClassName('bar')[0];
bar.onclick = function(){
    const menuItem = window.getComputedStyle(document.getElementsByClassName('menu-item')[0]).display;
if(menuItem == 'none'){
    document.getElementsByClassName('menu-item')[0].style.display='flex'; 
}else{
    document.getElementsByClassName('menu-item')[0].style.display='';
}

}


window.onscroll=function(e){
    let wh = window.innerHeight - 160;
    let litem = document.getElementsByClassName('item-5')[0].getBoundingClientRect().top;
    if(wh>litem){
        document.getElementsByClassName('item-5')[0].classList.add('rotate');
    }
}

