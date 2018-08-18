import React from 'react';
import Game from './game';

const Games = ({games}) => {

	return (
		<div className='game-cards'>
			{ games.map(game => (
				<Game
					key={game._id}
					game={game}
				/>
			))}
		</div>
	);
}

export default Games
