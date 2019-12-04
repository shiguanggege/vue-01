<template>
  <div>
<ul><li v-for='(item) in menus' :key='item.id'>
  <h3>{{item.name}}</h3>
  <h3>{{item.price | filterPrice}}</h3>
  <button @click="addCart">加入购物车</button>
  
  </li></ul>
  <button @click="handleClick">传值</button>
  </div>
</template>

<script>
  export default {
    props:['menus'],
   
    methods: {
      handleClick() {
        this.$bus.$emit('handleData','时光');
        
      },
      addCart(){
        this.$bus.$emit('addCart',1)
      }
    },
    
  }
</script>

<style scoped>

</style>