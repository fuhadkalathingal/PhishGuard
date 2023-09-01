document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');

    // Check if audio playback was already started
    const audioState = JSON.parse(localStorage.getItem('audioState')) || { isPlaying: true };

    // Set autoplay based on stored state
    if (audioState.isPlaying) {
        audio.play();
    }

    // Toggle audio playback on button click
    const audioToggle = () => {
        if (audio.paused) {
            audio.play();
            audioState.isPlaying = true;
        } else {
            audio.pause();
            audioState.isPlaying = false;
        }
        // Save the audio playback state
        localStorage.setItem('audioState', JSON.stringify(audioState));
    };

    // Attach the toggle function to the audio player's play/pause button
    const playButton = document.querySelector('#audio + button');
    playButton.addEventListener('click', audioToggle);
});
