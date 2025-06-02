import { IonContent, IonPage } from '@ionic/react';
import React from 'react'

const JsBasic:React.FC = () => {
  const abc =20;

  const bac = abc;
   console.log("abc value is :",abc);
   console.log("abc value is: ",bac);
   if(abc===20){
    console.log("correct")
   }
   else{
    console.log("incorrect")
   }
   

  return (
    <IonPage>
      <IonContent>
         <div> abc:{abc} </div>
         {bac===abc&&(
          <div>
            bac:{bac===20?'hi':'by'}
          </div>
         )}

      </IonContent>
      

    </IonPage>
   
    
   
  )
};

export default JsBasic;
