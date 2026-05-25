<script setup lang="ts">
import { ref } from 'vue'

import { searchBooks } from '../services/openLibrary'

import type { OpenLibraryBook } from '../types/OpenLibraryBook'

const emit = defineEmits(['select'])

const query = ref('')
const books = ref<OpenLibraryBook[]>([])

async function handleInput() {
	if (!query.value) {
		books.value = []
		return
	}

	books.value = await searchBooks(query.value)
}

function selectBook(book: OpenLibraryBook) {
	emit('select', book)

	query.value = book.title

	books.value = []
}
</script>

<template>
	<div>
		<input
			v-model="query"
			@input="handleInput"
			placeholder="Search books..."
			class="p-3 bg-stone-100 rounded border-1 border-stone-300 w-100"
		/>

		<div v-if="books.length" class="flex flex-col rounded border-1 border-stone-300 gap-3 max-h-[60vh] overflow-scroll absolute w-full bg-stone-50">
			<div
				v-for="book in books"
				:key="book.key"
				class="flex flex-row gap-3 p-4 rounded border-b-1 border-stone-300 hover:cursor-pointer"
				@click="selectBook(book)"
			>
				<img
					v-if="book.cover_i"
					:src="`https://covers.openlibrary.org/b/id/${book.cover_i}-S.jpg`"
					width="40"
				/>
				<div class="flex flex-col gap-2">
					<h3>
					{{ book.title }}
				</h3>
				<h4>{{  book.author_name? book.author_name[0] : "-"}}</h4>
				</div>
			</div>
		</div>
	</div>
</template>
