import { computed, defineComponent, inject } from 'vue'
import { TodoListType } from "../../InterfaceType/TodoList"

export default defineComponent({
    name: 'Categroy',
    setup() {
        const data = inject("TodoListData") as TodoListType[]
        const lifeCount = computed((): number => data.filter(_ => _.type === "生活计划").length)
        const workCount = computed((): number => data.filter(_ => _.type === "工作计划").length)
        const studyCount = computed((): number => data.filter(_ => _.type === "学习计划").length)
        return {
            lifeCount, workCount, studyCount
        }
    },
})