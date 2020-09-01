<template>
    <div class="header">
        <div class="nav-topbar">
            <div class="container">
                <div class="topbar-menu">
                    <a href="javascript:;">小米商城</a>
                    <a href="javascript:;">MUI</a>
                    <a href="javascript:;">云服务</a>
                    <a href="javascript:;">协议规则</a>
                </div>
                <div class="topbar-user">
                    <a href="javascript:;">登录</a>
                    <a href="javascript:;">注册</a>
                    <a href="javascript:;" class="my-cart"><span class="icon-cart"></span>购物车</a>
                </div>
            </div>
        </div>
        <div class="nav-header">
            <div class="container">
                <div class="header-logo">
                    <a href="/#/index"></a>
                </div>
                <div class="header-menu">
                    <div class="item-menu">
                        <span>小米手机</span>
                        <div class="children">
                            <ul>
                                <li class="product">
                                    <a href="javascript:;" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-1.png" alt="">
                                        </div>
                                        <div class="pro-name">小米cc9</div>
                                        <div class="pro-price">1799元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="javascript:;" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-1.png" alt="">
                                        </div>
                                        <div class="pro-name">小米cc9</div>
                                        <div class="pro-price">1799元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="javascript:;" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-1.png" alt="">
                                        </div>
                                        <div class="pro-name">小米cc9</div>
                                        <div class="pro-price">1799元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="javascript:;" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-1.png" alt="">
                                        </div>
                                        <div class="pro-name">小米cc9</div>
                                        <div class="pro-price">1799元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="javascript:;" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-1.png" alt="">
                                        </div>
                                        <div class="pro-name">小米cc9</div>
                                        <div class="pro-price">1799元</div>
                                    </a>
                                </li>
                            </ul>    
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>RedMi红米</span>
                    </div>
                    <div class="item-menu">
                        <span>小米电视</span>
                        <div class="children">
                            <ul>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-3-1.jpg" alt="">
                                        </div>
                                        <div class="pro-name">小米壁画电视 65英寸</div>
                                        <div class="pro-price">6999元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-3-2.jpg" alt="">
                                        </div>
                                        <div class="pro-name">小米全面屏电视E55A</div>
                                        <div class="pro-price">1999元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-3-3.png" alt="">
                                        </div>
                                        <div class="pro-name">小米电视4A 32英寸</div>
                                        <div class="pro-price">699元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-3-4.jpg" alt="">
                                        </div>
                                        <div class="pro-name">小米电视4A 55英寸</div>
                                        <div class="pro-price">1799元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-3-5.jpg" alt="">
                                        </div>
                                        <div class="pro-name">小米电视4A 65英寸</div>
                                        <div class="pro-price">2699元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-3-6.png" alt="">
                                        </div>
                                        <div class="pro-name">查看全部</div>
                                        <div class="pro-price">查看全部</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="header-search">
                    <div class="wrapper">
                        <input type="text" name="keyword">
                        <a href="javascript:;"></a> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'nav-header'
    }
</script>

<style lang="scss">
    @import './../assets/scss/base.scss';
    @import './../assets/scss/mixin.scss';
    @import './../assets/scss/config.scss';
    .header{
        .nav-topbar{
            height:39px;    
            line-height:39px;
            background-color:#333333;
            color:#B0B0B0;     
            .container{
                width: 1226px;
                margin-right: auto;
                margin-left: auto;
                @include flex();
                a{
                    display:inline-block;
                    color:#B0B0B0;
                    margin-right:17px;
                }
                .my-cart{
                    width:110px;
                    background-color:#FF6600;
                    text-align:center;
                    color:#ffffff;
                    margin-right:0;
                    .icon-cart{
                        display: inline-block;
                        @include bgImg(16px,12px,'/imgs/icon-cart-checked.png');
                        // width: 16px;
                        // height: 12px;
                        // background: url('/imgs/icon-cart-checked.png') no-repeat center;
                        // background-size: contain;
                        margin-right:4px;
                    }
                }
            }
        }

        .nav-header{
            .container {
                position: relative;
                height: 112px;
                @include flex();
                .header-logo{
                    display: inline-block;
                    width: 55px;
                    height: 55px;
                    background-color:#FF6600;
                    a{
                    display: inline-block;
                    width: 110px;
                    height: 55px;
                    &::before{
                    content: ' ';
                    display: inline-block;
                    @include bgImg(55px,55px,'/imgs/mi-logo.png',55px);
                    }
                    &::after{
                    content: ' ';
                    display: inline-block; 
                    @include bgImg(55px,55px,'/imgs/mi-home.png',55px);
                    }
                    &:hover::before{
                        margin-left: -55px;
                    }
                    }
                }
                .header-menu{
                    display: inline-block;
                    width: 643px;
                    padding-left: 209px;
                    .item-menu{
                        display: inline-block;
                        color: #333333;
                        font-size: 16px;
                        font-weight: bold;
                        line-height: 112px;
                        margin-right:20px;
                        span{
                            cursor: pointer;
                        }
                        &:hover{
                            color: $colorA;
                            .children{
                                height: 220px;
                            }
                        }
                        .children{
                            position:absolute;
                            top:112px;
                            left:0;
                            width:1226px;
                            height:0;
                            opacity:0;
                            overflow:hidden;
                            border-top:1px solid #E5E5E5;
                            box-shadow:0px 7px 6px 0px rgba(0, 0, 0, 0.11);
                            z-index: 10;
                            transition:all .5s;
                            background-color: #ffffff;
                            .product{
                                position:relative;
                                float:left;
                                width:16.6%;
                                height:220px;
                                font-size:12px;
                                line-height:12px;
                                text-align: center;
                                a{
                                    display:inline-block;
                                }
                                img{
                                    width:auto;
                                    height:111px;
                                    margin-top:26px;
                                }
                                .pro-img {
                                    height: 137px;
                                }
                                .pro-name {
                                    font-weight: bold;
                                    margin-top: 18px;
                                    margin-bottom: 8px;
                                    color: $colorB;
                                }
                                .pro-price {
                                    color: $colorA;
                                }
                                &:before{
                                    content:' ';
                                    position:absolute;
                                    top:28px;
                                    right:0;
                                    border-left:1px solid $colorF;
                                    height:100px;
                                    width:1px;
                                }
                                &:last-child:before{
                                    display:none;
                                }
                            }
                        }
                    }
                }
                .header-search{
                    width: 319px;
                    .wrapper{
                        height: 50px;
                        border: 1px solid #E0E0E0;
                        display: flex;
                        align-items: center;  
                        input{
                            border: none;
                            box-sizing: border-box;
                            border-right: 1px solid #E0E0E0;
                            width: 264px;
                            height: 50px;
                            padding-left: 14px;
                        }  
                        a{
                            @include bgImg(18px,18px,'/imgs/icon-search.png');
                            margin-left: 17px;
                        } 
                    }
                }
            }
        }
        
    }
</style>