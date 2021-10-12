<template>
    <!-- 封装滚动组件 -->
    <div class="wrapper" ref="wrapper">
        <!-- 内容分发 -->
        <slot class="wrapper2"></slot>
    </div>

</template>

<script>
import BScroll from "better-scroll";
export default {
      props : {
            handleToScroll : {
                type : Function,
                // 默认一个空的方法 防止报错
                default : function(){},
            },
            handleToTouchEnd : {
                type:Function,
                default: function(){}
            }
        },
        mounted(){
              //接收两个参数 1.找到最外层包裹的容器 dom元素 2.配置元素 true 开启配置
              this.$nextTick(()=>{
                var scroll = new BScroll( '.wrapper2',{
                tap:true,
                probeTybe: 1
            });
              })
            

           /*  scroll.on('scroll',(pos) => {
                this.handleToScroll(pos);
            });

            scroll.on('touchEnd',(pos) => {
                this.handleToTouchEnd(pos);
            }) */
        }
};
</script>
<style scoped >

 .wrapper{
        height: 100%;
    }
</style>
