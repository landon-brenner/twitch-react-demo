import React from 'react'

const Footer = (props) => {

	return (
		<footer className="bg-light font-small pt-4 mt-4">
			<div className='footer-copyright text-center py-1'>
				&copy; {(new Date().getFullYear())} <a href="https://www.linkedin.com/in/landonbrenner/">Landon Brenner</a>
				<p>Find source on GitHub</p>
			</div>
			<div className='footer-copyright text-center py-1'>
				<a href='https://reactjs.org/'>
					<img
					 src={props.logo}
					 className="App-logo"
					 alt="logo"
					 title='Made with ReactJS' />
				</a>
			</div>
		</footer>
	)
}

export default Footer
