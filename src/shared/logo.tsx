import { Link } from 'react-router-dom'

function Logo() {
	return (
		<Link to={'/'}>
			<img src='./logo.png' alt='' className='max-sm:w-28' />
		</Link>
	)
}

export default Logo
