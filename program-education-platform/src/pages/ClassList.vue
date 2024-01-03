<template>
  <el-tabs tab-position="left">
    <el-tab-pane label="我的课程">
      <el-card class="box-card">
        <el-row :gutter="20" class="margin-zero">
          <div v-for="o in 5" :key="o" class="text item">
            <el-col :span="6">
              <ClassItem />
            </el-col>
          </div>
        </el-row>
      </el-card>
    </el-tab-pane>
    <el-tab-pane label="全部课程">
      <el-card class="box-card">
        <el-row :gutter="20" class="margin-zero">
          <div v-for="o in 20" :key="o" class="text item">
            <el-col :span="6">
              <ClassItem />
            </el-col>
          </div>
        </el-row>
      </el-card>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import ClassItem from '../components/ClassItem.vue'
export default {
  components: { ClassItem }
}
</script>
<style>
.text {
  font-size: 14px;
}

.item {
  margin: 18px;
}

.box-card {
  width: 80vw;
}

.el-row {
  justify-content: center;
  align-items: center;
}
</style>
