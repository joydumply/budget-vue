<template>
  <el-dialog v-model="myDialog" title="Tips" width="30%" :before-close="handleClose">
    <span>This is a message</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="closeDialog(false)">Cancel</el-button>
        <el-button type="primary" @click="closeDialog(true)"> Confirm </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup>
import { ref, watch } from 'vue'

const emits = defineEmits(['closeModal'])
const props = defineProps({
  dialog: Boolean,
  deleteID: Number
})
const myDialog = ref(props.dialog)

const handleClose = () => {
  emits('closeModal', [false, props.deleteID])
}

watch(
  () => props.dialog,
  (newValue) => {
    myDialog.value = newValue
  }
)

const closeDialog = (isDelete) => {
  const res = { isDelete, deleteID: props.deleteID }
  emits('closeModal', res)
}
</script>
