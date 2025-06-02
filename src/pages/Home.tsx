import React from 'react';
import './Home.css';
import { data } from './array';
import ExploreContainer from '../components/ExploreContainer';

export const Home: React.FC = () => {



  return (
    <>
    <h3>TABLE</h3>
    <div className='center'>

    <table className='row1'>
      <thead>
   <tr className='row1'>
        <th className='row1'>
          name
        </th>
        <th className='row1'>
          address
        </th>
        <th className='row1'>
          age
        </th>
      </tr>
      </thead>
      <tbody>
        
  { data.map((element, index)=>{
    console.log(element)
    
    return <tr key={index}>
  <td className='row1'>
    {element.name}
  </td>
  <td className='row1'>
    {element.address}
  </td>
  <td className={element.age===22?'blue-row':'row1'}>
    {element.age}
  </td>
</tr>
    
  })}
  </tbody>
  </table>
  </div>
  <ExploreContainer/>
  </>

  );
};

