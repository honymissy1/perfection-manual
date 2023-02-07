import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,
    IonCardContent, IonCard, IonCardTitle, IonCardHeader, IonIcon, IonBackButton      
} from '@ionic/react';
import {albumsOutline} from  'ionicons/icons';
import { useParams } from 'react-router';
import '../components/ExploreContainer.css';
import Data from '../asset/data/lesson5.json';
import Img from '../asset/bread.webp'


const Lesson5part5 = () => {
const { name } = useParams();
return (
<IonPage>
<IonHeader>
  <IonToolbar>
    <IonButtons slot="start">
      <IonBackButton></IonBackButton>
    </IonButtons>
    <IonTitle style={{fontWeight: '900', color: 'green'}}>Lesson 5 Part 5</IonTitle>
    <IonTitle style={{fontSize: '14px'}}>11-June-2023</IonTitle>
  </IonToolbar>
</IonHeader>

<IonContent fullscreen>
  <IonHeader collapse="condense">
    <IonToolbar>
      <IonTitle size="large"></IonTitle>
    </IonToolbar>
  </IonHeader>

  <div className="container">
    <h1 style={{fontSize: '24px', fontWeight: '700'}}>{Data.title} Pt 5</h1>
    <img style={{width: '100%'}} src={Img} alt="growingg" />
    <div>
      <p style={{fontWeight: '700', textDecoration:'underline'}}>Memory Verse</p>
      <p>{ Data.memory_verse}</p><br />
    </div>

    <p style={{fontWeight: '700', textDecoration:'underline'}}>Main Text</p>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '5px'}}>
              <p style={{ fontWeight: 'bolder'}}>{Data.main_text}</p>  
          </div>
    
    <IonCard style={{marginLeft:'0px',width: '100%'}} color="success">
     <IonCardHeader style={{display: 'flex', alignItems: 'center'}}>
       <IonCardTitle style={{fontSize: '15px', marginTop:'0px', fontWeight: '800'}}>MEANING</IonCardTitle>
     </IonCardHeader>

     <IonCardContent>
       <p style={{color: 'white', fontSize:'15px'}}>{Data.meaning}</p>
     </IonCardContent>
   </IonCard>

</div>

  <div>
    <h3 style={{background: 'black', color: 'white', padding: '10px'}}>HOW TO GET BACK YOUR BREAD (CONTINUATION)</h3>
    <ol>
        <li>Set yourself free through the ministry of deliverance. Obadiah 1:17</li>
        <li>Set yourself free by studying the word of God and meditation. Joshua 1:8</li>
        <li>Set yourself free through intensive prayers. Joel 2:23</li>
    </ol>
  </div>

  <div>
    <h3 style={{background: 'black', color: 'white', padding: '10px'}}>BENEFITS OF POSSESSING YOUR BREAD</h3>
    <ol>
        When you possess your bread which is God you will receive
        <li>Light. John 12:35</li>
        <li>Water. Psalm 1:3</li>
        <li>Blessings of God</li>
    </ol>
  </div>
</IonContent>
</IonPage>
);
};

export default Lesson5part5;
