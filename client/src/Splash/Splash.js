import React from 'react'
import './Splash.css';
import profilePicture from './profile_picture.JPEG'

// Canvas for drawing the splash screen animation
const Canvas = props => {
  const canvasRef = React.useRef(null)
  
  // callback for draw animation
  React.useEffect(() => {
    // initialize canvas, midpoints
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let midX = canvas.width/2
    let midY = canvas.height/2

    // resize canvas function on load and on window resize
    const resize = () => {
      const { devicePixelRatio:ratio=1 } = window
      const { width, height } = canvas.getBoundingClientRect()
      canvas.width = width
      canvas.height = height
      context.scale(ratio, ratio)

      midX = canvas.width/2;
      midY = canvas.height/2;
    }
    resize()
    window.addEventListener('resize', resize)

    /* 
      function to rotate point around origin by theta
      @params [x,y]: x,y coordinates to be rotated 
      @params theta: angle to rotate coordinates by
    */
    const rotate = ([x, y], theta) => {
      const newX = Math.floor(x*Math.cos(theta)-y*Math.sin(theta))
      const newY = Math.floor(x*Math.sin(theta)+y*Math.cos(theta))
      return [newX, newY]
    }
    
    /* 
      particle emittor options: 
        max: max amount of particles to be generated
        interval: sets interval (ms) of when to emit particles,
        numEmit: amount of which determined by numEmit
        startTime: time at which to spawn in particle
    */
    const emittorOptions = {max:50, interval:200, numEmit:4, startTime:150}
    /*
      options for particle colors that emittor can choose from
    */
    const colorMap = ["#152b65", "#2388d2", "#a80874", "#f48020"]
    /* 
      particle emittor function:
      generates particles specified by options if particle limit not exceeded, with random theta and color
    */
    let particles = []
    let startTime = Date.now()
    const runEmittor = () => {
      if (Date.now()-startTime < emittorOptions.interval || particles.length > emittorOptions.max) return;

      startTime = Date.now()
      let prevTheta = Math.random()*(2*Math.PI)
      for (let i = 0; i < emittorOptions.numEmit && particles.length < emittorOptions.max; i++) {
        let randTheta = Math.random()*(2*Math.PI)
        while (Math.abs(prevTheta-randTheta) < 0.5) {
          randTheta = Math.random()*(2*Math.PI)
        }
        prevTheta = randTheta

        const randColor = Math.floor(Math.random()*(colorMap.length))
        particles.push({time:emittorOptions.startTime, theta:randTheta, color:colorMap[randColor], past:[], done:false, removed:false})
      }
    }

    /*
      particle options: 
        size: particle size (px, diameter)
        magnitude: magnitutde of particle motion (radius, px), [x,y] format
        frequency: frequency of sine wave
        trail: length of the particle trail (number of frames)
        trailResolution: how accurately the trail is rendered (how many frames to skip, 1 is lowest)
        lifeMin: minimum duration of particle (number of frames)
        lifeMax: maximum duration of particle (number of frames)
    */
    const particleOptions = {size:20, magnitude:[50,50], frequency:0.025, trail:150, trailResolution:5, lifeMin:250, lifeMax:500}
    /*
      animation draw function:
    */
    const draw = (ctx) => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
      ctx.lineCap = "round"

      // draw particle function
      const drawParticle = ([x,y],[startX,startY],color,size,opacity) => {
        ctx.beginPath()
        if (startX !== -1 && startY !== -1) ctx.moveTo(midX+startX, midY+startY)

        ctx.lineWidth = size;
        ctx.strokeStyle = color
        ctx.fillStyle = color

        ctx.lineTo(midX+x, midY+y);
        ctx.moveTo(midX+x, midY+y);

        ctx.stroke(); 

        return [x,y]
      }

      // draw trail function
      const drawTrail = (i, j, startJ, [startX, startY]) => {
        ctx.beginPath()
        ctx.moveTo(midX+startX, midY+startY)

        const R = parseInt(particles[i].color.substring(1, 3), 16) * ((j-startJ)/(particles[i].past.length-startJ))**2
        const G = parseInt(particles[i].color.substring(3, 5), 16) * ((j-startJ)/(particles[i].past.length-startJ))**2
        const B = parseInt(particles[i].color.substring(5, 7), 16) * ((j-startJ)/(particles[i].past.length-startJ))**2

        const color = 'rgba('+R+','+G+','+B+')'
        drawParticle([particles[i].past[j].x, particles[i].past[j].y], [startX, startY], color, particleOptions.size, 1)
        
        ctx.stroke();
      }

      // draw each particle
      for (let i = 0; i < particles.length; i++) {
        // draw trail
        const startJ = Math.max(0, particles[i].time-particleOptions.trail - emittorOptions.startTime)
        let [startX,startY] = [0,0]
        if (particles[i].past.length !== 0 && !(startJ === particles[i].past.length)) {
          startX = particles[i].past[startJ].x
          startY = particles[i].past[startJ].y
          for (let j = startJ; j < particles[i].past.length-1; j+=particleOptions.trailResolution) {
            drawTrail(i, j, startJ, [startX, startY])
            startX = particles[i].past[j].x
            startY = particles[i].past[j].y
          }
          
          drawTrail(i, particles[i].past.length-1, startJ, [startX, startY]);
          [startX, startY] = [particles[i].past[particles[i].past.length-1].x, particles[i].past[particles[i].past.length-1].y]
        }
        else if (particles[i].past.length !== 0 && (startJ === particles[i].past.length)) particles[i].removed = true

        // draw particle
        if (!particles[i].done) {
          const adjustedX = particles[i].time*particleOptions.frequency
          const [x, y] = rotate([particleOptions.magnitude[0]*adjustedX, particleOptions.magnitude[1]*Math.sin(adjustedX)], particles[i].theta)
          
          drawParticle([x,y], [startX,startY], particles[i].color, particleOptions.size, 1)

          particles[i].past.push({x,y})
          
          if (particles[i].time === particleOptions.lifeMax-1) particles[i].done = true
          else if (particles[i].time > particleOptions.lifeMin) {
            const rand = Math.random()
            const thresHold = 1/(particleOptions.lifeMax-particleOptions.lifeMin)
            particles[i].done = rand < thresHold
          }
          particles[i].time++
        }
        else particles[i].time ++
      }

      particles = particles.filter((particle) => !particle.removed)
    }
    
    // render canvas
    let animationFrameId
    const render = () => {
      runEmittor()
      draw(context)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resize)
    }
  })
  
  return <canvas className="Particles" ref={canvasRef} {...props}/>
}

function Splash() {
  return (
    <div className="Splash">
      <div className="card" style={{"background":"#2A282A", "color":"#E0E0E1"}}>
        <img src={profilePicture} className='Circle-Photo' alt='profile'></img>
        <h1>Phillip Volkov</h1>
        <p>Student @ The University of Washington - Seattle</p>
        <p>Majoring in Computer Science</p>
        <p>Graduating June 2025</p>
      </div>

      <Canvas />

      
      <a className="Down-Button Down-Arrow" href="#about" alt='down button'></a>{// eslint-disable-line
      }
    </div>
  );
}

export default Splash;
