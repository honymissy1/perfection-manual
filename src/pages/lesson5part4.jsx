import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,
    IonCardContent, IonCard, IonCardTitle, IonCardHeader, IonIcon , IonBackButton     
} from '@ionic/react';
import {albumsOutline} from  'ionicons/icons';
import { useParams } from 'react-router';
import '../components/ExploreContainer.css';
import Data from '../asset/data/lesson5.json';
import Img from '../asset/bread.webp'


const Lesson5part4 = () => {
const { name } = useParams();
return (
<IonPage>
<IonHeader>
  <IonToolbar>
  <IonButtons slot="start">
      <IonBackButton></IonBackButton>
    </IonButtons>
    <IonTitle style={{fontWeight: '900', color: 'green'}}>Lesson 5 Part 4</IonTitle>
    <IonTitle style={{fontSize: '14px'}}>04-June-2023</IonTitle>
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
    <h3 style={{background: 'black', color: 'white', padding: '10px'}}>SOME OF THE WAY EATERS GAIN ACCESS INTO PEOPLE'S BREAD (CONTINUATION)</h3>
    <ol>
      <li>Ignorance during ignorant adulthood, as an adult who do not have the principles of God. Isaiah 4:6</li>
       <li>Through marketing: During conscious direct or
indirect transfer market, Esau wanted food, and he transferred his birth right for a pot of porridge, transfer can be done by silent decrees of people. When they give you money or gifts they decree that the money 
you thought is gift that they are actually using it to buy your destiny, this is why you must be alert physically and spiritually so that you are aware of strategies of the enemy</li>
     <li>Self-destruction by eating your own bread, when you eat and waste your bread, by excessive sleep, 
laziness and procrastination. Pro 12.27</li>
    </ol>
  </div>

  <div>
    <h3 style={{background: 'black', color: 'white', padding: '10px'}}>HOW TO GET BACK YOUR BREAD</h3>
    <ol>
        <li>You must surrender yourself to Jesus Christ. Jn 3:16,36</li>
        <li>Whole heartedly give yourself to God and his service to become a bond servant, Gal 2:20 that means is no longer you that lives but Christ that lives in you. If Christ now lives in you then the grave cannot 
            hold you because the grave couldn't hold Christ</li>
    </ol>
  </div>
</IonContent>
</IonPage>
);
};

export default Lesson5part4;
