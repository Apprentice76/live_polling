import './Card.css'

const Card = () => {
	return (
		<div className='card'>
			<div className='card__header'>
				Select which type of user you are:
			</div>
			<div className='card__body'>
				<div className='card__btn_box'>
					<div className='button student'>I am a Student</div>
				</div>
				<div className='card__btn_box'>
					<div className='button teacher'>I am a Teacher</div>
				</div>
			</div>
		</div>
	)
}

export default Card
