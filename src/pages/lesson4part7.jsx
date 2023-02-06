import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,
    IonCardContent, IonIcon, IonCard, IonCardTitle, IonCardHeader       
} from '@ionic/react';
import {albumsOutline} from  'ionicons/icons'
import { useParams } from 'react-router';
import '../components/ExploreContainer.css';
import Data from '../asset/data/lesson4.json';
import Img from '../asset/service.jpg'


const Lesson4part7 = () => {
const { name } = useParams();
return (
<IonPage>
<IonHeader>
  <IonToolbar>
    <IonButtons slot="start">
      <IonMenuButton />
    </IonButtons>
    <IonTitle style={{fontWeight: '900', color: 'green'}}>Lesson 4 Part 7</IonTitle>
    <IonTitle style={{fontSize: '14px'}}>07-May-2023</IonTitle>
  </IonToolbar>
</IonHeader>

<IonContent fullscreen>
  <IonHeader collapse="condense">
    <IonToolbar>
      <IonTitle size="large"></IonTitle>
    </IonToolbar>
  </IonHeader>

  <div className="container">
    <h1 style={{fontSize: '24px', fontWeight: '700'}}>{Data.title} Pt 7</h1>
    <img style={{width: '100%'}} src={Img} alt="growingg" />
    <div>
      <p style={{fontWeight: '700', textDecoration:'underline'}}>Memory Verse</p>
      <p>{ Data.memory_verse}</p><br />
    </div>
    
    <IonCard style={{marginLeft:'0px',width: '100%'}} color="success">
     <IonCardHeader style={{display: 'flex', alignItems: 'center'}}>
       <IonCardTitle style={{fontSize: '15px', marginTop:'0px', fontWeight: '800'}}>Meaning</IonCardTitle>
     </IonCardHeader>

     <IonCardContent>
       <p style={{color: 'white', fontSize:'15px'}}>{Data.meaning}</p>
     </IonCardContent>
   </IonCard>

  <div>
    <h3 style={{background: 'black', color: 'white', padding: '10px'}}>BENEFITS OF BEING SERVICED IN THE HOUSE OF GOD.(CONTINUATION)</h3>
    <ol>
        <li>WE DEVELOP OUTSTANDING SHOCK ABSOLVER</li>
        Are you aware that some people have a very small shock absolver, that they cannot entertain any trouble. Any trouble you throw at them, they are set on fire, when you come to service, you have a large capacity, and you now have a bigger shock absolver

        <li>YOU GROW IN THE DEPTH OF WISDOM</li>
        Your wisdom deepens, again your knowledge deepens, then, you also get deep great understanding.
        <li>WE CAN BE ABLE TO MAGNIFY THE LORD</li>
        When we come to service for servicing, to worship the Lord God almighty, one of the things we gain is, we can be able to magnify the Lord in what we do both in the spirit and in our body.
        <li>WE CAN BE ABLE TO WORSHIP THE LORD WITH OUR SEED</li>
       The seed here first is not money, Abraham in Genesis 15 told God, there was money, there was gold, you have given all these, but this is not the real seed, you have not given me a son from my own bowel, from my own belly.<br />
       God said I will surely give you a son, your seed, so Abraham asked for seed, and every true worshipper that follows Abraham, you cannot come to worship God without holding your seed, without your son, without your daughter.
        </ol>
  </div>

</div>

<IonCard color="tertiary">
          <IonCardHeader style={{display: 'flex', alignItems: 'center'}}>
            <IonIcon icon={albumsOutline} style={{fontSize: '20px', marginRight:'15px'}}></IonIcon>
            <IonCardTitle style={{fontSize: '20px', marginTop:'1px'}}>Conclusion</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <p>You should not down play or joke with going to God's house for fellowship, we attend fellowship not to help God but ourselves. When you want God to serve you in time of your need then be ready to serve him always so when you call upon him in the day of trouble he will be there to hear and deliver you.</p>
            </IonCardContent>
        </IonCard>
</IonContent>
</IonPage>
);
};

export default Lesson4part7;
