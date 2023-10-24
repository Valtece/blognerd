import "./style.css";
import gta from "./gta.jpeg"
import swat from "./swat.jpg"
import gran from "./gran.jpg"

function New(){
  return(
    <div>
      <section className="artigos">
        <div  className="artigo">
          <a href="/">
            <article>
              <div className="gradiente"></div>
              <img src={gta} className="img-article" />
              <div className="title-artigo">
                <span className="category"><span className="category-name">Jogos</span></span>
                <h2>Enquanto a Rockster não revela informações, o provável ator principal de GTA VI deu uma pista aos fãs.</h2>
              </div>
            </article>
          </a>
        </div>
        <div  className="artigo">
          <a href="/">
            <article>
              <div className="gradiente"></div>
              <img src={swat} className="img-article" />
              <div className="title-artigo">
                <span className="category"><span className="category-name">Séries</span></span>
                <h2>SWAT: A série foi oficialmente renovada para a 7ª temporada, que também será a última da produção. O ciclo final contará com 13 episódios.</h2>
              </div>
            </article>
          </a>
        </div>
        <div  className="artigo">
          <a href="/">
              <article>
                <div className="gradiente"></div>
                <img src={gran} className="img-article" />
                <div className="title-artigo">
                  <span className="category"><span className="category-name">Filmes</span></span>
                  <h2>Gran Turismo: De Jogador a Corredor: é um filme norte-americano de ação e drama que leva o nome da franquia de jogos homônima iniciada em 1997.</h2>
                </div>
              </article>
            </a>
        </div>
      </section>
    </div>
  )
    
  
}

export default New;