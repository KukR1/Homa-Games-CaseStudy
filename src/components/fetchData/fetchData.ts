import axios from 'axios';

export async function fetchGeoData() {
  const { data } = await axios.get(
    'http://api.geonames.org/countryInfoJSON&username=demo&username=hydrane'
  );  /* Not well structed docs on their website, way too hard to execute calls */
  return data.geonames;
}



