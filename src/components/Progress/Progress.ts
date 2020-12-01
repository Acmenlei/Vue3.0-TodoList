import { defineComponent, computed, toRefs } from 'vue'
import { TodoListType } from "../../InterfaceType/TodoList"

export default defineComponent({
    name: 'Progress',
    props: {
        TodoList: {
            type: Array,
            default: () => []
        }
    },
    setup(props) {
        const data = toRefs(props).TodoList.value
        const accomplishCount = computed(() => data.filter(_ => (_ as TodoListType).status == true).length)
        const length = computed(() => data.length)
        const result = computed(() => accomplishCount.value / length.value * 100)
        return { accomplishCount, length, result }
    },
})