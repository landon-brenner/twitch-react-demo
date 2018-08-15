// Presentational Component for rendering a single game

import React from 'react';

const Game = ({game}) => {

	return (
		<div className='game-cards'>
			<img
				className='game-box'
				src={game.box.medium}
				title={game.localized_name}
				alt={game.name}
			/>
		</div>
	);
}

export default Game
