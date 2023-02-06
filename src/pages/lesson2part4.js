import { IonButtons,IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,
         IonCardHeader, IonCardTitle, IonCardContent, IonCard, IonIcon
 
} from '@ionic/react';
import { useParams } from 'react-router';
import Image from '../asset/threshing.jpg';
import {albumsOutline} from  'ionicons/icons';
import Data from '../asset/data/lesson2.json';

const Lesson2part4 = () => {

return (
<IonPage>
<IonHeader>
  <IonToolbar>
    <IonButtons slot="start">
      <IonMenuButton />
    </IonButtons>
    <IonTitle style={{fontWeight: '900', color: 'green'}}>Lesson 2 part 4</IonTitle>
    <IonTitle style={{fontSize: '14px'}}>19-Febuary-2023</IonTitle>
  </IonToolbar>
</IonHeader>

<IonContent fullscreen>
  <IonHeader collapse="condense">
    <IonToolbar>
      <IonTitle size="large"></IonTitle>
    </IonToolbar>
  </IonHeader>

  <div className='container'>
      <h1 style={{fontSize: '600'}}>{Data.title} Pt 4</h1>
      <img src={Image} alt="My text" style={{width:'100%'}}/>
      <div>
        <p style={{fontWeight: '700', textDecoration:'underline'}}>Memory Verse</p>
        <p>{ Data.memory_verse}</p><br />
       </div> 
       <hr />
         
  </div>

  <IonCard color="tertiary">
    <IonCardHeader style={{display: 'flex', alignItems: 'center'}}>
      <IonIcon icon={albumsOutline} style={{fontSize: '20px', marginRight:'15px'}}></IonIcon>
      <IonCardTitle style={{fontSize: '20px', marginTop:'1px'}}>Meaning</IonCardTitle>
    </IonCardHeader>

    <IonCardContent>
      <p>{Data.meaning}</p>
    </IonCardContent>
  </IonCard>

        <div className='container'>
          <h3 style={{background: 'black', color: 'white', padding: '10px'}}>SOME OF THE REQUIREMENTS FOR A GOOD THRESHING (Continuation)</h3>
          <ol>
            <li>Truth. Jn.8:32,36</li>
            <p>- a good thresher should live, walk
             and abide in the truth</p>
            <li>Kindness. 2Pet.1:7</li>
            <p>- You should be able to shows kindness to others to win them to God's kingdom for you to be able to thresh them</p>
            <li>Love and compassion. Jn 3:16, 1Jn.3:14</li>
            <p>You cannot thresh the fruit you don't love so also you can thresh souls if you don't love souls.</p>
            <li>Humility, 1Pet.5:5</li>
            <p>Our Lord Jesus Christ put on humility to thresh men for God's kingdom therefore we must do the same if we must thresh men for Christ.</p>
            <li>Godliness and contentment-1Tim 6:5-6</li>
            <p>Don't be greedy but be content and show some goodness to thresh men for God</p>
            <li>Prayer Eph 6:12-13, 18</li>
            <p>Prayer is inevitable in threshing men for God's kingdom</p>
          </ol>
        </div>


        <div className='container'>
          <h3 style={{background: 'black', color: 'white', padding: '10px'}}>SOME OF THE REQUIREMENTS FOR A GOOD THRESHING</h3>
          <ol>
            <li>Holiness: 1Pet 1:15-16</li>
            <p>- You must be an instrument of the thresher, you must live a holy life, Purity of the thresher; if you sit to thresh other people whereas you are not pure the people you are trying to thresh know but may not say it to your face but in their heart they may not follow the teachings because you are not doing the right thing, you become a hypocrite. Ps.119:9, 1Tim.6:11</p>
            <li>Sacred heart: Pro 4.23</li>
            <p>- Your heart should be a sacred floor: For the thresher, the issues of life are threshed from the heart, so the heart must be pure from unforgiveness, you may be angry but sin not, let not your wrath stay overnight. For the wrath of man- worketh not the righteousness of God. Eph.4:26</p>
            <p>- For a good thresher to be accepted by God, the internal dedication, consecration and sanctification of the heart is necessary for an excellent threshing floor.</p>
            <li>Righteous living: Luke 1:5-6</li>
            <p>- A good thresher must live in righteousness to affect others positively </p>
          </ol>
        </div>
</IonContent>
</IonPage>
);
};

export default Lesson2part4;