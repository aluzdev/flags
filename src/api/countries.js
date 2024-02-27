export const getCountryData = async () => {
  const response = await fetch("https://restcountries.com/v3.1/all");
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
    return countryData;
  });
  return countries;
};
