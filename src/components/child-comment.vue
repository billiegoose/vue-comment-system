<template>
  <div class="comment" :id="comment.timestamp" :style="{backgroundColor: preview ? 'aliceblue' : ''}">
    <a class="avatar">
      <img :src="avatar_url">
    </a>
    <div class="content">
      <a class="author">{{comment.author}}</a>
      <div class="metadata">
        <div class="date">{{time_ago}}</div>
      </div>
      <div class="text">
        <div v-html="safe_body"></div>
      </div>
      <div class="actions" v-if="!preview">
        <a @click="compose">Reply</a>
        <a>Edit</a>
      </div>
    </div>
    <div class="comments" v-if="!preview" v-show="reply_count > 0 || show_reply_form">
      <child-comment v-for="comment in comment.replies" :comment="comment"></child-comment>
      <reply-form ref="replyForm" v-if="show_reply_form" :parent_id="comment.uuid" @submit="submit"></reply-form>
    </div>
  </div>
</template>

<style src="semantic-ui-css/semantic.min.css">
/* Side note - it totally works as "scoped" too, but the body styles are missing */
/*@import "https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.6/semantic.css";*/
</style>

<script>
import ago from 's-ago'
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()

export default {
  name: 'child-comment',
  data () {
    return {
      show_reply_form: false,
      reply_body: ''
    }
  },
  props: ['comment', 'preview'],
  computed: {
    avatar_url () {
      return `https://github.com/${this.comment.author}.png`
    },
    _timestamp () {
      let t = parseInt(this.comment.timestamp)
      if (t > Date.now() * 10) {
        t = t / 1000
      }
      return t
    },
    time_ago () {
      if (Number.isInteger(this._timestamp)) {
        return ago(new Date(this._timestamp))
      } else {
        return 'invalid timestamp'
      }
    },
    safe_body () {
     return md.render(this.comment.body)
    },
    reply_count () {
      if (this.comment.replies === null || typeof this.comment.replies === 'undefined') {
        return 0
      } else {
        return this.comment.replies.length
      }
    }
  },
  methods: {
    compose () {
      this.show_reply_form = ! this.show_reply_form
    },
    submit (text) {
      this.show_reply_form = false
    }
  },
  mounted () {
    this.$nextTick(() => {

    })
  },
}
</script>
