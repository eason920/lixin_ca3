<template>
    <Splide ref="splide" :options="options" @splide:mounted="setSize" @splide:moved="moved">
        <SplideSlide class="slide" v-for="img in props.imgs" v-lazy:background-image="img.img">
            <div class="caption font-['Noto_sans_tc']">{{ img.caption }}</div>
        </SplideSlide>
    </Splide>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.slide {
    position: relative;
    background-size: cover;

    .caption {
        position: absolute;
        color: #fff;
        font-size: size(14);
        right: size(45);
        bottom: size(25);
        filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.8))
    }
}

.splide__pagination {
    position: absolute;
    width: 100%;
    gap: size(15);

    li {
        line-height: 0 !important;

        .splide__pagination__page {
            position: relative;
            opacity: 0.3;

            &::after {
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                background-color: #fff;
                opacity: .65;
                left: 0;
                top: 0;
            }

            &.is-active {
                opacity: 1;

                &::after {
                    opacity: 0;
                }
            }
        }
    }
}

@media screen and (max-width: 767px) {

    .slide {
        .caption {
            font-size: sizem(12);
            right: sizem(10);
            bottom: sizem(10);
        }
    }

    .splide__pagination {
        gap: sizem(10);
        padding: 0 sizem(10);
    }
}
</style>

<script setup>
import { size, size_m } from '@/utils/size'
import { onMounted, ref, getCurrentInstance } from 'vue';

const props = defineProps(['imgs', 'w', 'w_m', 'h', 'h_m', 'dot', 'dot_color', 'dot_size', 'dot_bottom', 'dot_bottom_m', 'align', 'align_m'])
const options = {
    rewind: false,
    arrows: false,
    pagination: props.dot ?? false,
    autoplay: true,
    interval: 4000,
    gap: 5,
    type: 'loop'
}

const width = ref(0);
const height = ref(0);
const splide = ref(null);
const currentSlideIndex = ref(0);
const ctx = getCurrentInstance();

const go = (idx) => {
    splide.value.splide.go(idx)
}

const moved = (newIdx, prevIdx, destIdx) => {
    currentSlideIndex.value = prevIdx
    ctx.emit('slideIndex', currentSlideIndex.value)
}

const setSize = () => {
    if (document.documentElement.clientWidth < 767) {
        width.value = document.documentElement.clientWidth;
        height.value = size_m(props.h_m);
    } else {
        width.value = size(props.w);
        height.value = size(props.h);
    }

    splide.value.$el.style.width = width.value + 'px';
    splide.value.$el.style.height = height.value + 'px';
    splide.value.splide.options = {
        fixedWidth: width.value,
        fixedHeight: height.value
    }

    if (props.dot) {
        setDot();
    }
}

const setDot = () => {
    let bottom = size(props.dot_bottom);
    if (document.documentElement.clientWidth < 767) {
        bottom = size_m(props.dot_bottom_m);
    }

    const dotParent = splide.value.$el.querySelector('.splide__pagination');
    dotParent.style.bottom = bottom + 'px';

    if (props.align_m && document.documentElement.clientWidth < 767) {
        dotParent.style.justifyContent = props.align_m;
    } else if (props.align) {
        dotParent.style.justifyContent = props.align;
    }

    const dots = splide.value.$el.querySelectorAll('.splide__pagination__page');

    dots.forEach(element => {
        element.style.backgroundColor = props.dot_color;
        element.style.width = document.documentElement.clientWidth < 767 ? size_m(props.dot_size) + 'px' : size(props.dot_size) + 'px';
        element.style.height = document.documentElement.clientWidth < 767 ? size_m(props.dot_size) + 'px' : size(props.dot_size) + 'px';
    });
}

defineExpose({
    go
})

onMounted(() => {
    window.addEventListener('resize', function (event) {
        setSize()
    }, true);
})
</script>