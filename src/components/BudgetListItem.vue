<script setup>
import { computed } from 'vue'
const props = defineProps({
  item: Object
})
defineEmits(['deleteItem'])

const isOutcome = computed(() => {
  return props.item.type == 'OUTCOME'
})
const valueColor = computed(() => {
  return props.item.type == 'OUTCOME' ? 'red' : 'green'
})
</script>
<template>
  <div class="list-item" :key="item.id">
    <span class="budget-comment">{{ item.comment }}: </span>
    <div class="budget-value-wrap">
      <el-icon>
        <template v-if="!isOutcome">
          <CaretTop color="green" />
        </template>
        <template v-else>
          <CaretBottom color="red" />
        </template>
      </el-icon>
      <span class="budget-value" :class="valueColor">{{ item.value }}</span>
    </div>

    <el-button type="danger" size="small" @click="$emit('deleteItem', item.id)">Delete</el-button>
  </div>
</template>

<style scoped>
.list-item {
  display: flex;
  align-items: center;
  padding: 10px 15px;
}
.budget-value {
  font-weight: bold;
  margin-left: 10px;
}
.budget-value-wrap {
  margin-left: auto;
  margin-right: 20px;
  display: flex;
  align-items: center;
}
.green {
  color: green;
}
.red {
  color: red;
}
</style>
