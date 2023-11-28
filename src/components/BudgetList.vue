<template>
  <div class="budget-list-wrap">
    <el-card class="box-card" :header="header">
      <BudgetListSortSelect @onTypeSort="onTypeSelected" />
      <template v-if="!isEmpty">
        <BudgetListItem
          v-for="item in list"
          :key="item.id"
          :item="item"
          @delete-item="$emit('deleteItem', item.id)"
        />
      </template>
      <el-alert v-else type="info" :title="emptyTitle" :closable="false"> </el-alert>
    </el-card>
  </div>
</template>

<script>
import BudgetListItem from './BudgetListItem.vue'
import BudgetListSortSelect from './BudgetListSortSelect.vue'
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
  emits: ['deleteItem', 'onTypeSort'],
  components: {
    BudgetListItem,
    BudgetListSortSelect
  },
  methods: {
    onTypeSelected(value) {
      this.$emit('onTypeSort', value)
    }
  }
}
</script>

<style scoped>
.budget-list-wrap {
  max-width: 500px;
  margin: auto;
}
.type-sort-select-wrap {
  padding: 10px 15px;
}
</style>
