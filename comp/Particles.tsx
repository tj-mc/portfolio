import React, {FunctionComponent, useEffect} from "react";
import 'particles.js'

export const Particles: FunctionComponent = () => {

    const particleConfig = {
        "particles": {
            "number": {"value": 80, "density": {"enable": true, "value_area": 800}},
            "color": {"value": "#ffffff"},
            "shape": {
                "type": "polygon",
                "stroke": {"width": 0, "color": "#000000"},
                "polygon": {"nb_sides": 5},
                "image": {"src": "img/github.svg", "width": 100, "height": 100}
            },
            "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {"enable": false, "speed": 1, "opacity_min": 0.1, "sync": false}
            },
            "size": {
                "value": 2,
                "random": true,
                "anim": {"enable": false, "speed": 110.28971028971029, "size_min": 0.1, "sync": true}
            },
            "line_linked": {
                "enable": true,
                "distance": 70,
                "color": "#ffffff",
                "opacity": 0.15232414578222467,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {"enable": false, "rotateX": 1657.2100474277727, "rotateY": 1200}
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {"enable": true, "mode": "bubble"},
                "onclick": {"enable": true, "mode": "push"},
                "resize": true
            },
            "modes": {
                "grab": {"distance": 400, "line_linked": {"opacity": 1}},
                "bubble": {
                    "distance": 179.8201798201798,
                    "size": 3,
                    "duration": 6.953046953046953,
                    "opacity": 0.14385614385614387,
                    "speed": 3
                },
                "repulse": {"distance": 63.93606393606394, "duration": 0.4},
                "push": {"particles_nb": 4},
                "remove": {"particles_nb": 2}
            }
        },
        "retina_detect": true
    }

    const id = 'particle-effect-container'

    useEffect(() => {
        //@ts-ignore
        window.particlesJS(id, particleConfig);
    }, [])

    return (
        <div id={id}
             style={{
                 position: 'fixed',
                 top: 0,
                 bottom: 0,
                 left: 0,
                 right: 0
             }}
        />
    )
}
