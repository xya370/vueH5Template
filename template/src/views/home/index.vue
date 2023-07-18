<template>
  <div class="home">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item
        v-for="image in images"
        :key="image"
        @click="$router.push('/imgInfo')"
      >
        <img :src="image" class="previewImg" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      images: [
        "https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg",
        "https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg",
      ],
    };
  },
};
</script>

<style lang="less">
.home {
  padding: 15px;
}
.previewImg {
  width: 100%;
  aspect-ratio: 16/9;
}
</style>
