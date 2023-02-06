import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,
    IonCardContent, IonCard, IonCardTitle, IonCardHeader       
} from '@ionic/react';
 
import '../components/ExploreContainer.css';
import Data from '../asset/data/lesson4.json';
import Img from '../asset/service.jpg'


const Lesson4part2 = () => {

return (
<IonPage>
<IonHeader>
  <IonToolbar>
    <IonButtons slot="start">
      <IonMenuButton />
    </IonButtons>
    <IonTitle style={{fontWeight: '900', color: 'green'}}>Lesson 4 Part 2</IonTitle>
    <IonTitle style={{fontSize: '14px'}}>02-April-2023</IonTitle>
  </IonToolbar>
</IonHeader>

<IonContent fullscreen>
  <IonHeader collapse="condense">
    <IonToolbar>
      <IonTitle size="large"></IonTitle>
    </IonToolbar>
  </IonHeader>

  <div className="container">
    <h1 style={{fontSize: '24px', fontWeight: '700'}}>{Data.title} Pt 2</h1>
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
      <li>Department of the Heart. Pro 23.26</li>
      
      <p>- Why do we go to service, we come to service to service our hearts. Pro. 4:23</p>
    
    <li>The Department of Seeing (Sight). 2King2:10, Matt.16:17</li>
    <p>-Apostle Peter was able to see with his Spiritual eyes who Jesus really was not just the son of marry and joseph When you come to service seeing is very important. A man is meant to see majorly two areas of life, one physical and the spiritual. The spiritual is the most powerful, because in life we wrestle against spiritual wickedness in high places. You cannot see them with the physical eyes. Eph.6:12</p>
    <li>Department of the Mind. Timothy 17</li>
    <p>-We come to service to service our mind, 
        we come to service to take up the mind of Christ. 1 Corin.2:161</p>
     <li>The Department of our Feeling. Heb.4:15</li>
     <p>We go to service to service our feeling, you can feel. If your eyes is covered not to see a burning fire, as your body goes toward that direction, you will begin to feel the fire, the closer or proximity you get to the fire, the higher and hotter the heat and the feeling becomes
     Our feeling for lost and dying soul
     </p>
     <li>The Department of our Health. Jer.30:17</li>
     <p>We come to service to service our HEALTH. When you come to service, the angel of God, the power of God, if you were sick, they will begin to service your system, your health, healing will begin to take place</p>
     <li>The Department of Spiritual Soundness. Act 3:16</li>

    </ol>
  </div>

</div>
</IonContent>
</IonPage>
);
};

export default Lesson4part2;
