Vue.component('memo-component', {
  props : ['id'],
  template: 
  `
  <div>
      <h4>메모 <button @click="deletememo">X</button></h4>
      <slot></slot>
      <p>{{ time }}</p>
  </div>
  `,
  data: function() {
    return {
      time : new Date()
    }
  },
  methods: {
    deletememo() {
      this.$emit('delete', this.id)
    }
  }
})