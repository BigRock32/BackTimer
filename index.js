let date = new Date('February 14 2023 12:40:00')
// let date = new Date('February 8 2023 15:39:30')

function counts() {
   let now = new Date()
   gap = date - now

   let days = Math.floor(gap / 1000 / 60 / 60 / 24)
   let hours = Math.floor(gap / 1000 / 60 / 60) % 24
   let minutes = Math.floor(gap / 1000 / 60) % 60
   let seconds = Math.floor(gap / 1000) % 60

   // const counterEnd = document.querySelector('.counterEnd')
   const counter = document.querySelector('.counter')

   const title = document.querySelector('.title')
   title.innerText = 'Я вернусь через'


   if (gap < 0) {
      // counterEnd.style.display = 'block'
      counter.style.display = 'none'
      title.innerText = 'Должен был прилететь'
   }

   document.getElementById('d').innerText = days
   document.getElementById('h').innerText = hours
   document.getElementById('m').innerText = minutes
   document.getElementById('s').innerText = seconds

   if (seconds < 10) {
      document.getElementById('s').innerText = '0' + seconds
   }
   if (hours < 10) {
      document.getElementById('h').innerText = '0' + hours
   }
   if (minutes < 10) {
      document.getElementById('m').innerText = '0' + minutes
   }

}

setInterval(counts, 1000)




//form

document.addEventListener('DOMContentLoaded', function () {
   const form = document.getElementById('form')
   form.addEventListener('submit', formSend)

   async function formSend(e) {
      e.preventDefault()

      let error = formValidate(form)
      let errorText = document.querySelector('.form__error-text')

      let formData = new FormData(form)

      if (error === 0) {
         errorText.style.display = 'none'
         form.classList.add('_sending')
         let response = await fetch('sendmail.php', {
            method: 'POST',
            body: formData
         })
         if (response.ok) {
            //et result = await response.json()
            //alert(result.message)
            formPreview.innerHtml = ''
            form.reset()
            form.classList.remove('_sending')
         } else {
            alert('Ошибка')
            form.classList.remove('_sending')
         }
      } else {
         errorText.style.display = 'block'
      }
   }

   function formValidate(form) {
      let error = 0
      let formReq = document.querySelectorAll('._req')

      for (let index = 0; index < formReq.length; index++) {
         const input = formReq[index]
         formRemoveError(input)

         if (input.classList.contains('_text')) {
            if (input.value === '') {
               formAddError(input)
               error++
            }
         }
      }

      return error
   }

   function formAddError(input) {
      input.parentElement.classList.add('_error')
      input.classList.add('_error')
   }

   function formRemoveError(input) {
      input.parentElement.classList.remove('_error')
      input.classList.remove('_error')
   }
})



document.addEventListener("DOMContentLoaded", function () {
   new TypeIt("#element", {
      strings: ["Надеюсь, что не замерзнем. Постараемся хотя бы"],
   }).go();
});


//lottie visible
const clickText = document.querySelector('.click-text')
const anim = lottie

clickText.addEventListener('click', onClick)

function onClick() {
   showLottie()
   anim.loadAnimation({
      container: document.querySelector('#lottie-2'),
      rerender: 'svg',
      loop: false,
      autoplay: true,
      path: './heart-kiss.json'
   })

   removeLottieMoment()
   setTimeout(removeLottie, 2700)
}

const lottieHidden = document.querySelector('.lottie-hidden')

function showLottie() {
   document.getElementById('lottie-2').style.opacity = 1
}

function removeLottie() {
   document.getElementById('lottie-2').style.opacity = 0
   let lottieHiddenNodeList = lottieHidden.childNodes
   let lottieHiddenArr = Array.from(lottieHiddenNodeList)

   //for (let i = 0; i < lottieHiddenArr.length; i++) {
   if (lottieHiddenArr.length !== 0) {
      console.log('ok')
      lottieHiddenArr[0].remove()
   }
   //}
   console.log(lottieHiddenArr);
}

function removeLottieMoment() {
   // document.getElementById('lottie-2').style.opacity = 0
   let lottieHiddenNodeList = lottieHidden.childNodes
   let lottieHiddenArr = Array.from(lottieHiddenNodeList)

   if (lottieHiddenArr.length >= 1) {
      console.log('ok')
      lottieHiddenArr[0].remove()
   }
}


// console.log(lottieArray.childNodes.length);

anim.loadAnimation({
   container: document.querySelector('#lottie'),
   rerender: 'svg',
   loop: true,
   autoplay: true,
   path: './hearts.json'
})