<template>
<div class="box-img">
  <swiper :options="swiperOption">
        <swiper-slide v-for="item in imgList" :key="item.id" >
          <img v-bind:src="item.url"/>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
</div>
</template>

<script>
export default {
  name: 'Slild',
  data () {
    return {
      imgList:[
        {
          url:require('./img/sence1.jpg')
        },
        {
          url:require('./img/sence2.jpg')
        },
        {
          url:require('./img/sence3.jpg')
        },
        {
          url:require('./img/sence4.jpg')
        }
      ],
      swiperOption: {
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
  .box-img{
height: 100%;
}
  .box-img img{
    width: 100%;
    height: 100%;
  }

</style>
