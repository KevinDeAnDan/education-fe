<template>
<div id="header">
    <div class="info">
        <div class="info__left">
            <a href="">Student Home</a>
            <a href="">Call +44 300 303 0266</a>
            <a href="">Follow Us</a>    
            <a href=""><font-awesome-icon icon="fa-brands fa-linkedin-in" /></a>
            <a href=""><font-awesome-icon icon="fa-brands fa-instagram" /></a>
            <a href=""><font-awesome-icon icon="fa-brands fa-twitter" /></a>
            <a href=""><font-awesome-icon icon="fa-brands fa-facebook-f" /></a>
        </div>
        <div class="info__right">
            <a href="">English</a>
            <a href="">Login</a>
            <a href="">Register</a>
        </div>
    </div>
    <header :class="{change__color: scrollPosition > 50}">
        <div class="header__left">
            <img :src="isDefaultImage ? 'https://educator.qodeinteractive.com/wp-content/uploads/2017/07/logo-light.png' : 'https://educator.qodeinteractive.com/wp-content/uploads/2017/07/logo-dark.png'" alt=""></img></div>
        <div class="header__right">
            <a :class="{change__word: scrollPosition > 50}" href="">HOME</a>
            <a :class="{change__word: scrollPosition > 50}" href="">COURSES</a>
            <a :class="{change__word: scrollPosition > 50}" href="">EVENTS</a>
            <a :class="{change__word: scrollPosition > 50}" href="">PAGES</a>
            <a :class="{change__word: scrollPosition > 50}" href="">SHOP</a>
            <a :class="{change__word: scrollPosition > 50}" href="">BLOG</a>
            <a :class="{change__word: scrollPosition > 50}" href="">ELEMENTS</a>
            <a :class="{change__word: scrollPosition > 50}" href=""><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></a>
            <a :class="{change__word: scrollPosition > 50}" href=""><font-awesome-icon icon="fa-solid fa-bars" /></a>
        </div>
    </header>
    <div class="slider">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <transition appear enter-class="" enter-active-class="animate__animated animate__pulse animate__slower" leave-class="" leave-active-class="">
                        <img class="d-block w-100" src="https://wallpaperaccess.com/full/1426870.png" alt="First slide">
                    </transition>
                    <div class="carousel-caption d-none d-md-block title1">
                        <transition appear enter-class="" enter-active-class="animate__animated animate__pulse animate__fadeInUp" leave-class="" leave-active-class=""><h1>Latest Advancements</h1></transition>
                        <transition appear enter-class="" enter-active-class="animate__animated animate__pulse animate__fadeInUp animate__delay-2s" leave-class="" leave-active-class=""><p>The perpect way to create a stunning online presentation</p></transition>
                        <transition appear enter-class="" enter-active-class="animate__animated animate__pulse animate__fadeInUp animate__delay-3s" leave-class="" leave-active-class=""><button href="">READ MORE</button></transition>
                    </div>
                </div>
                <div class="carousel-item">
                    <transition appear enter-class="" enter-active-class="animate__animated animate__pulse animate__slower" leave-class="" leave-active-class="">
                        <img class="d-block w-100" src="https://www.wallpapertip.com/wmimgs/108-1088409_information-technology-wallpaper-technology-news.jpg" alt="Second slide">
                    </transition>
                    <div class="carousel-caption d-none d-md-block title2">
                        <transition appear enter-class="" enter-active-class="animate__animated animate__pulse animate__fadeInUp" leave-class="" leave-active-class=""><h1>A Unique Experience</h1></transition>
                        <transition appear enter-class="" enter-active-class="animate__animated animate__pulse animate__fadeInUp animate__delay-2s" leave-class="" leave-active-class=""><p>The perpect way to create a stunning online presentation</p></transition>
                        <transition appear enter-class="" enter-active-class="animate__animated animate__pulse animate__fadeInUp animate__delay-3s" leave-class="" leave-active-class=""><button href="">READ MORE</button></transition>
                    </div>
                </div>
                <div class="carousel-item">
                    <transition appear enter-class="" enter-active-class="animate__animated animate__pulse animate__slower" leave-class="" leave-active-class="animate__animated animate__pulse animate__slower">
                        <img class="d-block w-100" src="https://wallpaperaccess.com/full/912710.jpg" alt="Third slide">
                    </transition>
                    <div class="carousel-caption d-none d-md-block title3">
                        <transition appear enter-class="" enter-active-class="animate__animated animate__pulse animate__fadeInUp" leave-class="" leave-active-class=""><h1>Premium Scholarship</h1></transition>
                        <transition appear enter-class="" enter-active-class="animate__animated animate__pulse animate__fadeInUp animate__delay-2s" leave-class="" leave-active-class=""><p>The perpect way to create a stunning online presentation</p></transition>
                        <transition appear enter-class="" enter-active-class="animate__animated animate__pulse animate__fadeInUp animate__delay-3s" leave-class="" leave-active-class=""><button href="">READ MORE</button></transition>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
</div>

</template>

<script>
export default {
    el: '#header',
    data() {
        return {
            scrollPosition: '',
            isDefaultImage: true,
    } 
    },
    methods: {
        updateScroll() {
            this.scrollPosition = window.scrollY
        },
        handleScroll(event){
            if(window.scrollY > 50){
                return this.isDefaultImage = false
            }
            if (window.scrollY <= 50) {
                if (!this.defaultImage) {
                return this.isDefaultImage = true
                }
        }
        }
    },
    mounted() {
        window.addEventListener('scroll', this.updateScroll);

    },
    created() {
        window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
    },
}

</script>   

<style scoped>
.change__color {
    background-color:rgb(255, 255, 255);
    position: fixed;
    top: 0;
    height: 65px;
    transition: height 0.3s ease;
}
.change__word {
    color: #000;
}
.info {
    background-color: #212121;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 45px;
}
.info__left {
    margin-left: 25px;
}
.info__right {
    margin-right: 25px;
}
a {
    color: #fafafa;
    margin: 0 7px;
    text-decoration: none;
    font-size: 0.7rem;
}
a:hover {
    opacity: 0.7;
}
/* HEADER */
header {
    background-color: rgba(12, 12, 12, 0.4);;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    z-index: 9999;
    position: absolute;
}
header img {
    height: 77px;
}
header a {
    font-size: 0.77rem;
}
.header__left {
    margin-left: 30px;
}
.header__right {
    margin-right: 20px;
}
.header__right a {
    margin: 0 10px;
    padding: 25px 5px;
    font-weight: 700;
}
.slider {
    position: relative;
}
.carousel-inner {
    height: 933px;
}
.carousel-caption {
    margin-bottom: 350px;
}
.title2 {
    margin-bottom: 540px;
}
.title3 {
    margin-bottom: 465px;
}
h1 {
    font-size: 6rem;
    text-shadow: 1px 1px 2px #000;
    font-family: 'Times New Roman', Times, serif;
    font-weight: 700;
}
p {
    font-size: 1.8rem;
    margin-bottom: 40px;
}
.carousel-caption button {
    background-color: #ffffff;
    color: #000;
    padding: 15px 40px;
    font-size: 0.8rem;
    border: none;
    outline: none;
    font-weight: 700;
}
.carousel-caption button:hover {
    background-color: #1964a1;
    border: none;
    outline: none;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
}
.animate__slower{
    --animate-duration: 3.5s;
}
.animate__delay-2s {
    --animate-delay: 0.4s;
}
.animate__delay-3s {
    --animate-delay: 0.5s;
}
</style>
