window.addEventListener("DOMContentLoaded", (event) => {
    const player = document.getElementById("SongAddiction");
    const pp = document.getElementById("SongEmote")
    let dancing = false;
    player.volume = 0.5;

    function pepeDS() {
        if (!dancing && (player.currentTime > 13.5) && !player.paused) {
            pp.src = "https://cdn.7tv.app/emote/60a3050fac2bcb20ef20fd9a/4x.webp";
            dancing = true;
        }
        else if (dancing && player.currentTime <= 13.5) {
            pp.src = "https://cdn.7tv.app/emote/635ab71df884792250e4b51d/4x.webp";
            dancing = false;
        }
    }

    function pauseChange() {
        pp.src = "https://cdn.7tv.app/emote/635ab71df884792250e4b51d/4x.webp";
        dancing = false;
    }
    
    player.addEventListener("pause", pauseChange);
    player.addEventListener("timeupdate", pepeDS)
});