const home = document.getElementById("home");
const home2 = document.getElementById("home2");
const about = document.getElementById("about");
const skills = document.getElementById("skills");
const works = document.getElementById("works");
const contact = document.getElementById("contact");
const home3 = document.getElementById("home3");
const hiddenElm = document.querySelectorAll(".hidden");
const hiddenlefttoright = document.querySelectorAll(".hiddenlefttoright");
const hiddenrighttoleft = document.querySelectorAll(".hiddenrighttoleft");
let options = {
	root: null,
	rootMargin: "0px",
	threshold: .9
};
const observer = new IntersectionObserver((e, o) => {
	e.forEach(e => {
		e.isIntersecting ? e.target.classList.add("show") : e.target.classList.remove("show")
	})
});
function isNavItemActive(what){
    var b = document.getElementsByClassName('nav-item');
    for(var a = 0; a<b.length;a++){
        if(what == "home"){
            b[a].classList.remove('active-border');
            b[a].classList.add('inactive-border');
            b[0].classList.add('active-border');
            b[0].classList.remove('inactive-border');
        }else if(what == "about"){
            b[a].classList.remove('active-border');
            b[a].classList.add('inactive-border');
            b[1].classList.add('active-border');
            b[1].classList.remove('inactive-border');
        }else if(what == "skills"){
            b[a].classList.remove('active-border');
            b[a].classList.add('inactive-border');
            b[2].classList.add('active-border');
            b[2].classList.remove('inactive-border');
        }else if(what == "works"){
            b[a].classList.remove('active-border');
            b[a].classList.add('inactive-border');
            b[3].classList.add('active-border');
            b[3].classList.remove('inactive-border');
        }else if(what == "contact"){
            b[a].classList.remove('active-border');
            b[a].classList.add('inactive-border');
            b[4].classList.add('active-border');
            b[4].classList.remove('inactive-border');
        }
    }
}
hiddenlefttoright.forEach(e => observer.observe(e));
hiddenrighttoleft.forEach(e => observer.observe(e));
hiddenElm.forEach(e => observer.observe(e));
home.onclick = function() {
    isNavItemActive("home");
	hiddenlefttoright.forEach(e => observer.observe(e));
    hiddenrighttoleft.forEach(e => observer.observe(e));
    hiddenElm.forEach(e => observer.observe(e));
    document.body.scrollIntoView();
}, 
home2.onclick = function() {
    isNavItemActive("about");
	hiddenlefttoright.forEach(e => observer.observe(e));
    hiddenrighttoleft.forEach(e => observer.observe(e));
    hiddenElm.forEach(e => observer.observe(e));
    document.getElementById("secondpage").scrollIntoView();
}, 
home3.onclick = function() {
	hiddenlefttoright.forEach(e => observer.observe(e));
    hiddenrighttoleft.forEach(e => observer.observe(e));
    hiddenElm.forEach(e => observer.observe(e));
    document.getElementById("firstpage").scrollIntoView();
}, 
about.onclick = function() {
    isNavItemActive("about");
	hiddenlefttoright.forEach(e => observer.observe(e));
    hiddenrighttoleft.forEach(e => observer.observe(e));
    hiddenElm.forEach(e => observer.observe(e));
    document.getElementById("secondpage").scrollIntoView();
}, 
skills.onclick = function() {
    isNavItemActive("skills");
	hiddenlefttoright.forEach(e => observer.observe(e));
    hiddenrighttoleft.forEach(e => observer.observe(e));
    hiddenElm.forEach(e => observer.observe(e));
    document.getElementById("thirdpage").scrollIntoView();
}, 
works.onclick = function() {
    isNavItemActive("works");
	hiddenlefttoright.forEach(e => observer.observe(e));
    hiddenrighttoleft.forEach(e => observer.observe(e));
    hiddenElm.forEach(e => observer.observe(e));
    document.getElementById("fourthpage").scrollIntoView();
}, 
contact.onclick = function() {
    isNavItemActive("contact");
	hiddenlefttoright.forEach(e => observer.observe(e));
    hiddenrighttoleft.forEach(e => observer.observe(e));
    hiddenElm.forEach(e => observer.observe(e));
    document.getElementById("fifthpage").scrollIntoView();
}, 
document.getElementById("")
document.body.onload = function() {
    setInterval(displayHello, 20000);
    function displayHello() {
        var element = document.getElementsByClassName("toggleTrigger");
        for(var a = 0; a<element.length;a++){
            element[a].classList.toggle("hideIt");
        }
    }
	$("#target").clearIt().typeIt("Lenbnard Estuisat", .06, "text").pauseIt(1).deleteIt(33, .09).typeIt("Lenarnd Estiujsa", .05, "text").pauseIt(1).deleteIt(33, .09).typeIt("Lennard Estuista", .05, "text").hideCursor();
};

document.getElementById('contactSubmit').onsubmit = function(e) {
	e.preventDefault();
	alert('This don\'t have function yet. Sorry!');
};
$('.navbar-nav>li>a').on('click', function() {
	$('.navbar-collapse').collapse('hide');
});