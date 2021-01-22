window.addEventListener('load', () => {
    //Quote Array
    let quoteZeroDb = ["Happiness", "Love For All,", "Change the world", "Never regret anything", "Die with memories,", "Aspire to inspire", "What consumes your mind"]
    let quoteOneDb = ["Is a Butterfly", "Hatred For None.", "by being yourself.", "that made you smile", "not dreams.", "before we expire.", "controls your life"]

    //Color Array
    let hexArray = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'] 
    let hexCode = '#'
    let hexItem = '#'

    let containerLeft = document.querySelector('.container-left')
    let containerRight = document.querySelector('.container-right')

    function switchBG(){
        for (i = 0; i < 6; i++) {
            let index = Math.floor(Math.random()*hexArray.length)
            hexCode += hexArray[index]
            // containerRight.style.backgroundColor = hexCode
        } 
        containerRight.style.backgroundColor = hexCode
        hexCode = '#'

        for (i = 0; i < 6; i++){
            let item = Math.floor(Math.random()*hexArray.length)
            // console.log(item)
            hexItem += hexArray[item]
        }
        containerLeft.style.backgroundColor = hexItem
        hexItem = '#'
    }
    

    let quote0 = document.querySelector('#quote-0')
    let quote1 = document.querySelector('#quote-1')

    function switchQuoteZero (){
        let index = Math.floor(Math.random() * 7)
        quote0.innerHTML = quoteZeroDb[index]
        quote1.innerHTML = quoteOneDb[index]
    }

    let quoteZero = document.querySelector('.quote-zero')
    let quoteOne = document.querySelector('.quote-one')

    setInterval(function(){
        switchQuoteZero()
        switchBG()
        quoteZero.classList.toggle('animate-0')
        quoteOne.classList.toggle('animate-1')
    }, 2000)
})