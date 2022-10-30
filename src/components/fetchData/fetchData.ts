import axios from 'axios';

export async function fetchGeoData() {
  const { data } = await axios.get(
    'http://api.geonames.org/countryInfoJSON?lang=it&username=demo&username=hydrane'
  );
  return data.geonames;
}



