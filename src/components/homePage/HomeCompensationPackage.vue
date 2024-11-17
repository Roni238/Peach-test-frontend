<template>
    <div class="compensation-package">
        <h2 class="compensation-package__title title">Компенсационный пакет</h2>

        <div class="compensation-package__advantage-list">

            <div class="compensation-package__advantage-item" v-for="advantage in advantages" :key="advantage.title">
                <component class="compensation-package__item-icon" :is="advantage.icon"></component>
                <p class="compensation-package__item-title"> {{ advantage.title }}</p>
            </div> 
        </div>

        <hr class="compensation-package__divider"> 

        <p class="compensation-package__additional-motivation">
            Программа дополнительной мотивации <br> 
            <span class="emphasize">доплата 12% от суммы</span>
        </p>
        
        <div class="compensation-package__advantage-list compensation-package__advantage-list--motivators">

            <div class="compensation-package__advantage-item compensation-package__advantage-item--compact" v-for="motivator in motivators" :key="motivator.title">
                <component class="compensation-package__item-icon" :is="motivator.icon"></component>
                <p class="compensation-package__item-title"> {{ motivator.title }}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'home-compensation-package',
    data(){
        return {
            advantages: [
                {
                    title: 'ДМС',
                    icon: 'dmc-icon'
                },
                {
                    title: 'Выходной в день рождения',
                    icon: 'birthday-icon'
                },
                {
                    title: 'Корпоративная мобильная связь',
                    icon: 'communication-icon'
                },
                {
                    title: 'Корпоративные скидки на спорт',
                    icon: 'sport-icon'
                },
                {
                    title: 'LTI',
                    icon: 'lti-icon'
                }
            ],
            motivators: [
                {
                    title: 'Оргтехники',
                    icon: 'office-equipment-icon'
                },
                {
                    title: 'ДМС',
                    icon: 'dmc-icon'
                },
                {
                    title: 'Ипотеки',
                    icon: 'mortgage-icon'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .compensation-package{
        max-width: 1110px;
        box-sizing: border-box;
        margin: auto;
        box-shadow: 0px 0px 40px 0px #0000000F;
        padding: 80px 30px;
        color: $gray-color;
        text-align: center;

        @include mobile{
            padding: 24px 5px;
        }
        
        &__title{
            margin-bottom: 50px;

            @include mobile{
                margin-bottom: 40px;
            }
        }

        &__advantage-list {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
            margin: auto;

            //можно использовать &:last-child но для удобства и маштабируемости сделаю модификаторы 
            &--motivators{
                gap: 25px;
            }

            @include mobile{
                gap: 25px 10px;
            }
        }
        
        &__advantage-item{
            display: flex;
            flex-direction: column;
            max-height: 160px;
            height: auto;
            width: 178px;
            align-items: center;
            
            &--compact {
                max-width: 120px;
                width: auto;
            }
            @include mobile{
                min-height: 108px;
                max-height: 120px;
                width: 120px;
            }
        }
        &__item-icon{
            height: 110px;
            width: 110px;
            margin-bottom: 10px;

            @include mobile{
                height: 80px;
                width: 80px;
            }
        }
        &__item-title{
            font-size: 18px;
            line-height: 19.8px;

            @include mobile{
                font-size: 16px;
                line-height: 17.6px;
            }
        }
        &__divider{
            width: 100%;
            border: none;
            height: 1px;
            background-color: #000;
            opacity: 0.1;
            margin: 75px 0px 70px;

            @include mobile{
                margin: 24px 0px;
            }
        }
        &__additional-motivation{
            font-size: 40px;
            font-weight: 600;
            line-height: 48px;
            margin-bottom: 50px;

            @include mobile{
                font-size: 22px;
                font-weight: 600;
                line-height: 26.4px;
                margin-bottom: 40px;
            }
        }
    }
</style>