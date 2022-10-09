import './Teacher.css'

const Teacher = () => {
	return (
		<div className='card__body teacher'>
			<input type='text' placeholder='Question' />
			<div className='options'></div>
			<div className='btn_box'>
				<div className='btn teacher' onClick={() => {}}>
					Add another option
				</div>
				<div className='btn teacher' onClick={() => {}}>
					Ask Question
				</div>
			</div>
		</div>
	)
}

export default Teacher
