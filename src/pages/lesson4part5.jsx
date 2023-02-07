import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,
    IonCardContent, IonCard, IonCardTitle, IonCardHeader , IonBackButton      
} from '@ionic/react';
import { useParams } from 'react-router';
import '../components/ExploreContainer.css';
import Data from '../asset/data/lesson4.json';
import Img from '../asset/service.jpg'


const Lesson4part5 = () => {
const { name } = useParams();
return (
<IonPage>
<IonHeader>
  <IonToolbar>
  <IonButtons slot="start">
      <IonBackButton></IonBackButton>
    </IonButtons>
    <IonTitle style={{fontWeight: '900', color: 'green'}}>Lesson 4 Part 5</IonTitle>
    <IonTitle style={{fontSize: '14px'}}>23-April-2023</IonTitle>
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
    
    <IonCard style={{marginLeft:'0px',width: '100%'}} color="success">
     <IonCardHeader style={{display: 'flex', alignItems: 'center'}}>
       <IonCardTitle style={{fontSize: '15px', marginTop:'0px', fontWeight: '800'}}>Meaning</IonCardTitle>
     </IonCardHeader>

     <IonCardContent>
       <p style={{color: 'white', fontSize:'15px'}}>{Data.meaning}</p>
     </IonCardContent>
   </IonCard>

  <div>
    <h3 style={{background: 'black', color: 'white', padding: '10px'}}>THINGS TO CHECK WHEN YOU COME TO CHURCH SERVICE (Continuation)</h3>
    <ol>
      <li>WE COME TO SERVICE TO CHECK OUR RIGHTEOUSNESS</li>

      <li>WE COME TO SERVICE TO SERVICE OUR PEACE: Jn 14:27, 20:21</li>
      <p>- when we come to service to service our peace, all the fears will vanish and fly away. You will now have peace. 1Tim.1:2</p>
        <li>WE COME TO SERVICE TO RECEIVE THE JOY OF THE HOLY GHOST 1Thes.1:6</li>
        <p>We come to service to receive the joy of the Holy Ghost, your countenance and discouragement will change, you
will be looking radiant, hopeful, joy will bubble up, will come out of you because the Holy Ghost is in you.Romans 15:13</p>
            <li>WE COME TO SERVICE TO RESTORE OUR GENTLENESS 2Tim.2:24, 2Sam.22:36</li>
            <p>Gentleness is a position of goodness in God in a godly seed 1peter 2:18</p>
            <p>A just weight and balance yourself</p>
            <li>WE COME TO SERVICE TO RE-SHARPEN OUR
TEMPERANCE</li>
<p>Temperance is self-control, not too excessive in anything.
Excessiveness in doing certain things have destroyed a lot
of people, they are not temperate. Is.28:10</p>
<li>WE COME TO SERVICE TO RE-SHARPEN OUR ENDURANCE
2Tim.2:3,10</li>
<p>We come to service to re-sharpen our endurance,
Heb.6:15
<br/>
Through endurance we shall obtain the promise of God
upon our life..</p>

       </ol>
  </div>

</div>
</IonContent>
</IonPage>
);
};

export default Lesson4part5;
