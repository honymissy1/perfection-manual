import { IonButtons,IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,
    IonCardHeader, IonCardTitle, IonCardContent, IonCard, IonIcon
 
} from '@ionic/react';
import { useParams } from 'react-router';
import Image from '../asset/threshing.jpg';
import {albumsOutline} from  'ionicons/icons';
import Data from '../asset/data/lesson2.json';

const Lesson2part2 = () => {

const { name } = useParams();

return (
<IonPage>
<IonHeader>
  <IonToolbar>
    <IonButtons slot="start">
      <IonMenuButton />
    </IonButtons>
    <IonTitle style={{fontWeight: '900', color: 'green'}}>Lesson 2 part 2</IonTitle>
    <IonTitle style={{fontSize: '14px'}}>05-Febuary-2023</IonTitle>
  </IonToolbar>
</IonHeader>

<IonContent fullscreen>
  <IonHeader collapse="condense">
    <IonToolbar>
      <IonTitle size="large">{'page 3'}</IonTitle>
    </IonToolbar>
  </IonHeader>

  <div className='container'>
      <h1 style={{fontSize: '600'}}>{Data.title} Pt 2</h1>
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
          <h3 style={{background: 'black', color: 'white', padding: '10px'}}>WHY WE SHOULD THRESH (Continuation)</h3>
          <ol>
            <li>To process the nature of Christ in believers. 2Pet 1:4</li>
            <li>To make them ever ready for the kingdom of Heaven, Matt 5:3</li>
             <p>- It is the one who has been properly threshed that can fit into the kingdom of God and they are the ones that can carry out the assignment of God on earth.</p>
          </ol>
        </div>


        <div>
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
        </div>

 


</IonContent>
</IonPage>
);
};

export default Lesson2part2;