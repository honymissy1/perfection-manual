import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,
    IonCardHeader, IonCardTitle, IonCardContent, IonCard, IonIcon, IonBackButton } from '@ionic/react';

 import {albumsOutline} from  'ionicons/icons'
 import '../components/ExploreContainer.css';
 import Data from '../asset/data/lesson1.json';
 import Img from '../asset/lesson1.jfif'
 
 
 const Lesson1Part4 = () => {
   return (
     <IonPage>
       <IonHeader>
         <IonToolbar>
           <IonButtons slot="start">
             <IonMenuButton />
           </IonButtons>
           <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
           <IonTitle style={{fontWeight: '900', color: 'green'}}>Lesson 1 Part 4</IonTitle>
           <IonTitle style={{fontSize: '14px'}}>22-January-2023</IonTitle>
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
           
 
         <div>
           <h3 style={{background: 'black', color: 'white', padding: '10px'}}>BENEFITS OF TAKING CHRIST AS HEAD(Continuation)</h3>
           <ol>
<li>You receive a double portion of the anointing of the head, 2Kings 2-9</li>
<li>You no longer speak fear but deliverance and blessings. 2Tim.1:7.</li>
<li>God will fight your battles for you, Ex.14:14</li>
<li>Godplaces his angels over you to take charge of you and work for you. Ps.91:11-12.</li>
<li>When you ask of anything in His will, you shall receive, Jn.11:22</li>
            </ol>
         </div> 
       </div>

       <IonCard color="tertiary">
          <IonCardHeader style={{display: 'flex', alignItems: 'center'}}>
            <IonIcon icon={albumsOutline} style={{fontSize: '20px', marginRight:'15px'}}></IonIcon>
            <IonCardTitle style={{fontSize: '20px', marginTop:'1px'}}>Conclusion</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <p>As children of God, we are meant to grow. We are to continue with sincere milk of the word to grow into greater levels as children of God. But we have to be careful about the head we grow into, we have to continually ensure by the grace of God that Jesus remains our head and we are the body of Christ. Amen.</p>
          </IonCardContent>
        </IonCard>
       </IonContent>
     </IonPage>
   );
 };
 
 export default Lesson1Part4;
 