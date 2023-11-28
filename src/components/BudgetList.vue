<template>
  <div class="budget-list-wrap">
    <el-card class="box-card" :header="header">
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
    emptyTitle: 'Empty List',
    typeSort: 'ALL'
  }),
  computed: {
    isEmpty() {
      return !Object.keys(this.list).length
    }
  },
  emits: ['deleteItem', 'onTypeSort'],
  components: {
    BudgetListItem
  },
  methods: {
    onTypeSelected(value){
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
