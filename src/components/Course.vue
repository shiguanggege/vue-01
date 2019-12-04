<template>
  <div>
    <ul class="category">
      <li v-for="(category) in categoryList" :key="category.id" @click="handleClick(category.id)">
        <span>{{category.name}}</span>
      </li>
    </ul>
    <ul>
      <li v-for="(course) in this.courseList" :key="course.id">
        <h2>{{course.name}}</h2>
        <img :src="course.course_img" alt />
      </li>
    </ul>
  </div>
</template>

<script>
//https://www.luffycity.com/api/v1/courses/?sub_category=0&ordering=
export default {
  name: "Course",
  data() {
    return {
      courseList: [],
      categoryList: [],
      categoryId: 0
    };
  },
  methods: {
    handleClick(id) {
      this.categoryId = id;
      this.getcourselist();
    },
    //   获取课程列表的方法
    getcourselist() {
      this.$http
        .get(
          `https://www.luffycity.com/api/v1/courses/?sub_category=${this.categoryId}&ordering=`
        )
        .then(res => {
          console.log(res);

          const err_no = res.data.error_no;
          if (err_no === 0) {
            this.courseList = res.data.data;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getcategorylist() {
      this.$http
        .get(
          `https://www.luffycity.com/api/v1/course_sub/category/list/?belong=0`
        )
        .then(res => {
            const arr = res.data.data;
            arr.unshift({
                belong: 0,
                category: 1,
                hide: false,
                id: 0,
                name: "全部"
            })
          this.categoryList = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
    created() {
      this.getcategorylist()
      this.getcourselist();
    
  }
};
</script>

<style scoped>
 .category li{
     display: inline;
     padding: 10px
 }
</style>