<template>
  <div id="TodoList">
    <Categroy :TodoList = "TodoLists"/>
    <Progress :TodoList = "TodoLists"/>
    <TodoListItem @accompulish="EventForward" :TodoList = "TodoLists"/>
  </div>
</template>

<script src="./TodoList.ts"></script>
<style src="./TodoList.css" scoped></style>
