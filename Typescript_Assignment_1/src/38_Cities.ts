function describe_city(cityName: string, countryName:string = 'Pakistan'){
    console.log(`${cityName} is in ${countryName}.`)
}

describe_city('Karachi')
describe_city('Islamabad')
describe_city('New York', 'USA')