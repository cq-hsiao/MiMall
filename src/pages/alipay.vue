<template>
    <div class="ali-pay">
        <order-header title="订单支付">
            <template v-slot:tip>
                <span>订单付款操作</span>
            </template>
        </order-header>
        <loading v-if="loading"></loading>
        <div class="form" v-html="content"></div>
    </div>
</template>

<script>
    import Loading from './../components/Loading'
    import OrderHeader from './../components/OrderHeader'
    export default{
        name:'alipay',
        components:{
            OrderHeader,
            Loading
        },
        data(){
            return {
                orderId:this.$route.query.orderId,
                content:'',
                loading:true
            }
        },
        mounted(){
            this.paySubmit();
        },
        methods:{
            paySubmit(){
                this.axios.post('/pay',{
                    orderId:this.orderId,
                    orderName:'Vue高仿小米商城',
                    amount:0.01,//单位元
                    payType:1 //1支付宝，2微信
                }).then((res)=>{
                    this.content = res.content;
                    setTimeout(()=>{
                        document.forms[0].submit();
                    },100)
                })
            }
        }
    }
</script>