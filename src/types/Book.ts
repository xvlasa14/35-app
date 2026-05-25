import type { Warning } from "./Warning"
export interface Book {
	id: number
	title: string
	cover?: string
}

export interface BookWithWarnings extends Book {
	warnings: Warning[]
}