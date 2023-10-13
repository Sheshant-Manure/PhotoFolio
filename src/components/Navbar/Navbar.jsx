import style from './Navbar.module.css';
import logo from '../../Assets/images/picture.png'

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <img className={style.logo} src={logo} alt='logo' />
      <h1 className={style.title}>PhotoFolio</h1>
    </div>
  )
}

export default Navbar;