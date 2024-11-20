<template>
    <article class="offices-map">
        <div class="offices-map__content">
            <div class="offices-map__point" v-for="dot in selectedCity" :key="dot.name"
                :style="{ left: `${dot.x}px`, top: `${dot.y}px`, fontSize: `${dot?.fontSize}px` }"
            >
                <div class="offices-map__point-dot"/>
                <div class="offices-map__point-dot-label" :style="{ bottom: dot?.onTop ? '100%' : 'none' }">{{ dot.name }}</div>
            </div>
        </div>
    </article>
</template>
<script>
export default {
    name:'offices-map',
    props: {
        selectedCity:{
            type: Array,
            required: true
        }
    }
}
</script>
<style lang="scss" scoped>
    .offices-map {
        --scaleX: 0.725;
        --scaleY: 0.72;
        position: relative;
        max-width: 100%;
        margin: 90px 30px 0;
        overflow-x: auto;
        overflow-y: hidden;

        @include mobile {
            margin: 8px 5px 0px;
            width: calc(1190px * var(--scaleX));
            height: calc(604px * var(--scaleY));
        }

        &__content {
            position: relative;
            width: 1190px;
            height: 604px;
            background-image: url('@/assets/image/map.png');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;

            @include mobile {
                transform: scale(var(--scaleX), var(--scaleY));
                transform-origin: top left;
            }
        }
        &__point {
            position: absolute;
            color: $gray-color;
        }
        &__point-dot {
            height: 8px;
            width: 8px;
            border-radius: 50%;
            background-color: $gray-color;
            transform: translate(-50%, 0%);
        }
        &__point-dot-label{
            position: absolute;
            width: max-content;
            transform: translate(-50%, 0%);
            font-size: 16px;
        }
    }
</style>