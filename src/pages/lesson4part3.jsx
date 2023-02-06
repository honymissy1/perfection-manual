import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,
    IonCardContent, IonCard, IonCardTitle, IonCardHeader       
} from '@ionic/react';
import { useParams } from 'react-router';
import '../components/ExploreContainer.css';
import Data from '../asset/data/lesson4.json';
import Img from '../asset/service.jpg'


const Lesson4part3 = () => {
const { name } = useParams();
return (
<IonPage>
<IonHeader>
  <IonToolbar>
    <IonButtons slot="start">
      <IonMenuButton />
    </IonButtons>
    <IonTitle style={{fontWeight: '900', color: 'green'}}>Lesson 4 Part 3</IonTitle>
    <IonTitle style={{fontSize: '14px'}}>09-April-2023</IonTitle>
  </IonToolbar>
</IonHeader>

<IonContent fullscreen>
  <IonHeader collapse="condense">
    <IonToolbar>
      <IonTitle size="large"></IonTitle>
    </IonToolbar>
  </IonHeader>

  <div className="container">
    <h1 style={{fontSize: '24px', fontWeight: '700'}}>{Data.title} Pt 3</h1>
    <img style={{width: '100%'}} src={Img} alt="growingg" />
    <div>
      <p style={{fontWeight: '700', textDecoration:'underline'}}>Memory Verse</p>
      <p>{ Data.memory_verse}</p><br />
    </div>
    
    <IonCard style={{marginLeft:'0px',width: '100%'}} color="success">
     <IonCardHeader style={{display: 'flex', alignItems: 'center'}}>
       <IonCardTitle style={{fontSize: '15px', marginTop:'0px', fontWeight: '800'}}>Meaning</IonCardTitle>
     </IonCardHeader>

     <IonCardContent>
       <p style={{color: 'white', fontSize:'15px'}}>{Data.meaning}</p>
     </IonCardContent>
   </IonCard>

  <div>
    <h3 style={{background: 'black', color: 'white', padding: '10px'}}>DEPARTMENT AND AREA OF DIVINE SERVICE (CONTINUATION)</h3>
    <ol>
      <li>The Department of our System wellbeing</li>
      
      <p>- We come to service to service our SYSTEM WELLGBEING From head to the toe God begins to service it</p>
        <li>THE DEPARTMENT OF TOXIC EVAQUATION AND HEALTH REPLACEMENT</li>
        <p>We come to service for replacement every worn out nut part in you, the engineer of engineers, HE has all the spare part of our body when you come before him, just like the vehicle manufacturer that has spare parts of his entire vehicle.</p>
        <li>THE DEPARTMENT OF OUR SYSTEM REVIVAL</li>
        <p>We come to service for our SYSTEM REVIVAL.E.g. our faith, hope, love, zeal, from time to time.</p>
        <li>THE DEPARTMENT OF OUR SYSTEM RENEWAL</li>
        <p>We come to service for our SYSTEM RENEWAL. We come to service so that we can return to God our creator, saviour, and redeemer.</p>
        <li>THE DEPARTMENT OF OUR INTERNAL REGULATION: Pro 18:10.</li>
        <p>We come to service for the regulation of our system, Engineers, mechanics they will tell you certain things that can be regulated inside the system, because without Rom. 12:1 proper regulation, the thing will go wrong. There must be internal regulation for the system to work perfectly well. . When we come to service God regulates our home, marriages, children, household.etc</p>
        <li>THE DEPARTMENT OF REJUVINATION</li>
        <p>We've come to service for rejuvination, come back to life</p>
    </ol>
  </div>

</div>
</IonContent>
</IonPage>
);
};

export default Lesson4part3;
