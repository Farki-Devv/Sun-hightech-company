import { numbers } from '@/constants'
import { useTranslation } from 'react-i18next'

// this component for Home page
function Numbers() {
	const { t } = useTranslation()
	return (
		<div className='grid grid-cols-1 space-y-4'>
			<span className='text-lg text-primary text-center font-bold font-roboto'></span>
			<span className='text-5xl text-center font-semibold font-inter'>
				{t('hero1')}
			</span>
			<div className='grid grid-cols-1 md:grid-cols-3 max-md:space-y-4 max-md:text-center md:space-x-4'>
				{numbers.map(item => (
					<div
						key={item.name}
						className='bg-white shadow-2xl flex flex-col rounded-md p-4 place-items-center card hover:scale-110 transition-all hover:z-50'
					>
						<img src={item.photo} alt='' className='size-28' />
						<span className='text-primary text-2xl font-medium font-roboto mt-2'>
							{t(item.name)}
						</span>
						<span className='text-sm text-gray-400'>{t(item.description)}</span>
					</div>
				))}
			</div>
		</div>
	)
}

export default Numbers
