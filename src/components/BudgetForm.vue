<template>
  <el-card class="form-card">
    <el-form :model="formData" label-position="top">
      <el-form-item label="Type" prop="type">
        <el-select class="type-select" v-model="formData.type" placeholder="Choose type...">
          <el-option label="Income" value="INCOME" />
          <el-option label="Outcome" value="OUTCOME" />
        </el-select>
      </el-form-item>
      <el-form-item label="Comments" prop="comment">
        <el-input v-model="formData.comment" />
      </el-form-item>
      <el-form-item label="Value" prop="value">
        <el-input v-model.number="formData.value" />
      </el-form-item>
      <el-button type="primary" @click="onSubmit">Submit</el-button>
    </el-form>
  </el-card>
</template>

<script>
export default {
  name: 'BudgetForm',
  data: () => ({
    formData: {
      type: 'INCOME',
      comment: '',
      value: 0
    }
  }),
  methods: {
    onSubmit() {}
  }
}
</script>
<style scoped>
.form-card {
  max-width: 500px;
  margin: auto;
}
.type-select {
  width: 100%;
}
</style>
