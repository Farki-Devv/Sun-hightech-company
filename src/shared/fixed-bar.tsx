import { useTranslation } from 'react-i18next'

// this components for Home page
function FixedBar() {
	const { t } = useTranslation()
	return (
		<div className='bg-white max-w-7xl h-28 mx-auto shadow-2xl rounded-lg flex justify-between flex-wrap px-10 md:px-24 items-center card'>
			<span className='flex flex-col items-start gap-1 font-grotesk text-primary text-xl max-sm:text-sm'>
				{t('bar1')}
				<span className='text-gray-400 text-lg max-sm:text-sm'>
					{t('bar2')}
				</span>
			</span>
			<span className='flex flex-col items-start gap-1 font-grotesk text-primary text-xl max-sm:text-sm'>
				{t('bar3')}
				<span className='text-gray-400 text-lg max-sm:text-sm'>
					{t('bar4')}
				</span>
			</span>
			<span className='flex flex-col items-start gap-1 font-grotesk text-primary text-xl max-md:hidden'>
				{t('bar5')}
				<span className='text-gray-400 text-lg'>{t('bar6')}</span>
			</span>
		</div>
	)
}

export default FixedBar
