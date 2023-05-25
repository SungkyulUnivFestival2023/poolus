import React from 'react'
import Person from './person.json';
import './about.css';

function Person0({id}) {
  return (
    <div className="pbox">
        {Person.map(person => (
            (person.id === id) && (
            <div key={person.id}>
                    {/* <img className="Pimg" src={person.image} alt="personimg" /> */}
                    <img className="Pimg" src="img/about/minjo.png" alt="personimg" />

                    <div className="Pinfo">
                        <span>{person.name} _ {person.role}</span>
                    </div>

                <span className="Pdepart">{person.department}</span>
                <span className="Pposi">{person.position}</span>
            </div>
        )
      ))}
    </div>
  )
}

export default Person0