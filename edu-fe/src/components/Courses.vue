<template>
<div id="courses">
    <div class="courses">
      <div class="courses__header">
        <h1>Popular Courses</h1>
        <span
          >Etiam porttitor risus massa nec condiment gravida nibh vel velit auctor aliquet. Aenean sollicitudinlorem quis bibendum auci elit consequat ipsutis sem nibh id elitduis sed</span>
      </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="card" style="width: 18rem;">
                <div class="zoom">
                    <img class="card-img-top" src="https://educator.qodeinteractive.com/wp-content/uploads/2017/07/course-img-2.jpg" alt="Card image cap">
                </div>
                <div class="card-body">
                    <h5 class="card-title">Photography</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">$120</a>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card" style="width: 18rem;">
                <div class="zoom">
                    <img class="card-img-top" src="https://educator.qodeinteractive.com/wp-content/uploads/2017/07/course-img-3.jpg" alt="Card image cap">
                </div>
                <div class="card-body">
                    <h5 class="card-title">Statistics</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">$190</a>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card" style="width: 18rem;">
                <div class="zoom">
                    <img class="card-img-top" src="https://educator.qodeinteractive.com/wp-content/uploads/2017/07/course-img-4.jpg" alt="Card image cap">
                </div>
                <div class="card-body">
                    <h5 class="card-title">Learning CAD</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">$200</a>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card" style="width: 18rem;">
                <div class="zoom">
                    <img class="card-img-top" src="https://educator.qodeinteractive.com/wp-content/uploads/2017/07/course-img-5.jpg" alt="Card image cap">
                </div>
                <div class="card-body">
                    <h5 class="card-title">Sports Stats</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">$160</a>
                </div>
            </div>
        </div>
    </div>
</div>



</template>
<script>
</script>




<style scoped>
.row {
    margin: 0 290px 100px;
}

.courses {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 80px 0;
}
.courses__header {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.courses__all img {
  width: 100%;
  padding: 0 0 20px;
}
.courses__all {
  padding: 70px 0 0;
}
a {
    background-color: #2d76b2;
}
.zoom {
    height: 100%;
    overflow: hidden;
    display: block;
}
.card-img-top:hover {
    transform: scale(1.02);
}
.card-img-top {
    display: block;
    transition: .3s ease-in-out;
}

</style>