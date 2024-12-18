<template>
  <div class="w-full h-full">
    <vue-cropper
      ref="cropper"
      :src="imageUrl"
      :autoCrop="true"
      :view-mode="1"
      :guides="true"
      :aspectRatio="1"
      
    ></vue-cropper>

    <button @click="cropImage">Crop Image</button>
  </div>
</template>

<script>
import 'cropperjs/dist/cropper.css'
import VueCropper from 'vue-cropperjs'

export default {
  components: {
    VueCropper
  },
  data() {
    return {
      imageUrl: 'https://s2.loli.net/2024/02/17/3or8v7bnywWVY5h.png'
    }
  },
  methods: {
    cropImage() {
      const cropper = this.$refs.cropper

      cropper.getCroppedCanvas().toBlob((blob) => {
        // 在这里处理截取后的图像，比如上传至服务器或其他操作
        console.log(blob)
      })
    }
  }
}
</script>

<style scoped>
/* 根据需要添加样式 */
</style>
