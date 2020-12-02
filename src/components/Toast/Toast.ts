import { computed, defineComponent } from 'vue'
export default defineComponent({
    name: 'Toast',
    props: {
        isShow: {
            type: Object,
            default: () => ({})
        }
    },
    setup(props) {
        const flag = computed(() => props.isShow.status)
        const isdel = computed(() => props.isShow.isdel)
        return { flag, isdel }
    }
})