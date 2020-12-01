import { defineComponent, ref } from 'vue'
export default defineComponent({
    name: 'TodoListItem',
    props: {
        TodoList: {
            type: Array,
            default: () => []
        }
    },
    setup(props, context) {
        /* 数据 */
        let currentIndex = ref([])
        /* 状态切换 */
        const handelTrigger = (i:number) => {
            /* 修改状态 */
            context.emit("accompulish", i)
        }
        /* 接收值 */
        let TodoListData = props.TodoList

        return { TodoListData, currentIndex, handelTrigger }
    }
})