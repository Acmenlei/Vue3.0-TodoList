<template>
  <div id="Header">
    <div class="left">
      <div class="count">剩余待办 {{count}} 项</div>
      <div class="time">
        <span>{{ date.year }} 年</span>
        <span>{{ date.month }} 月</span>
        <span>{{ date.day }} 日</span>
        <span>{{ week[date.weekDay] }}</span>
      </div>
    </div>
    <div @click="handelTrigger" class="right">
      <span :class="{'current1': state.flag}"></span>
      <span :class="{'current2': state.flag}"></span>
      <span v-show="!state.flag"></span>
    </div>
      <i @click="clearTodo" class="iconfont icon-btn_delete"></i>
  </div>

  <MenuBar />
</template>

<script src="./Header.ts"></script>
<style src="./Header.css" scoped></style>
