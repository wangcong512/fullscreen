<template>
    <div id="appRoot" :style="{width:resolutionSize.width,height:resolutionSize.height}">
        <slot></slot>
    </div>
</template>

<script>
    import {mapActions} from "vuex";
    import {pageResize} from "@/assets/js/resetScreenSize";
    import  deviceSize from '@/config/base'

    export default {
        name: "RootPanel",
        data(){
            return {resolutionSize:{
                        width:deviceSize.screen.width,
                        height:deviceSize.screen.height,
                }
            }
        },
        mounted(){
            this.$nextTick(function () {
                // DOM 更新了
                pageResize(this.resizeHandle)
            })
        },
        methods:{
            ...mapActions(['setScale']),
            resizeHandle(scale){
                console.log('base scale:' +scale)
                this.$store.state.scale = scale
            },
        }
    }
</script>

<style scoped>
    #appRoot{
        display: block;
        width: 1920px;
        height: 1080px;
        position: absolute;
        background-color: rgba(255, 255, 255, 1);
    }
</style>
