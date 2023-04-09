import { IonButtons, IonContent, IonHeader,
    IonMenuButton, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, 
    IonCardHeader, IonCardSubtitle, IonButton, IonLabel, IonModal, IonInput, IonItem,
   useIonToast, useIonAlert
  } from '@ionic/react';

 
  import '../components/ExploreContainer.css';
  import Data from '../asset/data/lesson1.json';
  import Img from '../asset/background.svg';
  import Img3 from '../asset/book.png';
  import Img4 from '../asset/papa3.jfif'
  import { useEffect, useState } from 'react';

  import { Storage } from '@ionic/storage';

  import { useContext } from 'react';
  import User from '../context/user';

  const Home = () => {
    // Local Storage
    const store = new Storage({   storeName: 'paid'  });
    const user = useContext(User);


    const [presentAlert] = useIonAlert();
    // Press Alert
    const alert = (message) =>{
      presentAlert({
        header: 'Alert',
        subHeader: 'Important message',
        message: message,
        buttons: ['OK'],
      })
    }

    const [presentToast] = useIonToast();

    const [number, setNumber] = useState(null);
    const [error, setError] = useState('');
    const [verified, setVerified] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() =>{
      const getStore = async () =>{
        const storage = await store.create();
        const getStore = await storage.get('paid');
        setVerified(getStore)
        console.log(getStore);
        user.setUserId(getStore);
        console.log(user);
      }

      getStore()
    }, [])

    const changed = () =>{
      setError('')
    }

    const verify = async () =>{
        setLoading(true);
        const internetCheck = setTimeout(() =>{
          setError('Connection Error: Check your internet and try again :(');
          setLoading(false)
        }, 7000)
        const fetcher = await fetch(`https://perfectionserver.vercel.app/verifyuser`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: number
        })

      });

      const result = await fetcher.json()
console.log(result);
      if(result.message === 'success'){
        user.setUserId();
        const storage = await store.create();
        const name = await storage.set('paid', true);

        console.log(name);
        setVerified(name);
        window.location.href = '/';

        const fetcher = await fetch(`https://perfectionserver.vercel.app/activate`, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            userId: number
          })
        })

        setLoading(false);
        clearTimeout(internetCheck)
      }else if(result.message === 'error'){
         setLoading(false);
         clearTimeout(internetCheck)
         alert(result.data)
      }else{
        setLoading(false);
        clearTimeout(internetCheck);
        alert(result.data)
      }
    }

    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle style={{fontWeight: '900', color: 'green'}}>Ministry Of Perfection</IonTitle>
          </IonToolbar>
        </IonHeader>
  
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Sunday School</IonTitle>
        
            </IonToolbar>
          </IonHeader>
  
           <div style={{backgroundRepeat: 'no-repeat',backgroundPosition: 'bottom center', border: '1px solid white', marginTop: '0px', width: '100%', height:'250px', backgroundImage: `url(${Img})`, backgroundSize: 'cover'}}>
             <h1 style={{marginTop: '20px',fontFamily: 'fantasy',fontWeight: '500', textAlign: 'center', color: 'white', fontSize: '30px'}}>January - June<br/>2023</h1>

           </div>

      {
        !verified && (

            <div>
                    <IonCard>
                  <IonCardHeader>
                  <IonCardSubtitle style={{fontWeight:'800'}}>Verify Phone Number</IonCardSubtitle>
                  </IonCardHeader>

                  <IonCardContent>
                  If you're seeing this it means your 
                            phone number is not verified yet, contact your branch vendor
                            to get your Id. If you have registered your can 
                    Click on the button below to verify Phone Number

                    <IonButton id="open-modal" expand="block">
                      Verify
                    </IonButton>
                  </IonCardContent>
                    </IonCard>

                    <IonModal
                      trigger="open-modal"
                      initialBreakpoint={0.5}
                      breakpoints={[0, 0.25, 0.5, 0.75]}
                      handleBehavior="cycle"
                    >
                      <IonContent className="ion-padding">
                        <div className="ion-margin-top" style={{marginBottom:"20px"}}>
                          <IonLabel>Enter your Phone Number to verify.</IonLabel>
                        </div>

                        <div>
                          <IonItem fill="outline">
                            <IonLabel position="floating">Phone Number</IonLabel>
                            <IonInput type="tel" value={number} onClick={changed} onIonChange={(e) => setNumber(e.target.value)}></IonInput>
                          </IonItem>

                          <IonButton size="large" onClick={verify}>{loading ? 'Loading...': 'Verify'}</IonButton>

                          <h1 style={{color: 'red'}}>{error}</h1>
                        </div>
                      </IonContent>
                    </IonModal>
            </div>
        ) 
      }
    
    {
      verified && (
        <div style={{padding: '0px 15px'}}>
           <img src={Img3} alt="" style={{width: '70px', marginTop: '30px'}}/>
           <h2>2 Timothy 2:15</h2>
           <p>Study to shew thyself approved unto God, a workman that needeth not to be ashamed, 
            rightly dividing the word of truth.</p>
        </div>
      )
    }

        <img src={Img4} alt="papa"style={{width: '100%', marginTop: '30px'}} />
        </IonContent>
      </IonPage>
    );
  };
  
  export default Home;
  