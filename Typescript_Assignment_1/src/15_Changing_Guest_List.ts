let guestListNew = ['Junaid Tariq', 'Zulqernain Mustafa', 'Zain Saleem']

for (let i = 0; i < guestListNew.length; i++){
    console.log(`Hey ${guestListNew[i]}, what about dinner today at my home at 8'o clock. Waiting for you`)
}
console.log('-------------------------------------------------------------------------')
console.log(`Hey Tauqueer it's ${guestListNew[1]} here, Sorry but i did not make it today.`)
console.log('-------------------------------------------------------------------------')

// Updating list

guestListNew[1] = 'Zain Saleem'

for (let i = 0; i < guestListNew.length; i++){
    console.log(`Hey ${guestListNew[i]}, what about dinner today at my home at 8'o clock. Waiting for you`)
}

