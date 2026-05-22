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

