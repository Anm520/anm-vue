<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">I'm Slide {{ slide }}</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'carrousel',
  data() {
    return {
      swiperOption: {
        lazy: true,
        lazyLoading: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },
        direction: 'vertical', // 垂直轮播
        // spaceBetween: 45, // slide间距
        slidesPerView: 4, // 显示几个slide，单个slide的高度根据容器总高度自动分配
        // loop: true,
        observer: true,
        speed: 300, // 轮播速度
        setWrapperSize: true,
        pagination: {
          el: '.swiper-pagination',
        },
      },
      swiperSlides: [1, 2, 3, 4, 5],
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  mounted() {
    console.log(this.swiper);
    let _this = this;
    this.swiper.on('click', function () {
      _this.test();
    });
  },
  methods: {
    test() {
      console.log('测试111');
    },
  },
};
</script>
