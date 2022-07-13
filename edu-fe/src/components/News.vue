<template>
  <div id="news">
    <div class="news">
      <div class="news__header">
        <h1>Newest Events</h1>
        <span
          >Etiam porttitor risus massa nec condiment gravida nibh vel velit
          auctor aliquetnean sollicitudin, lorem quis bibendum auci elit
          consequat</span
        >
      </div>
      <div class="container">
        <div class="row news__all">
          <div class="col-sm">
            <div class="zoom">
              <img
                src="https://educator.qodeinteractive.com/wp-content/uploads/2017/07/event-8.jpg"
                alt=""
              />
            </div>
            <h4>Let’s Talk Science</h4>
            <span>October 22, 2021 @ 9:00 am - October 22, 2026 @ 9:00 am</span>
            <br />
            <span>24 Wiley Ave, East York</span>
          </div>
          <div class="col-sm">
            <div class="zoom">
              <img
                src="https://educator.qodeinteractive.com/wp-content/uploads/2017/07/event-9.jpg"
                alt=""
              />
            </div>
            <h4>Painting Festival</h4>
            <span
              >October 22, 2021 @ 10:00 am - October 22, 2026 @ 6:00 pm</span
            >
            <br />
            <span>354 Shuter St Toronto</span>
          </div>
          <div class="col-sm">
            <div class="zoom">
              <img
                src="https://educator.qodeinteractive.com/wp-content/uploads/2017/07/event-7.jpg"
                alt=""
              />
            </div>
            <h4>Let’s Talk Science</h4>
            <span>October 22, 2021 @ 9:00 am - October 22, 2026 @ 9:00 am</span>
            <br />
            <span>24 Wiley Ave, East York</span>
          </div>
        </div>
      </div>
    </div>
    <div class="news__info">
      <div class="news__items">
        <div class="news__item">
          <button @click="changeText1()">
            <font-awesome-icon
              class="news__icon"
              icon="fa-solid fa-graduation-cap"
            />Description
          </button>
        </div>
        <div class="news__item">
          <button @click="changeText2()">
            <font-awesome-icon
              class="news__icon"
              icon="fa-solid fa-book"
            />Syllabus
          </button>
        </div>
        <div class="news__item">
          <button @click="changeText3()">
            <font-awesome-icon
              class="news__icon"
              icon="fa-solid fa-people-group"
            />Teachers
          </button>
        </div>
      </div>
      <transition
        appear
        enter-class=""
        enter-active-class="animate__animated animate__fadeInUp"
        leave-class=""
        leave-active-class="animate__animated animate__fadeOut"
        mode="out-in"
      >
        <div class="news__text">
          <p>{{ text }}</p>
          <p></p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text:
        "Mauris et diam pellentesque ex fermentum consectetur. Curabitur non tortor sit amet ligula viverra commodo. Quisque luctus nunc dolor, nec porttitor diam accumsan et. Duis convallis ipsum eget ligula scelerisque, eget consectetur mi interdum. Nullam tempor arcu consectetur pellentesque ultrices. Phasellus eu ipsum felis",
      
    };
  },
  methods: {
    changeText1() {
      this.text =
        "Mauris et diam pellentesque ex fermentum consectetur. Curabitur non tortor sit amet ligula viverra commodo. Quisque luctus nunc dolor, nec porttitor diam accumsan et. Duis convallis ipsum eget ligula scelerisque, eget consectetur mi interdum. Nullam tempor arcu consectetur pellentesque ultrices. Phasellus eu ipsum felis";
      return this.text;
    },
    changeText2() {
      this.text =
        "Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.";
      return this.text;
    },
    changeText3() {
      this.text =
        "Sed nec vehicula mi. Pellentesque at nisl odio. Sed tempus erat nec massa vehicula pretium eget porta tellus. Donec fermentum massa turpis, vel pretium erat mattis sit amet. Mauris sit amet dolor mi. Integer ligula ante, malesuada sed malesuada id, tempor nec nulla. Curabitur consectetur, eros et dapibus commodo, mauris sapien facilisis dui, dapibus";
      return this.text;
    }
  }
};
</script>

<style scoped>
.news {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 80px 0;
}
.news__header {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.news__all img {
  width: 100%;
  padding: 0 0 20px;
}
.news__all {
  padding: 70px 0 0;
}
h4,
h1 {
  font-family: "Times New Roman", Times, serif;
  font-weight: 900;
}
span {
  color: #91919e;
}

.news__info {
  background: url("https://educator.qodeinteractive.com/wp-content/uploads/2017/07/h3-image-5.jpg?id=185");
  padding: 200px;
}
.news__items {
  display: flex;
}
button {
  outline: none;
  border: 1px solid #d9d9df;
  cursor: pointer;
  padding: 10px 40px;
}
button:hover {
  background-color: #fff;
}
.news__text {
  padding: 30px 0 0;
  margin-right: 900px;
}
.news__icon {
  margin-right: 8px;
}
.zoom {
  height: 215px;
  overflow: hidden;
  display: block;
  margin-bottom: 30px;
}
.zoom img:hover {
  transform: scale(1.02);
}
.zoom img {
  transition: .3s ease-in-out;
}

</style>
