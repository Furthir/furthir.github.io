const icons = {
    platforms: {
        "Linux": "../assets/linux.svg",
        "Windows": "../assets/windows.svg",
        "Mac": "../assets/apple.svg"
    },
    links: {
        "Site": "../assets/link.svg",
        "Instance": "../assets/link.svg",
        "Github": "../assets/github-mark-white.svg",
        "Gitlab": "../assets/gitlab.svg"
    }
};

document.addEventListener("DOMContentLoaded", function() {
// load
fetch('../data/alternatives.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(entry => {
            // find category
            const container = document.getElementById(entry.category);
            if (!container) {
                console.warn('no container for category:', entry.category);
                return;
            }

    
        const card = document.createElement('div');
            card.classList.add('card');
        const cardContent = document.createElement('div');
            cardContent.classList.add('card-content');

        // card img
        const cardImage = document.createElement('div');
            cardImage.classList.add('card-image');
            cardImage.innerHTML = `<img src="${entry.appImage}" alt="${entry.appName}" loading="lazy">`;
        cardContent.appendChild(cardImage);

        // card title
        const cardTitle = document.createElement('div');
            cardTitle.classList.add('card-title');

        const cardTitleText = document.createElement('h2');
            cardTitleText.innerHTML = `<img src="${entry.appIcon}" alt="${entry.appName}" loading="lazy"> ${entry.appName}`;

        cardContent.appendChild(cardTitle);
        cardTitle.appendChild(cardTitleText);

        // card desc
        const cardDesc = document.createElement('div');
            cardDesc.classList.add('card-desc');
        const cardDescText = document.createElement('p');
            cardDescText.innerHTML = entry.description;
        cardContent.appendChild(cardDesc);
        cardDesc.appendChild(cardDescText);

        // platforms
        const cardPlatforms = document.createElement('div');
            cardPlatforms.classList.add('card-platforms');
            entry.platforms.forEach(platform => {
                const platformIcon = document.createElement('img');
                    platformIcon.src = icons.platforms[platform.name];
                    platformIcon.alt = platform.name;
                    platformIcon.title = platform.name;
                cardPlatforms.appendChild(platformIcon);
            });
        cardContent.appendChild(cardPlatforms);

        const hdivide = document.createElement('div');
            hdivide.classList.add('h-divide');
        cardContent.appendChild(hdivide);

        // quicklinks
        const alternto = document.createElement('p');
        alternto.innerText = `Alternative to ${entry.altTo}`;
        const quicklinksdiv = document.createElement('div');
            quicklinksdiv.classList.add('quicklinks');
        
        Object.keys(entry.links).forEach(linkType => {
            const quicklink = document.createElement('a');
                quicklink.href = entry.links[linkType];
                quicklink.target = '_blank';
                quicklink.title = entry.appName + ' ' + linkType;
            const quicklinkimg = document.createElement('div');
                quicklinkimg.className = 'quicklinkimg';
                quicklink.appendChild(quicklinkimg);
                quicklinksdiv.appendChild(quicklink);

            // svg 
            const iconPath = icons.links[linkType];
            if (iconPath) {
                fetch(iconPath)
                    .then(response => response.text())
                    .then(svg => {
                        quicklinkimg.innerHTML = svg;
                        quicklinkimg.firstChild.style.borderRadius = '100px';
                    })
                    .catch(error => {
                        console.error('svg not loaded:', error);
                    });
            } else {
                console.warn('no icon for link:', linkType);
            }

        });
        
        quicklinksdiv.appendChild(alternto);
        cardContent.appendChild(quicklinksdiv);

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
