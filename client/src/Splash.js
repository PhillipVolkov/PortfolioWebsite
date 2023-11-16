import React from "react";
import './Splash.css';
import './index.css';

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { loadSeaAnemonePreset } from "tsparticles-preset-sea-anemone";

function Splash() {
  /*const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => {
        const JSON = res.json();
        console.log(JSON);
        return JSON;
      })
      .then((data) => setData(data.message));
  }, []);*/

  const particlesInit = async (main) => {
    await loadSeaAnemonePreset(main)
    await loadFull(main);
  };

  var particles = require('./SplashParticles');;

  return (
    <div className="Splash">
      <div className="card" style={{"background":"#000"}}>
        Hello! I'm Phillip Volkov.
      </div>

      <Particles className="Particles" options={particles.options} init={particlesInit}/>

      <button className="Down-Button"><i class="Down-Arrow"></i></button>
    </div>
  );
}

export default Splash;
