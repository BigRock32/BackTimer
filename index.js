let date = new Date('February 14 2023 12:40:00')

function counts() {
   let now = new Date()
   gap = date - now

   let days = Math.floor(gap / 1000 / 60 / 60 / 24)
   let hours = Math.floor(gap / 1000 / 60 / 60) % 24
   let minutes = Math.floor(gap / 1000 / 60) % 60
   let seconds = Math.floor(gap / 1000) % 60

   if (gap < 0) {

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
      strings: ["Нужно будет тебя отучать ходить в универ по субботам"],
      
   }).go();
});