import React from 'react';
import Game from './game';

const Games = (props) => {

	return (
		<div className='game-cards'>
			{ props.games.map(game => (
				<Game
					key={game._id}
					game={game}
				/>
			))}
		</div>
	);
}

export default Games

