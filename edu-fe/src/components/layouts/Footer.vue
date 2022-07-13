<template>
<footer>
    <div class="footer__up">
        <div class="footer__item">
            <h5>Educate</h5>
            <div class="footer__small">
                <span>Providing Life Changing Experiences Through Education. Class That Fit Your Busy Life. Closer to Home</span>
            </div>
            <div>
                <font-awesome-icon class="footer__icon" icon="fa-solid fa-phone" />
                <span>1-677-124-44227</span>
            </div>
            <div>
                <font-awesome-icon class="footer__icon" icon="fa-solid fa-clock" />
                <span>Mon - Sat 8.00 - 18.00</span>
            </div>
        </div>
        <div class="footer__item">
            <h5>Latest News</h5>
            <h6>Graduate Admissions</h6>
            <span>by Craig Murphy</span>
            <h6>Continuing Education</h6>
            <span>by Craig Murphy</span>
            <h6>Current Students</h6>
            <span>by Craig Murphy</span>
        </div>
        <div class="footer__item">
            <h5>Useful Links</h5>
            <h6>Popular Courses</h6>
            <h6>Forums</h6>
            <h6>Our Teachers</h6>
            <h6>Upcoming Events</h6>
            <h6>Contact Us</h6>
        </div>
        <div class="footer__item">
            <h5>Flexible learning</h5>
            <img src="https://educator.qodeinteractive.com/wp-content/uploads/2017/07/footer-map-2.png" alt="">
        </div>
    </div>
    <div class="footer__down">
        <div class="footer__info-left">
            <span>© 2017 QODE INTERACTIVE, ALL RIGHTS RESERVED</span> 
        </div>
        <div class="footer__info-right">
            <span>CALL +44 300 303 0266</span>
            <span>FOLLOW US</span>
            <a href=""><font-awesome-icon class="footer__icon" icon="fa-brands fa-linkedin-in" /></a>
            <a href=""><font-awesome-icon class="footer__icon" icon="fa-brands fa-instagram" /></a>
            <a href=""><font-awesome-icon class="footer__icon" icon="fa-brands fa-twitter" /></a>
            <a href=""><font-awesome-icon class="footer__icon" icon="fa-brands fa-facebook-f" /></a>
        </div>
    </div>
</footer>
</template>

<script>

</script>

<style scoped>
footer {
    background: url('https://educator.qodeinteractive.com/wp-content/uploads/2017/07/h3-footer-image.jpg');;
    padding-top: 80px;
}
.footer__up {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgb(84, 83, 83);
    margin: 0 333px;
    padding-bottom: 20px;
}
.footer__item {
    width: 25%;
}
.footer__down {
    display: flex;
    justify-content: space-between;
    padding: 24px 0;
}
.footer__info-left {
    margin-left: 333px;
}
.footer__info-right {
    margin-right: 333px;
}
h5, h6 {
    color: #f5f5f6;
}
h5 {
    padding: 12px 0;
    font-family: 'Times New Roman', Times, serif;
    font-weight: 900;
}
span {
    color: rgb(158, 153, 153);
}
h6 {
    padding: 6px 0;
}
.footer__icon {
    color: #f5f5f6;
}
.footer__small {
    padding: 0 0 18px;
}
</style>