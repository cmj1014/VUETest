<template>
  <div class="dataIndex">
    swiper轮播图
    <div>
     <swiper :options="swiperOption">
            <swiper-slide class="swiper-slide" v-for="(item,index) in carouselArr" :key="index">
                <img :src="item"/>
            </swiper-slide>
            <!-- 分页器 -->
            <div class="swiper-pagination"  slot="pagination"></div>   
             <!-- 左右箭头 --> 
            <div class="swiper-button-prev" slot="button-prev"></div> 
            <div class="swiper-button-next" slot="button-next"></div> 
        </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "swiperPlug",
  data() {
    return {
       swiperOption:{
                    //显示分页
                    pagination: {
                      el: '.swiper-pagination'
                    },
                    //设置点击箭头
                    navigation: {
                      nextEl: '.swiper-button-next', 
                      prevEl: '.swiper-button-prev'
                    },
                    //自动轮播
                    autoplay: {
                      delay: 2000,
                      //当用户滑动图片后继续自动轮播
                      disableOnInteraction: false,
                    },
                    //开启循环模式
                    loop: true
       },
      carouselArr:[]
    };
  },

  mounted() {
    this.carouselArr = ["111","222","333"]
  },
  methods: {},
};
</script>
<style scoped></style>
