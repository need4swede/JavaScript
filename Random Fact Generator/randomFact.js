/*
	Created by: Need4Swede
    Contact: theneed4swede@gmail.com
    Random Facts Source: https://uselessfacts.jsph.pl/

    // Displays a random fact in #randomfact HTML element
*/

// FILTER OUT FACTS WITH THESE WORDS!
factFilter = ["voldemort"];

// FUNCTION LOGIC
function getRandomFact() {
    
    // CREATE TITLE CASE ARRAY
    for(let i = 0; i<factFilter.length; i++){
        factFilterTitleCase = [];
        index = factFilter[i];
        titleCase(index);
        function titleCase(index){
            factFilterTitleCase.push(index[0].toUpperCase() + index.slice(1).toLowerCase());
          }
    }
    // CREATE UPPERCASE ARRAY
    for(let i = 0; i<factFilter.length; i++){
        factFilterUpperCase = [];
        index = factFilter[i];
        upperCase(index);
        function upperCase(index){
            factFilterUpperCase.push(index[0].toUpperCase());
          }
    }
    // OUTPUT WHEN FILTER CATCHES A FORBIDDEN PHRASE
    function filterRandomFact(word) {
        console.log('Fact filter caught a naughty fish!\nParsing new fact :)');
        console.log(`The Fish: ${word}`);
    }

    // FACT FETCHER
    const factText = document.querySelector('#randomfact');
    fetch(`https://uselessfacts.jsph.pl/random.json?language=en`)
    .then(res => res.json())
    .then(data => {
            for(let i = 0; i < factFilter.length; i++){
                // FILTER PHRASES (LOWERCASE)
                if (data.text.indexOf(factFilter[i]) != -1) {
                    filterRandomFact(factFilter[i]);
                    getRandomFact();
                }
                // FILTER PHRASES (UPPERCASE)
                if (data.text.indexOf(factFilterUpperCase[i]) != -1) {
                    filterRandomFact(factFilter[i]);
                    getRandomFact();
                }
                // FILTER PHRASES (TITLE CASE)
                if (data.text.indexOf(factFilterTitleCase[i]) != -1) {
                    filterRandomFact(factFilter[i]);
                    getRandomFact();
                }
            }
            // OUTPUT FACT TO ELEMENT
            factText.innerHTML = `${data.text}`;      
    })
} getRandomFact()

