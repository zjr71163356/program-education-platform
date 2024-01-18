<template>
  <vue-monaco-editor
    :language="props.selectedlanguage"
    v-model:value="code"
    theme="vs-dark"
    :options="MONACO_EDITOR_OPTIONS"
    @mount="handleMount"
  />
</template>

<script lang="ts" setup>
import { ref, shallowRef ,watch} from 'vue'
const props = defineProps({
    selectedlanguage: {
        type: String,
        required: true
    }
})

const MONACO_EDITOR_OPTIONS = {
  automaticLayout: true,
  formatOnType: true,
  formatOnPaste: true,
  fontSize: 14,
  contextmenu:false

}

const code = ref('')
const editorRef = shallowRef()
const handleMount = (editor) => (editorRef.value = editor)

// your action
function formatCode() {
  editorRef.value?.getAction('editor.action.formatDocument').run()
}
</script>
