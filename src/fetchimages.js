import axios from 'axios';

const galleryItems = {
  imagePage: 1,
  inputValue: '',
};

const API = 'https://pixabay.com/api/';
const ACCES_KEY = '33476275-70cdccb202601e47417068b47';

async function fetchImages() {
  const response = await axios.get(
    `${API}?key=${ACCES_KEY}&q=${galleryItems.inputValue}&image_type=photo$orientation=horizontal&safesearch=true&per_page=40&page=${galleryItems.imagePage}`
  );
  return response.data.hits;
}

export default { galleryItems, fetchImages };
