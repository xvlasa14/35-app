import { supabase } from '../supabase'

export async function getWarnings() {
	const { data, error } = await supabase
		.from('warnings')
		.select('*')

	if (error) {
		console.error(error)
		return []
	}

	return data
}
export async function saveWarning(
	bookId: number,
	warningId: string
) {
	const { data, error } = await supabase
		.from('books_warnings')
		.insert({
			id_book: bookId,
			id_warning: warningId
		})

	if (error) {
		console.error(error)
	}

	return data
}