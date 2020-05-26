<template>
  <div class="home">
    <h1>Dataconfineurs</h1>
    <section class="grider">
      <weekLine v-for="week in weeks" :key="week.id" :weekNumber="week.id" :works="week.works" :theme="week.theme"></weekLine>  
    </section>

    <router-link to="/about">
      <div class="info"></div>
    </router-link>
  </div>
</template>

<script>
import weekLine from '@/components/weekLine'
import works from '@/assets/works.json'

export default {
  name: 'Home',
  data(){
    return {
      weeks: works.weeks
    }
  },
  components:{
    weekLine
  }
}
</script>

<style lang="scss" scoped>

.home{
margin:10vh 5vw;
}

section{
  width:100%;
  max-width:90vw;

  &.grider{
    margin-top:15vh;
    display:grid;
    grid-auto-flow:rows;
    grid-auto-rows: auto;
    grid-row-gap:40px;
    align-items:center;
  }
}

</style>
