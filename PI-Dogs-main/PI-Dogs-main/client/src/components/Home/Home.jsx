import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDogs, getDogByName, filterDogsByTemps, getTemperaments, filterDogsByBreed } from '../../redux/actions/actions.js'
import { Card } from '../Card/Card.jsx'
import Loading from '../Loading/Loading.jsx';
import NavBar from '../NavBar/NavBar.jsx'
import { BsFilterRight } from 'react-icons/bs';
import Dropdown from '../Dropdown/Dropdown.jsx'
import { Pagination, HomeBody, PaginationButton, Header, GlobalContainer, Icon, SearchBar, FilterComponent, CreateDog, CreateText, OptionsContainer, GlobalHomeContainer, HomeCardsContainer } from '../Styles/Home.style.js'

import ErrorPopUp from '../ErrorPopUp/ErrorPopUp.jsx';

let Home = ({getDogs, getDogByName, getTemperaments, dogs, filterDogsByBreed, filteredDogs, filterDogsByTemps, temperaments}) => {
    let [dog, setDog] = useState('')
    let [ordered, setOrdered] = useState('NAMEASC')
    let [temps,setTemps] = useState(null)
    let [page, setPage] = useState(0)
    let [apiOrDB, setApiOrDB] = useState('')
    let [emptyDb, setEmptyDb] = useState(false)
    let [notFind, setNotFind] = useState(false)
    let [doggos, setDoggos] = useState()

    useEffect(() => {     
      console.log('USE EFFECT HOME ');  
      getTemperaments()    
      getDogs()
    },[])
    

              

// if(apiOrDB==='API')sortedDogs=dogs.filter(e=>typeof e.id === 'number')
// if(apiOrDB==='DB')sortedDogs=dogs.filter(e=>typeof e.id === 'string')
// if(apiOrDB==='')sortedDogs=dogs
// if(ordered==='NAMEASC'&&apiOrDB!=='DB')sortedDogs=sortedDogs.slice(page*8,page*8+8).sort((a,b)=>a.name>b.name?1:b.name>a.name?-1:0).reverse()
// if(ordered==='NAMEDESC'&&apiOrDB!=='DB')sortedDogs=sortedDogs.slice(page*8,page*8+8).sort((a,b)=>a.name>b.name?1:b.name>a.name?-1:0)
// if(ordered==='WEIGHTDESC'&&apiOrDB!=='DB')sortedDogs=sortedDogs.sort((a,b)=>a.weight.split(' - ').reduce((t,e)=>t+=parseInt(e),0)/2>b.weight.split(' - ').reduce((t,e)=>t+=parseInt(e),0)/2?1:b.weight.split(' - ').reduce((t,e)=>t+=parseInt(e),0)/2>a.weight.split(' - ').reduce((t,e)=>t+=parseInt(e),0)/2?-1:0).reverse()
// if(ordered==='WEIGHTASC'&&apiOrDB!=='DB')sortedDogs=sortedDogs.sort((a,b)=>a.weight.split(' - ').reduce((t,e)=>t+=parseInt(e),0)/2>b.weight.split(' - ').reduce((t,e)=>t+=parseInt(e),0)/2?1:b.weight.split(' - ').reduce((t,e)=>t+=parseInt(e),0)/2>a.weight.split(' - ').reduce((t,e)=>t+=parseInt(e),0)/2?-1:0)
// if(temps){
//   let exists=dogs.filter(e=>e.temperament?.includes(temps))
//   exists.length?sortedDogs=exists.slice(0,8):alert('NOT FOUND!')
// }
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
      <NavBar  setPage={setPage} setTemps={setTemps} setApiOrDB={setApiOrDB} setOrdered={setOrdered}/>
      
      <GlobalHomeContainer>
        <Header>
          
          <Pagination>
            <PaginationButton onClick={()=>page>0?setPage(page-=1):null}><Icon.Prev size={40}/></PaginationButton>
            <PaginationButton onClick={()=>(page<Math.ceil(filteredDogs.length?filteredDogs.length/8:dogs.length/8)-1)?setPage(page+=1):null}><Icon.Next size={40}/></PaginationButton>
          </Pagination>

          <FilterComponent>
            <Filters setOrdered={setOrdered} setApiOrDB={setApiOrDB} dogs={dogs} setEmptyDb={setEmptyDb}/>
          </FilterComponent>  

        </Header>

        <HomeBody>
            <OptionsContainer>
            <Form onSubmit={(e)=>handleSubmit(e)}>
            <SearchBar placeholder='Search by breed...' type='text' name='input'onChange={(e)=>{handleChange(e)}}/>    
            </Form>              

              <Dropdown setTemps={setTemps} temps={temps} temperaments={temperaments} handleTemp={handleTemp}/>
              {/* {!temps?.length?<Placeholder>Select...</Placeholder>:<Icon.Close onClick={()=>setTemps(null)}/>}   */}
              
              <CreateDog>
                <Link to='/create'><CreateText>Create Dog</CreateText></Link> 
              </CreateDog>

            </OptionsContainer>
          
            <HomeCardsContainer>
              {filteredDogs.length?filteredDogs.slice(page*8,page*8+8).map(dog=><Card dog={dog}/>):dogs.slice(page*8,page*8+8).map(dog=><Card dog={dog}/>)}
            </HomeCardsContainer>
        </HomeBody>

            {/* <OptionsContainer>   
                     
              <form onSubmit={(e)=>{handleSubmit(e)}}>
                  <SearchBar placeholder='Search...' type='text' name='input'onChange={(e)=>{handleChange(e)}}/> 
                  <button type='submit'><Icon.Search/></button>                                         
              </form>

              <Dropdown setTemps={setTemps} temps={temps} temperaments={temperaments}/>
              {!temps?.length?<Placeholder>Select...</Placeholder>:<Icon.Close onClick={()=>setTemps(null)}/>}  
              
              <CreateDog>
                <Link to='/create'><CreateText>Create Dog</CreateText></Link> 
              </CreateDog>

            </OptionsContainer>   */}
{/* 
            <HomeCardsContainer>
              {dogs?sortedDogs.map(dog=><Card dog={dog}/>):'NO DOGS'}
            </HomeCardsContainer>  */}

      </GlobalHomeContainer>
      {notFind?<ErrorPopUp message='Error: cant find a dog with this name' setNotFind={setNotFind}/>:null}
      {emptyDb?<ErrorPopUp message='Error: The database is empty' setEmptyDb={setEmptyDb}/>:null}
    </GlobalContainer>
  )
}

//========================FILTER MENU =============================
let Filters = ({ setOrdered,setApiOrDB,dogs,setEmptyDb }) => {
  return (
    <div className='dropdown'>
        <nav>
         <ul>
            <li><div className='main-menu'><BsFilterRight size={40} className='icon'/></div>
               <ul className='filter-buttons'>
                  <li><div>🐶 By Name</div>
                     <ul>
                        <li><div onClick={()=>setOrdered('NAMEDESC')}>A/Z</div></li>
                        <li><div onClick={()=>setOrdered('NAMEASC')}>Z/A</div></li>
                     </ul>
                  </li>
                  <li><div>🐷 By Weight</div>
                     <ul>
                        <li><div onClick={()=>setOrdered('WEIGHTASC')}>ASC</div></li>
                        <li><div onClick={()=>setOrdered('WEIGHTDESC')}>DESC</div></li>
                     </ul>
                  </li>
                  <li><div>📁 Source</div>
                     <ul>
                        <li><div onClick={()=>setApiOrDB('API')}>API</div></li>
                        <li><div onClick={()=>dogs.filter(e=>typeof e.id === 'string').length?setApiOrDB('DB'):setEmptyDb(true)}>DB</div></li>
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
    
export default connect(mapStateToProps,{ getDogs,getDogByName, filterDogsByTemps, filterDogsByBreed, getTemperaments })(Home);