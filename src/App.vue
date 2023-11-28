<script setup>
import { computed, reactive, ref } from 'vue'
import BudgetList from './components/BudgetList.vue'
import TotalBalance from './components/TotalBalance.vue'
import BudgetForm from './components/BudgetForm.vue'
import ModalClose from './components/ModalClose.vue'
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

const sort = ref('ALL')

const sortedList = computed(() => {
  return sort.value == 'ALL' ? list : Object.values(list).filter((item) => item.type === sort.value)
})

const dialogVisible = ref(false)
const deleteID = ref(0)
const totalBalance = computed(() => {
  return Object.values(list).reduce((acc, item) => acc + item.value, 0)
})

const onDeleteItem = (id) => {
  deleteID.value = id
  onModalOpen()
}

const onFormSubmit = (data) => {
  console.log(data)
  if (data.type === 'OUTCOME' && data.value > 0) {
    data.value *= -1
  }
  const newObj = {
    ...data,
    id: String(Math.random())
  }
  const id = newObj.id
  list[id] = newObj
}
const onModalOpen = () => {
  dialogVisible.value = true
}
const closeModal = ({ isDelete, deleteID }) => {
  dialogVisible.value = false
  if (isDelete) {
    delete list[deleteID]
  }
}
const onTypeSort = (value) => {
  sort.value = value
}
</script>

<template>
  <BudgetForm @submitForm="onFormSubmit" />
  <TotalBalance :total="totalBalance" />
  <BudgetList :list="sortedList" @deleteItem="onDeleteItem" @onTypeSort="onTypeSort" />
  <ModalClose :dialog="dialogVisible" :deleteID="deleteID" @closeModal="closeModal" />
</template>

<style scoped>
header {
  line-height: 1.5;
}
</style>
