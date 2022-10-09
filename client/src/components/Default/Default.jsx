import './Default.css'

const Default = ({ setRole }) => {

  return (
		<div className='card__body'>
			<div className='card__btn_box'>
				<div
					className='button student'
          onClick={() => {
            sessionStorage.setItem('role', 'student')
            setRole('student')
          }}>
					I am a Student
				</div>
			</div>
			<div className='card__btn_box'>
				<div
					className='button teacher'
          onClick={() => {
            sessionStorage.setItem('role', 'teacher')
            setRole('teacher')
          }}>
					I am a Teacher
				</div>
			</div>
		</div>
  )
}

export default Default