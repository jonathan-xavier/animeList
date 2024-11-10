<template>
  <div class="flex flex-wrap items-center gap-4">
    <el-dropdown placement="bottom-start">
      <el-button>{{ props.nameButton }}</el-button>
      <template #dropdown>
        <el-dropdown-menu v-for="(genre, index) in props.genres" :key="`genre-${index}`">
          <template v-for="(genre_item) in genre" :key="`genre-${index}`">

            <el-dropdown-item>{{ genre_item.name }}</el-dropdown-item>
          </template>

        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>

</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { IGenres } from "../../interfaces/anime";


const props = defineProps<{
  nameButton: String,
  genres: IGenres[][],
}>();


</script>

<style lang="scss" scoped></style>