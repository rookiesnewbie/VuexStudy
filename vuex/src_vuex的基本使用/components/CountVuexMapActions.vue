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
        <button @click="jia(num)">++</button>
        <button @click="jian(num)">--</button>
        <button @click="jiaOne(num)">为奇数则加1</button>
        <button @click="jiaTow(num)">为偶数则加2</button>

        <!-- <button @click="increment(num)">++</button>
        <button @click="decrement(num)">--</button>
        <button @click="incrementOne(num)">为奇数则加1</button>
        <button @click="incremenTtow(num)">为偶数则加2</button> -->
    </div>
</template>

<script>
import{mapState,mapGetters,mapActions,mapMutations} from"vuex"
export default {
    name: 'Count',
    data() {
        return {
            num: 1
        }
    },

    computed: {
        ...mapState(['sum']),
        ...mapGetters({bigSum:'bigSum'})
    },

    methods: {

        //数组的写法
        // ...mapActions( ['increment', 'decrement',  'incrementOne',  'incrementTow'] ),

        // 对象的写法
        ...mapActions({jia:'increment', jian:'decrement', jiaOne:'incrementOne', jiaTow:'incrementTow'}),


    },

    mounted() {
        console.log("app", this);
        console.log('actions',this.increment);

        let map = mapGetters(['bigSum'])
        console.log(map);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
