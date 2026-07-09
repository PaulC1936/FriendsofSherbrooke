gsap.registerPlugin(ScrollTrigger);

/* SCROLL TIMEOUT  */
var loadingScreen = document.querySelector(".loading");
window.addEventListener('load', function() {
    loading.style.display = 'none';
  })

  /*const startTime = performance.now();
  const fernStatic = document.querySelector('fernStatic')
  const fernTime = document.querySelector('fernyvid');
  fernTime.addEventListener('load',(event) => {
      const loadTime = performance.now() - startTime;
      if (loadTime>3200){
        fernTime.style.display = 'none';
        fernStatic.style.display = 'block'
      }
        else {
        fernTime.style.display = 'block';
        fernStatic.style.display = 'none'
        }

  });*/

         /*let fernyvid = document.getElementById("fernyvid");
        fernyvid.addEventListener('timeupdate', function() {
            if (this.currentTime >= 6.9) {
                this.currentTime = 3.9;
                this.play(); 
            }
        }, false);
  document.getElementById("fernyvid").load();*/


function spaceOff(){
    document.getElementById('space').style.backgroundImage ='none';
}

function fernOn(){
    frond.style.display ='block';
}

function spritesOff() {
    plantsWrap.style.display = 'none';
}

function logosOn() {
    fbLogo.style.display = 'block';
    igLogo.style.displaay = 'block';
}


const lenis = new Lenis({
    duration: 4,

});

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 2000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);

let tl = gsap.timeline({
    onStart: fernOn() + logosOn(),
    scrollTrigger: {
      trigger: ".space", // Element that triggers the scroll
      start: "top bottom",   // When top of container hits center of viewport
      end: "top 70%", // End point
      scrub: true, 
      pin: true,   // Links animation to scrollbar (smoothly)
      markers: false,
      onComplete: spritesOff,
      
}
  });
tl.fromTo("body", {backgroundColor: '#d2b48c'}, {backgroundColor: '#eff5eb'});
tl.fromTo("#fernStatic", {scale: 1, y:'0vh'}, {scale: 0.5, y: '15vh', duration: 2});
tl.fromTo("#frond", {yPercent: '300%', opacity: 0, rotate: 0}, {yPercent: '0%', opacity: 1, rotate: 0});
tl.fromTo("#plantsWrap", {opacity: 1}, {opacity: 0});
tl.fromTo(".logoDiv", {opacity: 0}, {opacity: 1, stagger: 2})
/*tl.fromTo("#fbLogo", {xPercent: '200', yPercent: '0', opacity: 1}, {opacity: 1, xPercent: '0', yPercent: '0'});
tl.fromTo("#igLogo", {opacity: 1, xPercent: '-200'}, {opacity: 1, xPercent: '0'});*/
tl.fromTo(".flexMenu", {xPercent: '-200', opacity: 1, scale: 0}, {xPercent: '0', opacity: 1, scale: 1, stagger: 4, duration: 2, ease: "elastic.out(2,0.4)"})








    

