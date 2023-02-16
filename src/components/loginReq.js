import axios from "axios";
import { useState, useEffect } from 'react';


function gitHubUser() {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get(`https://api.github.com/users/obrunoroxo`);
        setUser(response.data);
      } catch (error) {
        setError(error);
      }

      setIsLoading(false);
    };

    fetchUser();
  }, [username]);
}

export default gitHubUser;