<template>
 <div id="productInfo">
   <h1>项目介绍</h1>
   <div v-for="item in productIntroduceList">
     <div class="leadCast">
       <span class="leadCast_title">{{ item.introduceName }}</span>
       <p v-html="UnUnicode(item.introduceValues)"></p>
     </div>
     <span class="split"></span>
   </div>
   <!--空项目-->
   <Empty :isEmpty="!productIntroduceList.length"></Empty>

   <!--<div class="leadCast cast">-->
     <!--<span class="leadCast_title">跟投方</span>-->
     <!--<p>中证集团成立于2007年，是集投资管理、咨询服务、人力资源、互联网金融为一体的综合性企业集团，中证集团下属企业在同业中均处于领先地位。</p>-->
   <!--</div>-->
   <!--<span class="split"></span>-->
   <!--<div class="leadCast">-->
     <!--<span class="leadCast_title">项目介绍</span>-->
     <!--<h3>这家魔性酒吧想开100家店，现在开到哪里火到哪里</h3>-->
     <!--<p>领投方盐商集团投资团队核心管理人员为某知名美元基金中国区负责人，投资经验非常丰富，从VC到PE，各个行业均有所涉及，对于互联网行业投资也有自身独到的见解，管理资金规模超过70亿美金。</p>-->
     <!--<img src="../../assets/proDetail/detail.png" alt="">-->
     <!--<span class="img_title">「常绿山居」就掩映在这片竹林中</span>-->
     <!--<p>常绿之所以“常绿”，是因为这里漫山遍野都是竹林，环境清幽，风景怡人，是个幽静生活的好地方。而在不同的季节，还能看到不尽相同的景致，比如春季的映山红，秋天的红枫和冬日的银装素裹。</p>-->
     <!--<img src="../../assets/proDetail/detail.png" alt="">-->
     <!--<span class="img_title">「常绿山居」就掩映在这片竹林中</span>-->
   <!--</div>-->
   <!--<span class="split"></span>-->

   <!--我的回报-->
   <!--<div id="reward">-->
     <!--<span class="reward_title">我的回报</span>-->
     <!--<ul>-->
       <!--<li>1.享有「常绿山居」<span>0.5%</span>的分红权加投资金额<span>12%的收益，每年参与分红</span>。三年后，您可以按照我们约定方式协商退出，我们将以<span>30000+2%</span>的方式回购；</li>-->
       <!--<li>2.共建期内，每年免费享有「常绿山居」任意房型的两晚住宿权（含早餐），不限时段使用，但不可跨年累计；</li>-->
       <!--<li>3.共建期内，凡成功推荐入住，所得房费的<span>10%</span>归您所有；</li>-->
       <!--<li>4.本人入住，可终身享受<span>85折优惠</span>（可与其他优惠叠加使用）；</li>-->
       <!--<li>5.共建期内，每年免费获赠龙门古镇门票两张，并可享有永安山滑翔伞基地门票<span>6折</span>机会一次。</li>-->
       <!--<li>6.共建期内，每年获得「常绿山居」土特产大礼包一份（包括但不限于手工年糕、蒸糕和笋干等）。</li>-->
     <!--</ul>-->
   <!--</div>-->
   <!--<span class="split"></span>-->

   <!--创始团队-->
   <!--<div id="team">-->
     <!--<span class="team_title">创始团队</span>-->
     <!--<ul>-->
       <!--<li>-->
         <!--<div class="img_wrapper"></div>-->
         <!--<div class="team_con">-->
           <!--<h3>小娘娘</h3>-->
           <!--<span>这家魔性酒吧的创始人</span>-->
           <!--<span>这家魔性酒吧的创始人</span>-->
           <!--<span>这家魔性酒吧的创始人</span>-->
         <!--</div>-->
       <!--</li>-->
       <!--<li>-->
         <!--<div class="img_wrapper"></div>-->
         <!--<div class="team_con">-->
           <!--<h3>小娘娘</h3>-->
           <!--<span>这家魔性酒吧的创始人</span>-->
           <!--<span>这家魔性酒吧的创始人</span>-->
           <!--<span>这家魔性酒吧的创始人</span>-->
         <!--</div>-->
       <!--</li>-->
     <!--</ul>-->
   <!--</div>-->
   <!--<span class="split"></span>-->
  <!--风险提示-->
   <!--<div id="risk_info">-->
     <!--<span class="risk_title">风险提示</span>-->
     <!--<p>非公开股权项目具有较高的风险。在参与非公开股权项目投资前，投资者应确保自己符合相关法律法规、规章及规范性文件和平台规则规定的合格投资人的标准，并完全明白该项投资的性质和所涉及的风险，在审慎考虑后决定投资与自身风险承受能力和资产管理需求匹配的融资项目。米筹金服非公开股权平台不对任何项目的盈利、亏损做承诺、担保或保证，不对您的投资损失承担任何责任。</p>-->
     <!--<dl>-->
       <!--<dt>主要风险</dt>-->
       <!--<dd>1、投资失败风险：由于各种原因致使您最终未能成功投资目标企业而产生的投资款被退回且未获得任何收益的风险。在此期间，您也可能丧失了其他潜在的投资机会。</dd>-->
       <!--<dd>2、政策风险：如国家宏观政策以及市场法律法规、规章、规范性文件及相关监管规定发生变化，可能影响被投项目的受理、投资运作、清算等业务的正常进行，并导致项目收益降低甚至本金损失，也可能导致项目违反国家法律法规、规章及规范性文件或者其他合同的有关规定，进而导致项目被宣告无效、撤销、解除或提前终止等。</dd>-->
       <!--<dd>3、信用风险：不排除在被投项目的经营过程中，被投项目的经营管理人存在信用风险或道德风险的可能性，或所投资的其它资产未达到预期收益，则投资人可能面临收益损失、本金部分损失、甚至本金全部损失的风险。</dd>-->
       <!--<dd>4、流动性风险：除另有约定外，投资者无提前终止或提前赎回股权的权利，可能导致投资者需要资金时不能随时变现。</dd>-->
       <!--<dd>5、市场风险：由于我国及周边国家、地区宏观经济环境和周边市场的变化，可能使任何市场主体的经营均处于波动中，从而导致被投项目的价值不同程度的贬损。</dd>-->
       <!--<dd>6、其他风险：信息传递风险、认购风险、技术风险、管理风险、不可抗力及意外事件风险，以及其他平台无法预见、无法避免或无法控制的风险。</dd>-->
     <!--</dl>-->
   <!--</div>-->
   <!--底部导航-->

   <!--<div id="buy_nav">-->
     <!--<a class="buy_btn" v-if="isProgress === 'all'" @click="buyFn();" :class="[ productinfo.state != 1 && productinfo.state != 2  ? 'disable' : '' ]">-->
       <!--我要认购-->
     <!--</a>-->
     <!--<a class="buy_btn" v-else-if="isProgress === 'test'" @click="gotoWebView('风险测评','dist/index.html#/risk?productId='+ productinfo.productId +'&&productName='+ productinfo.platformProjectsFullNm +'')">-->
       <!--风险测评-->
     <!--</a>-->
     <!--<a class="buy_btn"  v-else @click="openId();">-->
       <!--实名绑卡-->
     <!--</a>-->
   <!--</div>-->
 </div>
</template>

<script type="text/ecmascript-6">
  import {productDetail} from '@/service/getData'
  import {formatUtils} from '@/config/mixin'
  import Empty from '@/common/empty/empty'

  export default {
    props: {
      productIntroduceList: {},
//      isProgress:'',
//      isShowDetail:''
    },
    mixins: [formatUtils],
    data() {
      return {
//        productId:'',//项目ID
//        type:''//类型1 项目信息  2项目进展

      };
    },
    mounted() {

    },
    methods: {
//      buyFn() {
////        console.log(this.productinfo.state == 1 || this.productinfo.state == 2)
//        if(this.productinfo.state == 1 || this.productinfo.state == 2){//募集期和开发期可以购买
//          var json = {};
//          json.platformProjectsFullNm = this.productinfo.platformProjectsFullNm;
//          json.riskLvl = this.productinfo.riskLvl;
//          json.allotmentShares = this.productinfo.allotmentShares;
//          json.dvidMd = this.productinfo.dvidMd;
//          json.productId = this.productinfo.productId;
//          json.salesQuota = this.productinfo.addAmount;//最小追投金额
//          json.productcontracts = this.productinfo.productcontracts;//产品合同PDF
//          json.productsignbook = this.productinfo.productsignbook;//电子签名约定书PDF
//          json.investmentconfirmation = this.productinfo.investmentconfirmation;//投资确认书PDF
//          json.productprospectus = this.productinfo.productprospectus;//产品合同PDF
//          //JsObject.showToast("dd");
//          ///JsObject.showToast(JSON. (json));
//          JsObject.ConfirmOrder(JSON.stringify(json));
//        }else{
//            //其它产品状态不可购买
//        }
//
//      },
//      gotoWebView(title,url) {
//        console.log(url)
//        JsObject.startWebview(title,url)
//      },
//      openId(){
////       this.productinfo.state = '3'
//          if(this.isProgress == 'bind'){
//            //实名绑卡
//            JsObject.openIDCard();
//          }else if(this.isProgress == 'bindCard'){
//            //银行卡绑定
//            JsObject.bandBankCard();
//          }
//
//      }
    },
    components: {Empty}
  };

</script>

<style lang="scss">
  @import 'src/style/mixin';
  $fz:0.75rem;
  $fc:#333;

  #productInfo{
    padding-bottom: 2.2rem;
    font-size: 0;
    min-height:27rem;
    height:auto;
    h1{
      font-size: .7rem;
      line-height: .95rem;
      color: #666666;
      padding: 0.6rem 0.75rem 0.4rem;
    }
    .disable{
      background: #e6e6e6!important;
      color: #999!important;
    }
    .leadCast{
      padding: 0.4rem 0.75rem 1.1rem;
      .leadCast_title{
        font-size: $fz;
        color: $fc;
        line-height: 1.45rem;
        font-weight: 600;
      }
      h3{
        font-size: 0.7rem;
        color:$fc;
        font-weight:600;
        line-height: 0.9rem;
        margin:0.3rem 0;
      }
      p{
        font-size: 0.65rem;
        color: #666;
        line-height:1rem;
        text-align: auto;
      }
      img{
        padding: 0.5rem 0 0.4rem;
        width:100%;
      }
      .img_title{
        display: block;
        width:100%;
        text-align: center;
        font-size: 0.55rem;
        color: #999;
        margin-bottom: 0.5rem;
      }
    }
    .cast{
      padding-top: 0;
    }
    .split{
      display: block;
      @include wh(100%,0.45rem);
      background: #f4f3f1;
    }
    #reward{
      padding: 0.4rem 0.75rem 1.1rem;
      .reward_title{
        font-size: $fz;
        color: $fc;
        line-height: 1.45rem;
        font-weight: 600;
      }
      ul{
        padding-top: 0.3rem;
        li{
          font-size: 0.65rem;
          color: #666;
          line-height: 1rem;
          span{
            color: $main;
          }
        }
      }
    }
    #team{
      padding: 0.4rem 0.75rem 1.1rem;
      .team_title{
        font-size: $fz;
        color: $fc;
        line-height: 1.45rem;
        font-weight: 600;
      }
      ul{
        padding-top: 0.4rem;
        li{
          margin-bottom: 0.75rem;
          .img_wrapper{
            margin-right: 0.75rem;
            display: inline-block;
            width: 3.5rem;
            height:4.7rem;
            /*background:url("../../assets/proDetail/avatar.png") no-repeat top center;*/
            /*background-size: cover;*/
          }
          .team_con{
            vertical-align: top;
            display: inline-block;
            width:10rem;
            h3{
              font-size: 0.7rem;
              color: #333;
              font-weight: 600;
              line-height: 1.5rem;
            }
            span{
              display: block;
              font-size: 0.5rem;
              color: #666;
              line-height: 0.85rem;
            }
          }
        }
      }
    }
    #risk_info{
      padding: 0.4rem 0.75rem 1.1rem;
      .risk_title{
        font-size: $fz;
        color: $fc;
        line-height: 1.45rem;
        font-weight: 600;
      }
      p{
        padding-top: 0.3rem;
        font-size: 0.65rem;
        color: #666;
        line-height:1rem;
      }
      dl{
        dt{
          color: $main;
          font-size: 0.65rem;
          padding-top: 0.5rem;
          padding-bottom: 0.3rem;
          text-align: center;
        }
        dd{
          color: #333;
          font-size: 0.65rem;
          line-height: 1rem;
        }
      }
    }
  }
</style>
