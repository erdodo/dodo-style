<template>
  <div class="min-h-[100vh]">
      Home
      <Icons icon="WiAlien" color=""/>
  </div>

</template>
<script>

import Icons from 'dodo-icons/vue/wi/'
export default {
    mounted() {
        console.log(Icons)
    },
    components: {
      Icons: Icons
    }
}
</script>
