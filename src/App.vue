<template>
  <div id="app">
    <Header @addchange="HandleAddStatus" />
    <TodoList @accompulish="HandleStatus" :TodoList="TodoList" />
    <Add
      @addTransaction="add"
      @toast="HandleToast"
      :addStatus="current.changeAdd"
    />
    <Toast :isShow="current" />
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import TodoList from "./components/TodoList/TodoList.vue";
import Add from "./components/Add/Add.vue";
import Toast from "./components/Toast/Toast.vue";
import { defineComponent, provide, reactive, onMounted } from "vue";

export default defineComponent({
  name: "App",
  components: { TodoList, Header, Add, Toast },
  setup() {
    /* toast&add图标 状态管理 */
    const TodoList = reactive([]);
    const current = reactive({
      status: false,
      changeAdd: false,
    });
    /* 定时器 */
    let timer = null;
    /* 初始化获取事务列表 */
    onMounted(() => {
      if (localStorage.getItem("TodoList")) {
        const TodoListData = JSON.parse(localStorage.getItem("TodoList"));
        TodoList.push(...TodoListData);
      }
      setInterval(() => {
        if (new Date().toLocaleTimeString() === "下午11:59:59") {
          localStorage.clear();
        }
      }, 1000);
    });
    /* 数据传递 */
    provide("TodoListData", TodoList);

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
    /* 修改事务状态 */
    const HandleStatus = (i) => {
      TodoList[i].status = !TodoList[i].status;
      const localTodoList = JSON.parse(localStorage.getItem("TodoList"));
      localTodoList[i].status = TodoList[i].status;
      localStorage.setItem("TodoList", JSON.stringify(localTodoList));
      HandleToast();
    };
    /* 改变add图标状态 */
    const HandleAddStatus = (flag) => {
      current.changeAdd = flag;
    };
    return {
      TodoList,
      HandleStatus,
      add,
      current,
      HandleToast,
      HandleAddStatus,
    };
  },
});
</script>