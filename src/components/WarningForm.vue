<script setup lang="ts">
import { ref } from 'vue'

const warning = ref('')

const emit = defineEmits(['saved'])
defineProps(['warnings'])
function submit() {
	emit('saved', warning.value)
}
</script>

<template>
	<div class="flex flex-row gap-2">
		<select v-model="warning" placeholder="content warning..." class="px-3 bg-stone-100 rounded border-1 border-stone-300 hover:bg-stone-200 hover:border-stone-400">
			<option
				v-for="warning in warnings"
				:key="warning.id"
				:value="warning.id"
			>
				{{ warning.name }}
			</option>
		</select>

		<button @click="submit" class="px-3 bg-stone-100 rounded border-1 border-stone-300 hover:bg-pink-200 hover:border-pink-400 hover:cursor-pointer">Save</button>
	</div>
</template>