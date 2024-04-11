<template>
  <div class="photos-gallery">
    <div class="vertical-gallery">
      <div
        class="vertical-column"
        v-for="ci in Math.max(Math.ceil((windowWidth * 0.8 - 310) / 300), 1)"
        :key="ci"
      >
        <img
          :src="link.url"
          v-on:click="showLargeImage(link.url)"
          v-for="(link, index) in photos.filter(
            (p, pi) =>
              (pi + 1 - ci) %
                Math.max(Math.ceil((windowWidth * 0.8 - 310) / 300), 1) ===
              0
          )"
          class="gallery-image"
          :key="index"
        />
      </div>
    </div>
    <div class="large-image-wrap" v-on:click="hideLargeImage" v-if="showImage">
      <img :src="largeImage" class="large-image" />
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, onMounted, onUnmounted } from "vue";
const props = defineProps({
  photos: Object,
});
const windowWidth = ref(window.innerWidth);
const showImage = ref(false);
const largeImage = ref("");

const showLargeImage = (link) => {
  largeImage.value = link;
  showImage.value = true;
};
const hideLargeImage = () => {
  showImage.value = false;
};
const handleScroll = () => {
  showImage.value = false;
};
const onResize = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", onResize);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("resize", onResize);
});
</script>
    
<style>
.photos-gallery {
  width: 100%;
  height: fit-content;
}

.gallery-image {
  width: 100%;
  min-width: 300px;
  cursor: pointer;
  box-sizing: border-box;
}

.large-image-wrap {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0px;
  left: 0px;
  background: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100dvh;
  z-index: 10;
  cursor: pointer;
}

.large-image {
  position: relative;
  padding: 10px;
  background: white;
  box-sizing: border-box;
  max-height: 90dvh;
  max-width: 90vw;
  user-select: none;
  cursor: default;
}

.vertical-gallery {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
}

.vertical-column {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  color: teal;
  gap: 20px;
  width: 100%;
  min-width: 300px;
}

.horizontal-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.gallery-img {
  height: 300px;
  cursor: pointer;
  box-sizing: border-box;
  padding: 10px;
}
</style>