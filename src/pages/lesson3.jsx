import { IonButtons,IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,
    IonCardHeader, IonCardTitle, IonCardContent, IonCard, IonIcon

} from '@ionic/react';
import { useParams } from 'react-router';
import Image from '../asset/wound.jpg';
import {albumsOutline, notificationsCircle} from  'ionicons/icons';
import Data from '../asset/data/lesson2.json';

const Lesson3 = () => {

return (
<IonPage>
<IonHeader>
<IonToolbar>
<IonButtons slot="start">
 <IonMenuButton />
</IonButtons>
<IonTitle style={{fontWeight: '900', color: 'green'}}>Lesson 3</IonTitle>
<IonTitle style={{fontSize: '14px'}}>12-March-2023</IonTitle>

</IonToolbar>
</IonHeader>

<IonContent fullscreen>
<IonHeader collapse="condense">
<IonToolbar>
 <IonTitle size="large"></IonTitle>
</IonToolbar>
</IonHeader>

<div className='container'>
 <h1 style={{fontSize: '600'}}>THOSE THAT LAY WOUND</h1>
 <img src={Image} alt="My text" style={{width:'100%'}}/>
 <div>
   <p style={{fontWeight: '700', textDecoration:'underline'}}>Memory Verse</p>
   <p>Should I lie against my right? my wound is incurable without transgression Job 34:6</p><br />
  </div> 
  <hr />
    
</div>



<IonCard color="tertiary">
    <IonCardHeader style={{display: 'flex', alignItems: 'center'}}>
    <IonIcon icon={albumsOutline} style={{fontSize: '20px', marginRight:'15px'}}></IonIcon>
    <IonCardTitle style={{fontSize: '20px', marginTop:'1px'}}>Meaning</IonCardTitle>
    </IonCardHeader>

    <IonCardContent>
    <p>Meaning: A wound is an injury inflicted on somebody spiritually or physically, it also means denying one of his right or inheritance.</p>
    </IonCardContent>
</IonCard>
          <div style={{padding: '0 10px', display: 'flex', alignItems:'center'}}>
              <p style={{fontWeight: '700', marginRight:'10px'}}>Main Text</p>
              <p style={{color: 'white', background: 'black', padding: '5px'}}>Obadiah 1:1-7</p>  
          </div>
 <IonCard color="warning">
    <IonCardHeader style={{display: 'flex', alignItems: 'center'}}>
    <IonIcon icon={notificationsCircle} style={{fontSize: '20px', marginRight:'15px'}}></IonIcon>
    <IonCardTitle style={{fontSize: '20px', marginTop:'1px'}}>NOTE</IonCardTitle>
    </IonCardHeader>

    <IonCardContent>
    <p>A wound putrefies; it removes life substance from the living the wound advances when you do not deal with it on time Proverbs 18:14</p>
    </IonCardContent>
</IonCard>

<div className='container'>
     <h3 style={{background: 'black', color: 'white', padding: '10px'}}>HOW THE ENEMY WOUNDS</h3>
     <p>The enemy looks at your connective point to God which is your spirit root; they first attack the spirit and wound the spirit, and make the spirit to be corrupt. If the spirit is wounded, no matter how you treat the body it will not get well, the first thing to do is to heal the spirit</p>
   </div>

   <div className='container'>
     <h3 style={{background: 'black', color: 'white', padding: '10px'}}>HOW THE SPIRIT IS WOUNDED</h3>
     <ol>
        <li>Through sin-In.5:14</li>
        <li>When you cover up iniquities and refused to confess</li>
        <p>Confession is key to freedom</p>

     </ol>
   </div>

   <div className='container'>
     <h3 style={{background: 'black', color: 'white', padding: '10px'}}>HOW TO HEAL THE SPIRIT</h3>
     <ol>
        <li>Through the new birth in Christ our Redeemer</li>
        <li>By praying for mercy-James 5:15</li>
        <li>By confessing your sins-James 5:16</li>
        <li>By seeking the anointing of God, by the much anointing the yoke is broken-James 5:14</li>
        <li>By praying for deliverance-James 5:14-16, Ps.44:4</li>
     </ol>
   </div>

   <IonCard color="success">
    <IonCardHeader style={{display: 'flex', alignItems: 'center'}}>
    <IonIcon icon={albumsOutline} style={{fontSize: '20px', marginRight:'15px'}}></IonIcon>
    <IonCardTitle style={{fontSize: '20px', marginTop:'1px'}}>CONCLUSION</IonCardTitle>
    </IonCardHeader>

    <IonCardContent>
    <p>A wound not treated on time can become worse and even spread as an infection to other parts of the body. Sin wounds the spirit and when the spirit is wounded it can spread into the soul and the body, and the man becomes corrupt. We must take our time to follow the principles of healing the spirit.</p>
    </IonCardContent>
</IonCard>



</IonContent>
</IonPage>
);
};

export default Lesson3;
