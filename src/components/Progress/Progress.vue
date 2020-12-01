<template>
  <div id="Progress">
    <div class="title">
        <h2>
          Today
          <span v-show="accomplishCount === length"><i class="iconfont icon-chenggong"></i></span>
          <span>{{accomplishCount}}/{{length}}</span>
        </h2>
    </div>
    <div class="len">
      <div class="len-progress" :style="{'width':  result+'%'}"></div>
    </div>
  </div>
</template>

<script src="./Progress.ts"></script>
<style src="./Progress.css" scoped></style>