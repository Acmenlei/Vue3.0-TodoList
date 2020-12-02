import { defineComponent, ref, shallowReactive, toRefs, watch } from 'vue'
export default defineComponent({
    name: 'TodoListItem',
    props: {
        TodoLists: {
            type: Array,
            default: () => []
        }
    },
    setup(props, context) {
        /* 数据 */
        const currentIndex = ref([])
        let s: number, d: number;
        /* 操作删除按钮数据*/
        const delState = shallowReactive({
            currentIndex: -1
        })
        /* 状态切换 */
        const handelTrigger = (i: number, type?: string) => {
            /* 修改状态 */
            type ? context.emit("accompulish", { type: "delete", index: i }) : context.emit("accompulish", i)
        }
        const start = (e: any) => {
            s = parseInt(e.changedTouches[0].clientX)
        }
        const end = (e: any, i: number) => {
            d = parseInt(e.changedTouches[0].clientX)
            const target = s - d
            if (target >= 30) {
                delState.currentIndex = i
            }
            if (target <= -30) {
                delState.currentIndex = -1
            }
        }
        const delTodoItem = (i: number) => {
            handelTrigger(i, "delete")
        }
        /* 监听状态，重置currentIndex */
        watch(props.TodoLists, () => {
            delState.currentIndex = -1
        })
        /* 接收值 */
        const TodoList = toRefs(props).TodoLists

        return { TodoList, currentIndex, delState, handelTrigger, delTodoItem, start, end }
    }
})