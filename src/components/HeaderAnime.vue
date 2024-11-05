<template>
    <div class="header">
        <span class="logo">Logo</span>
        <div class="links">
            <a href="">Social</a>
            <a href="">Forum</a>
            <a href="">Login</a>
        </div>
    </div>
</template>


<script setup lang="ts">
</script>


<style lang="scss" scoped>

.header {
    height: 75px;
    background: #2B2D42;
    display: flex;
    flex-direction: row;
    margin-bottom: 2rem;
}

.links{
    width: 80%;
    font-size: .8rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1.5rem;
    letter-spacing: 0.1rem;
    align-items: center;

    a{
        text-decoration: none;
        outline: none;
        color: #D3D3ED;
    }

}

.logo{
    display: flex;
    flex-direction: column;
    width: 10%;
    padding-top: 1.5rem;
    padding-left: 1rem;
    color: #D3D3ED;
    
    
}
</style>