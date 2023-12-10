import React, { useState } from 'react'
import "./Accordian.css"

const Accordian = () => {
  
    const [activeIndex,setActiveIndex]= useState(null)
    
    const data =[
        {id:1,
            title:"I'm title 1",
            des:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam ex odit maiores nostrum dolores vel ratione laudantium soluta aperiam saepe voluptatibus, minus esse officiis facilis deleniti amet nulla neque illum."
        },
        {id:2,
            title:"I'm title 2",
            des:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam ex odit maiores nostrum dolores vel ratione laudantium soluta aperiam saepe voluptatibus, minus esse officiis facilis deleniti amet nulla neque illum."
        },
        {id:3,
            title:"I'm title 3",
            des:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam ex odit maiores nostrum dolores vel ratione laudantium soluta aperiam saepe voluptatibus, minus esse officiis facilis deleniti amet nulla neque illum."
        }
    ]

    const handleAccordian = (index, activeIndex) => {
      
      console.log(index,activeIndex);
     
        if(activeIndex === index) {
          setActiveIndex(null)
        }else{
          setActiveIndex(index)
        }
    };

  return (
    <div className="wrapper">
      {data.map((accordianData, index) => (
        <div
          className="container"
          onClick={() => {
            handleAccordian(index, activeIndex);
          }}
          key={accordianData.id}
        >
          <div className="accordian">
            <div>
              <h3> {accordianData.title}</h3>
            </div>
            <div className="btn"> {activeIndex === index ? "-" : "+"} </div>
          </div>
          <div className={activeIndex === index ? "show" : "hide"}>
            {accordianData.des}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordian