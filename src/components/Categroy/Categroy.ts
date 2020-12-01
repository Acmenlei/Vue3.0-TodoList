import { computed, defineComponent, inject } from 'vue'
import { TodoListType } from "../../InterfaceType/TodoList"

export default defineComponent({
    name: 'Categroy',
    setup() {
        const lifeCount = computed((): number => Array.from(inject("TodoListData") as TodoListType[]).filter(_ => _.type === "Life").length)
        const workCount = computed((): number => Array.from(inject("TodoListData") as TodoListType[]).filter(_ => _.type === "Work").length)
        const studyCount = computed((): number => Array.from(inject("TodoListData") as TodoListType[]).filter(_ => _.type === "Study").length)
        return {
            lifeCount, workCount, studyCount
        }
    },
})