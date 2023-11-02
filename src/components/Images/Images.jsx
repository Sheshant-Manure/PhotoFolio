import style from './Images.module.css';
import { useState, useEffect } from 'react';
import { getDownloadURL, listAll, ref } from 'firebase/storage';
import { storage } from '../../Config/firebaseInit';
import Modal from './Modal';

const Images = (props) => {

  const [imagesURL, setimagesURL] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
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

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  useEffect(()=>{
    console.log(selectedImage);
  }, [selectedImage]);

  return (
    <>
    <div className={style.images}>
      { imagesURL.length > 0 ? imagesURL.map((imgUrl, index) => {
        return (<img key={index} src={imgUrl} alt={imgUrl} onClick={() => setSelectedImage(imgUrl)} />)
        }) : <h1>Loading {activeAlbum} ...</h1> 
      }
    </div>
    {
      selectedImage ? <Modal imageURL={selectedImage} closeModal={closeImageModal}/> : null
    }
    </>
  )
}

export default Images;