import React from 'react';
import './List.css'

const List = (props) =>{
    const {list} = props;
  let total = 0;
  let actorName = [];
  for(const card of list){
    total = total + card.salary;
    actorName = [...actorName, card.name];
  } 
    return(
        <div>
             <h2>Numbers of Actor: {props.list.length}</h2>
             <h3>Total Cost: ${total}</h3>
             {actorName.map((actorName)=>{
           return(
               <div>
               <h3> { actorName }  </h3>
               </div>
           );
       })}
             
        </div>
    )
}

export default List;