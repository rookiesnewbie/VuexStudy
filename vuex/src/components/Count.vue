<template>
  <div class="hello">
    <h1>当前sum的值为{{ sum }}</h1>
    <select v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <hr>
    <button @click="increment">++</button>
    <button @click="decrement">--</button>
    <button @click="incrementOne">为奇数则加1</button>
    <button @click="incrementTow">为偶数则加2</button>
  </div>
</template>

<script>
export default {
  name: 'Count',
  data () {
    return {
      sum: 0,
      num: 1
    }
  },

  methods: {
    increment() {
      this.sum += this.num
    },

    decrement() {
      this.sum -= this.num
    },

    incrementOne() {
      if (this.sum % 2 != 0) { 
          this.sum += 1
      }
    },
    incrementTow() {
      if (this.sum % 2 == 0) {
          this.sum += 2
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
