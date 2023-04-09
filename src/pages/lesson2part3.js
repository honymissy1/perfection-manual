import { IonButtons,IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
    IonCardHeader, IonCardTitle, IonCardContent, IonCard, IonIcon, IonBackButton
 
} from '@ionic/react';
import { useParams } from 'react-router';
import Image from '../asset/threshing.jpg';
import {albumsOutline} from  'ionicons/icons';
import Data from '../asset/data/lesson2.json';

const Lesson2part3 = () => {

const { name } = useParams();

return (
<IonPage>
<IonHeader>
  <IonToolbar>
    <IonButtons slot="start">
      <IonBackButton></IonBackButton>
    </IonButtons>
    <IonTitle style={{fontWeight: '900', color: 'green'}}>Lesson 2 part 3</IonTitle>
    <IonTitle style={{fontSize: '14px'}}>12-Febuary-2023</IonTitle>
  </IonToolbar>
</IonHeader>

<IonContent fullscreen>
  <IonHeader collapse="condense">
    <IonToolbar>
      <IonTitle size="large">{'page 3'}</IonTitle>
    </IonToolbar>
  </IonHeader>

  <div className='container'>
      <h1 style={{fontSize: '600'}}>{Data.title} Pt 3</h1>
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
          <h3 style={{background: 'black', color: 'white', padding: '10px'}}>SOME OF THE WAYS BELIEVER CAN BE THRESHED (Continuation)</h3>
          <ol>
            <li>Through righteousness. Matt.5:6,20</li>
            <li>Through the fear of God. Ecc 12:13</li>
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


        {/* <div>
          <h3 style={{background: 'black', color: 'white', padding: '10px'}}>SOME OF THE WAYS A BELIEVERS CAN BE THRESHED</h3>
          <ol>
            <li>By the Word of God: 2Tim.2:15</li>
            <p>- We should be aware that the word of God will
                 thresh out the believer </p>

            <li>Through the Spirit of God. Rom.8:14</li>
            <p>- When you allow the Spirit of God to lead you, He will thresh you</p>
             <li>Through the servant or the prophet of God. 2Chro.20:20</li>
             <p>- When you believe the true prophet of God and obey his instructin then you will be threshed and 
                structured
             </p>
             <li>Through the counsel of God</li>
          </ol>
        </div> */}

 


</IonContent>
</IonPage>
);
};

export default Lesson2part3;