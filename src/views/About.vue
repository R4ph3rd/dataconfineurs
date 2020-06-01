<template>
  <div class="about">
    <router-link to="/">
      <h1>Dataconfineurs</h1>
    </router-link>

    <section>
      <h2>Introduction</h2>
      <p>
      La période de confinement dû à l'épidémie de Covid-19 a fragmenté et bouleversé nos existences en divers espaces et temporalités : physique et numérique, journée et nuitée, tout commence 
      à se confondre lorsque notre horizon se résume à 4 murs délimitant un espace de quelques mètres carrés seulement.</br></br>
      Inspirés par le travail de <a href="http://giorgialupi.com/">Giorgia Lupi</a> et <a href="http://www.stefanieposavec.com/">Stefanie Posavec</a>, nous avons donc initié un rituel hebdomadaire
      de mise en forme de données récoltées durant la semaine sur une thèmatique définie préalablement par le groupe. Les visuels qui en ont résulté ont permis d'établir un échange entre nos situations
      géographiquement et socialement différentes et ainsi créer un lien d'empathie à conforter lors des échanges sur les travaux effectués.

       </br></br>En effet, partager ces datas récoltées ont permis de décrypter nous-même la situation dans laquelle nous nous trouvions, mais également de la partager aux autres.
        Elles ont permis à chacun d'entre nous d'analyser et d'interpréter nos conditions respectives.
        </br>
        </br>
        La datavisualisation du monde, une façon de comprendre le point de vue d’autrui.</br>
        Le projet des “Dataconfineurs” est né de cette interprétation. Nous avons cherché à comprendre comment les autres apercevaient le monde.
        </br>
        </br>
        Les Dataconfineurs c’est avant tout un pacte, une promesse de partager notre point de vue sur le monde. Chaque semaine devait voir son lot de données récoltées, filtrées et interprétées sous le signe d'une thèmatique définie.</p>
    </section>

    <section>
      <h2>Lecture & usage</h2>
      <p>Chaque semaine présente sa thématique ainsi que les travaux effectués par chacun d'entre nous accessibles en cliquant sur les point de couleurs rose, noir et rouge ; respectivement Meriem, Elliot et Raphaël.
      </br> En accédant à la page d'une semaine, il est possible d'avoir une interprétation concise de la thématique de la semaine ainsi que celle donnée à chacune des réalisations par l'un des dataconfineurs ne l'ayant pas produite.
      </p>
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