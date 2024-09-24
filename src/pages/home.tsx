import { Button } from '@/components/ui/button'
import Features from '@/shared/features'
import FixedBar from '@/shared/fixed-bar'
import Modules from '@/shared/modules'
import Numbers from '@/shared/numbers'
import Works from '@/shared/works'
import {
	Facebook,
	Instagram,
	MapPinCheckIcon,
	Send,
	Youtube,
} from 'lucide-react'

function Home() {
	return (
		<>
			<div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center font-roboto'>
				<div className='flex flex-col gap-5 max-md:items-center max-md:text-center'>
					<span className='text-5xl font-extrabold'>
						MChJ "SUN-HIGHTECH" YUQORI TEXNOLOGIYALAR
					</span>
					<span className='text-lg'>Yaxshi hayot uchun maqbul yechimlar</span>
					<span className='flex gap-4 items-center'>
						<MapPinCheckIcon />
						Yunusobod tumani, Bog‘ishamol ko‘chasi, 160-uy
					</span>
					<span className='flex gap-4'>
						<Instagram />
						<Youtube />
						<Facebook />
						<Send />
					</span>
					<div className='flex gap-10'>
						<Button>Biz raqamlarda</Button>
						<Button>Yangiliklar</Button>
					</div>
				</div>
				<div>
					<img src='./section2.svg' alt='' className='w-full' />
				</div>
			</div>
			<div className='space-y-14'>
				<FixedBar />
				<Works />
				<Modules />
				<Numbers />
				<Features />
			</div>
		</>
	)
}

export default Home
