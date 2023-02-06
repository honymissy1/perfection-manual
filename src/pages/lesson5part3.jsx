import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,
    IonCardContent, IonCard, IonCardTitle, IonCardHeader, IonIcon      
} from '@ionic/react';
import {albumsOutline} from  'ionicons/icons';
import { useParams } from 'react-router';
import '../components/ExploreContainer.css';
import Data from '../asset/data/lesson5.json';
import Img from '../asset/bread.webp'


const Lesson5part3 = () => {
const { name } = useParams();
return (
<IonPage>
<IonHeader>
  <IonToolbar>
    <IonButtons slot="start">
      <IonMenuButton />
    </IonButtons>
    <IonTitle style={{fontWeight: '900', color: 'green'}}>Lesson 5 Part 3</IonTitle>
    <IonTitle style={{fontSize: '14px'}}>28-May-2023</IonTitle>
  </IonToolbar>
</IonHeader>

<IonContent fullscreen>
  <IonHeader collapse="condense">
    <IonToolbar>
      <IonTitle size="large"></IonTitle>
    </IonToolbar>
  </IonHeader>

  <div className="container">
    <h1 style={{fontSize: '24px', fontWeight: '700'}}>{Data.title} Pt 3</h1>
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
      <li>The world is a product of the bread, which was created by the Bread, the Word of God. <b>Hebrews 11:3</b></li>
      Before you go into the world you must first go into the Word, never be deceived, truth cannot come from the world, truth emanates from the word of God. <b>John 14:6</b> So if you
       have the word of God you can make a world for yourself.
     
    </ol>
  </div>

  <div>
    <h3 style={{background: 'black', color: 'white', padding: '10px'}}>HOW EATERS OF YOUR BREAD GET ACCESS TO YOUR BREAD</h3>
    <ol>
      <p>There are many people who have been sent to eat the bread of believers and they gain access when we allow them to come into our loins, womb, bosom, heart, bowel and mind as lodgement of bread seed. Any seed lodged in the loins is entitled to what the DNA constitutes. 
         Anything you believe goes automatically into your loins. These eaters have access into your loins when you commit sin because sin opens the door for the eaters of bread to enter. <b>Genesis 17:1</b> 
         </p>
    </ol>
  </div>

  <div>
    <h3 style={{background: 'black', color: 'white', padding: '10px'}}>SOME OF THE WAY EATERS GAIN ACCESS INTO PEOPLE'S BREAD</h3>
    <ol>
      <li>Progenitors-Romans 5:12</li>
      <p>- they came in when we were not even born, some people's bread was eaten long time ago, and for some it was even before they were born. through their progenitors</p>
      <li>In the womb</li>
      <p>Some came in when we were in the womb, when and where our parents went to and entered into covenant knowingly or unknowingly</p>
      <li>As a child</li>
      <p>It also came when we were children, when we believed everything without a check, we didn't have the requisite knowledge to reject some things, we even received a wrong name without knowing the implication, as children we may have gone to places when we were corrupted. That is why parents have a lot of work to do, to correct their children, not just with the physical rod but also with the rod of the word of God. That is why you have to know God well so that when you speak 
         you speak with the authority of God</p>
    </ol>
  </div>
</IonContent>
</IonPage>
);
};

export default Lesson5part3;
