function Entry(artist,song,album,writeup,date){
    this.artist = artist;
    this.song = song;
    this.album = album;
    this.writeup = writeup;
    this.date = date
}

var x = "abc"
let entry1 = new Entry("standards","Special Berry","none","none",20201123);

entry1.writeup = "hi"

console.log(entry1.writeup)
