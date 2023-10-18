<template>
    <div>
        <Swiper :modules="modules" :slides-per-view="1" :cssMode="true" :pagination="{ clickable: true, }" loop: true
            :autoplay="{
                delay: 7000,
                disableOnInteraction: false,
                pauseOnMouseEnter: false
            }" class="swiper">

            <SwiperSlide>
                <div class="slide"> <img src="../assets/images/slide1.webp" alt=""></div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="slide"> <img src="../assets/images/slide2.jpg" alt=""></div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="slide"> <img src="../assets/images/slide3.webp" alt=""></div>
            </SwiperSlide>
        </Swiper>

        <div id="flex">
            <div class="Title">
                <div class="title-ex">
                    <a class="heading">INTERVIEWS</a>
                    <a class="text">Pochettino:'Very good things are coming'</a>
                </div>
                <div class="blue"></div>
            </div>

            <div class="Title" id="single">
                <div class="title-ex">
                    <a class="heading">INTERNATIONAL</a>
                    <a class="text"> Gallagher hopes for England chance</a>
                </div>
                <div class="blue1"></div>
            </div>

            <div class="Title">
                <div class="title-ex">
                    <a class="heading">INTERVIEWS</a>
                    <a class="text">Long read: Di Matteo on the 90s' Italian influence at Chelsea</a>
                </div>
                <div class="blue2"></div>
            </div>
        </div>
    </div>
</template>



<script setup>
import { Swiper } from "swiper/vue"
import { SwiperSlide } from "swiper/vue"
import { Pagination, Autoplay, Navigation } from "swiper/modules"


import 'swiper/css'
import 'swiper/css/pagination'


const modules = [Pagination, Autoplay, Navigation]



</script>
<style scoped>
.slide {
    width: 100%;
}

#flex {
    width: 85%;
    display: flex;
    position: relative;
    bottom: 150px;
    z-index: 1;
    margin-left: 100px;
}

.Title {
    width: 34%;
    background-color: #c5c3c1;
    display: flex;
    flex-direction: column;
    align-content: space-between;
    box-sizing: border-box;
}

.title-ex {
    padding: 15px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: space-between;
    height: 100%;
}

#single {
    border-left: 1px solid #b5b5b5;
    border-right: 1px solid #b5b5b5;
}

a {
    text-decoration: none;
}

.heading {
    font-size: 0.9rem;
    font-weight: 900;
    color: #2560f8;
}

.text {
    margin-top: 5px;
    font-size: 1.1rem;
    font-weight: 900;
    color: #06158a;
}

.blue {
    background-color: #2560f8;
    height: 5px;
    width: 0px;
    animation-name: filler;
    animation-duration: 7s;
    animation-timing-function: linear;
}

.blue1 {
    background-color: #2560f8;
    height: 5px;
    width: 0px;
    animation-name: filler1;
    animation-duration: 7s;
    animation-delay: 7s;
    animation-timing-function: linear;

}

.blue2 {
    background-color: #2560f8;
    height: 5px;
    width: 0px;
    animation-name: filler2;
    animation-duration: 7s;
    animation-delay: 14s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

@keyframes filler {
    0% {
        width: 0%;
    }

    100% {
        width: 100%;
    }
}

@keyframes filler1 {
    0% {
        width: 0%;
    }

    100% {
        width: 100%;
    }
}

@keyframes filler2 {
    0% {
        width: 0%;
    }

    100% {
        width: 100%;
    }
}
</style>