import { IonButtons,IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,
    IonCardHeader, IonCardTitle, IonCardContent, IonCard, IonIcon, IonBackButton
 
} from '@ionic/react';
import { useParams } from 'react-router';
import Image from '../asset/threshing.jpg';
import {albumsOutline} from  'ionicons/icons';
import Data from '../asset/data/lesson2.json';

const Lesson2part1 = () => {

const { name } = useParams();

return (
<IonPage>
<IonHeader>
  <IonToolbar>
    <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
    <IonTitle style={{fontWeight: '900', color: 'green'}}>Lesson 2 part 1</IonTitle>
    <IonTitle style={{fontSize: '14px'}}>29-January-2023</IonTitle>
    <IonTitle style={{fontSize: '14px'}}></IonTitle>
  </IonToolbar>
</IonHeader>

<IonContent fullscreen>
  <IonHeader collapse="condense">
    <IonToolbar>
      <IonTitle size="large">{'page 3'}</IonTitle>
    </IonToolbar>
  </IonHeader>

  <div className='container'>
      <h1 style={{fontSize: '600'}}>{Data.title} Pt 1</h1>
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

  <div>
    <ul>
        <li>Threshing floor is a processor, it is an extractor.</li>
        <li>Threshing floor is the invaluable treasure of accomplishing the final desire of God's pleasure</li>
        <li>Threshing floor is liken to an Altar that processes people and bring out the best of God nature in them.</li>
        <li>The altar is a threshing floor. We must have an altar in our houses, erect God Altar in our heart so that we can. become a threshing floor with which we can watch every activity in the house to monitor them and note when. something creeps in that is not good.</li>
        <li>So the thresher must be very alert to know when strange spirit or strange character enters the family. When this strange spirit enter into any member of the family without notice they are transfered into other members of the family.</li>
    </ul>
  </div>

  <div>
          <h3 style={{background: 'black', color: 'white', padding: '10px'}}>WHY WE SHOULD THRESH</h3>
          <ol>
            <li>To produce eligible believer. Titus.1:13</li>
            <li>To process the elect of God. Mk.13:26-27</li>
            <li>To produce the chosen of God. Matt 12:18</li>
           </ol>
        </div>

 


</IonContent>
</IonPage>
);
};

export default Lesson2part1;