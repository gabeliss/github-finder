import React from 'react'
import { useContext } from 'react'
import AlertContext from './context/AlertContext'

function Alert() {

const {alert} = useContext(AlertContext)

  return (
    alert !== null && 
    (<div className='alert'>
        {alert.type === 'error' && (
            <div className='error-alert'>
                <span style={{color:'red', marginRight:10, fontSize:25}} >&#9888;</span>
                <strong>{alert.msg}</strong> 
            </div>
        )}
    </div>)
  )
}

export default Alert