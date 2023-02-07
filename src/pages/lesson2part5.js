import { IonButtons,IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,
    IonCardHeader, IonCardTitle, IonCardContent, IonCard, IonIcon, IonBackButton

} from '@ionic/react';
import Image from '../asset/threshing.jpg';
import {albumsOutline} from  'ionicons/icons';
import Data from '../asset/data/lesson2.json';

const Lesson2part5 = () => {
return (
<IonPage>
<IonHeader>
<IonToolbar>
<IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
<IonTitle style={{fontWeight: '900', color: 'green'}}>Lesson 2 part 5</IonTitle>
<IonTitle style={{fontSize: '14px'}}>26-Febuary-2023</IonTitle>
</IonToolbar>
</IonHeader>

<IonContent fullscreen>
<IonHeader collapse="condense">
<IonToolbar>
 <IonTitle size="large"></IonTitle>
</IonToolbar>
</IonHeader>

<div className='container'>
 <h1 style={{fontSize: '600'}}>{Data.title} Pt 5</h1>
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
     <h3 style={{background: 'black', color: 'white', padding: '10px'}}>WAYS THE THRESHING FLOOR PURIFIES</h3>
     <ol>
     <p>There are different ways the threshing floor purifies</p>
     <li>Purification by affliction: Is 48:10-11</li>
     <p>Affliction is what God has allowed to be a threshing floor. When that affliction comes, you might be feeling some pain and discomfort but God has His reason for it to purify you</p>
     <li>Persecution: Matt 5:11-12</li>
     <p>Persecution is another thing that God has allowed as a threshing floor that will purify you</p>
     <li>Fiery trials: 1Peter 1:7</li>
     <p>-Trial is another thing God uses to thresh His people.</p>
     <li>Temptation James 1:12</li>
     <p>Temptation is a threshing floor that purifies</p>
      <li>Tribulation: Rev.7:13-17</li>

     </ol>
   </div>


</IonContent>
</IonPage>
);
};

export default Lesson2part5;