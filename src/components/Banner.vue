<template>
  <div class="banner" :style="bannerStyle" :class="`banner__${postion}`">
      <slot></slot>
  </div>
</template>

<script>
const defaultStyle = {
    left: 0,
    right: 0
};
export default {
    props: {
        position: {
            type: String,
            default: 'top',
            validator(position){
                return ['top', 'bottom'].indexOf(position)>-1;
            }
        },
        styles: {
            type: Object,
            default: ()=>({}),  // 等价于 ()=>{return {}}
        }
    },
    data(){
        return {
            bannerStyle: {
                ...defaultStyle,
                ...this.styles
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .banner{
        padding: 12px;
        background-color: #fcf6cd;
        color: red;
        text-align: left;
        position: fixed;
        z-index: 2;
    }
    .banner__top{
        top: 0;
    }
    .banner__bottom{
        bottom: 0;
    }
</style>