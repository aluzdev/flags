const API_URL = "https://restcountries.com/v3.1/all";
export const getCountryData = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();

  const countries = data.map((country) => {
    const {
      population,
      region,
      subregion,
      currencies,
      languages,
      name,
      capital,
      tld,
      flags,
    } = country;

    const countryData = {
      population,
      region,
      subregion,
      currencies,
      languages,
      name: name.official,
      capital: capital ? capital[0] || capital : null,
      topLevelDomain: tld ? tld[0] || tld : null,
      flag: flags.png,
    };
    console.log("de countries alv!!!", typeof countryData.name);
    return countryData;
  });
  return countries;
};

export const getCountryByName = async (countryName) => {
  if (!countryName) return -1;
  const response = await fetch(API_URL);
  const data = await response.json();
  const filtered = data.filter((country) => {
    return (
      country.name.official === countryName.countryName ||
      country.name.official === countryName
    );
  });
  const {
    population,
    region,
    subregion,
    currencies,
    languages,
    name,
    capital,
    tld,
    flags,
  } = filtered[0];

  const countryData = {
    population,
    region,
    subregion,
    currencies,
    languages,
    name,
    capital,
    tld,
    flag: flags.png,
  };
  console.log(countryData);
  return countryData;
};
