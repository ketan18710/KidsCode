const countriesList = {
  countries : null
}
export const structureCountriesList = response => {
  if(!response) return null;
  const {data} = response
  countriesList.countries = Object.keys(data).map(key=>(
    {
    id : key,
    name : data[key].name, 
    native : data[key].native,
    phone : data[key].phone,
    continent : data[key].continent,
    capital : data[key].capital,
    currency : data[key].currency,
    languages : data[key].languages
  }))
  return countriesList.countries;
}