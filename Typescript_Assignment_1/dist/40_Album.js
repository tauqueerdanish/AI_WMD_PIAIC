"use strict";
function make_album(artist, title, tracks) {
    let album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
console.log(make_album('Jaani', 'Zohrajabeen'));
console.log(make_album('Metallica', 'Unforgiven'));
console.log(make_album('Joker', 'Joker', 2));
