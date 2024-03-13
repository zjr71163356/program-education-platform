<template>
  <codemirror
    v-model="code"
    placeholder="此处编辑代码"
    :style="{ height: '85%' }"
    :autofocus="true"
    :indent-with-tab="true"
    :tab-size="2"
    :extensions="extensions"
    @ready="handleReady"
  />
</template>

<script>
import { defineComponent, ref, shallowRef } from 'vue' // Import the 'toRefs' function

import { Codemirror } from 'vue-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { cpp } from '@codemirror/lang-cpp'
import { java } from '@codemirror/lang-java'
import { python } from '@codemirror/lang-python'

import { oneDark } from '@codemirror/theme-one-dark'

export default defineComponent({
  components: {
    Codemirror
  },
  props: {
    selectedlanguage: {
      type: String,
      Required: true
    },
    IsSendCode: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    selectedlanguage: {
      immediate: true,
      handler(val) {
        if (val === 'JavaScript') {
          this.extensions = [javascript(), oneDark]
        } else if (val === 'C++') {
          this.extensions = [cpp(), oneDark]
        } else if (val == 'Java') {
          this.extensions = [java(), oneDark]
        } else if (val == 'Python') {
          this.extensions = [python(), oneDark]
        } else {
          this.extensions = [cpp(), oneDark]
        }
      }
    },
    IsSendCode: {
      handler(val) {
          if (val == true) {
            console.log('code-submitted');
         
            this.$emit('code-submitted', this.code);
             
          }
        }
    }
  },
  setup() {
    // Disable autocomplete for Python language

    // rest of the setup code...
    const isSendCode=ref(false)
    const code = ref(``)
    const extensions = [oneDark]

    // Codemirror EditorView instance ref
    const view = shallowRef()
    const handleReady = (payload) => {
      view.value = payload.view
    }

    // Status is available at all times via Codemirror EditorView
 

    return {
      code,
      extensions,
      handleReady,
      isSendCode
    }
  }
})
</script>
<style scoped>
.CodeEditer-h {
  height: calc(100vh - 90px);
}
</style>
