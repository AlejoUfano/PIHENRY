import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDogs, getDogByName, getTemperaments } from '../../redux/actions/actions.js'
import { Card } from '../Card/Card.jsx'
import Loading from '../Loading/Loading.jsx';
import NavBar from '../NavBar/NavBar.jsx'
import { BsFilterRight } from 'react-icons/bs';
import Dropdown from '../Dropdown/Dropdown.jsx'
import { Pagination, Placeholder, PaginationButton, Icon, SearchBar, FilterComponent, CreateDog, CreateText, OptionsContainer, GlobalHomeContainer, HomeCardsContainer } from '../Styles/Home.style.js'
import ErrorPopUp from '../ErrorPopUp/ErrorPopUp.jsx';

let Home = ({getDogs, getDogByName, getTemperaments, dogs, temperaments}) => {  

    let [dog, setDog] = useState('')
    let [ordered, setOrdered] = useState('NAMEASC')
    let [temps,setTemps] = useState(null)
    let [page, setPage] = useState(0)
    let [apiOrDB, setApiOrDB] = useState('')
    let [emptyDb, setEmptyDb] = useState(false)
    let [notFind, setNotFind] = useState(false)

    useEffect(() => {     
      console.log('USE EFFECT HOME ');  
      getTemperaments()    
      getDogs()              
    },[])


    let handleChange = (e) => {
      setDog(e.target.value)                                
    }

    let handleSubmit = async (e) => {
      e.preventDefault()
      if(!dogs.filter(e=>e.name.toLowerCase().includes(dog.toLowerCase())).length){
        setNotFind(true)
      }
      await getDogByName(dog)
      e.target.input.value=''
      await setPage(0)
    }   
let dogs2 = []
let sortedDogs = []
if(apiOrDB==='API')sortedDogs=dogs.filter(e=>typeof e.id === 'number')
if(apiOrDB==='DB')sortedDogs=dogs.filter(e=>typeof e.id === 'string')
if(apiOrDB==='')sortedDogs=dogs
if(ordered==='NAMEASC'&&apiOrDB!=='DB')sortedDogs=sortedDogs.slice(page*8,page*8+8).sort((a,b)=>a.name>b.name?1:b.name>a.name?-1:0).reverse()
if(ordered==='NAMEDESC'&&apiOrDB!=='DB')sortedDogs=sortedDogs.slice(page*8,page*8+8).sort((a,b)=>a.name>b.name?1:b.name>a.name?-1:0)
if(ordered==='WEIGHTDESC'&&apiOrDB!=='DB')sortedDogs=sortedDogs.sort((a,b)=>a.weight.split(' - ').reduce((t,e)=>t+=parseInt(e),0)/2>b.weight.split(' - ').reduce((t,e)=>t+=parseInt(e),0)/2?1:b.weight.split(' - ').reduce((t,e)=>t+=parseInt(e),0)/2>a.weight.split(' - ').reduce((t,e)=>t+=parseInt(e),0)/2?-1:0).reverse()
if(ordered==='WEIGHTASC'&&apiOrDB!=='DB')sortedDogs=sortedDogs.sort((a,b)=>a.weight.split(' - ').reduce((t,e)=>t+=parseInt(e),0)/2>b.weight.split(' - ').reduce((t,e)=>t+=parseInt(e),0)/2?1:b.weight.split(' - ').reduce((t,e)=>t+=parseInt(e),0)/2>a.weight.split(' - ').reduce((t,e)=>t+=parseInt(e),0)/2?-1:0)
if(temps){
  let exists=dogs.filter(e=>e.temperament?.includes(temps))
  exists.length?sortedDogs=exists.slice(0,8):alert('NOT FOUND!')
}
console.log('temps changes:', temps);

if(!dogs.length) return (<Loading/>)
  return (
    <>
      <NavBar  setPage={setPage} setTemps={setTemps} setApiOrDB={setApiOrDB} setOrdered={setOrdered}/>
      
      <GlobalHomeContainer>

              <Pagination>
                <PaginationButton onClick={()=>page>0?setPage(page-=1):null}><Icon.Prev size={40}/></PaginationButton>
                <PaginationButton onClick={()=>(page<Math.ceil(dogs.length/8)-1)?setPage(page+=1):null}><Icon.Next size={40}/></PaginationButton>
              </Pagination>

              <FilterComponent>
                <Filters setOrdered={setOrdered} setApiOrDB={setApiOrDB} dogs={dogs} setEmptyDb={setEmptyDb}/>
              </FilterComponent>  

            <OptionsContainer>   
                     
              <form onSubmit={(e)=>{handleSubmit(e)}}>
                  <SearchBar placeholder='Search...' type='text' name='input'onChange={(e)=>{handleChange(e)}}/> 
                  <button type='submit'><Icon.Search/></button>                                         
              </form>

              <Dropdown setTemps={setTemps} temps={temps} temperaments={temperaments}/>
              {!temps?.length?<Placeholder>Select...</Placeholder>:<Icon.Close onClick={()=>setTemps(null)}/>}  
              
              <CreateDog>
                <Link to='/create'><CreateText>Create Dog</CreateText></Link> 
              </CreateDog>

            </OptionsContainer>  

            <HomeCardsContainer>
              {dogs?sortedDogs.map(dog=><Card dog={dog}/>):'NO DOGS'}
            </HomeCardsContainer> 

      </GlobalHomeContainer>
      {notFind?<ErrorPopUp message='Error: cant find a dog with this name' setNotFind={setNotFind}/>:null}
      {emptyDb?<ErrorPopUp message='Error: The database is empty' setEmptyDb={setEmptyDb}/>:null}
    </>
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
        temperaments: state.temperaments
    };
  }
    
export default connect(mapStateToProps,{ getDogs,getDogByName,getTemperaments })(Home);