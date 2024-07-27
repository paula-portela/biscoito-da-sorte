const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const fortuneCookie = document.querySelector('.fortune-cookie')
const btnReset = document.querySelector('.btnReset')
const message = document.querySelector('.message')
const phrasesList = [
  "A vida trará coisas boas se tiver paciência.",
  "Não compense na ira o que lhe falta na razão.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "A juventude não é uma época da vida, é um estado de espírito.",
  "Não importa o tamanho da montanha, ela não pode tapar o sol.",
  "Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos."
]

  fortuneCookie.addEventListener('click', showMessage)
  document.getElementById('btnReset').addEventListener('click', handleToggle);

function showMessage (){
  handleToggle()
  message.innerText = phrasesList[Math.round(Math.random() * (phrasesList.length - 1))]
  console.log(message.innerText)

}

function handleToggle() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}


//https://github.com/elinardoamorim/rocketseat-fortune-cookie/blob/master/style.css