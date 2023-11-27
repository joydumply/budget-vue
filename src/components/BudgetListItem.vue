<script setup>
defineProps({
  item: Object
})
defineEmits(['deleteItem'])
</script>
<template>
  <div class="list-item" :key="item.id">
    <span class="budget-comment">{{ item.comment }}: </span>
    <span class="budget-value">{{ item.value }}</span>
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
  margin-left: auto;
  margin-right: 20px;
}
</style>
