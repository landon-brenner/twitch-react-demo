import React from 'react';

const GameModal = ({gameModalShown, game_id, hideGameModal}) => {
  const showHideClassName = gameModalShown ? 'modal display-block':'modal display-none'

	return (
		<div className={showHideClassName}>
      <section className='modal-main'>
        <button onClick={hideGameModal}>
          Close
        </button>
      </section>
		</div>
	);
}

export default GameModal
