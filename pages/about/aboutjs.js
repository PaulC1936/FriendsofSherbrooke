gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
	smooth: 3,
    effects: true,
    normalizeScroll: true,
    smoothTouch: 0.1,
}); 

window.addEventListener('resize', function() {
    window.location.reload();
});

function clickBack () {
    let img = getElementById('home');
    img.src="../../homehover.gif";
}

     

/*gsap.to("body", {
    backgroundColor: "#f0ca5a", 
    scrollTrigger: {
      trigger: "smooth-wrapper",
      start: "top top", 
      end: "bottom bottom",
      scrub: true,          
    },
});*/

