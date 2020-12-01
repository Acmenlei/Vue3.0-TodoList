import { computed, defineComponent, inject } from 'vue'
export default defineComponent({
    name: 'Categroy',
    setup() {
        const lifeCount = computed((): number => Array.from(inject("TodoListData")).filter(_ => _.type === "Life").length)
        const workCount = computed((): number => Array.from(inject("TodoListData")).filter(_ => _.type === "Work").length)
        const studyCount = computed((): number => Array.from(inject("TodoListData")).filter(_ => _.type === "Study").length)
        return {
            lifeCount, workCount, studyCount
        }
    },
})