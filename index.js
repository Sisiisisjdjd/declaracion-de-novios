const yesBtn = document.querySelector('#yesBtn')

yesBtn.addEventListener('click', function(){
    alert('SABIA QUE DIRIAS QUE SI MI PRINCESA HERMOSA')
    alert('ME HACES MUY FELIZ MI COSITA LINDA')
})

const noBtn = document.querySelector('#noBtn')

noBtn.addEventListener('mouseover', function(){
    const randomX = parseInt(Math.random()*100)
    const randomY = parseInt(Math.random()*100)

    noBtn.style.setProperty('toop', randomX+'%')
    noBtn.style.setProperty('left', randomY+'%')
} )
