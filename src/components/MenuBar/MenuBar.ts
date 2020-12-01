import { defineComponent, inject } from 'vue'
export default defineComponent({
    name: 'MenuBar',
    setup() {
        let status = inject("MenuBarStatus")
        return { status }
    },
})