<template>
    <div class="weekLine">
        <h3>sem {{weekNumber}}</h3> 

        <div class="works">
            <a v-for="work in works" :key="work.author" :href="work.link" :class="work.author"></a>
        </div>  

        <h2>{{theme}}</h2>
    </div>
</template>

<script>
export default {
    name: "weekLine",
    props:{
        weekNumber:{
            type: String,
            default: () => '00',
            required: false
        },
        works:{
            type: Array,
            default: () => [],
            required: false
        },
        theme:{
            type: String,
            default: () => 'Thème',
            required: false
        }
    }
}
</script>

<style lang="scss" scoped>
.weekLine{
    width:100%;
    height: 2em;
    display:flex;
    justify-content: space-between;
    align-items:center;

    .works{
        height:24px;
        display:grid;
        grid-auto-columns: 24px;
        grid-auto-flow: column;
        grid-column-gap:20px;
        align-items: center;

        .meriem{ background-color:darksalmon }
        .elliot{ background-color:black }
        .raphaël{ background-color:rgb(211, 30, 74) }

        a {
            border-radius:44px;
            width:100%;
            height:100%;
            box-shadow: 0 0 8px 2px rgba(0, 0, 0, .12);
        }
    }

    h2{
        font-weight:500;
        font-size:2em;
        text-transform: capitalize;
    }

    h3{
        font-weight:700;
        font-size:2em;
        text-transform: uppercase;
    }
}
</style>