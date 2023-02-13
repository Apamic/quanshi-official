<template>
    <div class="page">
        <!-- 电脑端 -->
<!--        hidden-sm-and-down-->
        <div class="hidden-sm-and-down">
            <HeaderVue :background="background" :current="current" :color="color" :logo="logo" :activeColor="activeColor"></HeaderVue>
            <!-- body轮播组件 -->
            <div class="container-swiper">
                <el-carousel height="100vh" direction="vertical" :loop="false" :autoplay="false" ref="carousel"
                    :initial-index="current" @setActiveItem="setActiveItem" indicator-position="none">
                    <!-- 首页 -->
                    <el-carousel-item name="0">
                        <div class="homeVue">
                            <div class="home" v-if="current === 0">
                                <div style="height: 100px;"></div>
                                <div class="content">
                                    <div class="inner">
                                        <div class="name">全视AI直播数字人</div>
                                        <div class="desc">专业直播数字人 一站式营销解决方案</div>
                                        <div class="btnVue">
                                            <div class="btn">
                                                <span>立即体验</span>
                                                <img src="../assets/more.png" alt="">
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-carousel-item>

                    <!-- 产品介绍 -->
                    <el-carousel-item name="1">
                        <div class="productVue">
                            <div class="content" v-if="current === 1">
                                <div style="height: 100px;"></div>
                                <div class="content">
                                    <div class="inner">
                                        <div class="title">永不下播,降本增效</div>
                                        <div class="tabVue">
                                            <div class="tabs">
                                                <div class="tab" v-for="(item,index) in tabs" :key="index"
                                                :class="{active:son===index}"
                                                @click="son=index"
                                                >{{item}}</div>
                                            </div>
                                        </div>
                                        <template>
                                            <div class="sonVue" v-show="son===0">
                                                <div class="sonLeft">
                                                    <div class="name">虚拟AI直播数字人</div>
                                                    <div class="name" style="padding-bottom: 50px;">一键打造你的数字分身</div>
                                                    <div class="caseVue">
                                                        <div class="case"><span>商品讲解：</span> 文本输入，讲解一字不差</div>
                                                    </div>
                                                    <div class="caseVue flex-end">
                                                        <div class="case" style="border:1px solid #E75219"><span>智能交互：</span>抓取评论，智能回复问题</div>
                                                    </div>
                                                    <div class="caseVue">
                                                        <div class="case"><span>超长直播：</span>随时随地，24h想开就开</div>
                                                    </div>
                                                    <div class="caseVue flex-center">
                                                        <div class="case" style="border:1px solid #5D1882"><span>降本增效：</span>一台电脑无人直播模式</div>
                                                    </div>

                                                    <div class="btnVue">
                                                        <div class="btn">
                                                            <span>了解一下</span>
                                                            <img src="../assets/more.png" alt="">
                                                        </div>
                                                    </div>

                                                </div>
                                                <div class="sonRignt">
                                                    <el-carousel :interval="3000" type="card" height="500px" class="elCarousel" indicator-position="none">
                                                        <el-carousel-item>
                                                            <img src="../assets/1.png" alt="">
                                                        </el-carousel-item>
                                                        <el-carousel-item>
                                                            <img src="../assets/2.png" alt="">
                                                        </el-carousel-item>
                                                        <el-carousel-item>
                                                            <img src="../assets/3.png" alt="">
                                                        </el-carousel-item>
                                                    </el-carousel>
                                                </div>
                                            </div>
                                            <div class="sonVue1" v-show="son===1">
                                                <div class="sonLeft">
                                                    <img src="../assets/product1.png" alt="">
                                                    <img src="../assets/son.png" class="liSon">
                                                </div>
                                                <div class="sonRight">
                                                    <div class="name">定制AI直播数字人</div>
                                                    <div class="name">对接专属团队</div>
                                                    <div class="label">专业定制服务:</div>
                                                    <div class="info">提供定制化制作流程，保障服务质量和最终克隆效果</div>
                                                    <div class="label">音色深度还原:</div>
                                                    <div class="info">基于最新声音克隆技术，极致还原原音的音色和风格</div>
                                                    <div class="label">专属发音人:</div>
                                                    <div class="info">专业录音工坊配音平台，享受更完善的配音服务</div>
                                                    <!-- <div class="flex-end">
                                                        <div class="btnVue">
                                                            <div class="btn">
                                                                <span>了解一下</span>
                                                                <img src="../assets/more.png">
                                                            </div>
                                                        </div>
                                                    </div> -->
                                                </div>
                                            </div>
                                            <div class="sonVue2" v-show="son===2">
                                                <div class="name">多种动作捕捉方案，快速打造营销数字人</div>
                                                <div class="box">
                                                    <div class="boxLi">
                                                        <img src="../assets/product2.png">
                                                        <div class="label">摄像头面捕：</div>
                                                        <div class="value">1部手机实现面部表情精准捕捉</div>
                                                    </div>
                                                    <div class="boxLi">
                                                        <img src="../assets/product3.png">
                                                        <div class="label">半身摄像头动捕:</div>
                                                        <div class="value">1部手机+1个摄像头实现面部/身体捕捉</div>
                                                    </div>
                                                    <div class="boxLi">
                                                        <img src="../assets/product4.png">
                                                        <div class="label">全身光学动捕:</div>
                                                        <div class="value">6个点光学动捕 + 手套，实时性、稳定性更强</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="sonVue3" v-show="son===3">
                                                <div class="sonLeft">
                                                    <el-carousel :interval="3000" type="card" height="450px" class="elCarousel" indicator-position="none">
                                                        <el-carousel-item>
                                                            <img src="../assets/1.png" alt="">
                                                        </el-carousel-item>
                                                        <el-carousel-item>
                                                            <img src="../assets/2.png" alt="">
                                                        </el-carousel-item>
                                                        <el-carousel-item>
                                                            <img src="../assets/3.png" alt="">
                                                        </el-carousel-item>
                                                    </el-carousel>
                                                </div>
                                                <div class="sonRight">
                                                    <div class="name">基础/全案代运营服务</div>
                                                    <div class="name" style="padding-bottom: 80px;">营销落地转化无忧财富</div>
                                                    <div class="flex-end">
                                                        <div style="width:290px;height: 1px;background: #343434;margin-bottom: 80px;"></div>
                                                    </div>

                                                    <div class="cell">对比传统直播，节省大量人工、设备等开支</div>
                                                    <div class="cell">AI虚拟主播，24小时不下线，不错过任何成交机会</div>
                                                    <!-- <div class="flex-end">
                                                        <div class="btnVue">
                                                            <div class="btn">
                                                                <span>了解一下</span>
                                                                <img src="../assets/more.png">
                                                            </div>
                                                        </div>
                                                    </div> -->
                                                </div>
                                            </div>
                                        </template>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-carousel-item>

                    <!-- 形象定制 -->
                    <el-carousel-item name="2">
                        <div class="costomVue">
                            <div class="costom" v-if="current === 2">
                                <div style="height: 100px;"></div>
                                <div class="content">
                                    <div class="content">
                                        <div class="title">形象定制</div>
                                        <div class="inner flex-between align-center">
                                            <div class="innerLeft">
                                                <div class="vedioVue"></div>
                                                <div class="scrollVue flex-between align-center">
                                                    <img src="../assets/left.png" @click="arrowClick('prev')">
                                                    <el-carousel indicator-position="none" height="110px" :autoplay="false" class="elCarousel" ref="carouselCostom">
                                                        <el-carousel-item v-for="item in 4" :key="item">
                                                            <div class="imgs flex-between">
                                                                <img src="../assets/4.png" v-for="(item,index) in 4">
                                                            </div>
                                                        </el-carousel-item>
                                                    </el-carousel>
                                                    <img src="../assets/right.png" @click="arrowClick('next')">
                                                </div>
                                            </div>
                                            <div class="innerRight">
                                                <div class="name">数字人形象自定义</div>
                                                <div class="name" style="padding-bottom:80px">服装场景任意配</div>
                                                <p>多种五官变形维度，自助捏脸</p>
                                                <p>人物形象高度自定义</p>
                                                <p>多种组合方式，服装、场景、玩法随意搭配</p>
                                                <div class="flex-end">
                                                    <div class="btnVue">
                                                        <div class="btn">
                                                            <span>立即体验</span>
                                                            <img src="../assets/more.png">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-carousel-item>

                    <!-- 会员中心 -->
                    <el-carousel-item name="3">
                        <div class="vipVue">
                            <div class="vip" v-if="current === 3">
                                <div style="height: 100px;"></div>
                                <div class="content">
                                    <div class="inner">
                                        <div class="title">买全视数字科技会员·享专属特权</div>
                                        <p>一键生成视频·人物素材丰富·海量场景资源·顶级配音神器</p>
                                        <div class="box">
                                            <div class="priceVue">
                                                <span style="“font-size: 38px;font-weight: bold;color: #0C121D;padding-right: 20px;transform: translateY(8px);">一口价</span>
                                                <span>￥</span>
                                                <p>1299</p>
                                                <span>/月</span>
                                                <img src="../assets/king.png" alt="">
                                            </div>
                                            <div class="liVue">
                                                <div class="li">
                                                    <img src="../assets/dot.png" alt="">
                                                    <p>虚拟数字人1个<span>(多选一)</span></p>
                                                </div>
                                                <div class="li">
                                                    <img src="../assets/dot.png" alt="">
                                                    <p>数字人直播平台</p>
                                                </div>
                                                <div class="li">
                                                    <img src="../assets/dot.png" alt="">
                                                    <p>数字人合成后台</p>
                                                </div>
                                                <div class="li">
                                                    <img src="../assets/dot.png" alt="">
                                                    <p>专属数字人直播培训</p>
                                                </div>
                                            </div>
                                            <div class="btnVue">
                                                <div class="btn">
                                                    <span>立即体验</span>
                                                    <img src="../assets/more.png">
                                                </div>
                                            </div>
                                            <img src="../assets/hands.png" class="hands">
                                        </div>
                                        <h5>为什么要选择购买会员？</h5>
                                        <div class="p">一个套餐，解决数字人直播的多元需求，为主播实现数字人分身，为直播企业降本增效。</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-carousel-item>

                    <!-- 伙伴计划 -->
                    <el-carousel-item name="4">
                        <div class="partnerVue">
                            <div class="partner" v-if="current === 4">
                                <div style="height: 100px;"></div>
                                <div class="content">
                                    <div class="inner">
                                        <div class="title">合作伙伴计划</div>
                                        <div class="main">
                                            <h6>免费领取ip元分身-数智人</h6>
                                            <div class="box">
                                                <div class="sonVue">
                                                    <h3>伙伴权益说明：</h3>
                                                    <div class="li flex align-center">
                                                        <img src="../assets/icon1.png" alt="">
                                                        <p>全视直播伙伴标识</p>
                                                    </div>
                                                    <div class="li flex align-center">
                                                        <img src="../assets/icon2.png" alt="">
                                                        <p>短视频合成不限时</p>
                                                    </div>
                                                    <div class="li flex align-center">
                                                        <img src="../assets/icon3.png" alt="">
                                                        <p>免费运营工具库</p>
                                                    </div>
                                                    <div class="li flex align-center">
                                                        <img src="../assets/icon4.png" alt="">
                                                        <p>免费直播模板库</p>
                                                    </div>
                                                    <div class="li flex align-center">
                                                        <img src="../assets/icon4.png" alt="">
                                                        <p>全年导出不限时</p>
                                                    </div>
                                                    <div class="tip">注：渠道合作5000起，具体咨询招商经理。</div>
                                                    <div class="btns">
                                                        <div class="btn">福利</div>
                                                        <div class="btn">权益</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="btnVue">
                                                <div class="btn">
                                                    <span>申请加入</span>
                                                    <img src="../assets/more.png">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-carousel-item>

                    <!-- 关于我们 -->
                    <el-carousel-item name="5">
                        <div class="aboutVue">
                            <div class="content" v-if="current === 5">
                                <h2>公司介绍</h2>
                                <p>武汉全视数字科技有限公司，是一家专业、专注研发AI直播数字人软、硬件的高新科技企业。公司为企业用户提供AI直播数字人定制、基础运营服务、以及电商直播全套落地解决方案。公司依托博鳌全球数字经济峰会、蚂蚁链产业创新中心等优势资源。为用户从宏观战略到微观落地执行，提供全面、专业、细致的服务。
                                </p>
                                <div class="friends">
                                    <div class="title">合作伙伴</div>
                                    <div class="friendVue">
                                        <el-carousel height="290px" indicator-position="none" :autoplay="false" :interval="3000" :loop="true">
                                            <el-carousel-item>
                                                <div class="friendDiv">
                                                    <div class="friend">
                                                        <img src="../assets/logo_dark.png" alt="">
                                                    </div>
                                                    <div class="friend">
                                                        <img src="../assets/logo.jpg" alt="">
                                                    </div>
                                                    <div class="friend">
                                                        <img src="../assets/logo1.png" alt="">
                                                    </div>
                                                </div>
                                                <div class="friendDiv" style="margin-top: 30px;">
                                                    <div class="friend"></div>
                                                    <div class="friend"></div>
                                                    <div class="friend"></div>
                                                </div>
                                            </el-carousel-item>
                                        </el-carousel>
                                    </div>
                                </div>
                                <!-- <div class="footer" v-if="isFooter"></div> -->
                            </div>
                        </div>
                    </el-carousel-item>

                    <el-carousel-item name="6">
                        <div class="footerVue">
                            <div class="content" v-if="current === 6">
                                <div class="caseVue"></div>
                            </div>
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>





            <!-- 申请加入弹框 -->
            <div class="joinmask" v-if="isJoin">
                <div class="joinVue">
                    <div class="join">
                        <div class="close" @click="isJoin = false">
                            <img src="../assets/close.png">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- ========================================================================================================================================================= -->

        <!--移动端-->
        <div class="hidden-md-and-up">
            <moreHeader></moreHeader>
            <div class="part page1">
                <h1>全视AI直播数字人</h1>
                <h2>数字人营销<br>一站式解决方案</h2>
                <p>
                  Digital person marketing<br>
                  One-stop solution<br>
                  Let your live broadcast stand out
                </p>

                <div class="but1">
                  <span>立即体验</span>
                  <img src="../assets/more.png" alt="">
                </div>


            </div>

            <div class="part page2">
                <h1>永不下播,降本增效</h1>
                <div class="tabs-wrap">
                  <div class="tabs-item" :class="son == index ? 'active' : ''" v-for="(item,index) in tabs" :key="index" @click="son = index">{{item}}</div>
                </div>
                <template>
                  <ai v-show="son == 0"></ai>
                </template>
                <template >
                  <customization v-show="son == 1"></customization>
                </template>
                <template >
                  <operation v-show="son == 2"></operation>
                </template>
                <template>
                  <seize v-show="son == 3"></seize>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import {Swiper,SwiperSlide} from "vue-awesome-swiper"
import "swiper/css/swiper.min.css"

import ai from "@/components/ai.vue"
import operation from "@/components/operation.vue"
import seize from "@/components/seize.vue"
import customization from "@/components/customization.vue"



import HeaderVue from '@/components/HeaderVue.vue'
import moreHeader from '@/components/moreHeader.vue'
import { debounce } from '@/utils/index'

export default {
    data() {
        return {
            current: 0,
            isJoin: false,
            isFooter: false,
            background: "#0C121D",
            color: "#fff",
            tabs: ["AI直播","量身定制","精准捕捉","基础/全案代运营"],
            son: 0,
            logo: "light",
            activeColor: "#02A7A0",


          swiperOptions: {
            loop : true,
            autoplay:true,
            effect : 'coverflow',
            slidesPerView: 3,
            centeredSlides: true,
            coverflowEffect: {
              rotate: 0,
              stretch: 10,
              depth: 60,
              modifier: 2,
              slideShadows : true
            },
          }

        }
    },
    created() {

    },
    mounted() {
        window.addEventListener('mousewheel', debounce(this.handleScroll), false)
        window.addEventListener('DOMMouseScroll', debounce(this.handleScroll), false)
    },
    components: {
        HeaderVue,
        moreHeader,
        Swiper,
        SwiperSlide,
        ai,
        operation,
        seize,
        customization
    },
    methods: {
        handleScroll(e) {
            //console.log(e.deltaY)  // 正值为向下滚动，负值为向上滚动
            console.log(this.$children[0],this.current)
            if (this.$children[0].isLoginVue) return
            if (this.isJoin) return
            if (e.deltaY > 0) {
                if (this.current === 6) return
                this.current++
                console.log(this.current,'kkkk')
                this.$refs.carousel.setActiveItem(this.current);
                switch (this.current) {
                    case 0:
                        this.background = "#0C121D";
                        this.color = "#fff"
                        this.logo = "light"
                        this.activeColor = "#02A7A0"
                        break;
                    case 1:
                        this.background = "rgba(0,0,0,0.01)";
                        this.color = "#666"
                        this.logo = "dark"
                        this.activeColor = "#02A7A0"
                        break;
                    case 2:
                        this.background = "#0C121D";
                        this.color = "#fff"
                        this.logo = "light"
                        this.activeColor = "#02A7A0"
                        break;
                    case 3:
                        this.background = "rgba(0,0,0,0.01)";
                        this.color = "#666"
                        this.logo = "dark"
                        this.activeColor = "#02A7A0"
                        break;
                    case 4:
                        this.background = "rgba(0,0,0,0.1)";
                        this.color = "#fff"
                        this.logo = "light"
                        // this.activeColor = "#DFB685"
                        this.activeColor = "#02A7A0"
                        break;
                    case 5:
                        this.background = "rgba(0,0,0,0.01)";
                        this.color = "#666"
                        this.logo = "dark"
                        this.activeColor = "#02A7A0"
                        break;
                }
                console.log(this.background)

            } else {
                if (this.current === 0) return
                this.current--
                console.log(this.current,'kkkk')

                setTimeout(() => {
                  this.$refs.carousel.setActiveItem(this.current);
                },100)
                switch (this.current) {
                    case 0:
                        this.background = "#0C121D";
                        this.color = "#fff"
                        this.logo = "light"
                        this.activeColor = "#02A7A0"
                        break;
                    case 1:
                        this.background = "rgba(0,0,0,0.01)";
                        this.color = "#666"
                        this.logo = "dark"
                        this.activeColor = "#02A7A0"
                        break;
                    case 2:
                        this.background = "#0C121D";
                        this.color = "#fff"
                        this.logo = "light"
                        this.activeColor = "#02A7A0"
                        break;
                    case 3:
                        this.background = "rgba(0,0,0,0.01)";
                        this.color = "#666"
                        this.logo = "dark"
                        this.activeColor = "#02A7A0"
                        break;
                    case 4:
                        this.background = "rgba(0,0,0,0.1)";
                        this.color = "#fff"
                        this.logo = "light"
                        // this.activeColor = "#DFB685"
                        this.activeColor = "#02A7A0"
                        break;
                    case 5:
                        this.background = "rgba(0,0,0,0.01)";
                        this.color = "#666"
                        this.logo = "dark"
                        this.activeColor = "#02A7A0"
                        break;
                }
            }
        },
        setActiveItem(index) {
            if (this.current === index) return
            console.log(this.color)
            this.current = index
            this.$refs.carousel.setActiveItem(index)
            switch (index) {
                case 0:
                    this.background = "#0C121D";
                    this.color = "#fff"
                    this.logo = "light"
                    this.activeColor = "#02A7A0"
                     break;
                 case 1:
                    this.background = "rgba(0,0,0,0.01)";
                    this.color = "#666"
                    this.logo = "dark"
                    this.activeColor = "#02A7A0"
                    break;
                case 2:
                    this.background = "#0C121D";
                    this.color = "#fff"
                    this.logo = "light"
                    this.activeColor = "#02A7A0"
                    break;
                case 3:
                    this.background = "rgba(0,0,0,0.01)";
                    this.color = "#666"
                    this.logo = "dark"
                    this.activeColor = "#02A7A0"
                    break;
                case 4:
                    this.background = "rgba(0,0,0,0.1)";
                    this.color = "#fff"
                    this.logo = "light"
                    // this.activeColor = "#DFB685"
                    this.activeColor = "#02A7A0"
                    break;
                case 5:
                    this.background = "rgba(0,0,0,0.01)";
                    this.color = "#666"
                    this.logo = "dark"
                    this.activeColor = "#02A7A0"
                    break;
            }
        },
        arrowClick(value){
            console.log(value)
            if(value === 'next') {
                this.$refs.carouselCostom.next()
            } else {
                this.$refs.carouselCostom.prev()
            }
        }
    }
}
</script>

<style lang="less" scoped>
@import "../style/pc.less";
@import "../style/ph.less";
</style>
