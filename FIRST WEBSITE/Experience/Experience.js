const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
  });
  
  var timeout;
  var cursor; 
  
  function cursorFollow(xscale, yscale) {
    window.addEventListener("mousemove", function(dets) {
      cursor = document.querySelector("#curser");
      cursor.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    });
  }
  
  function ovaleffect() {
    var xscale = 1;
    var yscale = 1;
    var xprev = 0;
    var yprev = 0;
  
    window.addEventListener("mousemove", function(dets) {
      clearTimeout(timeout);
      xscale = gsap.utils.clamp(.7, 1.3, dets.clientX - xprev);
      yscale = gsap.utils.clamp(.7, 1.3, dets.clientY - yprev);
      xprev = dets.clientX;
      yprev = dets.clientY;
      cursorFollow(xscale, yscale);
  
      timeout = setTimeout(function() {
        cursor.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
      }, 10);
    });
  }

  function firstPageAnim() {
    var tl = gsap.timeline();
    tl.from("#bar", {
        y: "-10",
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut,
      })
      .to(".boundingelem", {
        y: 0,
        duration: 1.2,
        delay: -1,
        ease: Expo.easeInOut,
        stagger: .2,
        opacity: 1
      });
    }
  

  cursorFollow(); 
  ovaleffect();
  firstPageAnim();