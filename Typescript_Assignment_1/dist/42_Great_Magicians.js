"use strict";
function show_magicians2(magicians_list) {
    for (let i = 0; i < magicians_list.length; i++) {
        console.log(magicians_list[i]);
    }
}
function great_magicians(magicians_list_2) {
    for (let i = 0; i < magicians_list_2.length; i++) {
        magicians_list_2[i] = `The Great ${magicians_list_2[i]}`;
    }
}
let magicians_list_2 = ['Harry Potter', 'Hermoine Granger', 'Ron Weasely'];
great_magicians(magicians_list_2);
show_magicians2(magicians_list_2);
