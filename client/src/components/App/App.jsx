import Card from '../Card/Card'
import { useState, useEffect } from 'react'
import bg from '../../assets/img/background.jpg'
import './App.css'

const App = () => {
  const [role, setRole] = useState('')

  useEffect(() => {
    const currentRole = sessionStorage.getItem('role')
    console.log('role:', currentRole)
    if (currentRole === '' || !currentRole) return
    setRole(currentRole)
  }, [role])
  
	return (
		<div className='app' style={{ background: `url(${bg}) no-repeat center` }}>
			<div className='container'>
				<Card role={role} setRole={setRole}/>
			</div>
		</div>
	)
}

export default App
