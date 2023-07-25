interface CarInfo{
    manufacturer: string;
    model: string;
    [key: string]: any;
}

function cars_info(manufacturer: string, model: string, ...otherinfo: any[]): CarInfo{
    let car: CarInfo = {
        manufacturer: manufacturer,
        model: model,
    };

    otherinfo.forEach((info, index) => {
        car[`otherinfo${index + 1}`] = info;
    });

    return car

}


let carDetails = cars_info('Honda', 'Civic',{color: 'Black'}, {features: ['Sunroof', 'Navigation']})
console.log(carDetails)