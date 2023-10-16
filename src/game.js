import './style.css';

function onPageLoad(){
  const Game = new Phaser.Game({
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
  
    parent: "game-container",
    scale: {
      mode: Phaser.Scale.ScaleModes.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
  })
}

window.addEventListener('load', onPageLoad)

