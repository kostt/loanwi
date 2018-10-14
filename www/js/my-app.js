// Initialize app
var myApp = new Framework7({
    modalTitle: "Пицца лисицца",
    precompileTemplates: true,
});


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;


// Add view
var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true
});



function onLoad() {
    mainView.hideNavbar();
    document.addEventListener("deviceready", onDeviceReady, false);

}


function onDeviceReady() {


}



myApp.onPageBack('*', function (page) {
    myApp.closePanel();
    mainView.hideNavbar();
});




myApp.onPageInit('apply', function (page) {
    myApp.closePanel();
    mainView.showNavbar();
});

myApp.onPageInit('about-us', function (page) {
    myApp.closePanel();
    mainView.showNavbar();
});

myApp.onPageInit('how-it-works', function (page) {
    myApp.closePanel();
    mainView.showNavbar();
});

myApp.onPageInit('privacy-policy', function (page) {
    myApp.closePanel();
    mainView.showNavbar();
});

myApp.onPageInit('lending-policy', function (page) {
    myApp.closePanel();
    mainView.showNavbar();
});

myApp.onPageInit('terms-of-use', function (page) {
    myApp.closePanel();
    mainView.showNavbar();
});

myApp.onPageInit('faq', function (page) {
    myApp.closePanel();
    mainView.showNavbar();
});






