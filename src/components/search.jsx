import React from 'react'

const Search = (props) => {

	return (
		<nav className='navbar navbar-light bg-light'>
			<div className='container-fluid row'>
				<div className='input-group col-sm'>
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
				<div className='col-sm text-right'>
					<a href='https://www.twitch.tv'>
						<img
							height='40'
							alt=''
							src={props.Twitch_Purple}
							title='Visit Twitch.tv'
						/>
					</a>
				</div>
			</div>

		</nav>
	)
}

export default Search
