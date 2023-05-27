import React from 'react'
import Person from './person.json';
import './about.css';

function Person0({id}) {
  return (
    <div className="pbox">
        {Person.map(person => (
            (person.id === id) && (
            <div key={person.id}>
                    <img className="Pimg" src={person.image} alt="personimg" />
                    {/* <img className="Pimg" src="img/about/minjo.png" alt="personimg" /> */}

                    <div className="Pinfo">
                        <img src={person.logo} alt="personimg"/>
                        <div className='name align-middle'>{person.name}</div>
                    </div>

                <div className="Pdepart">{person.department}</div>
                <div className="Pposi">{person.position}</div>
                <div className='Prole'>{person.role}</div>
            </div>
        )
      ))}
    </div>
  )
}

export default Person0