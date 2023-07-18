<template>
  <div>
    <router-view :class="{ pageView: !hideNabbar }" />
    <van-tabbar v-model="active" v-if="!hideNabbar">
      <van-tabbar-item icon="home-o" to="/">Home</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/myView">My</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      active: 1,
    };
  },
  computed: {
    hideNabbar() {
      const { meta } = this.$route;
      return meta?.hideNabbar || false;
    },
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
