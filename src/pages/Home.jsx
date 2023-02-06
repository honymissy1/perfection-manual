import { IonButtons, IonContent, IonHeader,
    IonMenuButton, IonPage, IonTitle, IonToolbar,
  } from '@ionic/react';
 
  import '../components/ExploreContainer.css';
  import Data from '../asset/data/lesson1.json';
  import Img from '../asset/background.svg';
  import Img3 from '../asset/book.png';
  import Img4 from '../asset/papa3.jfif'
  
  
  const Home = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle style={{fontWeight: '900', color: 'green'}}>Sunday School Manual</IonTitle>
          </IonToolbar>
        </IonHeader>
  
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Sunday School</IonTitle>
            </IonToolbar>
          </IonHeader>
  
          <div className="container" style={{padding: '20px 0',background: 'white'}}>
       
           <div style={{border: '1px solid white',marginTop: '0',width: '100%', height: '200px', backgroundImage: `url(${Img})`, backgroundSize: 'cover'}}>
            <h1 style={{fontFamily: 'fantasy',fontWeight: '500', textAlign: 'center', color: 'white', fontSize: '30px'}}>Sunday School<br/>Manual</h1>
           </div>
        </div>
    
        <div style={{padding: '0px 15px'}}>
           <img src={Img3} alt="" style={{width: '70px', marginTop: '30px'}}/>
           <h2>2 Timothy 2:15</h2>
           <p>Study to shew thyself approved unto God, a workman that needeth not to be ashamed, 
            rightly dividing the word of truth.</p>
        </div>
        <img src={Img4} alt="papa"style={{width: '100%', marginTop: '30px'}} />
        </IonContent>
      </IonPage>
    );
  };
  
  export default Home;
  