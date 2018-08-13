// Presentational Component for rendering a single game

import React from 'react';

const Game = (props) => {

	return (
		<div className='game-cards'>
			<img
				className='game-box'
				src={props.game.box.medium}
				title={props.game.localized_name}
				alt={props.game.name}
			/>
		</div>
	);
}

export default Game
