<template>
    <section class="mission">
        <div class="mission__content">
            <h2 class="mission__title title">Миссия Softline</h2>
            <p class="mission__discription">Мы помогаем организациям трансформироваться, работать эффективно и безопасно в условиях цифровой экономики.</p>
        </div>
        
        <div class="mission__paterns">
            <img class="mission__patern mission__patern--left" :src="require(`@/assets/image/paterns/left-pattern.png`)">
            <img class="mission__patern mission__patern--right" :src="require(`@/assets/image/paterns/right-pattern.png`)">
        </div>
    </section>
</template>
<script>
export default {
    name: 'home-mission'
}
</script>
<style lang="scss" scoped>
    .mission{
        box-sizing: border-box;
        background-color: $red-color;
        color: #FFF;
        position: relative;
        padding: 139px 72px 140px 68px;

        @include mobile{
            padding: 32px 5px;
        }
        
        &__content{
            max-width: 1110px;
            position: relative;
            z-index: 1;
        }
        &__title.title{
            color: #FFF;
        }
        &__discription{
            font-size: 32px;
            font-weight: 400;
            line-height: 48px;
            text-align: center;
            margin-top: 40px;

            @include mobile{
                font-size: 16px;
                line-height: 20.8px;
                margin-top: 10px;
            }
        }
        &__paterns{
            position: absolute;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        &__patern {
            height: auto;
            object-fit: contain;
            max-width: 100%;
            
            @include mobile500{
                width: 50%;
            }
            @include mobile{
                width: 40%;
            }
        }
    }
</style>