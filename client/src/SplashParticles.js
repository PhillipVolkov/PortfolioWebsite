export const options = {
    "preset": "seaAnemone",
    "autoPlay": true,
    "fullScreen": {
      "enable": false,
      "z-index": -1,
    },
    "background": {
      "opacity": 1
    },
    "particles": {
      "opacity": {
        "value": 1,
        "animation": {
          "enable": true,
          "speed": 0,
          "decay": 0,
          "delay": 3,
          "sync": true,
          "mode": "auto",
          "startValue": "max",
          "destroy": "min"
        }
      },
      "move": {
        "speed": 1,
        "trail": {
          "enable": true,
          "length": 50,
          "fillColor": "#000",
        },
      },
    },
    "pauseOnBlur": true,
    "pauseOnOutsideViewport": true,
    "responsive": [],
    "smooth": true,
  }