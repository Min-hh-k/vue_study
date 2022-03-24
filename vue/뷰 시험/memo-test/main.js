new Vue ({
  el: '#app',
  data: {
    id : 0,
    memo: '',
    memoarea: '',
    memolist : [],
  },
  methods: {
    addMemo() {
      this.memolist.push( {id:this.id, memo:this.memo, memoarea:this.memoarea } )
      this.id++;
      this.memo;
      this.memoarea;
    },
    deletememo(id) {
      let index = 0;
      this.memolist.forEach((element, i) => {
        if(element.id == id) {
          index = i;
        }
      })
      this.memolist.splice(index, 1)
    },
  }

})