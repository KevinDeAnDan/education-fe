<template>
<div id="slider">
  <div class="container">
  <div class="row">
    <div class="col">
      <h1>Welcome</h1>
      <span>Etiam porttitor risus massa nec condiment gravida nibh vel velit auctor aliquet. Aenean sollicitudinlorem quis bibendum</span>
      <img class="img__left" src="https://educator.qodeinteractive.com/wp-content/uploads/2017/07/h3-img.jpg" alt="">
    </div>
    <div class="col">
      <h1>Latest news</h1>
      <span>Etiam porttitor risus massa nec condiment gravida nibh vel velit auctor aliquet. Aenean sollicitudinlorem quis bibendum</span>
      <div class="news__event">
        <div class="zoom">
          <img class="img__right-one" src="https://educator.qodeinteractive.com/wp-content/uploads/2017/07/blog-featured-1-1-600x600.jpg" alt="">
        </div>
        <div class="news__info">
            <h4>Helping Students Is the Key</h4>
            <span>Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci...</span>
            <br>
            <span>July 20, 2017</span>
        </div>
      </div>
      <div class="news__event">
        <div class="zoom">
          <img class="img__right-two" src="https://educator.qodeinteractive.com/wp-content/uploads/2017/07/blog-featured-9-600x600.jpg" alt="">
        </div>
        <div class="news__info">
            <h4>Bring the Tutoring Home</h4>
            <span>Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci...</span>
            <br>
            <span>July 20, 2017</span>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>

</script>

<style scoped> 
#slider {
  background-color: #f7f7f7;
}
.container {
    padding: 100px 0;
}
.img__left {
    width: 470px;
    margin-top: 50px;
}
.img__right-one {
    width: 120px;
}
.img__right-two {
    width: 120px;
}
.news__event {
    display: flex;
    margin-top: 50px;
}
.news__info {
    margin-left: 20px;
}
h1 {
    margin: 0 0 20px;
    font-family: 'Times New Roman', Times, serif;
    font-weight: 900;
    color: #434343;
}
h4 {
    font-family: 'Times New Roman', Times, serif;
    font-weight: 900;
    color: #434343;
}
span {
    color: #919191;
}
.zoom {
  width: 200px;
  overflow: hidden;
  display: block;
  margin-bottom: 0;
}
.zoom img:hover {
  transform: scale(1.02);
}
.zoom img {
  transition: .3s ease-in-out;
}
</style>
