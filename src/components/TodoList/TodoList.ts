import { defineComponent, toRefs } from 'vue'
import TodoListItem from "../TodoListItem/TodoListItem.vue"
import Categroy from "../Categroy/Categroy.vue"
import Progress from "../Progress/Progress.vue"
export default defineComponent({
    name: 'TodoList',
    props: {
        TodoList: {
            type: Array,
            default: () => []
        }
    },
    emits:["todofilter","accompulish"],
    components: { TodoListItem, Categroy, Progress },
    setup(props, {emit}) {
        /* 传值 */
        const TodoLists = toRefs(props).TodoList
        /* 将事件转发给父组件 */
        const EventForward = (i: number | object) => {
            emit("accompulish", i)
        }

        const todoFilter = (type: string) =>{
            emit("todofilter", type)
        }
        return { TodoLists, EventForward, todoFilter}
    }
})