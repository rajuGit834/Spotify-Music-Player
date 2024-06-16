console.log("Hello");

let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('masterSongName');

let songs = [
    {songName:"Chura Liya", filePath:"song/0.mp3", coverPath:"covers/1.jpg"},
    {songName:"Lafua Number Mangata", filePath:"song/1.mp3", coverPath:"covers/2.jpg"},
    {songName:"Coco Cala", filePath:"song/2.mp3", coverPath:"covers/3.jpg"},
    {songName:"Dewara Dhori Chatana ba", filePath:"song/3.mp3", coverPath:"covers/4.jpg"},
    {songName:"Tohar mammi kasam", filePath:"song/4.mp3", coverPath:"covers/5.jpg"},
    {songName:"Nachaniya ke karan", filePath:"song/5.mp3", coverPath:"covers/6.jpg"},
    {songName:"Patna Se Chalata", filePath:"song/6.mp3", coverPath:"covers/7.jpg"},
    {songName:"Patar Piyaba", filePath:"song/7.mp3", coverPath:"covers/8.jpg"},
    {songName:"Hari Hari Odhani", filePath:"song/8.mp3", coverPath:"covers/9.jpg"},
    {songName:"Dhan Dhua Ho jai", filePath:"song/9.mp3", coverPath:"covers/10.jpg"},
]

songItems.forEach((element, i) => {
   element.getElementsByTagName("img")[0].src=songs[i].coverPath;
   element.getElementsByClassName("songName")[0].innerText=songs[i].songName; 
});

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration / 100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.src = `song/${songIndex}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex >= 9){
        songIndex=0;
    }else{
        songIndex+=1;
    }
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.src = `song/${songIndex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex <=0){
        songIndex=9;
    }else{
        songIndex-=1;
    }
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.src = `song/${songIndex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
