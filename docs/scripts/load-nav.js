window.addEventListener("DOMContentLoaded", (event) => {
    setTimeout(function(){
        fetch('/partials/navbar.html')
        .then(response => {
            if (!response.ok) throw new Error('erm');
            return response.text();
        })
        .then(data => {
            document.getElementsByClassName('NavBar-wrap')[0].innerHTML = data;
        })
        .catch(error => console.error('Error loading navbar:', error));

    }, 205);
// ----- end -----
});