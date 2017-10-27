<template>
  <div id="register_wrapper">
    <!--手机号-->
    <section>
      <div class="form-group" :class="{ 'form-group--error': $v.username.$error }">
        <span class="icon_phone"></span>
        <input class="form__input" type="tel" id="tel" v-model.trim="username" @input="$v.username.$touch()" placeholder="请输入手机号">
      </div>
      
      <span class="form-group__message" v-if="!$v.username.required">手机号不能为空</span>
      <span class="form-group__message" v-else-if="!$v.username.maxLength">手机号为11位</span>
      <span class="form-group__message" v-else-if="!$v.username.telphone">手机号格式不正确</span>
      <span class="form-group__message" v-else="!$v.username.isUnique">{{errorMsg.msg}}</span>
      <!--<pre>username: {{ $v.username }}</pre>-->
    </section>
    <!--手机验证码-->
    <section>
      <div class="form-group" style="width:68%;" :class="{ 'form-group--error': $v.code.$error }">
        <span class="icon_verify"></span>
        <input class="form__input" v-model.trim="code" id="code" @input="$v.code.$touch()" placeholder="请输入手机验证码">
        <button class="get_code" id="get_code" style="bottom:-0.1rem" @click="settime()">获取验证码</button>
      </div>
      
      <span class="form-group__message" v-if="!$v.code.required">验证码不能为空</span>
      <span class="form-group__message" v-else-if="!$v.code.numeric">验证码为数字</span>
      <span class="form-group__message" v-else-if="!$v.code.minLength">验证码为6位数字</span>
      <span class="form-group__message" v-else="!$v.code.maxLength">验证码为6位数字</span>
      <!--<pre>username: {{ $v.code }}</pre>-->
    </section>

    <!--密码-->
    <section>
      <div class="form-group" :class="{ 'form-group--error': $v.password.$error }">
        <span class="icon_pwd"></span>
        <input class="form__input" v-model.trim="password" id="password" @input="$v.password.$touch()" placeholder="密码8位以上字母与数字组合">
      </div>
     
      <span class="form-group__message" v-if="!$v.password.required">请输入密码</span>
      <span class="form-group__message" v-else="!$v.password.passwordReg">密码不正确</span>
      <!--<pre>username: {{ $v.password }}</pre>-->
    </section>

    <!--注册协议-->
    <section style="margin:1.25rem 0 0 0.25rem">
      <div class="" :class="{ 'form-group--error': $v.isAgree.$error }">
        <input id="isAgree" type="checkbox" v-model="isAgree">
        <span class="reg_protocol">我已阅读和同意<a href="#/registeProtocol">《注册及服务协议》</a></span>
      </div>
    </section>
    <button  class="btn_disabled" :class="f($v.validationGroup.$error)" @click="submit();" style="margin-top:1rem">下一步</button>
    <!-- <input type="button" value="提交" @click="submit();" :data-validationGroup-error="$v.validationGroup.$error"> -->
    <input type="hidden" id="v_tel" :value="$v.username.required">
    <input type="hidden" id="v_code" :value="$v.code.required">
    <input type="hidden" id="v_pwd" :value="$v.password.required">
    <input id="group_error" type="hidden" :value="$v.validationGroup.$error">
   <!--  <span id="g_error">{{$v.username.$error}}</span> -->
    <div>综合{{$v.validationGroup.$error}}</div>
   
  </div>
</template>

<script type="text/ecmascript-6">
  import { required ,minLength,maxLength,between,numeric } from 'vuelidate/lib/validators'
  import { telphone,passwordReg } from '@/vuelidators/index'
  import {checkMobile,registFirstSubmit} from '@/service/getData'
  import $ from 'jquery'

  const ERR_OK = '000';

  export default {
    data () {
      return {
        username: '',//手机号
        password:'',//密码
        code:'',//手机验证码
        isAgree:false,//是否同意注册协议
        errorMsg:{},
        btn_state:true,
        countdown:5
      }
    },
    methods: {
      f(val){
        if(!val){
          console.log("false11");
          if($("#v_tel").val()=="true"&&$("#v_code").val()=="true"&&$("#v_pwd").val()=="true"){
              // this.btn_state = false;
              // console.log(this.btn_state);
              return "btn_default"
          }
        }else{
         
         return ""
        }

      },
      submit(){
        console.log(this.isAgree);
        console.log($("#group_error").val());

      },
      settime() { 
        var target = $("#get_code");
        var timer = '';
        if (this.countdown == 0) { 
          target.removeAttr('disabled');
          target.html('获取验证码');
          this.countdown = 5;
          //clearInterval(timer);
        } else { 
          target.attr('disabled','disabled');
          target.html('倒计时('+this.countdown+')');
          this.countdown--; 
          var self = this;
          setTimeout(function() { 
            self.settime() 
          },1000) 
        };
      },
    
      
    },
    updated(){
      /*首先判断group_error是否是false,其次判断某些字段是否未填*/
      // if($("#group_error").val()=="false"){
      //     console.log("false11");
      //     if($("#v_tel").val()=="true"&&$("#v_code").val()=="true"&&$("#v_pwd").val()=="true"){
      //         this.btn_state = false;
      //         console.log(this.btn_state);
      //     }
      // }else{
      //   console.log("true222");
      //   this.btn_state = true;
      // }
    },
    validations: {
      username: {
        required,
        maxLength: maxLength(11),
        telphone,
        async isUnique (value) {
          if (value === '') return true
          if(value.length == 11){
             checkMobile().then(res =>{
            if(!Boolean(res.code == ERR_OK)){//验证不通过显示错误信息
              this.errorMsg = res
            }
            return Boolean(res.code == ERR_OK)
          })
          }
         
          // if (value === '') return true
          // if(value.length == 11){
          //   const response = await checkMobile(this.username);
          //   console.log(Boolean(response.code == ERR_OK))
          //   if(!Boolean(response.code == ERR_OK)){//验证不通过显示错误信息
          //     this.errorMsg = response
          //   }
          //   return Boolean(response.code == ERR_OK)

          // }
        }
      },
      code:{
        required,
        numeric,
        maxLength:maxLength(6),
        minLength:minLength(6)
      },
      password: {
        required,
        passwordReg
      },
      isAgree: {
        required
      },
      validationGroup:['username','code','password']
    }
  }
</script>

<style lang="scss">
  @import 'src/style/mixin';
  @import 'src/style/iconfont';

  #register_wrapper{
    padding: 3rem 1.25rem 0 1.25rem;
    section {
      position: relative;
      margin-bottom: 0.5rem;
      .form-group__message{
        position: absolute;
        right:0;
        top:0.3rem;
        font-size: .6rem;
        color: red;
        line-height: 1;
        display: none;
      }
      .form-group{
        border-bottom: 1px solid #ddd;
        margin-bottom: 0.3rem;
        overflow: hidden;
        // height: 1.8rem;
        input{
          width:calc(100% - 2rem);
          font-size: .6rem;
          outline: none;
          padding: 0.25rem 0 0.25rem 1rem;

        }
      }
    }

  }
  .reg_protocol{
    color:#666;font-size:0.6rem;
    a{color:#ff8e1d;}
  }
  .form-group--error+.form-group__message {
    display: block!important;
  }
.icon_phone{background:url('../../assets/login/login_tel.png');position: absolute;height: 23px;width: 20px;top: 4px;background-size: 20px;}
.icon_pwd{background:url('../../assets/login/login_password.png');position: absolute;height: 23px;width: 20px;top: 4px;background-size: 20px;}
.icon_verify{background:url('../../assets/login/login_verify.png');position: absolute;height: 23px;width: 20px;top: 4px;background-size: 20px;}
.icon_eye{background:url('../../assets/login/login_hide.png');position: absolute;height: 23px;width: 20px;top: 4px;right:0;background-size: 20px;}


</style>
