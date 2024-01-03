<template>
  <div class="list-item-link">
    <div class="heading-3">
      <div class="div">教程/课程标题</div>
    </div>
    <img class="python-png" src="../assets/logo.svg" />
    <div class="group-19">
      <div class="rectangle-14"></div>
      <div class="div2">教程</div>
    </div>
    <div class="x">进度:X%</div>
  </div>
</template>
<script>
/* Code generated with AutoHTML Plugin for Figma */

export default {
  name: "ListItemLink",
  components: {},
  props: {},
  data() {
    // quickfix to have components available to pass as props
    return {};
  },
};
</script>
<style scoped>
.list-item-link,
.list-item-link * {
  box-sizing: border-box;
}
.list-item-link {
  background: #ffffff;
  border-radius: 4px;
  border-style: solid;
  border-color: #d3dce6;
  border-width: 1px;
  width: 160px;
  height: 216px;
  position: relative;
  box-shadow: 0px 4px 8px 0px rgba(49, 48, 45, 0.08);
}
.heading-3 {
  height: 48px;
  position: absolute;
  right: 17px;
  left: 17px;
  top: 97px;
  overflow: hidden;
}
.div {
  color: #25265e;
  text-align: left;
  font-family: "Inter-SemiBold", sans-serif;
  font-size: 15.75px;
  line-height: 24px;
  font-weight: 600;
  position: absolute;
  left: 0px;
  top: 4px;
  width: 112.06px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.python-png {
  width: 80px;
  height: 80px;
  position: absolute;
  left: 17px;
  top: 17px;
  overflow: hidden;
}
.group-19 {
  position: absolute;
  inset: 0;
}
.rectangle-14 {
  background: #3498db;
  border-radius: 3px;
  width: 49px;
  height: 19.93px;
  position: absolute;
  left: 13px;
  top: 181px;
}
.div2 {
  color: #ffffff;
  text-align: left;
  font-family: "Inter-Regular", sans-serif;
  font-size: 12px;
  font-weight: 400;
  position: absolute;
  left: 25px;
  top: 182.93px;
  width: 30.15px;
  height: 23px;
}
.x {
  color: #000000;
  text-align: left;
  font-family: "Inter-Regular", sans-serif;
  font-size: 12px;
  font-weight: 400;
  position: absolute;
  left: 107px;
  top: 183px;
}
</style>
