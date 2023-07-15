const fetch = require('node-fetch');

class Country {
  // Assuming you have defined the Country class somewhere with the required properties and methods.
  // You need to add the equivalent code here for the Country class.
}

class ApiService {
  static _baseUrl = 'https://api-ninjas.com/api/country';

  async getCountryByName(name) {
    try {
      const response = await fetch(`${ApiService._baseUrl}/${name}`);
      if (response.ok) {
        const json = await response.json();
        return new Country(json); // You may need to adjust this part based on the Country class constructor in JavaScript.
      } else {
        throw new Error('Failed to load country');
      }
    } catch (error) {
      throw error;
    }
  }
}
