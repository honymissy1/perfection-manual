import { IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
   IonCardHeader, IonCardTitle, IonCardContent, IonCard, IonButton, IonBackButton,
   useIonViewWillEnter, useIonViewWillLeave  } from '@ionic/react';

import '../components/ExploreContainer.css';
import Data from '../asset/data/lesson1.json';
import Img from '../asset/lesson1.jfif'


const Page = () => {
  useIonViewWillEnter(() => {
    document.addEventListener('backbutton', (e) => {
      e.preventDefault();
      if (window.history.length > 1) {
        window.history.back();
      }
    });
  });

  useIonViewWillLeave(() => {
    document.removeEventListener('backbutton', (e) => {});
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle style={{fontWeight: '900', color: 'green'}}>Lesson 1 Part 1</IonTitle>
          <IonTitle style={{fontSize: '14px'}}>1-January-2023</IonTitle>

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
          

        <ul>
          <li>The head is the topmost, foremost or leading part of the body.</li>
            <li> We are to grow until we become the head that God has made us to be.</li> 
            <li>It is also the principal operating part of the body. 
              When we were saved and born again, we started as children and 
              as children we are expected to grow according to the secrets of the ways of God,
               according to the measure of the stature of Christ in all wisdom, knowledge and
                understanding.</li>
                <li>As children of God, we cannot afford to grow anyhow, but to grow into the head that God has given us.
Jesus is our husband, Jesus is our head, we are the body of Christ attached to the Head, we are to grow into Christ,</li>
<li>The head God gave us is Christ, your spiritual leader or master so it is very important that we are careful and conscious
  about our head in order not to carry another head in our body, e.g. Satanic head or animal head, in this case 
  something is wrong, when a child of God that supposed to carry Christ and his leader's head is now carrying the head 
  of a beast
</li>
        </ul>

        <div>
          <h3 style={{background: 'black', color: 'white', padding: '10px'}}>Who is our head</h3>
          <ol>
            <li>Christ Jesus. <span style={{fontWeight: '600'}}>1Corin 11:3 Gen 1:26.</span> -Our head as a man is Christ.</li><br />
            <p>- The mantle the power and the authority are been held by the head. Impartation flows from the head to the body. As children of God our impartation should only be from Christ.</p>
            <p>- Both the head and body of Christ was crucified, both the head and body were buried. So, what ever happened to the head also happened to the body. So, we were crucified, died and was resurrected together with Him. Gal.2:20</p>
            <br />
            <li>Your spiritual leader or father: 2King2-1-3,12-13</li>
          </ol>
        </div>
          

      </div>
      </IonContent>
    </IonPage>
  );
};

export default Page;
