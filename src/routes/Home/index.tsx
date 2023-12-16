import './styles.css';
import CardCommentary from '../../components/CardCommentary';
import CardCar from '../../components/CardCar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

 /*Desenvolvido por José Henrique Fernandes*/
 
export default function Home(){
    return(
        <> 
        <Header/>
        <main>
          <section id='section-cars' className='dsct-container'>
            <h2 className='dsct-title-section'>Venha nos visitar</h2>
            <div className='dsct-cards-cars-container'>
            <CardCar/>
            <CardCar/>
            </div>
          </section>
          <section id='section-commentarys'>
            <h2 className='dsct-title-section'>O que estão dizendo</h2>
            <div className='dsct-cards-commentarys-container'>
              <CardCommentary/>
              <CardCommentary/>
              <CardCommentary/>
              <CardCommentary/>
              <CardCommentary/>
              <CardCommentary/>
            </div>
          </section>
        </main>
        <Footer/>
        </>
    );
}