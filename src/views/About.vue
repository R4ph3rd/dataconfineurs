<template>
  <div class="about">
    <router-link to="/">
      <h1>Dataconfineurs</h1>
    </router-link>

    <section>
      <h2>Introduction</h2>
      <p>Partager des données semble anodin mais ce n’est pas le cas, les datas en disent long sur nous.
        De prime abord, elles sembles peu importantes, mais lorsqu’elles sont analysées et interprétées elles permettent de comprendre une personne et sa façon de réfléchir.

        </br>
        </br>
        Bien que l’Art et la Datavisualisation soient peu comparable, on peut tout de même faire un parallèle entre ces deux domaines. En effet, longtemps les artistes ont essayé de faire comprendre leurs point de vue, leurs manières de voir le monde. Mais si on le formulait autrement cela reviendrait à dire que l’Art est une façon d’interpréter “les données” du monde. L’œuvre serait donc la synthèse de ces données et par conséquent une datavisualisation.

        </br>
        </br>
        La datavisualisation du monde, une façon de comprendre le point de vue d’autrui.
        Le projet des “Dataconfineurs” est né de cette interprétation du sujet. Nous avons cherché à comprendre comment les autres apercevaient le monde.
        </br>
        </br>
        Les Dataconfineurs c’est avant tout un pacte, une promesse de partager notre point de vue sur le monde. Toutes les semaines, nous avons sélectionné un thème à partir duquel nous avons récolté des informations que nous avons par la suite interprétées et présentées aux autres.</p>
    </section>
    
    <p class="credits">Travail réalisé dans le cadre d'un projet à <a href="https://www.lecolededesign.com/">L'Ecole de design Nantes Atltantique</a> par <a class="meme" href="http://gharbimeriem.com">Meriem Gharbi</a>, <a class="ellio" href="http://elliotchevalier.com">Elliot Chevalier</a> et <a class="raphael" href="http://raphaelperraud.com">Raphaël Perraud</a>.</p>
    
    <div @click="$router.go(-1)" class="retour">Retour</div>

  </div>
</template>

<script>
export default {
  name: 'about'
}
</script>

<style lang="scss" scoped>

.about{
  margin:10vh 5vw;
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

// .explications{
//     margin:20vh 80px 0 40px;
//     width:calc(100% - 80px);
//     padding:20px;
//     height:200px;
//     background-color:rgba(128, 117, 105, .2);
//     box-shadow:0 2px 8px rgba(0,0,0, .12);
//     border-radius:8px;

//     & p {
//         color:var(--gray01);
//         font-size:1.1em;
//         font-weight:400;
//         opacity:.9;
//     }
// }


section{
  margin-top:50px;
  margin-bottom:50px;

  h2{
    font-size:2em;
    font-weight:700;
    margin-bottom:20px;
  }

  p{
    color:var(--gray01);
    font-size:1.1em;
    font-weight:400;
    opacity:.7;
    max-width:1000px;  
  }
}

.credits{
  margin-bottom:50px;
  color:var(--dark01);
  opacity:.7;

  & a{
    color:var(--dark01);
    opacity:1;
    position:relative;

    &::after{
      content:' ';
      width:100%;
      height:2px;
      border-radius:1px;
      position:absolute;
      bottom:-4px;
      left:0;
      background-color: var(--dark01);
    }

    &.meme{
      opacity:1;
       &::after{
        background-color:darksalmon;
      }
    }
    &.ellio{
      opacity:1;
      &::after{
        background-color:black;
      }
    }
    &.raphael{
      opacity:1;
       &::after{
        background-color:rgb(211, 30, 74);
      }
    }
  }
}



.retour{
  border-radius:4px;
  background-color:var(--dark01);
  color:cornsilk;
  font-weight:700;
  font-size:1.2em;
  text-transform: uppercase;
  padding:12px 20px;
  width:max-content;
  height:max-content;

  &:hover{
    cursor:pointer;
  }
}
</style>