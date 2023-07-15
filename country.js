class Country {
  constructor({
    name,
    capital,
    region,
    subregion,
    population,
    area,
  }) {
    this.name = name || '';
    this.capital = capital || '';
    this.region = region || '';
    this.subregion = subregion || '';
    this.population = population || '';
    this.area = area || '';
  }

  static fromJson(json) {
    return new Country({
      name: json['name'] || '',
      capital: json['capital'] || '',
      region: json['region'] || '',
      subregion: json['subregion'] || '',
      population: json['population'] || '',
      area: json['area'] || '',
    });
  }
}
