import { computed, defineComponent, ref, shallowReactive } from 'vue'
import Dialog from "../Dialog/Dialog.vue"

export default defineComponent({
  name: 'Add',
  emits:["addtransaction","toast"],
  components:{Dialog},
  props: {
    addstatus: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const FormModel = shallowReactive({
      content: "",
      type: "生活计划",
      status: false,
      date: ''
    })
    const flag = ref(false)
    const addStatus = computed(() => props.addstatus)
    const Confirm = () => {
      if (!FormModel.content) { return }
      FormModel.date = new Date().toLocaleDateString().replace("/", "年").replace("/","月")+"日"+new Date().toLocaleTimeString()
      context.emit("addtransaction", FormModel)
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