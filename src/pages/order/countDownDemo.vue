<template>
  <span class="countTime" :endTime="endTime" :callback="callback" :endText="endText">
    <slot>
      {{content}}
    </slot>
  </span>
</template>
<script>
  export default {
    data(){
      return {
      content: '',
      }
    },
    props:{
      endTime:{
        type:String,
        default:''
      },
      endText:{
        type : String,
        default:'已结束'
      },
      callback : {
        type : Function,
        default :''
      }
    },
    mounted () {
     this.countdowm(this.endTime)
      console.log(this.endTime);
    },
    updated() {
//      this.countdowm(this.endTime)
    },
    methods: {
      countdowm(timestamp){
        console.log(timestamp);
        let self = this;
      let timer = setInterval(function(){
        let t = timestamp--;//秒
		//console.log(t)
        if(t>0){
          let min=Math.floor(t/60);
          let sec=Math.floor(t%60);
          min = min < 10 ? "0" + min : min;
          sec = sec < 10 ? "0" + sec : sec;
          let format = '';
          format = "剩余 "+min+" 分钟";
          self.content = format;
          }else{
           clearInterval(timer);
           self.content = self.endText;
           self._callback();
          }
         },1000);
        },
        _callback(){
        if(this.callback && this.callback instanceof Function){
           this.callback(...this);
         }
      }
    }
  }
</script>
<style>
	.countTime{
		color: #ff8e1d;
	}
</style>
