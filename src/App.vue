<template>
  <div id="app">
    <Header @addchange="HandleAddStatus" @cleartodo="clearTodo" />
    <TodoList
      @accompulish="HandleStatus"
      @todofilter="todoFilter"
      :TodoList="TodoList"
    />
    <Add
      @addtransaction="add"
      @toast="HandleToast"
      :addstatus="current.changeAdd"
    />
    <Toast :isShow="current" />
    <Dialog @canceldialog="cancelDialog" @confirmdialog="confirmDialog" />
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import TodoList from "./components/TodoList/TodoList.vue";
import Add from "./components/Add/Add.vue";
import Toast from "./components/Toast/Toast.vue";
import Dialog from "./components/Dialog/Dialog.vue";
import { defineComponent, provide, reactive, onMounted } from "vue";

export default defineComponent({
  name: "App",
  components: { TodoList, Header, Add, Toast, Dialog },
  setup() {
    /* toast&add图标 状态管理 */
    const TodoList = reactive([]);
    const current = reactive({
      status: false,
      changeAdd: false,
      dialog: false,
      currentTodoStatus: false,
      isdel: false,
      isEmpty: false,
    });
    /* 定时器 */
    let timer = null;
    /* 初始化获取事务列表 */
    onMounted(() => {
      if (localStorage.getItem("TodoList")) {
        const TodoListData = JSON.parse(localStorage.getItem("TodoList"));
        TodoList.push(...TodoListData);
      }
    });
    /* 数据传递 */
    provide("TodoListData", TodoList);
    provide("DialogStatus", current);

    /* 添加事务 */
    const add = (data) => {
      const temp = Object.assign({}, data);
      let localTodoList = JSON.parse(localStorage.getItem("TodoList"));
      if (localTodoList == null) {
        localTodoList = [];
      }
      localTodoList.push(temp);
      localStorage.setItem("TodoList", JSON.stringify(localTodoList));
      TodoList.push(temp);
    };
    /* 显示Toast */
    const HandleToast = () => {
      current.status = true;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        current.status = false;
      }, 2000);
    };
    /* 改变add图标状态 */
    const HandleAddStatus = (flag) => {
      current.changeAdd = flag;
    };

    /* 收起模态框 */
    const cancelDialog = () => {
      current.dialog = false;
      current.isEmpty = false;
    };
    /* 切换完成状态逻辑 */
    const toggleState = () => {
      TodoList[current.currentIndex].status = !TodoList[current.currentIndex]
        .status;
      current.dialog = true;
      const localTodoList = JSON.parse(localStorage.getItem("TodoList"));
      localTodoList[current.currentIndex].status =
        TodoList[current.currentIndex].status;
      localStorage.setItem("TodoList", JSON.stringify(localTodoList));
    };
    /* 删除todo逻辑 */
    const delTodo = () => {
      TodoList.splice(current.currentIndex, 1);
      localStorage.setItem("TodoList", JSON.stringify(TodoList));
    };
    /* 清空todo逻辑 */
    const clear = () => {
      TodoList.splice(0, TodoList.length); // 清空
      localStorage.clear();
      current.isEmpty = false;
    };
    /* 确定完成计划 */
    const confirmDialog = () => {
      current.isdel ? delTodo() : current.isEmpty ? clear() : toggleState();
      HandleToast(); // 弹出toast消息
      cancelDialog(); // 隐藏模态框
    };
    /* 修改事务状态 */
    const HandleStatus = (i) => {
      current.dialog = true; // 显示模态框
      if (typeof i === "object") {
        current.isdel = true;
        current.currentIndex = i.index; // 当前点击索引
      } else {
        current.isdel = false;
        current.currentIndex = i; // 当前点击索引
        current.currentTodoStatus = TodoList[i].status; // 记录当前状态是否完成
      }
    };
    /* 清空todolist */
    const clearTodo = () => {
      current.dialog = true;
      current.isEmpty = true;
    };
    /* 事务过滤 */
    const todoFilter = (type) => {
       console.log(type);
    }
    return {
      TodoList,
      HandleStatus,
      add,
      current,
      HandleToast,
      HandleAddStatus,
      confirmDialog,
      cancelDialog,
      clearTodo,
      todoFilter
    };
  },
});
</script>