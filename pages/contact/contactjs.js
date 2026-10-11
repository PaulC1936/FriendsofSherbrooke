gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
	smooth: 3,
    effects: true,
    normalizeScroll: true,
    smoothTouch: 0.1,
}); 

document.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('focus', () => { isInputFocused = true; });
    input.addEventListener('blur', () => { isInputFocused = false; });
});

window.addEventListener('resize', () => {
    // 🛑 Block layout changes if the user is actively trying to type
    if (isInputFocused) return; 
    
    window.addEventListener('resize', function() {
        window.location.reload();
    });
});
/*window.addEventListener('resize', function() {
    window.location.reload();
});*/

