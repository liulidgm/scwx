<template>
    <div id="orderlist_wrapper" class="needsClick">
   
     	<div>
            <router-link to="/all">全部</router-link>
            <router-link to="/returnOrder">退款订单</router-link>
            <!-- <router-link to="">支付成功</router-link>
            <router-link to="">购买成功</router-link>
            <router-link to="">认购成功</router-link> -->
        </div>
		<router-view></router-view>
    </div>
</template>

<script type="text/ecmascript-6">
 
  export default {
    data() {
      return {};
    }
  }
</script>

<style lang="scss" scoped>

</style>
