<template>
  <div class="workspace">
    <div class="item" style="width: 300px; height: 200px; background: white">1</div>
    <div class="item" style="width: 300px; height: 100px; background: white">2</div>
    <div class="item" style="width: 300px; height: 100px; background: white">3</div>
    <div class="item" style="width: 300px; height: 100px; background: white">4</div>
    <div class="item" style="width: 300px; height: 100px; background: white">5</div>
    <div class="item" style="width: 300px; height: 100px; background: white">6</div>
  </div>
</template>
<script lang="ts">
export default {};
</script>

<style lang="less">
.workspace {
  column-count: 2;
  column-gap: 16px;
  background: gray;
  height: 100vh;
  .item {
    display: block;
    border: 1px solid red;
    margin-bottom: 16px;
    break-inside: avoid;
  }
}
</style>
