import { defineComponent, inject } from 'vue'
export default defineComponent({
    name: 'MenuBar',
    emits: ["handleMenu"],
    setup() {
        const status = inject("MenuBarStatus")
        return { status }
    },
})