const pathname=window.location.pathname;const path=pathname.split('/');if(path[2]==''){document.getElementById('left1').children[1].classList.add('activel');} let nava=document.getElementById('nav').children;for(var i=4;i<nava.length;i++){if(path[1]==(nava[i].innerHTML).toLowerCase()){nava[i].className+=' activel';}}
if (document.getElementById('left1').getElementsByClassName('activel')[0].parentElement.className == 'subpost-title') {
    document.getElementById('left1').getElementsByClassName('activel')[0].parentElement.style.display = 'block';
};
