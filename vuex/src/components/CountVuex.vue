<template>
    <div class="hello">
        <h1>当前sum的值为{{ $store.state.sum }}</h1>
        <h1>放大10倍后sum的值为{{ $store.getters.sum }}</h1>
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
    data() {
        return {
            num: 1
        }
    },

    methods: {
        increment() {
            // this.$store.dispatch('increment', this.num)
            this.$store.commit('INCREMENT', this.num)
        },

        decrement() {
            // this.$store.dispatch('decrement', this.num)
            this.$store.commit('DECREMENT', this.num)
        },

        incrementOne() {
            if (this.$store.state.sum % 2 != 0) {
                // this.$store.dispatch('incrementOne', 1)
                this.$store.commit('INCREMENTONE', 1)
            }
        },
        incrementTow() {
            if (this.$store.state.sum % 2 == 0) {
                // this.$store.dispatch('incrementTow', 2)
                this.$store.commit('INCREMENTTOW', 2)
            }
        },
    },

    mounted() {
        console.log("app", this);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
