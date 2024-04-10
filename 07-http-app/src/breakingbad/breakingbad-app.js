

/**
 * 
 * @returns {Promise<Object>}
 */
const fectchQuote = async () => {
    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes')
    const data = await res.json()

    console.log(data[0]);

    return data[0]
}




/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingbadApp = async (element) => {

    document.querySelector('#app-title').innerHTML = 'BRAKINGBAD APP'
    element.innerHTML = '...Loading'

    const quoteLabel = document.createElement('blockquote')
    const authorLabel = document.createElement('h4')
    const nextQuoteButton = document.createElement('button')
    nextQuoteButton.innerText = 'Next Quote'



    const renderQuote = (data) => {

        quoteLabel.innerHTML = data.quote;
        authorLabel.innerHTML = data.author;

        element.replaceChildren(quoteLabel, authorLabel, nextQuoteButton)

    }

    nextQuoteButton.addEventListener('click', async () => {

        nextQuoteButton.disabled = true
        element.innerHTML = '...loading'
        const nuevaQuote = await fectchQuote()
        renderQuote(nuevaQuote)
        nextQuoteButton.disabled = false

    })


    const quote = await fectchQuote()

    renderQuote(quote)

}


