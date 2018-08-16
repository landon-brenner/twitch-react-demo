import React from 'react';
import Game from './game';

const Games = ({games, showGameModal}) => {

	return (
		<div className='game-cards'>
			{ games.map(game => (
				<Game
					key={game._id}
					game={game}
					showGameModal={showGameModal}
				/>
			))}
		</div>
	);
}

export default Games
