<script setup lang="ts">
const props = defineProps(['book'])

const emit = defineEmits(['select'])

function handleClick() {
	console.log('BOOK CARD CLICK')

	emit('select', props.book)
}
</script>

<template>
	<div class="flex flex-row items-center" @click="handleClick">
		<img
			v-if="book.cover_i"
			:src="`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`"
			class="w-[5rem] h-[5rem] object-cover object-top"
		/>

		<div class="flex flex-col gap-2 pl-2">
			<h3>{{ book.title }}</h3>
			<p>{{ book.author_name?.[0] }}</p>
		</div>
	</div>
</template>