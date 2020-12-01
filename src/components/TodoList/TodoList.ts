import { defineComponent,toRefs } from 'vue'
import TodoListItem from "../TodoListItem/TodoListItem.vue"
import Categroy from "../Categroy/Categroy.vue"
import Progress from "../Progress/Progress.vue"
export default defineComponent({
    name: 'TodoList',
    props:{
        TodoList:{
            type:Array,
            default:() => []
        }
    },
    components: { TodoListItem,Categroy,Progress },
    setup(props, context) {
        /* 传值 */
        const TodoLists = toRefs(props).TodoList
        /* 将事件转发给父组件 */
        const EventForward = (i: number) =>{
            context.emit("accompulish", i)
        }
        return { TodoLists,EventForward }
    }
})