<template>
<div id="app">
  <Header id="header"></Header>
  <Slider></Slider>
  <News></News>
  <Courses></Courses>
  <Footer></Footer>
</div>
</template>

<script>
import Header from './components/layouts/Header.vue'
import Slider from './components/Slider.vue'
import News from './components/News.vue'
import Footer from './components/layouts/Footer.vue'
import Courses from './components/Courses.vue'
export default {
  components: {
    Header,
    Slider,
    News,
    Footer,
    Courses
  }
}
</script>

<style>
html {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
