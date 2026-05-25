<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { BookWithWarnings } from '../types/Book'
import { getBooksWithWarnings } from '../services/bookService';
import BookList from '../components/BookList.vue'

onMounted(async () => {
	libraryBooks.value = await getBooksWithWarnings()
})
const libraryBooks = ref<BookWithWarnings[]>([])
</script>
<template>
	<BookList :books="libraryBooks" />
</template>