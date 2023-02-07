import { IonButtons, IonContent, IonHeader,
   IonMenuButton, IonPage, IonTitle, IonToolbar,
   IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonBackButton
 } from '@ionic/react';

 import '../components/ExploreContainer.css';
 import Data from '../asset/data/lesson1.json';
 import Img from '../asset/lesson1.jfif'
 
 
 const Lesson1part2 = () => {
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
           <IonTitle style={{fontWeight: '900', color: 'green'}}>Lesson 1 Part 2</IonTitle>
           <IonTitle style={{fontSize: '14px'}}>8-January-2023</IonTitle>
         </IonToolbar>
       </IonHeader>
 
       <IonContent fullscreen>
         <IonHeader collapse="condense">
           <IonToolbar>
             <IonTitle size="large"></IonTitle>
           </IonToolbar>
         </IonHeader>
 
         <div className="container">
           <h1 style={{fontSize: '24px', fontWeight: '700'}}>{Data.title} Pt 2</h1>
           <img style={{width: '100%'}} src={Img} alt="growingg" />
           <div>
             <p style={{fontWeight: '700', textDecoration:'underline'}}>Memory Verse</p>
             <p>{ Data.memory_verse}</p><br />
           </div>
           
           
           {/* <p style={{fontWeight: '700', textDecoration:'underline'}}>Main Text</p>
           <div style={{display: 'flex', flexWrap: 'wrap', gap: '5px'}}>
           {
             Data.main_text.map((ele, index) =>(
                 <p style={{ fontWeight: 'bolder'}} key={index}>*{ele}</p>
                 ))
               }
           </div> */}
 
           <IonCard style={{marginLeft:'0px',width: '100%'}} color="success">
           <IonCardHeader style={{display: 'flex', alignItems: 'center'}}>
             <IonCardTitle style={{fontSize: '15px', marginTop:'0px', fontWeight: '800'}}>Meaning</IonCardTitle>
           </IonCardHeader>
 
           <IonCardContent>
             <p style={{color: 'white', fontSize:'15px'}}>{Data.meaning}</p>
           </IonCardContent>
         </IonCard>
           
 
         {/* <ul>
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
         </ul> */}
 
         <div>
           <h3 style={{background: 'black', color: 'white', padding: '10px'}}>Who is our head (cont)</h3>
           <ol>
             <li>Our spiritualmaster or mentor in Christ. 1Corin.4:15</li><br />
             <li>Your master in the flesh. Eph 6:5</li>

             <p>- This fleshly master cannot take the place of your spiritual leader or master. Act.27:9-25.</p>
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

 
       </div>
       </IonContent>
     </IonPage>
   );
 };
 
 export default Lesson1part2;
 