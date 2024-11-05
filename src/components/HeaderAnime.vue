<template>
    <div class="header">
        <span class="logo">Logo</span>
        <div class="links">
            <a href="">Social</a>
            <a href="">Forum</a>
            <a href="" class="button-login">Login</a>
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
        color: white;
        font-weight: bold;
    }

}

.button-login{
    text-decoration: none;
    background-color: #3577FF;
    padding: 8px 15px;
    color: white;
    border-radius: 5px;
    transition: .3s;

    &:hover{
        transform: scale(1.05);
        box-shadow: 0px 2px 4px rgba(53,119,255, 0.50);
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