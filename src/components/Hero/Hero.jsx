import logo from '../../Assets/images/picture.png'
import style from './Hero.module.css'

const Hero = () => {
  return (
    <div className={style.hero}>
        <div className={style.title}>
            <h1>PhotoFolio</h1>
            <h2>Your Personalized photos manager!</h2>
        </div>
        <div className={style.logo}>
            <img src={logo} alt="Logo" />
        </div>
    </div>
  )
}

export default Hero