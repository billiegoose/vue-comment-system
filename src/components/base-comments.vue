<template>
  <div class="ui threaded comments">
    <h3 class="ui dividing header">Comments</h3>
    <child-comment v-for="comment in comments" :comment="comment"></child-comment>
    <reply-form ref="reply-form" :parent_id="article_id"></reply-form>
  </div>
</template>

<style src="semantic-ui-css/semantic.min.css">
/* Side note - it totally works as "scoped" too, but the body styles are missing */
/*@import "https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.6/semantic.css";*/
</style>

<script>
export default {
  name: 'base-comments',
  data () {
    return {
      reply_body: ''
    }
  },
  props: ['comments', 'article_id'],
  methods: {
    submit () {
      this.reply_body = this.$refs.simplemde.value()
    }
  },
  mounted () {
    this.$nextTick(() => {
      // code that assumes this.$el is in-document

    })
  }
}
</script>
