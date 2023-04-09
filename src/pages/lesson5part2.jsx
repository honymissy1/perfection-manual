import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,
    IonCardContent, IonCard, IonCardTitle, IonCardHeader, IonIcon, IonBackButton      
} from '@ionic/react';
import {albumsOutline} from  'ionicons/icons';
import { useParams } from 'react-router';
import '../components/ExploreContainer.css';
import Data from '../asset/data/lesson5.json';
import Img from '../asset/bread.webp'


const Lesson5part2 = () => {
const { name } = useParams();
return (
<IonPage>
<IonHeader>
  <IonToolbar>
  <IonButtons slot="start">
      <IonBackButton></IonBackButton>
    </IonButtons>
    <IonTitle style={{fontWeight: '900', color: 'green'}}>Lesson 5 Part 2</IonTitle>
    <IonTitle style={{fontSize: '14px'}}>21-May-2023</IonTitle>
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
    <h3 style={{background: 'black', color: 'white', padding: '10px'}}>THE CONSTITUENTS OF BREAD (CONTINUATION)</h3>
    <ol>
      <li>The power of God is the bread. <b>Luke 10:19</b></li>
      <li>Salvation is the bread. <b>Luke 19:9</b></li>
     <li>Love is the bread. <b>John 3:16; 1John3:1,16</b> </li>
     <li>The hope of God is the bread <b>Col 1:27</b> </li>
     <li>Faith is the bread. <b>1Thess.3:6</b></li>
    </ol>
  </div>
</IonContent>
</IonPage>
);
};

export default Lesson5part2;
