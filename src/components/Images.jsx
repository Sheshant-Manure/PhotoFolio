import style from './Images.module.css';
import { useState, useEffect } from 'react';
import { getDownloadURL, listAll, ref } from 'firebase/storage';
import { storage } from '../Config/firebaseInit';

const Images = (props) => {

  const [imagesURL, setimagesURL] = useState([]);
  const { activeAlbum } = props;

  useEffect(() => {
    setimagesURL([]);
    const URLsRef = ref(storage, `${activeAlbum}/`);
    listAll(URLsRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
            setimagesURL((prev)=>[...prev, url]);
        });
      });
    });
  }, [activeAlbum]);

  return (
    <div className={style.images}>
      { imagesURL.length > 0 ? imagesURL.map((imgUrl, index) => {
        return (<img key={index} src={imgUrl} alt={imgUrl} />)
        }) : <h1>Loading {activeAlbum} ...</h1> 
      }
    </div>
  )
}

export default Images;