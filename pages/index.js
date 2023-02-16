import RacerBlock from '../components/racerBlock';
import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import TopHeader from '../components/TopHeader';
// Sfondo
//https://c4.wallpaperflare.com/wallpaper/942/66/336/car-vaporwave-wallpaper-preview.jpg

export default function Home() {
  const [usersList, setusersList] = useState([]);

  useEffect(() => {
    function recuperaListaUtenti() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((result) => {
          return result.json();
        })
        .then((data) => {
          setusersList(data);
          console.log(usersList);
        });
    }
    recuperaListaUtenti();
  }, [JSON.stringify(usersList)]);

  return (
    <div>
      <TopHeader />
      <div className={styles.header_image}></div>
      <div className={styles.leaderbord__list}>
        {usersList.map((user) => {
          return <RacerBlock key={user.id} name={user.name} />;
        })}
      </div>
    </div>
  );
}
