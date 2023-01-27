var masterPlay=document.getElementById("masterPlay");
var audioElement=new Audio("songs/1.mp3");
var gif=document.getElementById("gif");
var myProgressBar=document.getElementById("myProgressBar");
var songIndex=0;
var masterSongName=document.getElementById("masterSongName");
var songItems=Array.from(document.getElementsByClassName("songItem"));

masterPlay.addEventListener("click",function()
{
  if(audioElement.paused || audioElement.currentTime<=0)
  {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity=1;
  }
  else
  {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity=0;
  }
})
audioElement.addEventListener("timeupdate",function()
{
  progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
  myProgressBar.value=progress;
})
myProgressBar.addEventListener("change",function()
{
  audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100;
})


var songs=[
    {songName:"Adhir Man Jhale",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"50_Songs-10_mins_",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"Coca Cola",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
    {songName:"Dheeme Dheeme",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
    {songName:"Laal Ghaghra",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
    {songName:"Jeene_Laga_Hoon-_Ramaiya_Vastavaiya",filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
    {songName:"Yenti_Yenti_Geetha_Govindam(256k)",filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
    {songName:"Tarasti_Hai_Nigahen_Meri_Full_Song",filePath:"songs/9.mp3",coverPath:"covers/9.jpg"}
  ]
  // functioin makeAllPlays
  function makeAllPlays()
  {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach(function(element)
  {
    element.classList.remove("fa-pause-circle");
    element.classList.add("fa-play-circle");
  })
  }

songItems.forEach((element,i)=>{

    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;

})
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
  element.addEventListener("click",function(e)
{
  if(audioElement.paused || audioElement.currentTime<=0)
  {
    makeAllPlays();
    e.target.classList.remove("fa-play-circle");
    e.target.classList.add("fa-pause-circle");
    songIndex=parseInt(e.target.id);
    songIndex=songIndex+1;
    audioElement.src="songs/"+songIndex+".mp3"
    masterSongName.innerText=songs[songIndex-1].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove("fa-circle-play");
   masterPlay.classList.add("fa-circle-pause");
  }
  else
  {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    e.target.classList.remove("fa-pause-circle");
    e.target.classList.add("fa-play-circle");
    gif.style.opacity=0;
  }
  /*
   makeAllPlays();
   e.target.classList.remove("fa-play-circle");
   e.target.classList.add("fa-pause-circle");
   songIndex=parseInt(e.target.id);
   songIndex=songIndex+1;
   audioElement.src="songs/"+songIndex+".mp3"
   masterSongName.innerText=songs[songIndex-1].songName;
   audioElement.currentTime=0;
   audioElement.play();
   gif.style.opacity=1;
   masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
  */
})
})
// handle pre and next;

document.getElementById("for").addEventListener("click",function()
{
  if(songIndex>=8)
  {
    songIndex=0;
  }
  songIndex=songIndex+1;
  audioElement.src="songs/"+songIndex+".mp3"
  masterSongName.innerText=songs[songIndex-1].songName;
  audioElement.currentTime=0;
  audioElement.play();
  gif.style.opacity=1;
  masterPlay.classList.remove("fa-circle-play");
 masterPlay.classList.add("fa-circle-pause");

});
document.getElementById("back").addEventListener("click",function()
{
  if(songIndex<=1)
  {
    songIndex=9;
  }
  songIndex=songIndex-1;
  audioElement.src="songs/"+songIndex+".mp3"
  masterSongName.innerText=songs[songIndex-1].songName;
  audioElement.currentTime=0;
  audioElement.play();
  gif.style.opacity=1;
  masterPlay.classList.remove("fa-circle-play");
 masterPlay.classList.add("fa-circle-pause");

});
