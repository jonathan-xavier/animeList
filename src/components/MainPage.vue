<template>
  <div class="app">
      <header>
          <h1>The<strong>Anime</strong>Database</h1>

          <form class="search-box" @submit.prevent.enter="handleSearch">
            <input type="search" 
            class="search-field" 
            placeholder="Search for an anime..."
            required
            v-model="search_query"
            />
          </form>
      </header>
      <main>
        <div class="cards">
            <Card v-for="anime in animeList" 
            :anime="anime"/>
        </div>
      </main>

  </div>
</template>

<script setup lang="ts">
import Card from "../components/Card.vue"
import { ref } from "vue";

const search_query = ref("");
const animeList = ref([]);

const handleSearch = async () => {
  animeList.value = await fetch(`https://api.jikan.moe/v4/anime?q=${search_query.value}`)
  .then(res => res.json())
  .then(data => data.results);

}

</script>

<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a{
  text-decoration: none;
}

main{
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 30px;
  padding-right: 30px;

  .cards{
     display: flex;
     flex-wrap: wrap;
     margin: 0 -10px; 
  }
}
.search-box{
  display: flex;
  justify-content: center;
  padding-left: 30px;
  padding-right: 3px;
}

.search-field {
  appearance: none;
  background: none;
  border: none;
  outline: none;

  background-color: #f3f3f3;
  box-shadow: 0px .5px .5px rgba(0, 0, 0, 0.15);

  display: block;
  width: 100%;
  max-width: 600px;
  padding: 15px;
  border-radius: 5px;
  color: #313131;
  font-size: 16px;
  transition: .4s;

  &::placeholder{
    color: #aaa;
  }
  &:hover{
    color: #fff;
    background-color: #313131;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.15);
  }

  &:focus, &:valid {
    color: #fff;
    background-color: #313131;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.15);
  }
}
.app{

  header{
    padding-top: 50px;
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
