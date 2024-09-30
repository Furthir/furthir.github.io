window.addEventListener("DOMContentLoaded", (event) => {
    setTimeout(function(){
        function highlightActiveBtn() {
            // get current url
            const currentPath = window.location.pathname.split('\'').pop(); 
            // console.log(currentPath);

            // only highlight title button if it's at the root directory
            if (currentPath === "/") {
                const titleButton = document.querySelector("body > div.NavBar-wrap > div.NavBar-title")
                titleButton.classList.add('active');
                return;
            }
            
            // get navbar buttons
            const navLinks = document.querySelectorAll('.NavButton');
            navLinks.forEach(button => {
                if (button.getAttribute('onclick').includes(currentPath)) {
                    button.classList.add('active');
                }
            });
    
            // get dropdown content
            const dds = document.querySelectorAll('div.DD > div.DDContent');
            dds.forEach(NavButton => {
                const childLinks = NavButton.querySelectorAll('a');
                

                // highlight dropdown and dd link
                childLinks.forEach(childBtn => {
                    if (childBtn.getAttribute('href').includes(currentPath)) {
                        childBtn.classList.add('active');
                        childBtn.parentElement.style.background = 'linear-gradient(#c200c999 0%, rgba(0,0,0,0.5) 20%)';
                        NavButton.parentElement.querySelector('button.NavButton').classList.add('active'); 
                        
                    }
                });
            });
        }
        highlightActiveBtn();

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
    }, 755);
// ----- end -----
});