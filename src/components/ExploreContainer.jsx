import { IonButton, IonCard } from '@ionic/react';
import './ExploreContainer.css';

const ExploreContainer = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto molestiae accusamus harum enim ducimus voluptatem hic repudiandae. Molestiae, minus earum, veniam nihil deleniti ullam perferendis doloremque fuga repudiandae expedita perspiciatis itaque assumenda
         non accusantium laborum ab. Veritatis, ipsum. Omnis aliquam quas praesentium expedita!
      </p>

      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum quasi officia consequuntur tempora exercitationem a, adipisci repellendus enim incidunt modi nostrum 
        amet nemo mollitia earum eaque omnis vel pariatur dicta, aliquam obcaecati.</p>

        <IonCard style={{padding: '15px'}}>
          <h3>CONCLUSION</h3>
          <p style={{fontSize: '12px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quo impedit. Aperiam.</p>
        </IonCard>

        <IonButton routerLink='/lesson1/part2' lines="none" routerDirection="forward" detail={false}>Next</IonButton>
    </div>
  );
};

export default ExploreContainer;
