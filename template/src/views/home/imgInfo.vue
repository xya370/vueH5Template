<template>
  <div class="imgInfo">
    <van-text-ellipsis
      :content="text"
      expand-text="展开"
      collapse-text="收起"
    />
  </div>
</template>

<script>
export default {
  name: "ImgInfo",
  data() {
    return {
      text: "似水流年是一个人所有的一切，只有这个东西，才真正归你所有。其余的一切，都是片刻的欢娱和不幸，转眼间就已跑到那似水流年里去了。",
    };
  },
};
</script>
