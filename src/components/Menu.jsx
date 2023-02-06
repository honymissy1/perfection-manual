import {
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonNote,
  IonAccordion, 
  IonAccordionGroup,
  IonMenuToggle

} from '@ionic/react';
import Image from '../asset/download.png'

import { useLocation } from 'react-router-dom';
import {  mailOutline, mailSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';

const Menu = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
          <div style={{margin: '0px auto',width: '100px', height: 'auto'}}>
            <img style={{width: '100%'}} src={Image} alt="ministry"/>
          </div>
          <IonListHeader style={{textAlign: 'center',color: 'green', fontWeight: '800', fontSize: '25px'}}>Sunday School Manual</IonListHeader>
          <IonNote style={{display: 'block', textAlign: 'center', background: 'green', color: 'white', padding: '14px'}}>Ministry of Perfection Int/Inc</IonNote>
        <IonList id="inbox-list">

            <IonAccordionGroup>
              <IonAccordion value="first">
                <IonItem slot="header" color="light"> 
                  <IonLabel style={{fontWeight: '700'}}>Grow unto the head</IonLabel>

                </IonItem>
                <div className="" slot="content">
                 <IonMenuToggle autoHide={false}>
                   <IonItem routerLink='/lesson1/part1' routerDirection="forward" lines="none" detail={false}>Grow unto the head pt 1</IonItem> 
                 </IonMenuToggle>
                </div>

                <div className="" slot="content">
                  <IonMenuToggle autoHide={false}>
                    <IonItem routerLink='/lesson1/part2' lines="none" routerDirection="forward" detail={false}>Grow unto the head pt 2</IonItem> 
                  </IonMenuToggle>  
                </div>

                <div className="" slot="content" >
                  <IonMenuToggle autoHide={false}>
                    <IonItem routerLink='/lesson1/part3'>Grow unto the head pt 3</IonItem> 
                  </IonMenuToggle>
                </div>

                <div className="" slot="content" >
                  <IonMenuToggle autoHide={false}>
                    <IonItem routerLink='/lesson1/part4'>Grow unto the head pt 4</IonItem> 
                  </IonMenuToggle>
                </div>

              </IonAccordion>

              {/* ...................................................... */}

              <IonAccordion value="second">
                <IonItem slot="header" color="light">
                  <IonLabel style={{fontWeight: '700'}}>The Threshing Floor</IonLabel>
                </IonItem>

                <div className="" slot="content" >
                  <IonMenuToggle autoHide={false}>
                    <IonItem routerLink='/lesson2/part1'>The Threshing Floor pt1</IonItem> 
                  </IonMenuToggle>
                </div>

                <div className="" slot="content" >
                  <IonMenuToggle autoHide={false}>
                    <IonItem routerLink='/lesson2/part2'>The Threshing Floor pt2</IonItem> 
                  </IonMenuToggle>
                </div>

                <div className="" slot="content" >
                  <IonMenuToggle autoHide={false}>
                    <IonItem routerLink='/lesson2/part3'>The Threshing Floor pt3</IonItem> 
                  </IonMenuToggle>
                </div>

                <div className="" slot="content" >
                  <IonMenuToggle autoHide={false}>
                    <IonItem routerLink='/lesson2/part4'>The Threshing Floor pt4</IonItem> 
                  </IonMenuToggle>
                </div>

                <div className="" slot="content" >
                  <IonMenuToggle autoHide={false}>
                    <IonItem routerLink='/lesson2/part5'>The Threshing Floor pt5</IonItem> 
                  </IonMenuToggle>
                </div>

                <div className="" slot="content" >
                  <IonMenuToggle autoHide={false}>
                    <IonItem routerLink='/lesson2/part6'>The Threshing Floor pt6</IonItem> 
                  </IonMenuToggle>
                </div>

              </IonAccordion>


              {/* ........................................................... */}
              <IonAccordion value="third">
                <IonItem slot="header" color="light">
                  <IonLabel>Those that lay wound</IonLabel>
                </IonItem>
                <div className="" slot="content" >
                  <IonMenuToggle autoHide={false}>
                    <IonItem routerLink='/lesson3'>Those that lay wound</IonItem> 
                  </IonMenuToggle>
                </div>

              </IonAccordion>

               <IonAccordion value="fifth">
                <IonItem slot="header" color="light">
                  <IonLabel style={{fontWeight: '700'}}>Going to service for servicing</IonLabel>
                </IonItem>
                <div className="" slot="content" >
                  <IonMenuToggle autoHide={false}>
                    <IonItem routerLink='/lesson4/part1'>Going to service for servicing pt1</IonItem> 
                  </IonMenuToggle>
                </div>

                <div className="" slot="content" >
                  <IonMenuToggle autoHide={false}>
                    <IonItem routerLink='/lesson4/part2'>Going to service for servicing pt2</IonItem> 
                  </IonMenuToggle>
                </div>

                <div className="" slot="content" >
                  <IonMenuToggle autoHide={false}>
                    <IonItem routerLink='/lesson4/part3'>Going to service for servicing pt3</IonItem> 
                  </IonMenuToggle>
                </div>

                <div className="" slot="content" >
                  <IonMenuToggle autoHide={false}>
                    <IonItem routerLink='/lesson4/part4'>Going to service for servicing pt4</IonItem> 
                  </IonMenuToggle>
                </div>

                <div className="" slot="content" >
                  <IonMenuToggle autoHide={false}>
                    <IonItem routerLink='/lesson4/part5'>Going to service for servicing pt5</IonItem> 
                  </IonMenuToggle>
                </div>

                <div className="" slot="content" >
                  <IonMenuToggle autoHide={false}>
                    <IonItem routerLink='/lesson4/part6'>Going to service for servicing pt6</IonItem> 
                  </IonMenuToggle>
                </div>

                <div className="" slot="content" >
                  <IonMenuToggle autoHide={false}>
                    <IonItem routerLink='/lesson4/part7'>Going to service for servicing pt7</IonItem> 
                  </IonMenuToggle>
                </div>
              </IonAccordion>

              <IonAccordion value="fourth">
                <IonItem slot="header" color="light" >
                  <IonLabel style={{fontWeight: '700'}}>They that eat thy bread</IonLabel>
                </IonItem>
                <div className="" slot="content" >
                  <IonMenuToggle autoHide={false}>
                    <IonItem routerLink='/lesson5/part1'>They that eat thy bread pt1</IonItem> 
                  </IonMenuToggle>
                </div>

                <div className="" slot="content" >
                  <IonMenuToggle autoHide={false}>
                    <IonItem routerLink='/lesson5/part2'>They that eat thy bread pt2</IonItem> 
                  </IonMenuToggle>
                </div>

                <div className="" slot="content" >
                  <IonMenuToggle autoHide={false}>
                    <IonItem routerLink='/lesson5/part3'>They that eat thy bread pt3</IonItem> 
                  </IonMenuToggle>
                </div>

                <div className="" slot="content" >
                  <IonMenuToggle autoHide={false}>
                    <IonItem routerLink='/lesson5/part4'>They that eat thy bread pt4</IonItem> 
                  </IonMenuToggle>
                </div>

                <div className="" slot="content" >
                  <IonMenuToggle autoHide={false}>
                    <IonItem routerLink='/lesson5/part5'>They that eat thy bread pt5</IonItem> 
                  </IonMenuToggle>
                </div>

                <div className="" slot="content" >
                  <IonMenuToggle autoHide={false}>
                    <IonItem routerLink='/lesson5/part6'>They that eat thy bread pt6</IonItem> 
                  </IonMenuToggle>
                </div>
              </IonAccordion> 

            </IonAccordionGroup>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
