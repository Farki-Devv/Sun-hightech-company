import { Button } from '@/components/ui/button'

// this components for Home page
function FixedBar() {
	return (
		<div className='bg-white max-w-9xl h-28 mx-auto shadow-2xl rounded-lg flex justify-between flex-wrap px-10 md:px-24 items-center card'>
			<span className='flex flex-col items-start gap-1 font-grotesk text-primary text-xl max-sm:text-sm'>
				Tajriba
				<span className='text-gray-400 text-lg max-sm:text-sm'>
					10+ yil
				</span>
			</span>
			<span className='flex flex-col items-start gap-1 font-grotesk text-primary text-xl max-sm:text-sm'>
				Aloqa raqami
				<span className='text-gray-400 text-lg max-sm:text-sm'>
					(+998) 55 506 78 88
				</span>
			</span>
			<span className='flex flex-col items-start gap-1 font-grotesk text-primary text-xl max-md:hidden'>
				Texnik ko'mak
				<span className='text-gray-400 text-lg'>
					Mijozlarni 24/7 qo'llab quvvatlaydi{' '}
				</span>
			</span>
			<Button className='max-md:hidden'>Yangiliklar</Button>
		</div>
	)
}

export default FixedBar
