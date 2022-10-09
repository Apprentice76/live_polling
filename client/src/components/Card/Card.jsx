import Default from '../Default/Default'
import Student from '../Student/Student'
import Teacher from '../Teacher/Teacher'
import './Card.css'

const Card = ({ role, setRole }) => {

  if (role === 'student') {
    return (
		<div className='card'>
			<div className='card__header'>
				Enter your name:
			</div>
			<Student />
		</div>
	)
  }

  if (role === 'teacher') {
		return (
			<div className='card'>
				<div className='card__header'>
					Enter Question and Options:
				</div>
				<Teacher />
			</div>
		)
  }

	return (
		<div className='card'>
			<div className='card__header'>
				Select which type of user you are:
			</div>
			<Default setRole={setRole}/>
		</div>
	)
}

export default Card
