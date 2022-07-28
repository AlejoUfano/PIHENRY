import React from 'react'
import loader from '../../assets/LOADING3.gif'
import loader2 from '../../assets/LOADING7.gif'
import NavBar from '../NavBar/NavBar.jsx'
import {LoadingContainer, LoadingIcon, LoadingBar} from '../Styles/Loading.style'

export default function Loading() {
  return (
    <div>
        <NavBar/>
        <LoadingContainer/>
        <LoadingIcon src={loader} alt='Loading'/>
        <LoadingBar src={loader2} alt='Loading'/>
    </div>
  )
}
