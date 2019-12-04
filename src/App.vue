<template>
  <!-- 当前组件的结构 -->
  <div>
    <VHeader></VHeader>
    <h3>{{title}}</h3>
    <h4 v-text="title"></h4>
    <div class="box" v-html="htmlStr"></div>
    <div v-if="isShow">盒子</div>
    <h3>{{price | filterPrice}}</h3>
    <button @click="handleClick">操作</button>
    <menu-list :menus="menus"></menu-list>
    <Course></Course>
  </div>
</template>
<script>
// @ ===== src/
import MenuList from "@/components/MenuList.vue";
import Course from '@/components/Course.vue'
// 当前组件的业务逻辑
export default {
  components: {
    MenuList,
    Course
  },
  name: "App",
  data() {
    return {
      title: "hello shiguang",
      htmlStr: `<p>时光</p>`,
      isShow: true,
      price: 20,
      menus: [
        {
          id: 1,
          name: "烧饼",
          price: 10
        },
        {
          id: 2,
          name: "大饼",
          price: 5
        },
        {
          id: 3,
          name: "大腰子",
          price: 20
        }
      ]
    };
  },

  methods: {
    handleClick() {
      this.isShow = !this.isShow;
    }
  }
};
</script>
<style>
/* 当前的组件的样式 */
</style>