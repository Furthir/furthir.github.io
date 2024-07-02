window.addEventListener("DOMContentLoaded", (event) => {
    const el = document.getElementsByClassName('quicklinkimg');

    for (var i = 0; i < el.length; i++) {
        el[i].addEventListener("mouseover", function(event) {
            colored(event);
        });
    }
    for (var i = 0; i < el.length; i++) {
        el[i].addEventListener("mouseout", function(event) {
            uncolored(event);
        });
    }

    function colored(event) {
        const qlEl = event.currentTarget;
        const qlCh = qlEl.querySelector(':first-child');
        const path = qlCh.querySelector('path')
        const pathFill = window.getComputedStyle(path);
        // console.log(pathFill)
        const chFill = pathFill.getPropertyValue('fill');
        qlCh.style.boxShadow = `0px 0px 20px 1px ${chFill}, inset 0px 0px 10px 0px ${chFill}`;
        // console.log(chFill);
        if (!chFill.includes("rgb")) {
            const qlComp = window.getComputedStyle(qlEl);
            const chColor = qlComp.getPropertyValue('lighting-color');
            qlCh.style.boxShadow = `0px 0px 20px 1px ${chColor}, inset 0px 0px 10px 0px ${chColor}`;
            // console.log(qlComp);
            console.log(chColor);
        } else if (chFill.includes("none")) {
            const chColor = pathFill.getPropertyValue('stroke-color');
            qlCh.style.boxShadow = `0px 0px 20px 1px ${chColor}, inset 0px 0px 10px 0px ${chColor}`;
        }
    }

    function uncolored(event) {
        const el = event.currentTarget;
        const ch = el.querySelector(':first-child');
        ch.style.boxShadow = `none`;
    }

});