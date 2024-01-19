<template>
  <codemirror
    v-model="code"
    placeholder="Code goes here..."
    :style="{ height: '400px' }"
    :autofocus="true"
    :indent-with-tab="true"
    :tab-size="2"
    :extensions="extensions"
    :mode="mode"
    @ready="handleReady"
    @change="log('change', $event)"
    @focus="log('focus', $event)"
    @blur="log('blur', $event)"
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
    }
  },
  watch: {
    selectedlanguage: {
      immediate: true,
      handler(val) {
        if (val === 'javascript') {
          this.extensions = [javascript(), oneDark]
        } else if (val === 'cpp') {
          
          this.extensions = [cpp(), oneDark]
        } else if (val == 'java') {
          this.extensions = [java(), oneDark]
        } else if (val == 'python') {
          this.extensions = [python(), oneDark]
        } else {
          this.extensions = [cpp(), oneDark]
        }
      }
    }
  },
  setup() {
    // Disable autocomplete for Python language

    // rest of the setup code...

    const code = ref(`console.log('Hello, world!')`)
    const extensions = [oneDark]

    // Codemirror EditorView instance ref
    const view = shallowRef()
    const handleReady = (payload) => {
      view.value = payload.view
    }

    // Status is available at all times via Codemirror EditorView
    const getCodemirrorStates = () => {
      const state = view.value.state
      const ranges = state.selection.ranges
      const selected = ranges.reduce((r, range) => r + range.to - range.from, 0)
      const cursor = ranges[0].anchor
      const length = state.doc.length
      const lines = state.doc.lines
      // more state info ...
      // return ...
    }

    return {
      code,
      extensions,
      handleReady,

    }
  }
})
</script>
