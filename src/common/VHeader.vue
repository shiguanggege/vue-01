
<template>
  <div>
    <h3>我是{{name}}组件</h3>
    <span>商品数量：{{cartNum || 0}}</span>
    <!-- <span>商品总价{{}}</span> -->
  </div>
</template>

<script>
    export default {
        name:'VHeader',
        data() {
            return {
                name: '导航',
                cartNum:Number(localStorage.getItem('cartNum'))
            }
        },
        created () {
            console.log(this.$bus);
            this.$bus.$on('addCart',(num)=>{
                console.log(num);
                this.cartNum+=num;
                localStorage.setItem('cartNum',this.cartNum)
                
            }),
            this.$bus.$on('handleData',(val)=>{
                alert(val)
            })
        },
       

        
    }
</script>

<style lang="scss" scoped>
</style>