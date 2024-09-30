fetch('/partials/headers.html')
    .then(response => {
        if (!response.ok) throw new Error('something went horribly horribly wrong maybe');
        return response.text();
    })
    .then(data => {
        // console.log('loading headers')
        // document.getElementsByTagName('head')[0].innerHTML + data;
        // console.log('loaded headers')
    })
    .catch(error => console.error('Error loading:', error));
    