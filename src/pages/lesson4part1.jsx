import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,
          IonCardContent, IonCard, IonCardTitle, IonCardHeader       
} from '@ionic/react';
import { useParams } from 'react-router';
import '../components/ExploreContainer.css';
import Data from '../asset/data/lesson4.json';
import Img from '../asset/service.jpg'


const Lesson4part1 = () => {
  const { name } = useParams();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle style={{fontWeight: '900', color: 'green'}}>Lesson 4 Part 1</IonTitle>
          <IonTitle style={{fontSize: '14px'}}>26-March-2023</IonTitle>
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
          
          <IonCard style={{marginLeft:'0px',width: '100%'}} color="success">
           <IonCardHeader style={{display: 'flex', alignItems: 'center'}}>
             <IonCardTitle style={{fontSize: '15px', marginTop:'0px', fontWeight: '800'}}>Meaning</IonCardTitle>
           </IonCardHeader>
 
           <IonCardContent>
             <p style={{color: 'white', fontSize:'15px'}}>{Data.meaning}</p>
           </IonCardContent>
         </IonCard>

         <p style={{fontWeight: '700', textDecoration:'underline'}}>Main Text</p>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '5px'}}>
              <p style={{ fontWeight: 'bolder'}}>{Data.main_text}</p>  
          </div>
        

        <div>
          <h3 style={{background: 'black', color: 'white', padding: '10px'}}>DEPARTMENT AND AREA OF DIVINE SERVICE</h3>
          <ol>
            <li>The Department of Hearing (Sound). In 10:27.</li><br />
            
            <p>- Do you hear or know the voice of God, if not you
 can't truly follow him, because there are 
 different voices in the world. Only one is 
 the voice of God. Eg. the voice of men, flesh,
  world, lust, envy, jealousy etc. all these are the voice of the devil</p>
          
          <li>The Department of Seeing (Sight). 2King2:10, Matt.16:17</li>
          <p>-Apostle Peter was able to see with his Spiritual eyes who Jesus really was not just the son of marry and joseph When you come to service seeing is very important. A man is meant to see majorly two areas of life, one physical and the spiritual. The spiritual is the most powerful, because in life we wrestle against spiritual wickedness in high places. You cannot see them with the physical eyes. Eph.6:12</p>
          <li>Department of the Tongue (Speech), James 35-13, Matt 12:37</li>
          <p>- We come to service to service our tongue. When you begin to hear the word of God you will know if you have been using your tongue well or not</p>
          <p>- don't use your own tongue to set your own house, destiny, children, business on negative fire</p>
        
          </ol>
        </div>
          
        <div>
          <h3 style={{fontSize: '15px',background: 'black', color: 'white', padding: '10px'}}>THOSE WHO DO NOT ALLOW CHRIST TO BE THEIR HEAD</h3>
          <ol>
            <li>Those who do not have Christ as their head willautomatically carry another creature as their head andthey become a member of that spirit. Rom. 6:16</li> 
            <li>Those who do not allow Christ to be their head will allow sin to take over them and then become slaves to sin. Jn.8:34</li>
            <li>They have no control of their body, heart and mind to do good but evil; they do evil things they do not like because a wrong head is in control. Rom.6:16</li>
            <li>They run at loss. Act.27:21-22</li>
          </ol>
        </div>
{/* 
        <IonCard style={{padding: '15px'}}>
          <h3>Conclusion</h3>
          <p style={{fontSize: '12px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quo impedit. Aperiam.</p>
        </IonCard> */}

      </div>
      </IonContent>
    </IonPage>
  );
};

export default Lesson4part1;
