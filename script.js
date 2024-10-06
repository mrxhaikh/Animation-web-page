var tl = gsap.timeline()

tl.from('h2',{
    y:-30,
    delay:0.3,
    opacity:0,
    duration:0.6
})

tl.from("#nav h4",{
    y:-30,
    opacity:0,
    duration:0.7,
    stagger:0.25
})

tl.from(".left h1",{
        x:-200,
        duration:0.7,
        opacity:0
},'a')

tl.from(".right",{
    x:200,
    opacity:0,
    duration:0.7
},'a')

tl.from(".left button",{
    x:-200,
    duration:0.7,
    opacity:0
})

tl.to('.left button i',{
    marginLeft:'40px',
    duration:0.7,
    repeat:-1,
    yoyo:true
})