<template>
  <div id="TodoListItem" v-if="TodoList.length">
    <div class="container" v-for="(item, i) in TodoList" :key="i">
      <div :class="['item', { del: delState.currentIndex === i }]">
        <span>{{ 1 + i }}</span>
        <h4 @touchstart="start" @touchend="end($event, i)">
          {{ item.content }}
        </h4>
        <div
          @click="handelTrigger(i)"
          :class="['capsule', item.status ? 'isChecked' : '']"
        >
          <div :class="['ball', item.status ? 'current' : '']"></div>
        </div>
        <div class="delete" @click="delTodoItem(i)">删除</div>
      </div>
      <div class="time">
        <i class="iconfont icon-zhongguohangtiantubiaoheji-weizhuanlunkuo-"></i
        >{{item.date}}
      </div>
    </div>
  </div>
  <div id="noTodo" v-else>
    <img src="../../assets/empty.png" alt="暂无计划安排">
    <p>无目标的努力,有如在黑暗中远征。</p>
  </div>
</template>

<script src="./TodoListItem.ts"></script>
<style src="./TodoListItem.css"></style>