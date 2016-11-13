<template>
  <form class="ui reply form" @submit.prevent="submit">
    <div class="field">
      <simplemde ref="simplemde" :uid="parent_id" @change="updatePreview" ></simplemde>
    </div>
    <child-comment :preview="true" :comment="comment_preview" v-if="show_preview"></child-comment>
    <div class="ui slider checkbox">
      <input type="checkbox" v-model="show_preview" :id="checkboxId">
      <label :for="checkboxId">Show Preview</label>
    </div>
    <button type="submit" class="ui right floated big primary submit button">
      Post
    </button>
  </form>
</template>

<style src="semantic-ui-css/semantic.min.css">
/* Side note - it totally works as "scoped" too, but the body styles are missing */
/*@import "https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.6/semantic.css";*/
.ui.primary.preview.button {
  width: 100%;
}
.ui.primary.submit.button {
  width: 100%;
}
</style>

<script>
import {debounce, uniqueId} from 'lodash'

export default {
  name: 'reply-form',
  data () {
    return {
      show_preview: false,
      comment_preview: null,
      checkboxId: uniqueId('checkbox-')
    }
  },
  props: ['parent_id'],
  methods: {
    value () {
      return this.$refs.simplemde.value()
    },
    submit () {
      this.$emit('submit', this.value())
      this.show_preview = false
      this.$refs.simplemde.value('')
    },
    updatePreview (text) {
      this.comment_preview = {
        author: 'wmhilton',
        timestamp: (new Date).valueOf(),
        replies: [],
        body: text
      }
    },
  },
  components: {
    'simplemde': require('./simplemde.vue')
  },
}
</script>
