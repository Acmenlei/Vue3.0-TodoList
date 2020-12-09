import { computed, defineComponent, inject } from 'vue'
import { TodoListType } from "../../InterfaceType/TodoList"

export default defineComponent({
    name: 'Categroy',
    emits:["todofilter"],
    setup(props, { emit }) {
        const data = inject("TodoListData") as TodoListType[]
        const lifeCount = computed((): number => data.filter(_ => _.type === "生活计划").length)
        const workCount = computed((): number => data.filter(_ => _.type === "工作计划").length)
        const studyCount = computed((): number => data.filter(_ => _.type === "学习计划").length)

        const todoFilter = (type: string) =>{
            emit("todofilter", type)
        }

        return {
            lifeCount, workCount, studyCount, todoFilter
        }
    },
})