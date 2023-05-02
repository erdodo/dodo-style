<template>
  <div class="relative" >
      <div v-if="visible" class="bg-gray-900/20 dialog-main" :class="positionClassList" @click="closeParent">
          <div class="bg-white dialog-body min-w-[400px] max-w-[98vw] p-4 rounded-lg">
              <slot @onClose="onClose($event)"></slot>
          </div>
      </div>
  </div>
</template>
<script>
export default {
    data(){
        return {
            positionClassList: ""
        }
    },
    emits: ['onClose'],
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        position: {
            type: String,
            default: 'center',
            validator: function(value){
                return ['center', 'top', 'bottom', 'left', 'right'].indexOf(value) !== -1
            }
        },

    },
    mounted(){
      this.setPositionClassList(this.position)
    },
    methods:{
        closeParent(e){
            console.log(e.target.classList.contains('dialog-body'))
            if(!e.target.classList.contains('dialog-body')){
                this.$emit('onClose', false)
            }
        },
        setPositionClassList(position){
            switch(position){
                case 'center':
                    this.positionClassList = 'fixed top-0 left-0 w-screen h-screen flex flex-row justify-center items-center'
                    break
                case 'top':
                    this.positionClassList = 'fixed top-0 left-0 w-screen h-screen flex flex-row justify-center items-start'
                    break
                case 'bottom':
                    this.positionClassList = 'fixed top-0 left-0 w-screen h-screen flex flex-row justify-center items-end'
                    break
                case 'left':
                    this.positionClassList = 'fixed top-0 left-0 w-screen h-screen flex flex-row justify-start items-center'
                    break
                case 'right':
                    this.positionClassList = 'fixed top-0 left-0 w-screen h-screen flex flex-row justify-end items-center'
                    break
                default:
                    this.positionClassList = 'fixed top-0 left-0 w-screen h-screen flex flex-row justify-center items-center'
                    break
            }
        }
    }
}
</script>
