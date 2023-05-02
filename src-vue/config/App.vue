<template>
    <div class="dark:bg-slate-900 dark:text-white">
        <div class="h-[70px] relative ">
            <div class="flex w-full flex-row justify-between items-center fixed bg-white z-10 border-b dark:bg-slate-800 dark:text-white">
                <div class="flex flex-row">
                    <template v-for="i in componentsList">
                        <router-link :to="i.link" :class="[i.link == this.$route.path?'border-blue-500':''] "  class="border-b-2 p-3 m-3 ">{{i.name}}</router-link>

                    </template>
                </div>
                <div class="mr-2" >

                    <Button v-if="mode=='light'" class="bg-gray-700 text-white" @click="modeChange"  >Dark </Button>
                    <Button v-if="mode=='dark'" class="bg-gray-300 text-black" @click="modeChange"  >Light </Button>
                </div>

            </div>
        </div>
        <div class="p-4">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import "../../assets/output.css"
import Button from "../components/Button/Button.vue"
export default {
    data(){
        return {
            componentsList: [
                {
                    link:'/',
                    name: 'Home'
                },
                {
                    link: '/button',
                    name: 'Button'
                },

            ],
            mode:"light"
        }

    },
    components: {
        Button
    },
    mounted() {
        if(localStorage.getItem('mode') == 'dark'){
            document.getElementsByTagName('html')[0].classList.add('dark')
            this.mode="dark"
        }
    },
    methods: {
        modeChange(){
            if(this.mode=="light"){
                this.mode="dark"
                document.getElementsByTagName('html')[0].classList.toggle('dark')
                localStorage.setItem('mode',document.getElementsByTagName('html')[0].classList.contains('dark')?'dark':'light')
            }else {
                this.mode = "light"
                document.getElementsByTagName('html')[0].classList.toggle('dark')
                localStorage.setItem('mode', document.getElementsByTagName('html')[0].classList.contains('dark') ? 'dark' : 'light')

            }

        }
    }
}
</script>
