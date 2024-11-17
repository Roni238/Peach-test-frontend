<template>
    <div class="presentation">
        <h1 class="presentation__title title">Softline</h1>

        <p class="presentation__description">
          Ведущий поставщик IT-решений и сервисов.* Мы предлагаем комплексные IT-решения, облака, программное и аппаратное обеспечение, решения по цифровой трансформации и кибербезопасности, а также широкий спектр IT-услуг.
        </p>

        <div class="presentation__statistics" v-if="isMobile">
            <div class="presentation__status">
                <span class="presentation__simbol">></span>
                <span class="presentation__numbers">30 лет</span>
                <p>на IT-рынке</p>
            </div>
            <div class="presentation__status">
                <span class="presentation__numbers">4600</span>
                <p>сотрудников в России</p>
            </div>
            <div class="presentation__status">
                <span class="presentation__numbers">25</span>
                <p>городов России</p>
            </div>
            <div class="presentation__status">
                <span class="presentation__numbers">2000</span>
                <span class="presentation__simbol">+</span>
                <p>разработчиков</p>
            </div>
            <div class="presentation__status">
                <span class="presentation__numbers">3000</span>
                <span class="presentation__simbol">+</span>
                <p>сотрудников ежегодно <br> проходят оценку и обучение</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: 'home-presentation',
    computed: {
        ...mapGetters(["isMobile"])
    },
}
</script>
<style lang="scss" scoped>

.presentation{
    text-align: center;
    max-width: 1110px;
    margin: auto;

    @include mobile{
        text-align: left;
    }

    &__title{
        margin-bottom: 30px;

        @include mobile{
            margin-bottom: 10px;
        }
    }
    &__description{
        font-size: 32px;
        font-weight: 400;   
        line-height: 38.4px;

        @include mobile{
            font-size: 16px;
            font-weight: 400;
            line-height: 19.2px;
        }
    }

    &__statistics{
        width: 100%;
        text-align: center;
        margin-top: 50px;
    }
    &__status{
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        text-align: center;
        display: inline-block;
        margin: 24px 4px 0px;
    }
    &__numbers{
        font-size: 40px;
        color: $red-color;
        font-weight: 600;
    }
    &__simbol{
        font-size: 30px;
        color: $red-color;
        font-weight: 900;
    }
}
</style>