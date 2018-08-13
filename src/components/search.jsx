import React from 'react'

const Search = (props) => {

	return (
		<nav className='navbar navbar-light bg-light'>
			<div className='input-group mb-2'>
				<input
					className='form-control'
					placeholder='Search popular games on Twitch!'
					value={props.input}
					onChange={props.handleInputChange}
				/>
				<div className='input-group-append'>
					<button
						className='btn btn-outline-secondary'
						onClick={props.handleSearchClick}
					>
						Search
					</button>
					<button
						className='btn btn-outline-secondary'
						onClick={props.getTopGames}
					>
						Get Top 10
					</button>
				</div>
			</div>
		</nav>
	)
}

export default Search
