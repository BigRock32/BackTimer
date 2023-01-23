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
}

setInterval(counts, 1000)