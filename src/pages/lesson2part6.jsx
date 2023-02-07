import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,
    IonCardHeader, IonCardTitle, IonCardContent, IonCard, IonIcon, IonBackButton } from '@ionic/react';

 import {albumsOutline} from  'ionicons/icons'
 import '../components/ExploreContainer.css';
 import Data from '../asset/data/lesson2.json';
 import Img from '../asset/threshing.jpg'
 
 
 const Lesson2Part6 = () => {
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
           <IonTitle style={{fontWeight: '900', color: 'green'}}>Lesson 2 Part6</IonTitle>
           <IonTitle style={{fontSize: '14px'}}>05-March-2023</IonTitle>
          
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
           <h3 style={{background: 'black', color: 'white', padding: '10px'}}>REWARDS OF BEING THRESHED</h3>
           <ol>
            <li>Defence: Isaiah.4:5</li>
            <p>-God said upon the glory He gave to us there shall be a defence.</p>
            <li>You become His vessel for His good work: 2 Timothy 2:20</li>
            <li>He gives you victory Psalm 91:7-8 </li>
            <li>God becomes your Shield: Ps 28:7</li>
            </ol>
         </div> 
       </div>

       <IonCard color="tertiary">
          <IonCardHeader style={{display: 'flex', alignItems: 'center'}}>
            <IonIcon icon={albumsOutline} style={{fontSize: '20px', marginRight:'15px'}}></IonIcon>
            <IonCardTitle style={{fontSize: '20px', marginTop:'1px'}}>Conclusion</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <p>The earth is gradually winding up to the coming of our Lord Jesus Christ, and when He comes He must meet us faithful, not tarnished or soiled. That is why we must take time to thresh ourselves and our loved ones of anything that might cause a blockade to our alliance with God. We must thresh ourselves on the threshing floor.</p>
            <br />
            <p>Our final assignment on earth here will be the assignment of threshing because the number of people that God had given to us in your family, church or society that are associated with us, is our duty to thresh them out by of truth, Threshing brings out the perfect will of God</p>
          </IonCardContent>
        </IonCard>
       </IonContent>
     </IonPage>
   );
 };
 
 export default Lesson2Part6;
 