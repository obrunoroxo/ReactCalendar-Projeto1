import axios from 'axios';

export async function getAllAPIDatas() {
  try {
    const response = await axios.get('http://172.20.0.1:5000/api/datas', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      }
    });

    return response.data;

  } catch (error) {
    alert(error);
    const error404 = error['response']['status'];

    return error404;
  };
};
