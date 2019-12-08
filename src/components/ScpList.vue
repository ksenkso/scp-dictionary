<template>
    <div class="scp-list">
        <a target="_blank" :href="obj.link" class="scp-card" v-for="obj in list" :key="obj.id">
            <span class="scp-card__name">
                SCP-{{obj.number}}
            </span>
            <span class="scp-card__name">{{obj.name}}</span>
            <span class="scp-card__class">Класс объекта: {{obj.class | scpClass}}</span>
        </a>
    </div>
</template>

<script>
    export default {
        name: "ScpList",
        props: {
            list: Array
        },
        filters: {
            scpClass(value) {
                switch (value) {
                    case 'na': return 'Не назначен или нейтрализован';
                    case 'safe': return 'Безопасный';
                    case 'euclid': return 'Евклид';
                    case 'keter': return 'Кетер';
                    case 'thaumiel': return 'Таумиэль';
                    case 'nonstandard': return 'Нестандартный класс';
                }
            }
        }
    }
</script>

<style scoped lang="sass">
.scp-card
    text-decoration: none
    cursor: pointer
    color: inherit
    font-size: inherit
    display: block
    padding: 8px 12px
    background: linear-gradient(#f2f2f2, #ffffff)
    border: 1px solid #bbbbbb
    border-radius: 10px
    overflow: hidden
    &__name
        font-size: 1.4em
        color: #901
        display: block
    &__class
        display: block

</style>
