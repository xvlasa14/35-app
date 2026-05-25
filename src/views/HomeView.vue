<script setup lang="ts">
import { ref, onMounted } from 'vue'

import SearchBar from '../components/SearchBar.vue'
import WarningForm from '../components/WarningForm.vue'

import { saveBook } from '../services/bookService'
import { saveWarning, getWarnings } from '../services/warningService'

import type { OpenLibraryBook } from '../types/OpenLibraryBook'
import type { Warning } from '../types/Warning'

const selectedBook = ref<OpenLibraryBook | null>(null)
const warnings = ref<Warning[]>([])

onMounted(async () => {
	warnings.value = await getWarnings()
})

function selectBook(book: OpenLibraryBook) {
	selectedBook.value = book
}

async function handleSaveWarning(warningType: string) {
	if (!selectedBook.value) return

	const savedBook = await saveBook(selectedBook.value)

	if (!savedBook) return

	await saveWarning(
		savedBook.id,
		warningType
	)

	alert('Warning saved!')
}
</script>

<template>
	<div class="w-[50vw] mx-auto mt-[10vh] flex flex-col items-center gap-5">
		<h1 class="text-2xl font-bold text-pink-600">CONTENT WARNINGs</h1>
		<SearchBar @select="selectBook" class="mx-auto relative" />
		<div>
			<WarningForm v-if="selectedBook" :warnings="warnings" :book="selectedBook" @saved="handleSaveWarning" />
		</div>
	</div>
</template>
