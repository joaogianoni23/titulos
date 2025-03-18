import React from "react";
import styles from "./titulos.module.css";
import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/cards";
import Section from "../section/index";

export default function Titulos() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        
        <Section titulo={"Conquistas Principais"}>
            <Card ano={2012} capa={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"}
              detalhes={"Corinthians 1 x 0 Chelsea"} textoAlt={"Troféu do mundial interclubes"} titulo={"Mundial de clubes da FIFA"} />

              <Card ano={2012} capa={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"}
              detalhes={"Corinthians 2 x 0 Boca Juniors"} textoAlt={"Troféu da Copa Libertadores da América 2012"} titulo={"Copa Libertadores da América"} />

              <Card ano={2000} capa={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"}
              detalhes={"Corinthians 0(4) x 0(3) Vasco"} textoAlt={"Troféu do Mundial de Clubes da FIFA 2000"} titulo={"Mundial de Clubes da FIFA"} />
        </Section>

       <Section titulo={"Campeonato Brasileiro"}>
            <Card ano={2017} capa={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"}
              detalhes={"7º título brasileiro"} textoAlt={"Troféu do Campeonato Brasileiro 2017"} titulo={"Campeonato Brasileiro"} /> 
            
            <Card ano={2015} capa={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"}
              detalhes={"6º título brasileiro"} textoAlt={"Troféu do Campeonato Brasileiro 2015"} titulo={"Campeonato Brasileiro"} />
            
            <Card ano={2011} capa={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"}
              detalhes={"5º título brasileiro"} textoAlt={"Troféu do Campeonato Brasileiro 2011"} titulo={"Campeonato Brasileiro"} />
        </Section>

      <Section titulo={"Campeonato Paulista"}> 
          <Card ano={2018} capa={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"}
            detalhes={"29º título paulista"} textoAlt={"Troféu do Campeonato Paulista 2018"} titulo={"Campeonato Paulista"} />
          
          <Card ano={2017} capa={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"}
            detalhes={"28º título paulista"} textoAlt={"Troféu do Campeonato Paulista 2017"} titulo={"Campeonato Paulista"} />
          
          <Card ano={2013} capa={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"}
            detalhes={"27º título paulista"} textoAlt={"Troféu do Campeonato Paulista 2013"} titulo={"Campeonato Paulista"} />
      </Section>

       <Section titulo={"Outras Conquistas"}>
            <Card ano={2009} capa={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"}
              detalhes={"3º título da Copa do Brasil"} textoAlt={"Troféu da Copa do Brasil 2009"} titulo={"Copa do Brasil"} />
            
            <Card ano={2013} capa={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"}
              detalhes={"2º título da Recopa Sul-Americana"} textoAlt={"Troféu da Recopa Sul-Americana 2013"} titulo={"Recopa Sul-Americana"} />
            
            <Card ano={2002} capa={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"}
              detalhes={"1º título da Copa do Brasil"} textoAlt={"Troféu da Copa do Brasil 2002"} titulo={"Copa do Brasil"} />
        </Section>
      </main>
      <Footer />
    </div>
  );
};