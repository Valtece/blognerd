import './styleHome.css';
import Title from '../../components/Title';
import New from '../../components/New';

function Home() {
  return (
    <div className="container">
      <div className='container-principal'>
        <main>
          <Title/>
          <New/>
        </main>
      </div>
    </div>
  );
}

export default Home;
