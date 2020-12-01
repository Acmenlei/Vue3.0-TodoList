import { defineComponent,  computed } from 'vue'
export default defineComponent({
    name: 'Progress',
    props: {
        TodoList: {
            type: Array,
            default: () => []
        }
    },
    setup(props) {
        let data = props.TodoList
        let accomplishCount = computed(() => data.filter(_ => _.status == true).length)
        let length = computed(() => data.length)
        let result = computed(() => accomplishCount.value / length.value * 100)
        return { accomplishCount, length, result }
    },
})