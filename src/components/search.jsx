import React from 'react'

const Search = ({
	input,
	getTopGames,
	handleInputChange,
	handleSearchClick
}) => {

	return (
		<nav className='navbar navbar-light bg-light'>
			<div className='input-group mb-2'>
				<input
					className='form-control'
					placeholder='Search popular games on Twitch!'
					value={input}
					onChange={handleInputChange}
				/>
				<div className='input-group-append'>
					<button
						className='btn btn-outline-secondary'
						onClick={handleSearchClick}
					>
						Search
					</button>
					<button
						className='btn btn-outline-secondary'
						onClick={getTopGames}
					>
						Get Top 10
					</button>
				</div>
			</div>
		</nav>
	)
}

export default Search
