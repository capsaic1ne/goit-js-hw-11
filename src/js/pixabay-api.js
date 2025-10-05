import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { hideLoader } from './render-functions';

export function getImagesByQuery(query) {
  return axios(`https://pixabay.com/api/`, {
    params: {
      key: '52399485-abaa9cbef55c5a94206dd148e',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  }).then(res => {
    return res.data;
  });
}
