import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,
    IonCardContent, IonCard, IonCardTitle, IonCardHeader , IonBackButton      
} from '@ionic/react';
import { useParams } from 'react-router';
import '../components/ExploreContainer.css';
import Data from '../asset/data/lesson4.json';
import Img from '../asset/service.jpg'


const Lesson4part4 = () => {
const { name } = useParams();
return (
<IonPage>
<IonHeader>
  <IonToolbar>
  <IonButtons slot="start">
      <IonBackButton></IonBackButton>
    </IonButtons>
    <IonTitle style={{fontWeight: '900', color: 'green'}}>Lesson 4 Part 4</IonTitle>
    <IonTitle style={{fontSize: '14px'}}>16-April-2023</IonTitle>
  </IonToolbar>
</IonHeader>

<IonContent fullscreen>
  <IonHeader collapse="condense">
    <IonToolbar>
      <IonTitle size="large"></IonTitle>
    </IonToolbar>
  </IonHeader>

  <div className="container">
    <h1 style={{fontSize: '24px', fontWeight: '700'}}>{Data.title} Pt 4</h1>
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
    <h3 style={{background: 'black', color: 'white', padding: '10px'}}>THINGS TO CHECK WHEN YOU COME TO CHURCH SERVICE</h3>
    <ol>
      <li>WECOME TO SERVICE FOR FAITH RESTING: Jn.14:1</li>
      <p>We come to service for FAITH RESTING, may your faith not
be troubled, let your faith rest on Him in Jesus
name</p>
      <li>WE COME TO SERVICE TO CHECK OUR CHARACTER, OUR
MANNERS AND OUR FRUITS: Gal.5:22-2 3, Eph.5:8-9</li>
     <p>- We come to service to check to know whether we are still
walking in love, humility, faith, righteousness etc.</p>

<li>WE COME TO SERVICE TO CHECK OUR HOPE: Col 1-27</li>
<p>We come to service to check our lively hope of glory, when the enemy cut off your hope before, if there is no hope again, your success is dead. The moment you return back to God, he will give you hope, he will restore your hope. Jesus is the hope of glory.</p>
<li>WE COME TO SERVICE TO CHECK OUR FAITH Heb. 11:1</li>
<p>Faith has substance, the substance of God, the moment you come to God and faith come alive, miracles takes place. Faith cometh by hearing and hearing by the word of God Romans 10:17; Heb 11:6 </p>
       </ol>
  </div>

</div>
</IonContent>
</IonPage>
);
};

export default Lesson4part4;
