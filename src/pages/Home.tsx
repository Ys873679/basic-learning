import React from 'react';
import './Home.css';

import ExploreContainer from '../components/ExploreContainer';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonPage } from '@ionic/react';

export const Home: React.FC = () => {



  return (
<>
<IonPage>
  <IonContent>
   <IonCard>
      <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
      <IonCardHeader>
        <IonCardTitle>Card Title</IonCardTitle>
        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
    </IonCard>
  <ExploreContainer/>
  </IonContent>
</IonPage>
</>
  )
}
