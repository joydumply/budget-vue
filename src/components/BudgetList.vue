<template>
  <div class="budget-list-wrap">
    <el-card class="box-card" :header="header">
      <template v-if="!isEmpty">
        <BudgetListItem
          v-for="item in list"
          :key="item.id"
          :item="item"
          @delete-item="deleteItemById"
        />
      </template>
      <el-alert v-else type="info" :title="emptyTitle" :closable="false"> </el-alert>
    </el-card>
  </div>
</template>

<script>
import BudgetListItem from './BudgetListItem.vue'
export default {
  name: 'BudgetList',
  props: {
    list: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    header: 'Budget List',
    emptyTitle: 'Empty List'
  }),
  computed: {
    isEmpty() {
      return !Object.keys(this.list).length
    }
  },
  methods: {
    deleteItemById(id) {
      this.$emit('deleteItem', id)
    }
  },
  emits: ['deleteItem'],
  components: {
    BudgetListItem
  }
}
</script>

<style scoped>
.budget-list-wrap {
  max-width: 500px;
  margin: auto;
}
</style>
