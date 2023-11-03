import style from './Images.module.css';
import { useState, useEffect } from 'react';
import { getDownloadURL, listAll, ref, deleteObject } from 'firebase/storage';
import { storage } from '../../Config/firebaseInit';
import Modal from './Modal';

const Images = (props) => {
  const [imagesURL, setImagesURL] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const { activeAlbum } = props;

  useEffect(() => {
    setImagesURL([]);
    const URLsRef = ref(storage, `${activeAlbum}/`);
    listAll(URLsRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImagesURL((prev) => [...prev, { url, item }]);
        });
      });
    });
  }, [activeAlbum]);

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const handleDelete = (item) => {
    deleteObject(item)
      .then(() => {
        setImagesURL((prev) => prev.filter((image) => image.item !== item));
      })
      .catch((error) => {
        console.error('Error deleting image:', error);
      });
  };

  return (
    <>
      <div className={style.images}>
        {imagesURL.length > 0 ? (
          imagesURL.map((image, index) => (
            <div key={index} className={style.imageContainer}>
              <img src={image.url} alt={image.url} onClick={() => setSelectedImage(image.url)} />
              <button
                className={style.deleteButton}
                onClick={() => handleDelete(image.item)}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <h1>Loading {activeAlbum} ...</h1>
        )}
      </div>
      {selectedImage ? (
        <Modal imageURL={selectedImage} closeModal={closeImageModal} />
      ) : null}
    </>
  );
};

export default Images;
