import { useState } from 'react'
import { storage } from '../../Config/firebaseInit';
import { ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
import AlbumsList from '../AlbumsList/AlbumsList';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../Config/firebaseInit';
import style from './Upload.module.css'

const Upload = () => {

  // Defining the state for image file that is to be uploaded
  const [imageFile, setImageFile] = useState(null);
  const [albumname, setAlbumname] = useState('');
  const [activeAlbum, setActiveAlbum] = useState("images");

  const addNewDoc = async () => {
    await addDoc(collection(db, "albumslist"), {
      name: albumname
    });
    console.log(albumname);
  }

  // Function to handle uploading of image to firebase storage
  const uploadImageFile = () => {
    if(imageFile === null) return;
    const imageFileRef =  ref(storage, `${activeAlbum}/${imageFile.name + v4()}`);
    uploadBytes(imageFileRef, imageFile).then(()=>alert('Image Uploaded Successfully!'));
  }

  return (
    <>
    <div className={style.container}>
        <div className={style.albumform}>
          <input type='text' onChange={(e)=>setAlbumname(e.target.value)} placeholder='Album Name' />
          <button onClick={addNewDoc}><h3>Create Album</h3></button>
        </div>
        <div className={style.uploadbox}>
            <label>
              <input type='file' onChange={(e)=>setImageFile(e.target.files[0])} />
              <h2>Select File</h2>
            </label>
            <p>(Format: .jpeg/jpg, png, svg format files only)</p>
            <button onClick={uploadImageFile}><h3>Add To Album</h3></button>
        </div>
    </div>
    <AlbumsList activeAlbum = { activeAlbum } setActiveAlbum = { setActiveAlbum } />
    </>
  )
}

export default Upload;