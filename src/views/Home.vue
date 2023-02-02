<template>
    <div class="page">
        <!-- 电脑端 -->
        <div class="hidden-sm-and-down">
            <div class="headerVue">
                <div class="header">
                    <div class="navVue">
                        <img src="../assets/logo.jpg" @click="setActiveItem(0)">
                        <div class="navBox">
                            <div class="nav" v-for="(item,index) in navs" :key="index" :class="{active:current===index}" @click="setActiveItem(index)">{{item}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-swiper">
                <el-carousel height="100vh" direction="vertical" :loop="false" :autoplay="false" ref="carousel" :initial-index="current" @setActiveItem="setActiveItem">
                    <el-carousel-item name="0">
                        <div class="homeVue">a</div>
                    </el-carousel-item>
                    <el-carousel-item name="1">
                        <div class="productVue">b</div>
                    </el-carousel-item>
                    <el-carousel-item name="2">
                        <div class="costomVue">e</div>
                    </el-carousel-item>
                    <el-carousel-item name="3">
                        <div class="vipVue">d</div>
                    </el-carousel-item>
                    <el-carousel-item name="4">
                        <div class="partnerVue">f</div>
                    </el-carousel-item>
                    <el-carousel-item name="5">
                        <div class="aboutVue">f</div>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>


        <!-- 移动端 -->
        <div class="hidden-md-and-up">
            1111
        </div>
    </div>
</template>

<script>
    import { debounce } from '@/utils/index'
    export default {
        data(){
            return {
                current: 0,
                navs: ["首页","产品介绍","形象定制","会员中心","伙伴计划","关于我们"],
            }
        },
        mounted() {
            window.addEventListener('mousewheel', debounce(this.handleScroll), false)
            // window.addEventListener('DOMMouseScroll', debounce(this.handleScroll), false)
        },
        methods: {
            handleScroll(e) {
                console.log(e.deltaY)  // 正值为向下滚动，负值为向上滚动
                if(e.deltaY>0) {
                    if(this.current===5) return
                    ++this.current
                    console.log(this.current)
                    this.$refs.carousel.setActiveItem(this.current);
                }else {
                    if(this.current===0) return
                    --this.current
                    this.$refs.carousel.setActiveItem(this.current);
                }
            },
            setActiveItem(index){
                if(this.current===index) return
                this.current = index
                this.$refs.carousel.setActiveItem(index)
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../style/pc.less";
    @import "../style/ph.less";
</style>