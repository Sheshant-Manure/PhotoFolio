import { useEffect } from "react";
import style from './Modal.module.css'

const Modal = (props) => {
    const { imageURL, closeModal } = props;
  
    useEffect(()=>{
      console.log(imageURL)
    })

    return (
      <div className={style.imagemodaloverlay}>
        <div className={style.imagemodalcontent}>
          <img src={imageURL} alt={imageURL} />
          <button className={style.closebutton} onClick={closeModal}>Close</button>
        </div>
      </div>
    );
  };
  
  export default Modal;