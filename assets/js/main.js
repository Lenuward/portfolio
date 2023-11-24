const home = document.getElementById("home"),
	home2 = document.getElementById("home2"),
	about = document.getElementById("about"),
	skills = document.getElementById("skills"),
	works = document.getElementById("works"),
	contact = document.getElementById("contact"),
	home3 = document.getElementById("home3"),
	hiddenElm = document.querySelectorAll(".hidden"),
	hiddenlefttoright = document.querySelectorAll(".hiddenlefttoright"),
	hiddenrighttoleft = document.querySelectorAll(".hiddenrighttoleft");
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

hiddenlefttoright.forEach(e => observer.observe(e)), 
hiddenrighttoleft.forEach(e => observer.observe(e)), 
hiddenElm.forEach(e => observer.observe(e)), 
home.onclick = function() {
	hiddenlefttoright.forEach(e => observer.observe(e)), 
    hiddenrighttoleft.forEach(e => observer.observe(e)), 
    hiddenElm.forEach(e => observer.observe(e)), 
    document.body.scrollIntoView()
}, 
home2.onclick = function() {
	hiddenlefttoright.forEach(e => observer.observe(e)), 
    hiddenrighttoleft.forEach(e => observer.observe(e)), 
    hiddenElm.forEach(e => observer.observe(e)), 
    document.getElementById("secondpage").scrollIntoView()
}, 
home3.onclick = function() {
	hiddenlefttoright.forEach(e => observer.observe(e)), 
    hiddenrighttoleft.forEach(e => observer.observe(e)), 
    hiddenElm.forEach(e => observer.observe(e)), 
    document.getElementById("firstpage").scrollIntoView()
}, 
about.onclick = function() {
	hiddenlefttoright.forEach(e => observer.observe(e)), 
    hiddenrighttoleft.forEach(e => observer.observe(e)), 
    hiddenElm.forEach(e => observer.observe(e)), 
    document.getElementById("secondpage").scrollIntoView()
}, 
skills.onclick = function() {
	hiddenlefttoright.forEach(e => observer.observe(e)), 
    hiddenrighttoleft.forEach(e => observer.observe(e)), 
    hiddenElm.forEach(e => observer.observe(e)), 
    document.getElementById("thirdpage").scrollIntoView()
}, 
works.onclick = function() {
	hiddenlefttoright.forEach(e => observer.observe(e)), 
    hiddenrighttoleft.forEach(e => observer.observe(e)), 
    hiddenElm.forEach(e => observer.observe(e)), 
    document.getElementById("fourthpage").scrollIntoView()
}, 
contact.onclick = function() {
	hiddenlefttoright.forEach(e => observer.observe(e)), 
    hiddenrighttoleft.forEach(e => observer.observe(e)), 
    hiddenElm.forEach(e => observer.observe(e)), 
    document.getElementById("fifthpage").scrollIntoView()
}, 
document.body.onload = function() {
    setInterval(displayHello, 20000);
    function displayHello() {
        var element = document.getElementsByClassName("toggleTrigger");
        for(var a = 0; a<element.length;a++){
            element[a].classList.toggle("hideIt");
        }
    }
	$("#target").clearIt().typeIt("Lenbnard Estuisat", .06, "text").pauseIt(1).deleteIt(33, .09).typeIt("Lenarnd Estiujsa", .05, "text").pauseIt(1).deleteIt(33, .09).typeIt("Lennard Estuista", .05, "text").hideCursor()
};

document.getElementById('contactSubmit').onsubmit = function(e) {
	e.preventDefault();
	alert('This don\'t have function yet. Sorry!')
};
$('.navbar-nav>li>a').on('click', function() {
	$('.navbar-collapse').collapse('hide');
});