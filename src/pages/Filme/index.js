import './style.css';
import swat from "../../components/New/swat.jpg"

export default function Filme() {
  return (
    <div className="filmes">
      <div className='categoria'>
        <h3 className='categoria-filmes'> Series </h3>
      </div>
      <div className='box-filme'>
        <h1 className='titulo-filme'>
        SWAT: A série foi oficialmente renovada para a 7ª temporada, que também será a última da produção. O ciclo final contará com 13 episódios.
        </h1>
        <img src={swat} className="img-filme"/>
        <p className='descricao-filme'>
        Que ótima notícia! A CBS decidiu reverter o cancelamento de ‘S.W.A.T.‘ e oficialmente renovou a série para sua 7ª e última temporada.Esta etapa final será composta por 13 episódios. <br/> <br/> “Nós ouvimos nossos espectadores e sua paixão por ‘S.W.AT.’, então chegamos a um acordo para renovar a série para a sétima temporada,” declararam Amy Reisenbach, presidente da CBS, e Katherine Pope, presidente da Sony Pictures Television Studios, em um comunicado conjunto. “Essa série ganhou uma enorme base de fãs pelas últimas seis temporadas. Estamos felizes por termos encontrado uma forma de dar continuidade ao seriado e dar uma conclusão para a história desses amados personagens. Mais uma vez, apreciamos o talento e esforço do nosso elenco, escritores, produtores e equipe. Estamos ansiosos para a próxima temporada.”
        </p>
      </div>
    </div>
  );
}
