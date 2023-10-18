import React from 'react'
import room from '../roomShifting'
import Input from './Input'

const RoomShiftingForm = (props) => {
  return (
    <>
         <div class="contact_us_2">
    <div class="responsive-container-block big-container">
      <div class="blueBG">
      </div>
      <div class="responsive-container-block container">
        <form class="form-box">
          <div class="container-block form-wrapper">
            <p class="text-blk contactus-head">
              {props.formTitle}
            </p>
            <p class="text-blk contactus-subhead">
              {props.service}
            </p>
            <h3>Current room address:</h3>
            <div class="responsive-container-block">
              {room.map(detail=>(
                <Input
                  key={detail.id}
                  inputHeading={detail.inputHeading}
                  placeholder={detail.placeholder}
                  name={detail.name}
                  type={detail.type}
                  pattern={detail.pattern}
                />
              ))}
              
            </div>
            <h3>New room address:</h3>
            <div class="responsive-container-block">
            {room.map(detail=>(
                <Input
                  key={detail.id}
                  inputHeading={detail.inputHeading}
                  placeholder={detail.placeholder}
                  name={detail.name}
                  type={detail.type}
                  pattern={detail.pattern}
                />
              ))}
              </div>
            
            <button class="submit-btn">
              {props.buttonName}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
   
    </>
  )
}
export default RoomShiftingForm