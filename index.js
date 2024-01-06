document.getElementById('searchInput').addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      document.querySelector('form[role="search"]').submit();   
    }
})
function hanldeSearch (event) {
    event.preventDefault();
    const searchTerm = document.getElementById("searchInput").value;
    if(!searchTerm) alert("Please type to search")
    console.log(searchTerm);
    if (searchTerm.toLowerCase() === 'test') {
        window.location.href = 'https://www.bing.com/search?q=' + encodeURIComponent(searchTerm);
    }

    
}


function fetchNumberFact() {
    const numberElements = document.getElementsByClassName('number');
    for (let i = 0; i < numberElements.length; i++) {
        const numberElement = numberElements[i];
        const number = parseInt(numberElement.textContent, 10); 
        
        const numberFactElement = document.querySelector(`.number-fact-${(i+1)}`); 
        const numberFactHeading = document.querySelector(`.num-heading-${(i+1)}`); 
        if (numberFactElement) {
            const apiUrl = 'http://numbersapi.com/' + number + '/trivia';

            fetch(apiUrl)
                .then(response => response.text())
                .then(data => {
                    numberFactHeading.textContent = "Facts about "+ number
                    numberFactElement.textContent = data;
                })
                .catch(error => {
                    console.error('Error fetching data from Numbers API:', error);
                });
        }
        
    }

}

fetchNumberFact();
function setCurrentYear() {
    const copyrightEl = document.getElementById('copyright');
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    copyrightEl.textContent = `© Microsoft ${year}`

}

setCurrentYear()

