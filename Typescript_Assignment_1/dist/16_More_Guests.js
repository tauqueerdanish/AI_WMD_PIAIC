"use strict";
let guestListNew_2 = ['Junaid Tariq', 'Zulqernain Mustafa', 'Zain Saleem'];
for (let i = 0; i < guestListNew_2.length; i++) {
    console.log(`Hey ${guestListNew_2[i]}, what about dinner today at my home at 8'o clock. Waiting for you`);
}
console.log('-------------------------------------------------------------------------');
console.log(`Hey Tauqueer it's ${guestListNew_2[1]} here, Sorry but i did not make it today.`);
console.log('-------------------------------------------------------------------------');
guestListNew_2[1] = 'Zain Saleem';
for (let i = 0; i < guestListNew_2.length; i++) {
    console.log(`Hey ${guestListNew_2[i]}, what about dinner today at my home at 8'o clock. Waiting for you`);
}
guestListNew_2.unshift('Zain Saleem');
guestListNew_2.splice(1, 0, 'Tauqueer Abbas');
guestListNew_2.push('Zeeshan Saleem');
console.log('----------------------------New Invites-------------------------------------');
for (let i = 0; i < guestListNew_2.length; i++) {
    console.log(`Hey ${guestListNew_2[i]}, what about dinner today at my home at 8'o clock. Waiting for you`);
}
