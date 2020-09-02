Page({
  data:{
    name:'CoderWhy',
    age:18,
    students:[
      {id:110,name:'kobe',age:20},
      {id:111,name:'curry',age:30},
      {id:112,name:'james',age:40},
      {id:113,name:'why',age:50},
    ],
    counter:0
  },
  handleButtonClick(){

    //1..错误做法，界面不会刷新
      // console.log(this.data.counter)
      // this.data.counter+=1

      //2..this.setData()
      this.setData({
        counter:this.data.counter +1
      })


  },
  handleSubtraction(){
    this.setData({
      counter:this.data.counter -1
    })
  }
})