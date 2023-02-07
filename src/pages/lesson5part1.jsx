import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,
    IonCardContent, IonCard, IonCardTitle, IonCardHeader, IonIcon, IonBackButton      
} from '@ionic/react';
import {albumsOutline} from  'ionicons/icons';
import { useParams } from 'react-router';
import '../components/ExploreContainer.css';
import Data from '../asset/data/lesson5.json';
import Img from '../asset/bread.webp'


const Lesson5part1 = () => {
const { name } = useParams();
return (
<IonPage>
<IonHeader>
  <IonToolbar>
  <IonButtons slot="start">
      <IonBackButton></IonBackButton>
    </IonButtons>
    <IonTitle style={{fontWeight: '900', color: 'green'}}>Lesson 5 Part 1</IonTitle>
    <IonTitle style={{fontSize: '14px'}}>14-May-2023</IonTitle>
  </IonToolbar>
</IonHeader>

<IonContent fullscreen>
  <IonHeader collapse="condense">
    <IonToolbar>
      <IonTitle size="large"></IonTitle>
    </IonToolbar>
  </IonHeader>

  <div className="container">
    <h1 style={{fontSize: '24px', fontWeight: '700'}}>{Data.title} Pt 1</h1>
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
       <IonCardTitle style={{fontSize: '15px', marginTop:'0px', fontWeight: '800'}}>Meaning</IonCardTitle>
     </IonCardHeader>

     <IonCardContent>
       <p style={{color: 'white', fontSize:'15px'}}>{Data.meaning}</p>
     </IonCardContent>
   </IonCard>

</div>

<IonCard color="danger">
          <IonCardHeader style={{display: 'flex', alignItems: 'center'}}>
            <IonIcon icon={albumsOutline} style={{fontSize: '20px', marginRight:'15px'}}></IonIcon>
            <IonCardTitle style={{fontSize: '20px', marginTop:'1px'}}>NOTE</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <p>Your bread has your name and God given number configured in the bread. God has dealt to every man a measure of faith and it is that faith that has been numbered and configured in the bread.</p>
            <p>David said oh Lord help me to number my days, because God has configured number in it and it will take only God to reveal the number configured in your days and bread.</p>
            <p>Even if your bread is stolen, it still has your name in it, the enemy may mutilate it and change the name but God knows that deep down the bread is stolen from you. </p>
            <p>The purpose of eating is to energise you. If you eat your bread; it is suppose to energise you. If somebody stole your bread, it means they are using the energy that came from your bread they stolen and eat added it to their own to fight you.
                  God is the Bread of life, God is the Rock, and if you want your building to stand you must build it on a rock. If the building of your life is not standing then the rock bread of your life is not standing.</p>
            </IonCardContent>
        </IonCard>

        <div>
    <h3 style={{background: 'black', color: 'white', padding: '10px'}}>THE CONSTITUENTS OF BREAD</h3>
    <ol>
      <li>The Word of God is bread. Jn.6:48-51</li>
      <li>The Spirit of God is the bread. Act2:17</li>
     <li>The life of God is the bread. Gal. 2:20</li>
    </ol>
  </div>
</IonContent>
</IonPage>
);
};

export default Lesson5part1;
