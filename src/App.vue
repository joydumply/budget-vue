<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import BudgetList from './components/BudgetList.vue'
import TotalBalance from './components/TotalBalance.vue'
import BudgetForm from './components/BudgetForm.vue'
import ModalClose from './components/ModalClose.vue'

const store = useStore()
const sort = ref('ALL')

const budgetList = computed(() => store.getters['budgetList'])

const sortedList = computed(() => {
  return sort.value == 'ALL'
    ? budgetList.value
    : budgetList.value.filter((item) => item.type === sort.value)
})

const dialogVisible = ref(false)
const deleteID = ref(0)
const totalBalance = computed(() => {
  return budgetList.value.reduce((acc, item) => acc + item.value, 0)
})

const onFormSubmit = (data) => {
  if (data.type === 'OUTCOME' && data.value > 0) {
    data.value *= -1
  }

  store.dispatch('addNewListItem', data)
}

const onDeleteItem = (id) => {
  deleteID.value = id
  onModalOpen()
}

const onModalOpen = () => {
  dialogVisible.value = true
}
const closeModal = ({ isDelete, deleteID }) => {
  dialogVisible.value = false
  if (isDelete) {
    store.dispatch('removeListItem', deleteID)
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
