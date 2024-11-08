<template>
  <div class="app">
      <header>
        <HeaderAnime/>
        <div class="dropdown-buttons">
          
          <form class="search-box" @submit.prevent.enter="handleSearch">
            <input type="search" 
            class="search-field" 
            placeholder="Search anime..."
            required
            v-model="search_query"
            />
          </form>
          
          <MenuAnime name-button="Genres"/>
          <MenuAnime name-button="Year"/>
          <MenuAnime name-button="Season"/>
          <MenuAnime name-button="Format"/>

          <i class="pi pi-table icons"  
          style="font-size: 2rem; color: #ADC0D2;" @click="changeGrid"></i>
        </div>

      </header>
      <main>
        <div :class="changeClass">
            <Card v-for="anime in animeList" 
            :anime="anime" :grid-class="changeClass"/>
            
        </div>
      </main>

  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import Card from "../pages/card-page/Card.vue"
import { ref } from "vue";
import HeaderAnime from "../pages/header-page/HeaderAnime.vue";
import MenuAnime from "../pages/menu-page/MenuAnime.vue";
import 'primeicons/primeicons.css'

const search_query = ref("");
const animeList = ref([]);
const changeClass = ref("cards");

const handleSearch = async () => {

  const { data: {data} } =  await axios.get(`https://api.jikan.moe/v4/anime?q=${search_query.value}`)
  animeList.value = data;
  console.log(animeList.value);
}

const changeGrid = () => {
  changeClass.value = "grid-side";
}

</script>

<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.dropdown-buttons{
 
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
  justify-content: center;
  align-items: center;

  i:hover{
    transition: 0.4s;
    color: #748899 !important;
  }
}

a{
  text-decoration: none;
}

.grid-side{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
}

main{
  max-width: 78%;
  margin: 0 auto;
  padding-left: 30px;
  
  .cards{
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 1rem;
  }
}
.search-box{

}

.search-field {
  appearance: none;
  background: none;
  border: none;
  outline: none;

  background-color: #fff;
  box-shadow: 0px .5px .5px rgba(0, 0, 0, 0.15);

  display: block;
  width: 100%;
  max-width: 200px;
  padding: 8px;
  border-radius: 2px;
  color: #313131;
  font-size: 16px;
  transition: .4s;

  &::placeholder{
    color: #aaa;
  }

}
.app{

  header{
    padding-bottom: 50px;

    h1{
      color: #888;
      font-size: 42px;
      font-weight: 400;
      text-align: center;
      text-transform: uppercase;
      margin-bottom: 30px;

      strong{
        color: #313131;
      }

      &:hover{
        transition: .3s;
        color: #313131;
        cursor: pointer;
      }
    }

    
  }
}
</style>
