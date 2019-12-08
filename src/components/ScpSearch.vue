<template>
    <div class="scp-search">
        <form @submit.prevent="onFormSubmit" class="form">
            <label for="search">Введите номер объекта:</label>
            <input type="number" v-model="query" name="search" id="search" ref="search" aria-label="Search">
            <button>Найти</button>
        </form>
        <ScpList :list="list"/>
    </div>
</template>

<script>
    import {api} from '../utils';
    import ScpList from './ScpList';
    export default {
        name: "ScpSearch",
        components: {ScpList},
        data() {
            return {
                query: '',
                list: []
            }
        },
        methods: {
            async onFormSubmit() {
                const response = await api.get('/objects/' + parseInt(this.query));
                if (response) {
                    this.list = response.data;
                }
            }
        }
    }
</script>

<style scoped lang="sass">
.scp-search
    padding: 12px
form
    display: grid
    font-size: 20px
    grid-template-rows: repeat(2, 1fr)
    grid-template-columns: repeat(2, 1fr)
    grid-template-areas: "label label" "input button"
    grid-column-gap: .5em
    > *
        margin-bottom: 12px
input
    border-radius: 5px
    font-size: inherit
    border: 1px solid #bbb
    padding: 4px
    grid-area: input
    min-width: 100px
button
    font-size: inherit
    grid-area: button
    border-radius: 10px
    border: 1px solid #bbb
    background: linear-gradient(to bottom, #966,#633,#300)
    box-shadow: 0 1px 3px rgba(0,0,0,.5)
    color: #eeeeee
    cursor: pointer
label
    text-align: center
    grid-area: label
</style>
