const musicContainer = document.querySelector(".music-container")
const playBtn = document.querySelector("#play")
const prevBtn = document.querySelector("#prev")
const nextBtn = document.querySelector("#next")
const audio = document.querySelector("#audio")
const progress = document.querySelector(".progress")
const progresscontainer = document.querySelector(".progress-container")
const title = document.querySelector("#title")
const cover = document.querySelector("#cover")
const secret = document.querySelector('.secret')

// song titles
const songs = ["sugilite",'Bromance2-3DBOYZ',"JTEDETESTE(yungspoiler)",
                "LapinCalin-EditThirdEye","FRONTLANE-NIGHTCORE-Nara"]
const titles = ["Sugilite - Lili⭑Castiglioni ","Bromance 2 - 3D BOYZ","JTE DETESTE (yungspoiler)",
                "Lapin Calin - Edit Third Eye","FRONTLANE NIGHTCORE - Nara"]

const hiddenAudio = ["SECRETHIDDENSONG-AUDIODRIPCRYSTALCLUB"]
const hiddenTitle = ["Audiodrip - crystalclub"]
// Keep track of the songs

let songIndex = 0
let titleIndex = 0
// initially load song to DOM
loadSong(songs[songIndex])

//update songs details
function loadSong(song){
audio.src = `SCMP3/${song}.mp3`
cover.src = `playerimg/${song}.jpeg`
title.innerText = titles[titleIndex]
}

function loadSecretSong(song){
    audio.src = `SCMP3/${song}.mp3`
    cover.src = `playerimg/${song}.jpeg`
    title.innerText = hiddenTitle[0]
}

function playSong(){
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')    
    playBtn.querySelector('i.fas').classList.remove('fa-play')

    audio.play()
}

function updateProgress(e){
    const {duration,currentTime} = e.srcElement
    const progressPercent = (currentTime / duration) * 100
    progress.style.width = `${progressPercent}%`
}

function setProgress(e){
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration

    audio.currentTime = (clickX/width)* duration
}

function pauseSong(){
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')    

    audio.pause()

}

function prevSong(){
    songIndex--
    titleIndex--    
    if(songIndex < 0){
        songIndex = songs.length - 1
        titleIndex = titles.length - 1

    }
    loadSong(songs[songIndex])
    playSong()
}

function nextSong(){
    songIndex++
    titleIndex++
    if(songIndex > songs.length-1){
        songIndex = 0
        titleIndex = 0
    }
    loadSong(songs[songIndex])
    playSong()
}

function secretSong(){
    loadSecretSong(hiddenAudio)
    playSong()
}
// Event listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')

    if(isPlaying){
        pauseSong()
    }
    else{
        playSong()
    }
})

// Change song events

prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)
audio.addEventListener('timeupdate',updateProgress)
progresscontainer.addEventListener('click',setProgress)
audio.addEventListener('ended', nextSong)
secret.addEventListener('click',secretSong)