<template>
  <div id="TodoList">
    <Categroy :TodoList = "TodoLists" @todofilter="todoFilter"/>
    <Progress :TodoList = "TodoLists"/>
    <TodoListItem @accompulish="EventForward" :TodoLists = "TodoLists"/>
  </div>
</template>

<script src="./TodoList.ts"></script>
<style src="./TodoList.css" scoped></style>
