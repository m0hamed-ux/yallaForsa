$(document).ready(function(){
    const span = document.getElementById("split-text");
    const words = ["Find", "Work", "Connect"];
    span.style.display = 'inline-block'

    var index = 0;
    setInterval(function(){
        const nextLanguage = words[(index + 1) % words.length];
        gsap.to(span,
                    { 
                y: '-200%', duration: 0.5,
                onComplete: ()=>{
                    span.textContent = nextLanguage,
                    gsap.fromTo(span, 
                        {y: '100%'},
                        {y: '0%'}
                );
                index = (index + 1) % words.length;
            } 
        },
        )
    }, 2000);
    for (elt of ['get-started']){
        const getStarted = document.getElementById(elt);
        const shinyEffect = document.createElement('div');
        shinyEffect.classList.add('shiny-effect');
        getStarted.style.position = 'relative';
        getStarted.style.overflow = 'hidden';
    
        shinyEffect.style.position = 'absolute';
        shinyEffect.style.top = 0;
        shinyEffect.style.left = '-100%';
        shinyEffect.style.width = '100%';
        shinyEffect.style.height = '100%';
        shinyEffect.style.background = 'linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%)';
        shinyEffect.style.transform = 'skewX(-30deg)';
        shinyEffect.style.pointerEvents = 'none';
    
        getStarted.appendChild(shinyEffect);
    
        gsap.to(shinyEffect, {
            left: '100%',
            duration: 2,
            repeat: -1,
            ease: 'linear'
        });
    }

})