<template>
    <div class="page">
        <!-- 电脑端 -->
        <div class="hidden-sm-and-down">
            <!-- 头部导航部分 -->
            <div class="headerVue" :style="{background:current%2===0?'rgba(0,0,0,0.3)':'rgba(255,255,255,0.3)'}">
                <div class="header">
                    <div class="navVue">
                        <img src="../assets/logo.jpg" @click="setActiveItem(0)">
                        <div class="navBox">
                            <div class="nav" 
                                v-for="(item,index) in navs" :key="index" 
                                :class="{active:current===index,color:current%2===0}" 
                                @click="setActiveItem(index)"
                            >{{item}}</div>
                        </div>
                    </div>
                    <div class="oprationVue">
                        <div class="scan" @mouseover="isScan = true" @mouseleave="isScan = false">
                            <img src="../assets/erweima.png"/>
                            <span>扫码咨询</span>
                            <div class="codeVue" v-if="isScan">
                                <img src="../assets/code.png">
                            </div>
                        </div>
                        <div class="line" :style="{background:current%2===0?'#666':'#ddd'}"></div>
                        <h4 @click="isLoginVue = true" :class="{active:current===index,color:current%2===0}" v-if="isLogin">登录/注册</h4>
                        <div class="user el-icon-user" :class="{active:current===index,color:current%2===0}" v-else @click="navigite()"></div>
                    </div>
                </div>
            </div>
            <!-- body轮播组件 -->
            <div class="container-swiper">
                <el-carousel height="100vh" direction="vertical" :loop="false" :autoplay="false" ref="carousel" :initial-index="current" @setActiveItem="setActiveItem" indicator-position="none">
                    <el-carousel-item name="0">
                        <div class="homeVue">
                            <div class="content" v-if="current===0">
                                <div class="name">直播数字人</div>
                                <div class="btn">立即体验</div>
                            </div>
                        </div>
                    </el-carousel-item>
                    <el-carousel-item name="1">
                        <div class="productVue">
                            <div class="content" v-if="current===1">
                                <div class="name">直播数字人</div>
                                <div class="btn">立即体验</div>
                            </div>
                        </div>
                    </el-carousel-item>
                    <el-carousel-item name="2">
                        <div class="costomVue">
                            <div class="content" v-if="current===2">
                                <div class="name">直播数字人</div>
                                <div class="btn">立即体验</div>
                            </div>
                        </div>
                    </el-carousel-item>
                    <el-carousel-item name="3">
                        <div class="vipVue">
                            <div class="content" v-if="current===3">
                                <div class="name">直播数字人</div>
                                <div class="btn">立即体验</div>
                            </div>
                        </div>
                    </el-carousel-item>
                    <el-carousel-item name="4">
                        <div class="partnerVue">
                            <div class="content" v-if="current===4">
                                <div class="name">直播数字人</div>
                                <div class="btn">立即体验</div>
                            </div>
                        </div>
                    </el-carousel-item>
                    <el-carousel-item name="5">
                        <div class="aboutVue">
                            <div class="content" v-if="current===5">
                                <h2>公司介绍</h2>
                                <p>武汉全视数字科技有限公司，是一家专业、专注研发AI直播数字人软、硬件的高新科技企业。公司为企业用户提供AI直播数字人定制、基础运营服务、以及电商直播全套落地解决方案。公司依托博鳌全球数字经济峰会、蚂蚁链产业创新中心等优势资源。为用户从宏观战略到微观落地执行，提供全面、专业、细致的服务。</p>
                                <div class="friends">
                                    <div class="title">合作伙伴</div>
                                </div>
                            </div>
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <!-- 登录弹框 -->
            <div class="mask" v-if="isLoginVue">
                <div class="loginVue">
                    <div class="login">
                        <div class="close" @click="isLoginVue = false">
                            <img src="../assets/close.png">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- ============================================================================================================================================================ -->

        <!-- 移动端 -->
        <div class="hidden-md-and-up"></div>
    </div>
</template>

<script>
    import { debounce } from '@/utils/index'
    import { mapState } from "vuex"
    export default {
        data(){
            return {
                current: 0,
                isScan: false,
                isLoginVue: false,
                navs: ["首页","产品介绍","形象定制","会员中心","伙伴计划","关于我们"],
            }
        },
        mounted() {
            window.addEventListener('mousewheel', debounce(this.handleScroll), false)
            window.addEventListener('DOMMouseScroll', debounce(this.handleScroll), false)
        },
        computed:{
			...mapState({
			    isLogin: (state) => state.isLogin
			}),				
		},
        methods: {
            handleScroll(e) {
                console.log(e.deltaY)  // 正值为向下滚动，负值为向上滚动
                if(this.isLoginVue) return
                if(e.deltaY>0) {
                    if(this.current===5) return
                    this.current++
                    console.log(this.current)
                    this.$refs.carousel.setActiveItem(this.current);
                }else {
                    if(this.current===0) return
                    this.current--
                    this.$refs.carousel.setActiveItem(this.current);
                }
            },
            setActiveItem(index){
                if(this.current===index) return
                this.current = index
                this.$refs.carousel.setActiveItem(index)
            },
            navigite(){
                this.$router.push("./room")
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../style/pc.less";
    @import "../style/ph.less";
</style>