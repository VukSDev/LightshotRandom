// $(document).ready(function () {
//     // var url = "https://crossorigin.me/" + "https://prnt.sc/" + getRandomString();
//     // $.get(url, function(response) {  console.log(response);});
// });

// var image = document.getElementById('image');

// function randomImage() {
//     getImageFromLink();
//     image.src = "https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg";
// }

// function getImageFromLink() {

// }


function getRandomString() {
    var result           = '';
    var characters       = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 6; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

function randomImage() {
    var win = window.open("https://prnt.sc/" + getRandomString(), '_blank');
    win.focus();
  }