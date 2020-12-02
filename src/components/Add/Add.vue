<template>
  <div id="Add">
    <div @click="addTransaction" :class="['add', addStatus ? 'noActive':'']">
      <span></span>
      <span></span>
    </div>
    <form
      action="javascript:;"
      :class="['form-contaienr-add', flag ? 'confirm' : 'cancel']"
    >
      <h3>给自己制定个计划吧</h3>
      <textarea
        name="content"
        id="content"
        v-model="FormModel.content"
        cols="30"
        rows="5"
        placeholder="请输入计划内容..."
      ></textarea>
      <select name="type" id="type" v-model="FormModel.type">
        <option value="生活计划">生活计划</option>
        <option value="工作计划">工作计划</option>
        <option value="学习计划">学习计划</option>
      </select>
      <div :class="['btn',flag ? '' : 'btn-cancel']">
        <button @click="Confirm">确定</button>
        <button @click="Cancel">取消</button>
      </div>
    </form>
  </div>
</template>

<script src='./Add.ts'></script>
<style src='./Add.css' scoped></style>