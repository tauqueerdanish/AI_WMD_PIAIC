let usersList1 = ['admin', 'daniel', 'eric', 'sebastian', 'laura']

for(let i=0; usersList1.length > 0; i++){
    usersList1.pop()
}

if(usersList1.length == 0){
    console.log('We need to find some users!')
}