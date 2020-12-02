<template>
  <div id="Progress">
    <div class="title">
      <h3>
        进度
        <span v-show="accomplishCount === length"
          ><i class="iconfont icon-chenggong"></i
        ></span>
        <span>{{ accomplishCount }}/{{ length }}</span>
      </h3>
    </div>
    <div class="len">
      <div
        class="len-progress"
        :style="{ width: length === 0 ? 0 : result + '%' }"
      ></div>
    </div>
  </div>
</template>

<script src="./Progress.ts"></script>
<style src="./Progress.css" scoped></style>