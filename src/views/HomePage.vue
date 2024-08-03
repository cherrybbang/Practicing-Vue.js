<template>
  <HeaderGnb/>
  <h1>Home</h1>

  <h2>3초마다 이미지 바꿔주기</h2>

  <div>
    <img v-bind:src="slideImage">
  </div>
</template>

<script>
import HeaderGnb from '../components/HeaderGnb.vue';
import firstImage from "../assets/zz01.jpg";
import secondImage from "../assets/zz02.jpg";
import thirdImage from "../assets/zz03.jpg";


export default {
  components: {
    HeaderGnb,
  },
  data() {
    return {
      slideImage : firstImage,
      imageList : [firstImage, secondImage, thirdImage],
      index: 0
    } 
  },
  mounted() {
    this.startSlide();
    // console.log(1);
  },
  methods: {
    startSlide() {
      setInterval(() => {
        this.nextSlide();
      }, 3000);
    },
    nextSlide() {
      this.index = (this.index + 1) % this.imageList.length;
      this.slideImage = this.imageList[this.index];
    }
  },
};
</script>

<style scoped>
img {
  width: 700px;
}
</style>