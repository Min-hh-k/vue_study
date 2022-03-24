Vue.component('memo-component', {
  props : ['id'],
  template: 
  `
  <div>
      <slot></slot>
      <hr></hr>
      <p>{{ time }}</p>
  </div>
  `,
  data: function() {
    return {
      time : new Date().getFullYear()+"년 "+new Date().getMonth()+"월 "+new Date().getDay()+"일"
    }
  },
  methods: {
    deletememo() {
      this.$emit('delete', this.id)
    }
  }
})