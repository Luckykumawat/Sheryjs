// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

gsap.from(".nleft",{
   stagger: .1,
   y: 10,
   opacity: 0,
   duration: 2,
   ease: power3,
})

// shery js text animation 

// Shery.textAnimate(".eftext h1", {
//     style: 5,
//     y: 10,
//     delay: 0.1,
//     duration: 2,
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     multiplier: 0.1,
//   });


  Shery.imageEffect("#susimg img", {
    style: 4,
    debug: true
   
  })

  var ht = document.querySelector(".think button").addEventListener("mouseover",function(){
    
    ht.style.opacity = 1
    
    // gsap.to("#last video",{
        
    //         opacity: 1,
    //     duration: 1,
    //     ease: Power3
        
    // })
  })

  document.querySelector(".think button").addEventListener("mouseleave",function(){
    gsap.to("#last video",{
        
        opacity: 0,
    duration: 1
    
})
  })