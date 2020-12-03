window.onload = () => {
    const desc1 = document.getElementById('js--description__1');
    const desc2 = document.getElementById('js--description__2');
    const desc3 = document.getElementById('js--description__3');

    setTimeout(function() {
        desc1.style.animationName = "fadeIn";
        desc1.style.opacity = "1";

        setTimeout(function() {
            desc1.style.animationName = "fadeOut";
            desc1.style.opacity = "0";

            setTimeout(function() {
                desc2.style.animationName = "fadeIn";
                desc2.style.opacity = "1";

                setTimeout(function() {
                    desc2.style.animationName = "fadeOut";
                    desc2.style.opacity = "0";

                    setTimeout(function() {
                        desc3.style.animationName = "fadeIn";
                        desc3.style.opacity = "1";

                        setTimeout(function () {
                            desc3.style.animationName = "fadeOut";
                            desc3.style.opacity = "0";

                            setTimeout(function() {
                                window.location.href = "frank.html";
                            },2000);
                        }, 5000);
                    },3000);
                },5000);
            },3000);
        },5000);
    }, 3000);
};

