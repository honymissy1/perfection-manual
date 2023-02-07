import { IonButtons,  IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonBackButton
 
} from '@ionic/react';
import { useParams } from 'react-router';
import Image from '../asset/lesson1.jfif';
import Data from '../asset/data/lesson1.json';

const Lesson1part3 = () => {

const { name } = useParams();

return (
<IonPage>
<IonHeader>
  <IonToolbar>
    <IonButtons slot="start">
      <IonMenuButton />
    </IonButtons>
    <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
    <IonTitle style={{fontWeight: '900', color: 'green'}}>Lesson 1 part 3</IonTitle>
    <IonTitle style={{fontSize: '14px'}}>15-January-2023</IonTitle>
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
       {/* ............................... */}

        </div>

  <div>
          <h3 style={{background: 'black', color: 'white', padding: '10px'}}>WHAT WILL HAPPEN TO THOSE WHO DO NOT TAKE CHRIST AS HEAD</h3>
          <ol>
            <li>It opens the door to the diseases of Egypt. Ex. 7:17-25</li><br />
            <li>It lead leads to sin and death, Rom. 6:23</li>
            <li>They will suffer God's judgement because the devil didn't create them. Heb.9:27</li>
            <li>They cannot fulfil God's purpose for their lives. Their original God-given glory will be covered. Col. 1:27</li>
          </ol>
        </div>

        <div>
          <h3 style={{background: 'black', color: 'white', padding: '10px'}}>BENEFITS OF TAKING CHRIST AS HEAD</h3>
          <ol>
            <li>He heals all your spiritual and physical diseases, Psalm 103:3</li><br />
    
          </ol>
        </div>
</IonContent>
</IonPage>
);
};

export default Lesson1part3;