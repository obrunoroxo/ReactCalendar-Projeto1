import axios from "axios";



// function gitHubUser() {
//   return (
axios.get('https://api.github.com/users/obrunoroxo')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
      })
//   )
// }

// export default gitHubUser;