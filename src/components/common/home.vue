<template>
  <div class="warpper">
      <myHeader></myHeader>
      <mySidebar></mySidebar>
      <div class="content">
        <transition name="move" mode="out-in"><router-view></router-view></transition>
      </div>
  </div>
</template>

<script>
import myHeader from "./header";
import mySidebar from "./sidebar";
export default {
  name: "home",
  components: {
    myHeader,
    mySidebar
  }
};
</script>

<style>

</style>
