Shery.imageEffect("#back", {style: 5, config:{"a":{"value":0.69,"range":[0,30]},"b":{"value":-0.98,"range":[-1,1]},"zindex":{"value":"-9996999","range":[-9999999,9999999]},"aspect":{"value":2.08442978686133},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":15,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.24,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.53,"range":[0,10]},"metaball":{"value":0.15,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":11.45,"range":[0,100]}}, gooey: true})

var elems = document.querySelectorAll(".elem");

elems.forEach(function(elem) {
    var h1s = elem.querySelectorAll("h1");
    elem.index = 0;
    elem.animating = false;
});

document.querySelector("#main").addEventListener("click", function() {
    elems.forEach(function(elem) {
        if (!elem.animating) {
            elem.animating = true;
            var h1s = elem.querySelectorAll("h1");
            let current = elem.index;

            // Animate current h1 out
            gsap.to(h1s[current], {
                top: "-=100%",
                ease: "expo.inOut",
                duration: 1,
                onComplete: function () {
                    gsap.set(h1s[current], { top: "100%" });
                    elem.animating = false;
                },
            });

            // Update index for next h1
            elem.index = (current + 1) % h1s.length;

            // Animate next h1 in
            gsap.to(h1s[elem.index], {
                top: "-=100%",
                ease: "expo.inOut",
                duration: 1,
            });
        }
    });
});


