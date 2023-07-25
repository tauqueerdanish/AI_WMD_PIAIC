"use strict";
function describe_city(cityName, countryName = 'Pakistan') {
    console.log(`${cityName} is in ${countryName}.`);
}
describe_city('Karachi');
describe_city('Islamabad');
describe_city('New York', 'USA');
