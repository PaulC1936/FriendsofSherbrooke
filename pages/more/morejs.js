gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

window.addEventListener("load", () => {
    document.body.classList.remove("preload");
  });

let smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
	smooth: 3,
    effects: true,
    normalizeScroll: true,
    smoothTouch: 0.1,
}); 



/*let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".row", // Element that triggers the scroll
      start: "bottom 20%",   // When top of container hits center of viewport
      end: "bottom 15%", 
      pin: true,// End point
      scrub: true, 
  // Links animation to scrollbar (smoothly)
      markers: false,
      duration: 2,
      ease: "slow(0.3, 0.7, false)"
      //onComplete: ,
    }
})

tl.fromTo(".slide1", {duration: 2, x: 0}, {x: -1600, duration: 2, ease: "power1.out"});
tl.fromTo(".slide2", {duration: 2, x: 430}, {x: 2000, duration: 3, ease: "power1.out"});
tl.fromTo(".slide3", {duration: 2, xPercent: 0}, {xPercent: 150, ease: "power1.out"});
tl.fromTo(".slideWrap", {opacity: 0, scale: 0}, {opacity: 1, scale: 1,duration: 2, ease: "power1.out"});*/



