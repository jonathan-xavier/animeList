<template>
    <div class="card">
        <a href="#" target="_blank" class="card-link">
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

.card-link{
    
    text-decoration: none;
    color: #5A7087;
    font-weight: bold;

    span{
        display: grid;
        place-items: center;
        text-transform: uppercase;
        overflow: hidden;
        text-overflow: ellipsis;
        height: 35px;
    }
    
    
}
.card {
    width: 180px;
    img {
        height: 250px;
        width: 100%;
        object-fit: fill;
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
           filter: brightness(110%);
        }
    }
}
</style>