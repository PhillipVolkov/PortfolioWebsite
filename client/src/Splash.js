import React from 'react'
import './Splash.css';
import './index.css';

const Canvas = props => {
  const canvasRef = React.useRef(null)
  
  React.useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    
    let midX = canvas.width/2
    let midY = canvas.height/2

    // resize canvas
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

    // rotate point around origin by theta
    const rotate = (x, y, theta) => {
      const newX = Math.floor(x*Math.cos(theta)-y*Math.sin(theta))
      const newY = Math.floor(x*Math.sin(theta)+y*Math.cos(theta))
      return [newX, newY]
    }

    
    // draw particles
    let particles = []
    let startTime = Date.now()
    const colorMap = ["#48C1C3", "#EE2A7D"]
    const particleOptions = {max:1, size:20, magnitude:50, speed:0.01, trail:200}

    const draw = (ctx) => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

      // particle emitter
      if (Date.now()-startTime > 250) {
        startTime = Date.now()
        if (particles.length < particleOptions.max) {
          for (let i = 0; i < 4; i++) {
            const randTheta = Math.random()*(2*Math.PI)
            const randColor = Math.floor(Math.random()*(colorMap.length+1))
            particles.push({time:0, theta:randTheta, color:colorMap[randColor], past:[], done:false, removed:false})
          }
        }
      }

      // draw particle function
      const drawParticle = (x,y,color,size,opacity) => {
        ctx.fillStyle = color
        ctx.globalAlpha = opacity
        ctx.beginPath()
        ctx.arc(midX+x, midY+y, size, 0, 2*Math.PI)
        ctx.fill()

        return [x,y]
      }

      // draw each particle
      for (let i = 0; i < particles.length; i++) {
        // draw trail
        const startJ = Math.max(0, particles[i].time-particleOptions.trail)
        for (let j = startJ; j < particles[i].past.length; j+=5) {
          const opacity = Math.max(((j-startJ)/particleOptions.trail)-0.7,0) * 3.333
          drawParticle(particles[i].past[j].x, particles[i].past[j].y, particles[i].color, particleOptions.size, opacity)
        }
        if (particles[i].past.length !== 0 && startJ === particles[i].past.length) particles[i].removed = true

        // draw particle
        if (!particles[i].done) {
          const adjustedX = particles[i].time*particleOptions.speed
          const [x, y] = rotate(particleOptions.magnitude*adjustedX, particleOptions.magnitude*Math.sin(adjustedX), particles[i].theta)
          drawParticle(x, y, particles[i].color, particleOptions.size, 1)
          particles[i].past.push({x,y})

          if (particles[i].time === 649) particles[i].done = true
          particles[i].time++
        }
        else particles[i].time += 10
      }

      particles = particles.filter((particle) => !particle.removed)
    }
    
    // render canvas
    let animationFrameId
    const render = () => {
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
      <div className="card" style={{"background":"#000"}}>
        Hello! I'm your <b>MOM</b>.
      </div>

      <Canvas />

      <button className="Down-Button"><i className="Down-Arrow"></i></button>
    </div>
  );
}

export default Splash;
