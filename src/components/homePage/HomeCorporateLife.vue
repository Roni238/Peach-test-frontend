<template>
    <div class="corporate-life">
        <header class="corporate-life__header">
            <h2 class="corporate-life__title title">Корпоративная жизнь</h2>

            <div class="corporate-life__buttons" v-if="!isMobile">
                <button class="corporate-life__button" @click="changeSlide(-1)">
                    <red-arrow-icon class="corporate-life__button-icon" />
                </button>
                <button class="corporate-life__button" @click="changeSlide(1)">
                    <red-arrow-icon class="corporate-life__button-icon" />
                </button>
            </div>
        </header>

        <div
            class="corporate-life__slider-container"
            @touchstart="onTouchStart"
            @touchmove="onTouchMove"
            @touchend="onTouchEnd"
        >
            <div
                class="corporate-life__slider"
                :style="{ transform: `translateX(-${currentSlide * 100}%)`, transition: 'transform 0.5s ease-in-out' }"
            >
                <img class="corporate-life__slide" v-for="(slide, index) in slides" :key="index" :src="slide" :alt="`Slide ${index + 1}`" />
            </div>

            <div class="corporate-life__dots" v-if="!isMobile">
                <div
                    class="corporate-life__dot"
                    :class="{ 'corporate-life__dot--active': currentSlide === index }"
                    v-for="(slide, index) in slides"
                    :key="index"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "home-corporate-life",
    computed: {
        ...mapGetters(["isMobile"])
    },
    data() {
        return {
            slides: null,
            currentSlide: 0,
            touchStartX: 0, // начальная точка касания
            touchEndX: 0,   // конечная точка касания
        };
    },
    mounted() {
        const images = require.context('@/assets/image/slides/', false, /\.(png|jpe?g|svg)$/)
        this.slides = images.keys().map((key) => images(key))
    },
    methods: {
        changeSlide(direction) {
            this.currentSlide += direction

            if (this.currentSlide >= this.slides.length) {
                this.currentSlide = 0
            }
            if (this.currentSlide < 0) {
                this.currentSlide = this.slides.length - 1
            }
        },
        onTouchStart(event) {
            this.touchStartX = event.touches[0].clientX
        },
        onTouchMove(event) {
            this.touchEndX = event.touches[0].clientX
        },
        onTouchEnd() {
            //переключение свайпами для телефонов
            if(this.isMobile){
                const swipeDistance = this.touchStartX - this.touchEndX

                if (swipeDistance > 50) {
                    this.changeSlide(1)
                } else if (swipeDistance < -50) {
                    this.changeSlide(-1)
                }
                this.touchStartX = 0
                this.touchEndX = 0
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.corporate-life {
    max-width: 1110px;
    margin: auto;

    @include mobile {
        padding: 5px;
    }

    &__header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 55px;

        @include mobile {
            margin-bottom: 15px;
        }
    }

    &__title {
        text-align: start;
    }

    &__buttons {
        display: flex;
        gap: 20px;
        width: 132px;
    }

    &__button {
        height: 56px;
        width: 56px;
        border: none;
        background-color: #F0F0F0;
        border-radius: 50%;

        &:last-child .corporate-life__button-icon {
            transform: rotate(180deg);
        }
    }

    &__slider-container {
        overflow: hidden;
        width: 100%;

        @include mobile {
            height: 210px;
        }
    }

    &__slider {
        display: flex;
        transition: transform 0.5s ease-in-out;
        margin-bottom: 28px;
    }

    &__slide {
        min-width: 100%;
        height: 100%;
    }

    &__dots {
        width: 100%;
        height: 6px;
        display: flex;
        gap: 10px;
    }

    &__dot {
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.1);

        &--active {
            background-color: $red-color;
        }
    }
}
</style>
