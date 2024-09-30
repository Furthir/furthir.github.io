document.addEventListener("DOMContentLoaded", function() {
    // load
    fetch('https://api.github.com/users/furthir/repos')
        .then(response => response.json())
        .then(data => {
            data.forEach(entry => {
            const container = document.getElementsByClassName('cards-container')[0];
    
            // create card
            const card = document.createElement('div');
                card.classList.add('card');
                card.style.flexGrow = 0;
                card.style.minWidth = '24vw';
            const cardContent = document.createElement('div');
                cardContent.classList.add('card-content');

                const cardTitle = document.createElement('div');
                cardTitle.classList.add('card-title');

            const cardTitleText = document.createElement('h2');
                cardTitleText.style.fontFamily = 'Baloo';
                cardTitleText.innerHTML = `${entry.name}`;


            // append title
            cardContent.appendChild(cardTitle);
            cardTitle.appendChild(cardTitleText);


            // card desc
            const cardDesc = document.createElement('div');
                cardDesc.classList.add('card-desc');
            const cardDescText = document.createElement('p');
                cardDescText.innerHTML = entry.description;

            // append desc
            cardContent.appendChild(cardDesc);
            cardDesc.appendChild(cardDescText);

            // divider
            const hdivide = document.createElement('div');
                hdivide.classList.add('h-divide');
            cardContent.appendChild(hdivide);

            

            // quicklinks
            const quicklinksdiv = document.createElement('div');
                quicklinksdiv.classList.add('quicklinks');
                quicklinksdiv.style.alignSelf = 'center';
            const quicklink = document.createElement('a');
                quicklink.href = entry.html_url;
                quicklink.target = '_blank';
                quicklink.title = entry.name;
            const quicklinkimg = document.createElement('div');
                quicklinkimg.className = 'quicklinkimg';
                quicklink.appendChild(quicklinkimg);
                quicklinksdiv.appendChild(quicklink);

            // stars
            const starIconPath = '../assets/star.svg';
            const star = document.createElement('div');
            fetch(starIconPath)
                .then(response => response.text())
                .then(svg => {
                    star.innerHTML = svg + ` ${entry.stargazers_count}`;
                    star.firstChild.style.verticalAlign = 'middle';
                })
                .catch(error => {
                    console.error('svg not loaded:', error);
                });
                
            const stars = document.createElement('p');
            stars.appendChild(star);
            quicklinksdiv.appendChild(stars);


            // quicklink icon
            const iconPath = '../assets/github-mark-white.svg';
            fetch(iconPath)
                .then(response => response.text())
                .then(svg => {
                    quicklinkimg.innerHTML = svg;
                    quicklinkimg.firstChild.style.borderRadius = '100px';
                })
                .catch(error => {
                    console.error('svg not loaded:', error);
                });

            cardContent.appendChild(quicklinksdiv);
            // -------------------------------------
          
            // append card-content to card
            card.appendChild(cardContent);
            
            // append card to cards-container
            container.appendChild(card);
        });

          
        })
        .catch(error => {
            console.error('data not loaded:', error);
        });

        
// ----- end -----
});