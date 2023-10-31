import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../Config/firebaseInit';
import style from './AlbumList.module.css'

const AlbumsList = (props) => {
   
  const [albums, setAlbums] = useState([]);


  useEffect(() => {
    const getAllAlbums = async () => {
      const querySnapshot = await getDocs(collection(db, "albumslist"));
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        setAlbums(prevArray => [...prevArray, doc.data()]);
      });
    }
    getAllAlbums();
  }, []);

  return (
    <>
    <h1 className={style.heading}>Albums</h1>
    <div className={style.albumslist}>
      { 
        albums && albums.map((album, i) => {
          return (
            <h1 key={i}>{album.name}</h1>
          );
        })
      }
    </div>

    </>
  );
}

export default AlbumsList;
