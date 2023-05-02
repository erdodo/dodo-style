<template>
  <div class="min-h-[100vh]">
      Home
      <Icons module="di" icon="AiFillAlert" color="red"/>
  </div>

</template>
<script>

import {ai} from 'dodo-icons/vue'
export default {
    mounted() {
        console.log(ai)
    },
    components: {
        Icons: ai
    }
}
</script>
