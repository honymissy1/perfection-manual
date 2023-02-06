import { IonButtons, IonIcon, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,
          IonCardHeader, IonCardTitle, IonCardContent, IonCard, IonCardSubtitle
} from '@ionic/react';
import { useParams } from 'react-router';
import Image from '../asset/lesson1.jfif';
import {albumsOutline} from  'ionicons/icons'

const Page2 = () => {

  const { name } = useParams();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle style={{fontWeight: '900', color: 'green'}}>Lesson 2 part 1</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{'page 2'}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className='container'>
            <h1 style={{fontSize: '600'}}>Running the Race</h1>
            <img src={Image} alt="My text" style={{width:'100%'}}/>
            <h3 style={{fontSize: '15px'}}>Memory Verse: <span style={{color: 'red'}}>Genesis 2 vs 4; Romans 4 vs 2</span></h3>
            <hr />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Libero asperiores, nihil sint et dolore eum, earum soluta iure quae itaque sequi velit delectus.
                 Ducimus reprehenderit qui nulla fugiat veniam quisquam illum id adipisci.</p>
        </div>


        <IonCard color="tertiary">
          <IonCardHeader style={{display: 'flex', alignItems: 'center'}}>
            <IonIcon icon={albumsOutline} style={{fontSize: '20px', marginRight:'15px'}}></IonIcon>
            <IonCardTitle style={{fontSize: '20px', marginTop:'1px'}}>Conclusion</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia excepturi voluptate nulla sunt eaque soluta reiciendis laboriosam deleniti suscipit ducimus in quisquam blanditiis 
              quasi veritatis, accusantium repellat corrupti enim distinctio quos nostrum.</p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Page2;