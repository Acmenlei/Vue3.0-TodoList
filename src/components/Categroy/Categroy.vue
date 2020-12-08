<template>
  <div id="Categroy">
      <div class="life" @click="todoFilter('生活计划')">
          <p>生活计划</p>
          <p>{{lifeCount}} 项</p>
      </div>
      <div class="work" @click="todoFilter('工作计划')">
          <p>工作计划</p>
          <p>{{workCount}} 项</p>
      </div>
      <div class="study" @click="todoFilter('学习计划')">
          <p>学习计划</p>
          <p>{{studyCount}} 项</p>
      </div>
  </div>
</template>

<script src="./Categroy.ts"></script>
<style src="./Categroy.css" scoped></style>