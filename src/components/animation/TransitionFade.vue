<template>
  <transition name="slide-fade" mode="out-in">
    <slot></slot>
  </transition>
</template>

<script>
export default {};
</script>

<style>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transform: translateX(10px);
  opacity: 1;
  max-width: 100%;
  width: 100%;
}

.slide-fade-enter-active {
  transition: all 0.5s ease;
}

.slide-fade-leave-active {
  transition: all 0.5s ease;
}

.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
  max-width: 100%;
  width: 100%;
}

.slide-fade-enter {
  transform: translateX(-48px);
}

.slide-fade-leave-to {
  transform: translateX(36px);
}
</style>
