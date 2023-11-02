import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../Config/firebaseInit';
import style from './AlbumList.module.css'
import Images from '../Images/Images';

const AlbumsList = (props) => {
   
  const [albums, setAlbums] = useState([]);
  const { activeAlbum, setActiveAlbum } = props;

  useEffect(() => {
    const getAllAlbums = async () => {
      const querySnapshot = await getDocs(collection(db, "albumslist"));
      let allAlbums = [];
      querySnapshot.forEach((doc) => {
        allAlbums.push(doc.data());
      });
      setAlbums(allAlbums);
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
            <h1 onClick={()=>{setActiveAlbum(album.name)}} key={i}>{album.name}</h1>
          );
        })
      }
    </div>
    <Images activeAlbum = { activeAlbum } />
    </>
  );
}

export default AlbumsList;
