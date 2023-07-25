interface Album{
    artist: string,
    title: string,
    tracks?: number
}

function make_album(artist: string, title: string, tracks?: number): Album {
    let album: Album = {
        artist:artist,
        title:title};

    // If the tracks parameter is provided, add it to the album object
    if (tracks !== undefined) {
        album.tracks = tracks;
      }
    
    return album
}

console.log(make_album('Jaani', 'Zohrajabeen'))
console.log(make_album('Metallica', 'Unforgiven'))
console.log(make_album('Joker', 'Joker', 2))


