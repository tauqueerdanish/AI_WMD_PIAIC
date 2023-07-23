"use strict";
let guestListNew_3 = ['Junaid Tariq'];
guestListNew_3.unshift('Zain Saleem');
guestListNew_3.splice(1, 0, 'Tauqueer Abbas');
guestListNew_3.push('Zeeshan Saleem');
console.log('----------------------------New Invites-------------------------------------');
for (let i = 0; i < guestListNew_3.length; i++) {
    console.log(`Hey ${guestListNew_3[i]}, what about dinner today at my home at 8'o clock. Waiting for you`);
}
console.log(guestListNew_3);
for (let i = 0; guestListNew_3.length >= 3; i++) {
    let unInvitedGuest = guestListNew_3.pop();
    console.log(`Hey ${unInvitedGuest}, Sorry to inform you but my table delivery was late. So, Due to this i cant invite you today.`);
}
console.log('------------------------------Invint pending two guests-------------------------------');
for (let i = 0; i < guestListNew_3.length; i++) {
    console.log(`Hey ${guestListNew_3[i]}, my table delivery is late but you are still invited`);
}
for (let i = 0; guestListNew_3.length = 0; i++) {
    guestListNew_3.pop();
}
console.log(guestListNew_3);
