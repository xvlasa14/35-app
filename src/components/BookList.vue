<script setup lang="ts">
import type { BookWithWarnings }
  from '../types/Book'

defineProps<{
  books: BookWithWarnings[]
}>()

const colorClass: Record<number, string> = {
	1: 'bg-teal-200 text-teal-600 border-teal-400',
	2: 'bg-cyan-200 text-cyan-600 border-cyan-400',
	3: 'bg-indigo-200 text-indigo-600 border-indigo-400',
	4: 'bg-purple-200 text-purple-600 border-purple-400'}
</script>

<template>
	<div class="flex flex-row flex-wrap max-w-80vw gap-10 w-fit mx-auto mt-[5vh] justify-between mb-[2vh]">
		<div v-for="b in books" :key="b.id" class="flex flex-col gap-3 w-2/7 items-center p-5 bg-white rounded-md border-1 border-stone-200">
			<img :src="`https://covers.openlibrary.org/b/id/${b.cover}-M.jpg`" class="h-[20vw] w-fit pt-5"/>
			<h2 class="font-bold text-center">{{ b.title }}</h2>
			<ul class="flex flex-row flex-wrap gap-2 mt-auto">
				<li v-for="warning in b.warnings" :key="warning.id" :class="colorClass[warning.severity]" class="flex px-3 py-1 border-1 rounded-xl w-fit font-semibold text-xs text-wrap">
					{{ warning.name }}
				</li>
			</ul>
		</div>
	</div>
</template>