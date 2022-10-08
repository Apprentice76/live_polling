import Card from '../Card/Card'
import bg from '../../assets/img/background.jpg'
import './App.css'

const App = () => {
	return (
		<div className='app' style={{ background: `url(${bg}) no-repeat center` }}>
			<div className='container'>
				<Card />
			</div>
		</div>
	)
}

export default App
