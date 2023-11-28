<template>
  <div class="type-sort-select-wrap">
    <el-select
      class="type-sort-select"
      v-model="typeSort"
      placeholder="Choose type for sort..."
      @change="onTypeSelected"
    >
      <el-option label="All" value="ALL" />
      <el-option label="Income" value="INCOME" />
      <el-option label="Outcome" value="OUTCOME" />
    </el-select>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const typeSort = ref('ALL')
const emit = defineEmits(['onTypeSort'])

const onTypeSelected = (value) => {
  emit('onTypeSort', value)
}
</script>
