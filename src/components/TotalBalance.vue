<template>
  <div class="total-value" :class="balanceClass">Balance: {{ total }}</div>
</template>

<script>
export default {
  name: 'TotalBalance',
  props: {
    total: {
      type: Number,
      default: 0
    }
  },
  computed: {
    balanceClass: function () {
      if (this.total < 0) {
        return 'red'
      } else if (this.total > 0) {
        return 'green'
      } else {
        return 'black'
      }
    }
  }
}
</script>
<style scoped>
.total-value {
  font-size: 26px;
  text-transform: uppercase;
  padding: 20px;
  text-align: center;
}
.green {
  color: green;
}
.red {
  color: red;
}
.black {
  color: #000;
}
</style>
