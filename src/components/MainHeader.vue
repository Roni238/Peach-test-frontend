<template>
    <header class="header">
        <router-link :to="{path: '/' }"> 
            <logo-icon class="header__logo"/>
        </router-link>

        <nav class="header__nav">
            <router-link class="header__link"  
                v-for="link in links" :key="link.nameLink" :to="{path: link.path }"
            > 
                {{ link.title }} 
            </router-link>
        </nav>
    </header>
</template>
<script>
export default {
    name: 'main-header',
    data(){
        return {
            links:[
                //лучше передавать в router-link не path а name но я буду передавать ссылки чтобы vue не спамил ошибки из router
                {title: 'Облачные решения', path: '/cloud-solutions'},
                {title: 'Кибербезопасность', path: '/cybersecurity'},
                {title: 'Импортозамещение', path: '/import-substitution'},
                {title: 'Цифровая трансформация', path: '/digital-transformation'}
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    .header {
        border: 1px solid $border-color;
        box-sizing: border-box;
        height: 85px;
        display: flex;
        align-items: center;
        padding: 0px 70px;
        justify-content: space-between;

        &__nav {
            display: flex;
            flex-wrap: wrap;
            gap: 5px 20px;
        }
        &__link {
            font-weight: 600;
            font-size: 18px;
            line-height: 20px;
            text-decoration: none;
            color: $gray-color;
        }
    }

    // тут должно быть @include mobile но под палншеты нет адаптива в макете, по этому возьму побольше чтобы nuv не сслыки не корёжило
    @include mobile500 {
        .header {
            flex-direction: column;
            padding: 16px 5px;
            height: 110px;
            gap: 16px;
            align-items: flex-start;

            &__nav{
                gap: 5px 10px;
            }
            &__link{
                font-size: 14px;
                line-height: 16px;
            }   
        }
    }
</style>