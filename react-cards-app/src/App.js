import "./App.css";
import Cards from "./Cards";

function App() {
  return (
    <div className="App">
      <Cards
        img="https://pest.bigbadmole.com/wp-content/uploads/2018/03/lonomija.jpg"
        title="Lonomia (Lonomia obliqua)"
        description='Birçok lonom türü çok renkli larvalara sahiptir. "Cub" daki parlak görünüm bir sebepten dolayı ortaya çıktı. Zehirlidirler.'
      />
      <Cards
        img="https://pest.bigbadmole.com/wp-content/uploads/2018/03/megalopyge-opercularis.jpg"
        title="Megalopyge opercularis"
        description="Böcek Amerikan kıtalarında yaşar ve Rusça adı yoktur. Bu kelebeğin larvalarına bazen koket denir. Bir at kuyruğu ile sert kürk bir yumru gibi görünüyor. Düşmanlara karşı korumak için, bu tırtıl sert kıllara gizlenmiş zehirli sivri uçlara sahiptir."
      />
      <Cards
        img="https://pest.bigbadmole.com/wp-content/uploads/2018/03/medvedica-gikori.jpg"
        title="Hickory Bear (Hickory Bear) (Lopory ayı)"
        description="Beyaz tüylü tırtıl tehlikeli görünmüyor. Zehiri yok. Ancak kolayca ayrılan kıllar mikroskopik çentiklerle kaplıdır.Ellerde pürüzlü deri ile bu tırtıl zararlı olamaz, ancak bazı kılları için kaşıntı ve döküntüye neden olur."
      />
    </div>
  );
}

export default App;
