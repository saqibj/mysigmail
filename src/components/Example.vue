<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { PropType } from 'vue'

// Replace Vuex with Pinia
import { useStore } from '../stores/main'

// Props with TypeScript
const props = defineProps<{
  title: string
  items: Array<{ id: number; text: string }>
}>()

// Reactive state
const count = ref(0)

// Methods as functions
const increment = () => {
  count.value++
}
</script> 