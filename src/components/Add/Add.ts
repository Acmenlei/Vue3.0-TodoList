import { computed, defineComponent, ref, shallowReactive } from 'vue'
export default defineComponent({
  name: 'Add',
  props: {
    addStatus: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const FormModel = shallowReactive({
      content: "",
      type: "Life",
      status: false
    })
    const flag = ref(false)
    const addStatus = computed(() => props.addStatus)
    const Confirm = () => {
      if (!FormModel.content) { return }
      context.emit("addTransaction", FormModel)
      context.emit("toast")
      flag.value = false
      FormModel.content = ""
      FormModel.status = false
    }
    const Cancel = () => {
      flag.value = false
    }
    const addTransaction = () => {
      flag.value = !flag.value
    }
    return { FormModel, Confirm, Cancel, addTransaction, flag, addStatus }
  },
})