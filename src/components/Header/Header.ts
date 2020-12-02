import { defineComponent, provide, shallowReactive, inject, computed } from 'vue'
import MenuBar from "../MenuBar/MenuBar.vue"
import { TodoListType } from "../../InterfaceType/TodoList"
export default defineComponent({
    name: 'Header',
    props: {
        TodoListData: {
            type: Array,
            default: () => []
        }
    },
    components: { MenuBar },
    emits: ["addchange", "cleartodo"],
    setup(props, { emit }) {
        /* 非递归响应数据 */
        const date = shallowReactive({
            year: new Date().getFullYear(),
            month: new Date().getMonth() + 1,
            day: new Date().getDate(),
            weekDay: new Date().getDay()
        })
        /* 星期转化 */
        const week = shallowReactive({
            "1": "星期一",
            "2": "星期二",
            "3": "星期三",
            "4": "星期四",
            "5": "星期五",
            "6": "星期六",
            "7": "星期日"
        })
        const state = shallowReactive({
            flag: false
        })
        /* 传值 */
        provide("MenuBarStatus", state)
        /* 事件函数 */
        const handelTrigger = () => {
            state.flag = !state.flag
            emit("addchange", state.flag)
        }
        /* 清空todo */
        const clearTodo = () => {
            emit("cleartodo")
        }
        const TodoListData = inject("TodoListData") as TodoListType[]
        const count = computed(() => TodoListData.length)
        return { date, week, state, count, handelTrigger, clearTodo }
    }
})