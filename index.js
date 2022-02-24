document.querySelector("form").addEventListener('submit', function(event) {
   event.preventDefault()
   const form = document.querySelector(".form-wrapper")
   const section = document.querySelector("section")
   const greetingValue = event.target['greeting'].value
   const eventValue = event.target['event-type'].value
   const messageValue = event.target['message'].value
   form.classList.add("hide")
   section.classList.remove("hide")
   const cardGreeting = document.querySelector("#card-greeting")
   cardGreeting.textContent = greetingValue
   const cardMessage = document.querySelector('#card-message')
   cardMessage.textContent = messageValue

   //making the request to the API
   const clientId = "8IbBTqWJJEzaT63HECsm2Wety9doJwer9QWbty5zIwM"

   fetch(`https://api.unsplash.com/search/photos?client_id=${clientId}&query=${eventValue}`)
      .then( function(response) {
         return response.json()
      })
      .then( function(data) {
         console.log(data['results'][parseInt(Math.random()*10)])
         const imgUrl = data['results'][parseInt(Math.random()*10)]['urls']['full']
         console.log(imgUrl)
         const cardWrapper = document.querySelector(".card-wrapper")
         cardWrapper.style.backgroundImage = `url(${imgUrl})`
       })
      
/*    
   cardWrapper. */

})


