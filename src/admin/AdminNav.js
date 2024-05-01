import React, { useState } from 'react'
import './AdminNav.css'

function AdminNav(props) {
    const [ ulDisplay, setUlDisplay ] = useState('none')

    const changeUlDisplay = () => {
        if(ulDisplay == 'none'){
            setUlDisplay('block')
        }
        else if(ulDisplay == 'block'){
            setUlDisplay('none')
        }
    }

  return (
    <>
        <div className='admin-panel'>
            <div className='admin-panel-lists'>
                <ul>
                    <li><a className='side-text'><i class="fa-solid fa-table-cells"></i><a className='side-nav'>Dashboard</a></a></li>

                    <li><a className='side-text'><i class="fa-solid fa-scroll"></i><a className='side-nav'>Notice</a></a></li>

                    <li><a className='side-text'><i class="fa-solid fa-business-time"></i><a className='side-nav'>Seminars & Workshops</a></a></li>

                    <li><a className='side-text'><i class="fa-solid fa-user-group"></i><a className='side-nav'>Faculty Profile</a></a></li>
                    
                    <li><a className='side-text'><i class="fa-solid fa-table-list"></i><a className='side-nav'>Data-table</a></a></li>
                </ul>
            </div>
        </div>

        <div className='admin-panel-2'>
            <div className='admin-panel-lists-2'>
                <a onClick={() => changeUlDisplay()}><i class="fa-solid fa-bars"></i></a>

                <ul style={{ display: `${ulDisplay}`}}>
                    <li><a className='side-text'><i class="fa-solid fa-table-cells"></i>Dashboard</a></li>

                    <li><a className='side-text'><i class="fa-solid fa-scroll"></i>Notice</a></li>

                    <li><a className='side-text'><i class="fa-solid fa-business-time"></i>Seminars & Workshops</a></li>

                    <li><a className='side-text'><i class="fa-solid fa-user-group"></i>Faculty Profile</a></li>

                    <li><a className='side-text'><i class="fa-solid fa-table-list"></i>Data-table</a></li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default AdminNav