<template>
  <el-card class="form-card">
    <el-form :model="formData" ref="addItemForm" label-position="top" :rules="rules">
      <el-form-item label="Type" prop="type">
        <el-select class="type-select" v-model="formData.type" placeholder="Choose type...">
          <el-option label="Income" value="INCOME" />
          <el-option label="Outcome" value="OUTCOME" />
        </el-select>
      </el-form-item>
      <el-form-item label="Comment" prop="comment">
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
  data: () => {
    /**
     *
     * ? Как сделать то же самое но в конструкции data:() => ({})
     */
    const validateValue = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password again'))
      } else if (!Number.isInteger(value)) {
        callback(new Error('Please input digits'))
      } else {
        if (value == 0) {
          callback(new Error('Value can not be 0'))
        } else {
          callback()
        }
      }
    }
    return {
      formData: {
        type: 'INCOME',
        comment: '',
        value: 0
      },
      rules: {
        type: [{ required: true, message: 'Please select type', trigger: 'blur' }],
        value: [
          {
            required: true,
            message: 'Please enter the value',
            trigger: 'blur'
          },
          {
            type: 'number',
            message: 'Please enter the value as a number'
          },
          {
            validator: validateValue,
            trigger: 'blur'
          }
        ],
        comment: [
          {
            required: true,
            message: 'Please enter your comment',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs.addItemForm.validate((valid) => {
        if (valid) {
          this.$emit('submitForm', { ...this.formData })
          this.$refs.addItemForm.resetFields()
        }
      })
    }
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
