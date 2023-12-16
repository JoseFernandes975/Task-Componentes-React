import './styles.css';
import carImg from '../../assets/car-card 1.png';

export default function CardCars(){
  return(
    <div className='dsct-card-car'>
        <img src={carImg} alt="Carro" />
        <h3>Lorem ipsum dolor</h3>
    </div>
  );
}