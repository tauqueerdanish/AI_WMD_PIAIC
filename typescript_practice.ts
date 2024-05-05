var total_units = 400
var per_unit_price = 50
var total_price = total_units * per_unit_price
var tax = 0

console.log("Price without Tax:", total_price)

if (total_units<= 100){
    tax = (5 * total_price) / 100
    total_price += tax
}
else if(total_units<= 200){
    tax = (10 * total_price) / 100
    total_price += tax
}
else if(total_units<= 300){
    tax = (20 * total_price) / 100
    total_price += tax
}
else if(total_units<= 400){
    tax = (35 * total_price) / 100
    total_price += tax
}
else if(total_units<= 500){
    tax = (50 * total_price) / 100
    total_price += tax
}
else{
    tax = (100 * total_price) / 100
    total_price += tax
}
console.log("Total Tax:", tax)
console.log("Tital Price after Tax:", total_price)