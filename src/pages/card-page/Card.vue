<template>
    <div class="card">
        <a href="#" target="_blank" class="card-link">
            <img :src="changeWidth" alt="anime posters" />

            <span>{{ props.anime.title }}</span>
        </a>
    </div>

</template>

<script setup lang="ts">
import { computed } from "vue";
import { ISearch } from "../../interfaces/anime";



const props = defineProps<{
    anime: ISearch;
    gridClass:any;
}>();

const changeWidth = computed(() => {
    return props.gridClass === "grid-side" ? props.anime.images.webp?.large_image_url : props.anime.images.webp?.image_url;
});


// onMounted(() => {
//     console.log(props.anime)
// })

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
    gap: 1rem;

    a{
        img {
            height: 250px;
            width: 100%;
            object-fit: fill;
            border-radius: 5px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, .10);
            transition: 0.4s;
        }
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