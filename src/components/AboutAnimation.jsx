import React from 'react'
import Animations from '../components/Animations.jsx';
import rocket from '../assets/anims/rocket.json';
import Zoom from 'react-reveal/Zoom';

function AboutAnimation() {
	return (
		<Zoom bottom duration={2000}>
			<div className="w-50 m-auto">
          		<Animations animation={rocket} loop={true} autoplay={true} /> 
        	</div>
		</Zoom>
	)
}

export default AboutAnimation