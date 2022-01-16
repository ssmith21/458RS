import React from 'react'
import { FaTimes } from 'react-icons/fa'
import Button from './Button'

const Resource = ({ resource }) => {
    return (
        <div className='resource'>
            <h2>
                {resource.name}
                <FaTimes style={deleteIconStyle}/>
            </h2>
            
            <div className='resourceType'> 
                <h3> Resource Type : {resource.type} </h3>
                {
                    resource.type.toLowerCase()==='room' 
                    ? <></>
                    : resource.equipments.map((item,index) => (
                        <p key={item}>{index} : {item}</p>
                    ))
                }
            <hr></hr>
            </div>
            
            {
                resource.maxCapacity===-1 
                ? <p>No Maximum capacity</p> 
                : <p>Maximum capacity : {resource.maxCapacity}</p>
            }
            <hr></hr>

            {
                resource.maxDuration===-1
                ? <p>No maximum duration</p>
                : <p>Maximum duration: {resource.maxDuration} minutes ({resource.maxDuration/60} hours)</p>
            }
            
            {
                resource.bufferTime===-1
                ? <p>No buffer time set</p>
                : <p>Buffer time: {resource.bufferTime} minutes ({resource.bufferTime/60} hours)</p>
            }
            <hr></hr>

            {
                statusOutputIsHidden(resource.status)
                ? <div><p>Resource is hidden to users
                    <Button 
                    text='change user exceptions'  
                    color='grey'
                    />
                </p><hr></hr></div>
                : <></>
            }

            {
                resource.cancelPrior===-1
                ? <p>No time limit for cancellation</p>
                : <p>Prior cancellation time: {resource.cancelTime} minutes ({resource.cancelTime/60} hours)</p>
            }
            <hr></hr>

            {
                approvalIsException(resource.approval)
                ? <div>
                    List of user whose approvial is required:
                    {resource.approvalUsers.map((item)=>(
                        <p key={item}>{item}</p>
                    ))}
                    <Button 
                    text='Select users'  
                    color='grey'
                    />
                </div>
                : <div>{resource.approval==='everyone' ? 'Requires approval from everyone' : 'Requires no ones approval'}</div>
            }
            <hr></hr>

        </div>
    )
}

function statusOutputIsHidden (st) {
    return (st==='hidden')
}

function approvalIsException(a) {
    return (a==='exceptions')
}

// function showApproval(a) {
//     if(a==='everyone'){
//         <p>Requires approval from everyone</p>
//     }
//     else if(a==='noone'){
//         <p>Requires approval from no one</p>
//     }
//     else if(a==='exception'){
//         <p>Select users required for approval</p>
//     }else{
//         <p>Should not get here</p>
//     }
// }


const deleteIconStyle = {
    color: 'red',
    cursor: 'pointer'
}

export default Resource
