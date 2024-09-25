import { Link } from 'react-router-dom'

function Partner() {
	return (
		<div className='flex gap-10 items-center justify-center'>
			<Link to={'https://www.jinkosolar.com/en'} target='_blank'>
				<img
					src={`./gallery/jinko.png`}
					alt=''
					className='hover:scale-125 transition-all'
				/>
			</Link>
			<Link to={'https://en.sungrowpower.com/'} target='_blank'>
				<img
					src={`./gallery/sungrow.png`}
					alt=''
					className='hover:scale-125 transition-all'
				/>
			</Link>
		</div>
	)
}

export default Partner
