if (Navigator.webdriver != undefined) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/td", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onload = function () 
    {
        console.log('ok');
    };
    var data = 'td=' + Navigator.webdriver;
    xhr.send(data);
}