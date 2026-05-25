import type { OpenLibraryBook } from '../types/OpenLibraryBook'

export async function searchBooks (
	query: string
): Promise<OpenLibraryBook[]> {
	const response = await fetch(
		`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`
	)

	const data = await response.json() as {
		docs: OpenLibraryBook[]
	}

	return data.docs.slice(0,10)
}