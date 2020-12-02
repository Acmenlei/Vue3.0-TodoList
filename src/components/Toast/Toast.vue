<template>
  <div id="Toast" :class="[flag ? 'current' : '']">
    <i class="iconfont icon-chenggong"></i>
    {{isdel ? '删除成功!' : '操作成功!'}}
  </div>
</template>

<script src='./Toast.ts'></script>
<style src='./Toast.css' scoped></style>