import { computed, defineComponent } from 'vue'
export default defineComponent({
    name: 'Toast',
    props: {
        isShow: {
            type: Object,
            default: () => { }
        }
    },
    setup(props) {
        const flag = computed(() => props.isShow.status)
        return { flag }
    }
})