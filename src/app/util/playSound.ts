const playSound = ( setStart ) => {
    const audio = new Audio('/sound/button.mp3')
    audio.volume = 0.2;
    audio.play();
    setStart(true)
};
export default playSound