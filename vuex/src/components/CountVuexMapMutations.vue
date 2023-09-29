<template>
    <div class="hello">
        <h1>当前sum的值为{{ sum }}</h1>
        <h1>放大10倍后sum的值为{{ bigSum }}</h1>
        <select v-model.number="num">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <hr>
        <!-- <button @click="increment">++</button>
        <button @click="decrement">--</button>
        <button @click="incrementOne">为奇数则加1</button>
        <button @click="incrementTow">为偶数则加2</button> -->

        <button @click="INCREMENT(num)">++</button>
        <button @click="DECREMENT(num)">--</button>
        <button @click="INCREMENTONE(num)">为奇数则加1</button>
        <button @click="INCREMENTTOW(num)">为偶数则加2</button>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex"
export default {
    name: 'Count',
    data() {
        return {
            num: 1
        }
    },

    computed: {
        ...mapState(['sum']),
        ...mapGetters({ bigSum: 'bigSum' })
    },

    methods: {
        // ...mapMutations({ jia: 'INCREMENT', jian: 'DECREMENT', jianOne: 'INCREMENTONE', jianTow: 'INCREMENTTOW' }),

        ...mapMutations(['INCREMENT', 'DECREMENT', 'INCREMENTONE', 'INCREMENTTOW']),


        increment() {
            this.jia(this.num);
        },

        decrement() {
            this.jian(this.num)
        },

        incrementOne() {
            if (this.$store.state.sum % 2 != 0) {
                this.jianOne(1)
            }
        },
        incrementTow() {
            if (this.$store.state.sum % 2 == 0) {
                this.jianTow(2)
            }
        },
    },

    mounted() {
        console.log("app", this);
        console.log('actions', this.increment);

        let map = mapGetters(['bigSum'])
        console.log(map);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
