window.addEventListener("DOMContentLoaded", (event) => {
    const dd = document.getElementsByClassName("DD");

    for (var i = 0; i < dd.length; i++) {
        dd[i].addEventListener("mouseover", function(event) {
            showDD(event);
        });
    }
    for (var i = 0; i < dd.length; i++) {
        dd[i].addEventListener("mouseout", function(event) {
            hideDD(event);
        });
    }

    function showDD(event) {
        const btn = event.currentTarget;
        const ddc = btn.getElementsByClassName("DDContent")[0];
        ddc.style.zIndex = '9';
        ddc.style.display = "block";
        ddc.style.opacity = "100";
    }

    function hideDD(event) {
        const btn = event.currentTarget;
        const relBtn = event.relatedTarget;
        const ddc = btn.getElementsByClassName("DDContent")[0];
        if (relBtn && (relBtn === ddc || ddc.contains(relBtn))) {
            return;
        }
        ddc.style.opacity = "0";
        setTimeout(function(){
            ddc.style.display = "none";
        }, 250);
        ddc.style.zIndex = '7';
    }
});