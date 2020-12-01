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
      <h3>Transaction to add</h3>
      <textarea
        name="content"
        id="content"
        v-model="FormModel.content"
        cols="30"
        rows="5"
        placeholder="please input your content..."
      ></textarea>
      <select name="type" id="type" v-model="FormModel.type">
        <option value="Life">Life</option>
        <option value="Work">Work</option>
        <option value="Study">Study</option>
      </select>
      <div :class="['btn',flag ? '' : 'btn-cancel']">
        <button @click="Confirm">Confirm</button>
        <button @click="Cancel">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script src='./Add.ts'></script>
<style src='./Add.css' scoped></style>