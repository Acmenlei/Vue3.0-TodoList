<template>
  <div id="TodoListItem">
    <div class="item" v-for="(item, i) in TodoListData" :key="i">
      <h3>{{ i + 1 }}. {{ item.content }}</h3>
      <div
        @click="handelTrigger(i)"
        :class="['capsule', item.status ? 'isChecked' : '']"
      >
        <div :class="['ball', item.status ? 'current' : '']"></div>
      </div>
    </div>
  </div>
</template>

<script src="./TodoListItem.ts"></script>
<style src="./TodoListItem.css"></style>