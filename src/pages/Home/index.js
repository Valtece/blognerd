import './styleHome.css';
import Title from '../../components/Title';
import New from '../../components/New';
import Slider from '../../components/Slider';

export default function Home() {
  return (
    <div className="container">
      <div className='container-principal'>
        <main>
          <Title/>
          <New/>
          <Slider/>
        </main>
      </div>
    </div>
  );
}

