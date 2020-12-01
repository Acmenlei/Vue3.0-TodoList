<template>
  <div id="Header">
    <div class="left">
      <div class="count">Projects {{count}}</div>
      <div class="time">
        <span>{{ month[date.month] }}.</span>
        <span>{{ date.day }}</span>
        <span>{{ week[date.weekDay] }}</span>
      </div>
    </div>
    <div @click="handelTrigger" class="right">
      <span :class="{'current1': state.flag}"></span>
      <span :class="{'current2': state.flag}"></span>
      <span v-show="!state.flag"></span>
    </div>
  </div>
  <MenuBar/>
</template>

<script src="./Header.ts"></script>
<style src="./Header.css" scoped></style>
