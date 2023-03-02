import axios from "axios";

export async function getGitUser(user) {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);
    const link = response['data']['avatar_url'];
    const username = response['data']['name'];

    return { link, username };

  } catch ( error ) {
    alert(error)
    const error404 = error['response']['status'];

    return error404

  }
};
