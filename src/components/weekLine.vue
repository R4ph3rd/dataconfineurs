<template>
    <div class="weekLine" @click="toWeek()">
        <h3>sem {{weekNumber}}</h3> 

        <div class="works">
            <a v-for="work in works" target="_blank" :key="work.author" :href="work.link" :class="work.author"></a>
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
    },
    methods:{
        toWeek(){
            this.$router.push('/dataweek/' + this.weekNumber)
        }
    }
}
</script>

<style lang="scss" scoped>
.weekLine{
    width:100%;
    height: max-content;
    display:flex;
    justify-content: space-between;
    align-items:center;
    padding:12px 20px;
    border-radius:4px;

    &:hover{
        background: linear-gradient(to right, rgb(245, 239, 211) , rgb(247, 238, 203));
        cursor:pointer;
        box-shadow: 0 2px 4px rgba(0,0,0,.04);
    }

    .works{
        height:18px;
        display:grid;
        grid-auto-columns: 18px;
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
            color:var(--dark01);
        }
    }

    h2{
        font-weight:300;
        font-size:1.2em;
        text-transform: capitalize;
        color:var(--dark01);
    }

    h3{
        font-weight:700;
        font-size:1.3em;
        text-transform: uppercase;
        color:var(--dark01);
    }
}
</style>