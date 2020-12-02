<template>
  <div id="Dialog">
    <form
      action="javascript:;"
      :class="['dialog', flag ? 'confirm' : 'cancel']"
    >
      <h4>
        温馨提示：{{
          isEmpty
            ? "确定要清空吗?清空后不可恢复!"
            : isdel
            ? "确定要删除该项吗?"
            : target
            ? "是否要取消该计划的完成状态?"
            : "这项计划已经完成了吗？"
        }}
      </h4>
      <div :class="['btn', flag ? '' : 'btn-cancel']">
        <button @click="Confirm">是的</button>
        <button @click="Cancel">{{ isEmpty ? "点错了" : target ? "不用" : "还没" }}</button>
      </div>
    </form>
  </div>
  <div :class="['modal', flag ? 'active' : 'cancel']"></div>
</template>

<script src='./Dialog.ts'></script>
<style src='./Dialog.css' scoped></style>