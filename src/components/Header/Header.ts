import { defineComponent, provide, shallowReactive, inject, computed } from 'vue'
import MenuBar from "../MenuBar/MenuBar.vue"
export default defineComponent({
    name: 'Header',
    props:{
        TodoListData:{
            type:Array,
            default: () => []
        }
    },
    components: { MenuBar },
    emits: ["addchange"],
    setup(props, context) {
        /* 非递归响应数据 */
        const date = shallowReactive({
            month: new Date().getMonth() + 1,
            day: new Date().getDate(),
            weekDay: new Date().getDay()
        })
        /* 星期转化 */
        const week = shallowReactive({
            "1": "Monday",
            "2": "Tuseday",
            "3": "Wednesday",
            "4": "Thursday",
            "5": "Friday",
            "6": "Saturday",
            "7": "Sunday"
        })
        /* 月份转化 */
        const month = shallowReactive({
            "1": "January",
            "2": "February",
            "3": "March",
            "4": "April",
            "5": "May",
            "6": "June",
            "7": "July",
            "8": "August",
            "9": "September",
            "10": "October",
            "11": "November",
            "12": "December"
        })
        const state = shallowReactive({
            flag: false
        })
        /* 传值 */
        provide("MenuBarStatus", state)
        /* 事件函数 */
        const handelTrigger = () => {
            state.flag = !state.flag
            context.emit("addchange", state.flag)
        }
        const count = computed(() => Array.from(inject("TodoListData")).length)
        return { date, week, month, state, handelTrigger, count }
    }
})