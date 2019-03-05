function injectIpsum() {
    var ipsum = document.getElementById('aside-p');
    ipsum.innerText = 'Resilient do-gooder support co-create greenwashing paradigm, social enterprise storytelling. But NGO preliminary thinking segmentation invest program area. Resilient then technology sustainable optimism inclusive. Think tank, mobilize social enterprise move the needle unprecedented challenge framework progress. Entrepreneur, progress low-hanging fruit youth.';
}
injectIpsum();

var conHeight = $(".container").height();
var imgHeight = $(".container img").height();
var gap = (imgHeight - conHeight) / 2;
$(".container img").css("margin-top", -gap);


// if (jQuery) {
//     console.log('yes');
//     $(window).on(load).ready(function (e) {
//         $('#contactModal').trigger('click');
//     });
// }