<template>
    <main>
        <div class="text-top">
            <p>videos novos toda <b>quinta</b> ás <b>19:00</b> horas</p>
        </div>
        <a href="youtube.com/wdevoficial" target="blank"></a>
        <img alt="inscreva-se" class="subscribe" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/subscribe.svg">
        <div class="text-bottom">
            <p>youtube.com/wdevoficial</p>
        </div>

    </main>
</template>

<script>
export default {
    name: 'home'    
}
</script>

<style scoped>
main{
    background-color: var(--color-background-home);
    justify-content: center;
    align-items: center;
}
.text-top{
    color: var(--color-text-light);
    font-size: 22px;
    margin-bottom: 20px;
}
.text-bottom{
    color: var(--color-text-light);
    font-size: 22px;
    margin-top: 20px;
}
.subscribe{
    width: 340px;
}
</style>