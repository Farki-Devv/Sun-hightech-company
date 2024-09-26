import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import i18n from '@/lib/i18n'
import { Languages } from 'lucide-react'

function ChangeLanguage() {
	const change = (lng: string | undefined) => {
		i18n.changeLanguage(lng)
	}
	return (
		<Select onValueChange={change}>
			<SelectTrigger>
				<Languages className='text-primary'/>
				<SelectValue />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value='uz'>uz</SelectItem>
				<SelectItem value='en'>en</SelectItem>
			</SelectContent>
		</Select>
	)
}

export default ChangeLanguage
