<script setup>
import { computed, reactive } from 'vue'
import BudgetList from './components/BudgetList.vue'
import TotalBalance from './components/TotalBalance.vue'
import BudgetForm from './components/BudgetForm.vue'
const list = reactive({
  1: {
    type: 'INCOME',
    value: 100,
    comment: 'Some Comment',
    id: 1
  },
  2: {
    type: 'OUTCOME',
    value: -50,
    comment: 'Some Outcome Comment',
    id: 2
  }
})
const totalBalance = computed(() => {
  return Object.values(list).reduce((acc, item) => acc + item.value, 0)
})

const onDeleteItem = (id) => {
  delete list[id]
}
</script>

<template>
  <BudgetForm />
  <TotalBalance :total="totalBalance" />
  <BudgetList :list="list" @deleteItem="onDeleteItem" />
</template>

<style scoped>
header {
  line-height: 1.5;
}
</style>
