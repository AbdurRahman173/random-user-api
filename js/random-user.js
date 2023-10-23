const loadRandomUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
    .then(response => response.json())
    .then(users => randomUserDisplay(users))
}

const randomUserDisplay = results => {
   const genderElement = document.getElementById('user-gender')
   genderElement.innerText = results.results[0].gender

   const userName = results.results[0].name.first + ' '+ results.results[0].name.last
   document.getElementById('user-name').innerText = userName

    console.log(results.results[0].name)
}

loadRandomUser();