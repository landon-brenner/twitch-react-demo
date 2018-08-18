import React from 'react'

const Footer = ({logo, Twitch_Purple}) => {

	return (
		<footer className="bg-light font-small pt-1 mt-1">
			<div className='text-center pt-3'>
				&copy; {(new Date().getFullYear())} <a href="https://www.linkedin.com/in/landonbrenner/">Landon Brenner</a><br/>
				Find source on <a href='https://github.com/landon-brenner/twitch-react-demo/'>GitHub</a>
			</div>
			<div className='text-center'>
				<a href='https://reactjs.org/'>
					<img
					 src={logo}
					 className='App-logo'
					 alt='logo'
					 title='Made with ReactJS'
				/>
				</a>
				<a href='https://www.twitch.tv'>
					<img
						height='50px'
						alt=''
						src={Twitch_Purple}
						title='Visit Twitch.tv'
					/>
				</a>
			</div>
		</footer>
	)
}

export default Footer
