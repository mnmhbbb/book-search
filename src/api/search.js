import axios from 'axios';
import { REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET } from '../config';

export async function searchBookAPI(data) {
  try {
    const response = await axios.get(`/v1/search/book.json?query=${data}&display=5`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'X-Naver-Client-Id': REACT_APP_CLIENT_ID,
        'X-Naver-Client-Secret': REACT_APP_CLIENT_SECRET,
      },
    });
    return response.data.items;
  } catch (error) {
    console.error(error);
  }
}

export async function loadmoreAPI({ data, start }) {
  try {
    const response = await axios.get(
      `/v1/search/book.json?query=${data}&start=${start.current}&display=5`,
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'X-Naver-Client-Id': REACT_APP_CLIENT_ID,
          'X-Naver-Client-Secret': REACT_APP_CLIENT_SECRET,
        },
      },
    );
    return response.data.items;
  } catch (error) {
    console.error(error);
  }
}
