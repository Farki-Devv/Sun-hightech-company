import { MoveUp } from 'lucide-react'
import { useEffect, useState } from 'react'

function ScrollToTop() {
	const [showButton, setShowButton] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 400) {
				setShowButton(true)
			} else {
				setShowButton(false)
			}
		}

		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}
	return (
		<>
			{showButton && (
				<button
					onClick={scrollToTop}
					className='fixed bottom-8 right-8 p-2 bg-primary text-white rounded-full shadow-lg hover:bg-blue-700 transition-all'
				>
					<MoveUp />
				</button>
			)}
		</>
	)
}

export default ScrollToTop
