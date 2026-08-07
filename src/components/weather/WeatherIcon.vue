<template>
  <span class="text-4xl" role="img" :aria-label="description">
    {{ icon }}
  </span>
</template>

<script setup>
import { computed } from 'vue'
import { getWeatherIcon } from '../../composables/weatherIcons.js'

const props = defineProps({
  stateSkyId: {
    type: String,
    default: null,
  },
  description: {
    type: String,
    default: '',
  },
})

const icon = computed(() => getWeatherIcon(props.stateSkyId))
</script>