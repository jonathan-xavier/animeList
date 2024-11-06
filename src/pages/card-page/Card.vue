<template>
    <div class="card">
        <a href="#" target="_blank" class="card-item">
            <img :src="props.anime.images.webp.image_url" alt="anime posters" />

            <span>{{ props.anime.title }}</span>
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
    console.log(props);
})


</script>

<style lang="scss" scoped>

.card-item{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    overflow: hidden;
    text-decoration: none;
    color: #5A7087;
    font-weight: bold;
    
}
.card {
    max-width: 16%;
    padding: 0px 8px;
    margin-bottom: 16px;
    // background-color: #5A7087;

    img {
       // width: 60%;
        height: 300px;
        object-fit: cover;
        border-radius: 5px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, .15);
        transition: 0.4s;
    }

    span{
        padding: 10px;
    }

    &:hover {
        img {
           // transform: scale(1.05);
           filter: brightness(125%);
        }
    }
}
</style>