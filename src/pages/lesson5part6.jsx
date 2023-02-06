import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,
    IonCardContent, IonCard, IonCardTitle, IonCardHeader, IonIcon      
} from '@ionic/react';
import {albumsOutline} from  'ionicons/icons';
import { useParams } from 'react-router';
import '../components/ExploreContainer.css';
import Data from '../asset/data/lesson5.json';
import Img from '../asset/bread.webp'


const Lesson5part6 = () => {
const { name } = useParams();
return (
<IonPage>
<IonHeader>
  <IonToolbar>
    <IonButtons slot="start">
      <IonMenuButton />
    </IonButtons>
    <IonTitle style={{fontWeight: '900', color: 'green'}}>Lesson 5 Part 6</IonTitle>
    <IonTitle style={{fontSize: '14px'}}>18-June-2023</IonTitle>
  </IonToolbar>
</IonHeader>

<IonContent fullscreen>
  <IonHeader collapse="condense">
    <IonToolbar>
      <IonTitle size="large"></IonTitle>
    </IonToolbar>
  </IonHeader>

  <div className="container">
    <h1 style={{fontSize: '24px', fontWeight: '700'}}>{Data.title} Pt 6</h1>
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
    <h3 style={{background: 'black', color: 'white', padding: '10px'}}>BENEFITS OF POSSESSING YOUR BREAD (CONTINUATION)</h3>
    <ol>
        <li>knowledge. Proverbs 1:7</li>
        <li>Wisdom, knowledge and understanding-Ex.31:3</li>
        <li>Righteousness- 2Samuel 22:21</li>
        <li>Peace. John 14:27</li>
        <li>Creativity, with the bread you can create and multiply - Matthew 14:17-21</li>
    </ol>
  </div>

  <IonCard color="tertiary">
          <IonCardHeader style={{display: 'flex', alignItems: 'center'}}>
            <IonIcon icon={albumsOutline} style={{fontSize: '20px', marginRight:'15px'}}></IonIcon>
            <IonCardTitle style={{fontSize: '20px', marginTop:'1px'}}>Conclusion</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <p>The devil is like a roaring lion seeking for whom to devour, he has agents everywhere to eat the bread of the souls of men, because he has nothing of himself. This is why as believers we must be physically and spiritually alert 
to follow the principles of God and </p>
            </IonCardContent>
        </IonCard>
</IonContent>
</IonPage>
);
};

export default Lesson5part6;
