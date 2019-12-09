<template>
    <div class="scp-list">
        <a v-if="object" target="_blank" :href="object.link" class="scp-card">
            <span class="scp-card__name">
                SCP-{{object.number | padNumber}}
            </span>
            <span class="scp-card__name">{{object.name}}</span>
            <span class="scp-card__class"><span class="t-bold">Класс объекта:</span> {{object.class | scpClass}}</span>
        </a>
    </div>
</template>

<script>
    export default {
        name: "ScpCard",
        props: {
            object: Object
        },
        filters: {
            padNumber(number) {
                return number.toString().padStart(3, '0');
            },
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
    margin: 0 12px
    &__name
        font-size: 1.4em
        color: #901
        display: block
    &__class
        display: block

</style>
