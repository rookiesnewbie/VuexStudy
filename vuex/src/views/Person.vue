<template>
    <div class="hello">
        <h1>人员列表</h1>
        <input type="text" placeholder="请输入名字" v-model="name">
        <button @click="add">添加</button>

        <ul>
            <li v-for="item in personList" :key="item.name">{{ item }}</li>

        </ul>

        <h1>当前的count为：{{ sum }} </h1>
        <h1>放大10倍后sum的值为：{{ bigSum }} </h1>

    </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex"
import {nanoid} from 'nanoid'
export default {
    name: 'Person',
    data() {
        return {
            name: ''
        }
    },

    computed: {
        ...mapState(['sum']),
        // ...mapState(['personList']),
        ...mapGetters(['personList']),
        ...mapGetters(['bigSum']),

        // personList() {
        //     return this.$store.state.personList
        // }
    },

    methods: {

        add() {

            const personObj = { id: nanoid(), name: this.name }
            this.$store.commit('ADDPERSON', personObj)
            this.name = ''

        }


    },

    mounted() {
        console.log('app',this);
    }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
