let currentUsers = ['admin', 'daniel', 'eric', 'sebastian', 'laura']
let newUsers = ['Daniel', 'john', 'ERIC', 'ali', 'ben']

for(let i=0; i < newUsers.length; i++){
    if(currentUsers.includes(newUsers[i].toLowerCase())){
        console.log('Please choose a different username!')
    }
    else{
        console.log('Username is available!')
    }
}