"use strict";
function cars_info(manufacturer, model, ...otherinfo) {
    let car = {
        manufacturer: manufacturer,
        model: model,
    };
    otherinfo.forEach((info, index) => {
        car[`otherinfo${index + 1}`] = info;
    });
    return car;
}
let carDetails = cars_info('Honda', 'Civic', { color: 'Black' }, { features: ['Sunroof', 'Navigation'] });
console.log(carDetails);
