#! /usr/bin/env node

function make_album(artist: string, title: string, tracks?: number) {
    const album: { artist: string; title: string; tracks?: number } = {
      artist: artist,
      title: title,
    };
    if (tracks !== undefined) {
      album.tracks=tracks;
    }
    return album;
  }
  const album1 = make_album(`Artist1`,`Album title1`)
  console.log(album1)
  const album2 = make_album(`Artist2`,`Album title2`)
  console.log(album2)
  const album3 = make_album(`Artist3`,`Album title 3`,12)
  console.log(album3)

//method 2

  function favorite_albums(artist:string,title:string,tracks?:number) {
    let album={artist,title,tracks};
    if (tracks){
        album['tracks']=tracks;
 }
 return album;
}
console.log(favorite_albums("Hadiqa Kiani","Virsa",5));
console.log(favorite_albums("Atif Aslam","Doori",7));
console.log(favorite_albums("Nusrat Fateh Ali Khan","Mustt Mustt",12));