<template>
    <div class="card">
        <a href="#" target="_blank">
            <img :src="props.anime.images.webp.image_url" alt="anime posters" />

            <h3>{{ props.anime.title }}</h3>
        </a>
    </div>

</template>

<script setup lang="ts">
import { onMounted } from "vue";

interface IAnime {
    title: string;
    images: {
        webp: {
            image_url:string
        }
    }
}

const props = defineProps<{
    anime: IAnime;
}>();



onMounted(() => {
    console.log("ola: ", props.anime);
})


</script>

<style lang="scss" scoped>
.card {
    flex: 1 1 33%;
    width: 33%;
    max-width: 33%;
    padding: 0px 8px;
    margin-bottom: 16px;

    img {
        width: 60%;
        height: 300px;
        object-fit: cover;
        border-radius: 16px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, .15);
        transition: 0.4s;
    }

    h3 {
        color: #313131;
        padding: 16px;
        transition: .4s;
    }

    &:hover {
        img {
            transform: scale(1.05);
        }

        h3 {
            color: #24dc44
        }
    }
}
</style>