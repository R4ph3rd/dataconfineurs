<template>
<div class="dataweek">

    <router-link to="/">
      <h1>Dataconfineurs</h1>
    </router-link>

    <h3>{{getCurrentWeek.id}}</h3>
    
    <div>
        <h2>{{getCurrentWeek.theme}}</h2>

        <div class="works">
            <a v-for="work in getCurrentWeek.works" :key="work.author" :href="work.link" target="_blank" :class="work.author"></a>
        </div>
    </div>

    <section class="explications">
        <div class="tabs">
            <div :class="tab == 'theme' ? 'active' : ''" class="theme tab" @click="changeTab('theme')">{{getCurrentWeek.theme}}</div>
            <div v-for="work in getCurrentWeek.works" :class="tab == work.author ? work.author + ' active' : work.author" :key="work.author" class="tab" @click="changeTab(work.author)">{{work.author}}</div>
        </div>
        <div class="tab_content" @click="openWork()">
            <p>{{explications}}</p>
        </div>
    </section>

    <router-link to="/about">
      <div class="info"></div>
    </router-link>

</div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
    name: 'dataweek',
    data(){
        return {
            tab: 'theme'
        }
    },
    computed:{
        ...mapGetters(['getCurrentWeek']),
        explications(){
            if (this.tab == 'theme'){
                return this.getCurrentWeek.exp ;
            } else {
                return this.getCurrentWeek.works.find( work => work.author == this.tab).exp
            }
        }
    },
    methods:{
        ...mapActions({
            setCurrentWeek : 'setCurrentWeek'
        }),
        changeTab(tab){
            this.tab = tab ;
            console.log(this.tab)
        },
        openWork(){
            let work = this.getCurrentWeek.works.find( work => work.author == this.tab);
            window.open(work.link, '_blank');
        }
    },
    mounted(){
        if (this.getCurrentWeek.id != this.$route.params.week){
            this.setCurrentWeek(this.$route.params.week)
        }
    },
}
</script>

<style lang="scss" scoped>
h1{
    margin-left:32px;
}
.works{
    height:24px;
    display:grid;
    grid-auto-columns: 24px;
    grid-auto-flow: column;
    grid-column-gap:20px;
    align-items: center;

    a {
        border-radius:44px;
        width:100%;
        height:100%;
        box-shadow: 0 0 8px 2px rgba(0, 0, 0, .12);
        color:var(--dark01);
    }
}

h3{
    font-weight:700;
    font-size:55vh;
    position:absolute;
    z-index:-1;
    top:calc(50% - 30vh);
    left:0;
    color:var(--gray01);
    opacity:.3;

    & + div{
        position:relative;
        margin-top:calc(50vh - 5em - 9vw);
        margin-left:20vw;
        width:calc(100% - 20vw);
        padding-right:80px;

        display:flex;
        justify-content: space-between;
        align-items: center;

        h2 {
            font-size:6em;
            font-weight:700;
        }
    }
}

.explications{
    position:relative;
    margin:17vh 80px 0 40px;
    width:calc(100% - 80px);
    height:max-content;

    .tab_content{
        width:100%;
        height:130px;
        padding:20px;
        background-color:rgba(128, 117, 105, .2);
        box-shadow:0 2px 8px rgba(0,0,0, .12);
        border-radius:8px;

        & p {
            color:var(--gray01);
            font-size:1.1em;
            font-weight:400;
            opacity:.9;
        }

        &:hover{cursor: pointer;}
    }

    .tabs{
        display:flex;
        margin-left:12px;
    }

    .tab{
        width:max-content;
        height:max-content;
        margin-left:4px;
        padding:8px 10px;
        border-radius:4px 4px 1px 1px;
        background-color:rgba(128, 117, 105, .1);
        text-transform: capitalize;
        font-weight:700;

        &.meriem{ color:darksalmon }
        &.elliot{ color:black }
        &.raphaël{ color:rgb(211, 30, 74) }

        &:hover{cursor:pointer;}

        &.active{
            z-index:3;
            background-color:rgba(128, 117, 105, .2);
            // box-shadow:0 2px 8px rgba(0,0,0, .12);
        }
    }
}
</style>