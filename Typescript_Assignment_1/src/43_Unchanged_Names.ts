function show_magicians3(magicians_list3: string[], magicians_list4: string[]){
    console.log('The unchanged list')
    for(let i=0; i < magicians_list3.length; i++){
        console.log(magicians_list3[i])
    }

    console.log('The changed list')
    for(let i=0; i < magicians_list4.length; i++){
        console.log(magicians_list4[i])
    }
}

function great_magicians2(magicians_list_2: string[]){
    for(let i=0; i < magicians_list_2.length; i++){
        magicians_list_2[i] = `The Great ${magicians_list_2[i]}`
    }
}


let magicians_list_3 = ['Harry Potter', 'Hermoine Granger', 'Ron Weasely']
let magicians_list_4 = [...magicians_list_3]

great_magicians2(magicians_list_4)
show_magicians3(magicians_list_3, magicians_list_4)