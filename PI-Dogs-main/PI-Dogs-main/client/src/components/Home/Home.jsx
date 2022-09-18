import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDogs, getDogByName, nameAsc, setSource, nameDesc, weightAsc, weightDesc, filterDogsByTemps, getTemperaments, filterDogsByBreed } from '../../redux/actions/actions.js'
import { Card } from '../Card/Card.jsx'
import Loading from '../Loading/Loading.jsx';
import NavBar from '../NavBar/NavBar.jsx'
import { BsFilterRight } from 'react-icons/bs';
import Dropdown from '../Dropdown/Dropdown.jsx'
import { Pagination, HomeBody, PaginationButton, Form, Header, GlobalContainer, Icon, SearchBar, FilterComponent, CreateDog, CreateText, OptionsContainer, GlobalHomeContainer, HomeCardsContainer } from '../Styles/Home.style.js'

import ErrorPopUp from '../ErrorPopUp/ErrorPopUp.jsx';

let Home = ({getDogs, getDogByName, setSource, nameAsc, nameDesc, weightAsc, weightDesc, getTemperaments, dogs, filterDogsByBreed, filteredDogs, filterDogsByTemps, temperaments}) => {
    let [dog, setDog] = useState('')
    let [temps,setTemps] = useState(null)
    let [page, setPage] = useState(0)
    let [emptyDb, setEmptyDb] = useState(false)
    let [notFind, setNotFind] = useState(false)
    let [refresh, setRefresh] = useState(false)

    useEffect(() => {     
      console.log('USE EFFECT HOME ');  
      getTemperaments()    
      getDogs()
    },[])

let handleChange = (e) => {
  if(e){
    setDog(e.target.value)
    console.log('dog from HC:', dog);
  }                    
} 
let handleSubmit = async (e) => {
  e.preventDefault()
  console.log('dog from HS:', dog);
  await filterDogsByBreed(dog)
  console.log('filteredDogs after handleSubmit:', filteredDogs);
  setPage(0)
}

let handleTemp = async (e) => {
  await filterDogsByTemps(e)
  console.log('filteredDogs after action:', filteredDogs)
  setPage(0)
}



if(!dogs.length) return (<Loading/>)
  return (
    <GlobalContainer>
      <NavBar  setPage={setPage} setTemps={setTemps}/>
      
      <GlobalHomeContainer>
        <Header>
          
          <Pagination>
            <PaginationButton onClick={()=>page>0?setPage(page-=1):null}><Icon.Prev size={40}/></PaginationButton>
            <PaginationButton onClick={()=>(page<Math.ceil(filteredDogs.length?filteredDogs.length/8:dogs.length/8)-1)?setPage(page+=1):null}><Icon.Next size={40}/></PaginationButton>
          </Pagination>

          <FilterComponent>
            <Filters dogs={dogs} setEmptyDb={setEmptyDb} nameAsc={nameAsc} nameDesc={nameDesc} weightAsc={weightAsc} weightDesc={weightDesc} setRefresh={setRefresh} refresh={refresh} setSource={setSource}/>
          </FilterComponent>  

        </Header>

        <HomeBody>

            <OptionsContainer>

              <Form onSubmit={(e)=>handleSubmit(e)}>
                <SearchBar placeholder='Search by breed...' type='text' name='input'onChange={(e)=>{handleChange(e)}}/>    
              </Form>              

              <Dropdown setTemps={setTemps} temps={temps} temperaments={temperaments} handleTemp={handleTemp}/> 

              <CreateDog>
                <Link to='/create'><CreateText>Create Dog</CreateText></Link> 
              </CreateDog>

            </OptionsContainer>
          
            <HomeCardsContainer>
              {filteredDogs.length?filteredDogs.slice(page*8,page*8+8).map(dog=><Card dog={dog}/>):dogs.slice(page*8,page*8+8).map(dog=><Card dog={dog}/>)}
            </HomeCardsContainer>

        </HomeBody>

      </GlobalHomeContainer>
      {notFind?<ErrorPopUp message='Error: cant find a dog with this name' setNotFind={setNotFind}/>:null}
      {emptyDb?<ErrorPopUp message='Error: The database is empty' setEmptyDb={setEmptyDb}/>:null}
    </GlobalContainer>
  )
}

//========================FILTER MENU =============================
let Filters = ({ dogs,setEmptyDb, nameAsc, setRefresh, refresh, nameDesc, weightAsc, weightDesc, setSource }) => {
  return (
    <div className='dropdown'>
        <nav>
         <ul>
            <li><div className='main-menu'><BsFilterRight size={40} className='icon'/></div>
               <ul className='filter-buttons'>
                  <li><div>🐶 By Name</div>
                     <ul>
                        <li><div onClick={()=>{
                          nameAsc()
                          setRefresh(prevRefresh => !prevRefresh)
                          }}>A/Z</div></li>
                        <li><div onClick={()=>{
                          nameDesc()
                          setRefresh(prevRefresh => !prevRefresh)
                          }}>Z/A</div></li>
                     </ul>
                  </li>
                  <li><div>🐷 By Weight</div>
                     <ul>
                        <li><div onClick={()=>{
                          weightAsc()
                          setRefresh(prevRefresh => !prevRefresh)
                          }}>ASC</div></li>
                        <li><div onClick={()=>{
                          weightDesc()
                          setRefresh(prevRefresh => !prevRefresh)
                          }}>DESC</div></li>
                     </ul>
                  </li>
                  <li><div>📁 Source</div>
                     <ul>
                        <li><div onClick={()=>{
                          setSource('All')
                          setRefresh(prevRefresh => !prevRefresh)
                          }}>All</div></li>
                        <li><div onClick={()=>{
                          setSource('API')
                          setRefresh(prevRefresh => !prevRefresh)
                          }}>API</div></li>
                        <li><div onClick={()=>{
                          setSource('DB')
                          setRefresh(prevRefresh => !prevRefresh)
                          }}>DB</div></li>
                     </ul>
                  </li>
               </ul>
            </li>
         </ul>
      </nav>
                
    </div>
  )
  }
  
//=================================================================

let mapStateToProps = (state) => {
    return {
        dogs: state.dogs,
        details: state.details,
        temperaments: state.temperaments,
        filteredDogs : state.filteredDogs
    };
  }
    
export default connect(mapStateToProps,{ getDogs,getDogByName, nameAsc, nameDesc, weightAsc, weightDesc, filterDogsByTemps, filterDogsByBreed, setSource, getTemperaments })(Home);