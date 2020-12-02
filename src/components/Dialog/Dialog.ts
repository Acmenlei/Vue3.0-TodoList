import { inject, defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'Dialog',
  emits: ["confirmdialog", "canceldialog"],
  setup(props, { emit }) {
    interface DialogType {
      dialog: boolean;
      currentTodoStatus: boolean;
      isdel: boolean;
      isEmpty: boolean;
    }
    const data = inject("DialogStatus") as DialogType
    const flag = computed((): boolean => data.dialog)
    const target = computed((): boolean => data.currentTodoStatus)
    const isdel = computed((): boolean => data.isdel)
    const isEmpty = computed((): boolean => data.isEmpty)

    const Confirm = () => {
      emit("confirmdialog")
    }
    const Cancel = () => {
      emit("canceldialog")
    }
    return { Confirm, Cancel, flag, target, isdel, isEmpty}
  },
})