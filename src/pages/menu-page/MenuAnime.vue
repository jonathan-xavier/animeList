<template>
      <n-dropdown
        placement="bottom-start"
        trigger="hover"
        size="small"
        :options="options"
        @select="handleSelect"
      >
      <n-button class="button-menu" color="#fff" text-color="#2B2D42">{{ props.nameButton }}</n-button>
    </n-dropdown>
</template>

<script setup lang="ts">
import {  NDropdown, NButton } from "naive-ui";
import { defineProps } from "vue";


const props = defineProps({
  nameButton: {
    type: String,
    default: ""
  }
});


const options = [
    {
        label: "Jonathan",
        key:"jonathan"
    }
];


const handleSelect = (key: string | number) => {
    console.log(key);
}
</script>

<style lang="scss" scoped>

</style>