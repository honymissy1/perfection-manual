import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,
    IonCardContent, IonCard, IonCardTitle, IonCardHeader       
} from '@ionic/react';
import { useParams } from 'react-router';
import '../components/ExploreContainer.css';
import Data from '../asset/data/lesson4.json';
import Img from '../asset/service.jpg'


const Lesson4part6 = () => {
const { name } = useParams();
return (
<IonPage>
<IonHeader>
  <IonToolbar>
    <IonButtons slot="start">
      <IonMenuButton />
    </IonButtons>
    <IonTitle style={{fontWeight: '900', color: 'green'}}>Lesson 4 Part 6</IonTitle>
    <IonTitle style={{fontSize: '14px'}}>30-April-2023</IonTitle>
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
    
    <IonCard style={{marginLeft:'0px',width: '100%'}} color="success">
     <IonCardHeader style={{display: 'flex', alignItems: 'center'}}>
       <IonCardTitle style={{fontSize: '15px', marginTop:'0px', fontWeight: '800'}}>Meaning</IonCardTitle>
     </IonCardHeader>

     <IonCardContent>
       <p style={{color: 'white', fontSize:'15px'}}>{Data.meaning}</p>
     </IonCardContent>
   </IonCard>

  <div>
    <h3 style={{background: 'black', color: 'white', padding: '10px'}}>BENEFITS OF BEING SERVICED IN THE HOUSE OF GOD</h3>
    <ol>
        <li>IT ENGENDERS GROWTH: Ps. 1:3</li>
        <p>When we grow, we receive ability, we receive capacity. The more we come to service, the more ability you have,
the more capacity of enlargement you have to grow. </p>
        <li>YOU RECEIVE POWER: Luke 10:19</li>
        <p>- Power will be given to you; you grow in power</p>
        <li>YOU RECEIVE AUTHORITY: Luke 19:17</li>
        <p>Authority because you have been earmarked, it was not all disciples that Jesus gave authority to, he knows those that followed him before he ascended, and to those ones he gave authority to them, he sent their names to heaven and Holy Ghost was delivered to them, authority.</p>
        <li>YOU RECEIVE OBEDIENCE MAGNITUDE</li>
        <p>- The more you come to service, the more your obedience magnitude. The extent of the dimension of your obedience is growing, and the more you grow in obedience, the more God reinforces his blessings upon you.</p>
        <li>YOU GROW IN SUPPORT AND IN HELP</li>
        <p>You grow in help and support; before you will notice it you have grown from that little help and support that you give to a greater help and support you are now given.</p>

    </ol>
  </div>

</div>
</IonContent>
</IonPage>
);
};

export default Lesson4part6;
