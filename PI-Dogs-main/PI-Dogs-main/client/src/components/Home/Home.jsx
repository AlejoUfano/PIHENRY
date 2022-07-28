import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { getDogs, getDogByName, getTemperaments } from '../../redux/actions/actions.js'
import {Card} from '../Card/Card.jsx'
import Loading from '../Loading/Loading.jsx';
import Select from 'react-select'
import NavBar from '../NavBar/NavBar.jsx'
import { BsFilterRight } from "react-icons/bs";
import { Pagination, PaginationButton, Icon, SearchBar, FilterComponent, CreateDog, OptionsContainer, SelectContainer, GlobalHomeContainer, HomeCardsContainer } from '../Styles/Home.style.js'

let Home = ({getDogs, getDogByName, getTemperaments, dogs, temperaments}) => {  

    let [dog, setDog] = useState('')
    let [ordered, setOrdered] = useState('NAMEASC')
    let [temps,setTemps] = useState()
    let [page, setPage] = useState(0)
    let [apiOrDB, setApiOrDB] = useState('')

    useEffect(() => {
     
      console.log('USE EFFECT HOME ');  
      getTemperaments()    
      getDogs()              
    },[])


    let handleChange=(e)=>{
      setDog(e.target.value)                                
    }

    let handleSubmit=async (e)=>{
      e.preventDefault()     
      await getDogByName(dog)
      e.target.input.value=''
      await setPage(0)
    }   
    let styles = {
      control: (base, state) => ({        
        ...base,
        border: '2px solid #4f4f4f',
        height:'42px',
        background: 'transparent',
        transition: 'none',
        boxShadow: state.isFocused ? 0 : 0,
        '&:hover': {
           border: '2px solid #000',
           cursor: 'pointer'
        },
        '&:active':{
          cursor: 'pointer'
        }
    })
    }; 
let sortedDogs = []
if(apiOrDB==='API')sortedDogs=dogs.filter(e=>typeof e.id === 'number')
if(apiOrDB==='DB')sortedDogs=dogs.filter(e=>typeof e.id === 'string')
if(apiOrDB==='')sortedDogs=dogs
let allTemperaments = temperaments.map((e,i)=>{return{value:i+2,label:e}})
if(ordered==='NAMEASC'&&apiOrDB!=='DB')sortedDogs=sortedDogs.slice(page*8,page*8+8).sort((a,b)=>a.name>b.name?1:b.name>a.name?-1:0).reverse()
if(ordered==='NAMEDESC'&&apiOrDB!=='DB')sortedDogs=sortedDogs.slice(page*8,page*8+8).sort((a,b)=>a.name>b.name?1:b.name>a.name?-1:0)
if(ordered==='WEIGHTDESC'&&apiOrDB!=='DB')sortedDogs=sortedDogs.slice(page*8,page*8+8).sort((a,b)=>a.weight.split(' - ').reduce((t,e)=>t+=parseInt(e),0)/2>b.weight.split(' - ').reduce((t,e)=>t+=parseInt(e),0)/2?1:b.weight.split(' - ').reduce((t,e)=>t+=parseInt(e),0)/2>a.weight.split(' - ').reduce((t,e)=>t+=parseInt(e),0)/2?-1:0).reverse()
if(ordered==='WEIGHTASC'&&apiOrDB!=='DB')sortedDogs=sortedDogs.slice(page*8,page*8+8).sort((a,b)=>a.weight.split(' - ').reduce((t,e)=>t+=parseInt(e),0)/2>b.weight.split(' - ').reduce((t,e)=>t+=parseInt(e),0)/2?1:b.weight.split(' - ').reduce((t,e)=>t+=parseInt(e),0)/2>a.weight.split(' - ').reduce((t,e)=>t+=parseInt(e),0)/2?-1:0)
if(temps){
  let exists=dogs.filter(e=>e.temperament?.includes(temps))
  exists.length?sortedDogs=exists.slice(0,8):alert('NOT FOUND!')
}

if(!dogs.length) return (<Loading/>)
  return (
    <>
      <NavBar  setPage={setPage} setTemps={setTemps}/>
      
      <GlobalHomeContainer>
              <Pagination>
                <PaginationButton onClick={()=>page>0?setPage(page-=1):null}><Icon.Prev size={40}/></PaginationButton>
                <PaginationButton onClick={()=>(page<Math.ceil(dogs.length/8)-1)?setPage(page+=1):null}><Icon.Next size={40}/></PaginationButton>
              </Pagination>
            <FilterComponent>
                <Filters setOrdered={setOrdered} setApiOrDB={setApiOrDB}/>
            </FilterComponent>  
            <OptionsContainer>          
              <form onSubmit={(e)=>{handleSubmit(e)}}>
                  <SearchBar placeholder="Search..." type="text" name='input'onChange={(e)=>{handleChange(e)}}/> 
                  <button type='submit'><Icon.Search/></button>
                                         
              </form>          
              <SelectContainer>
                <Select styles={styles} isMulti={false} placeholder='Select...' className={"mdc-react-select"} onChange={(e)=>{setTemps(e?.label);}} isClearable={true} options={allTemperaments}/>
              </SelectContainer>
              <CreateDog>
                <Link to='/create'>
                <div>Create Dog</div>          
                </Link> 
              </CreateDog>  
              
            </OptionsContainer>  
          <HomeCardsContainer>
            {dogs?sortedDogs.map(dog=><Card dog={dog}/>):'NO DOGS'}
          </HomeCardsContainer>       
      </GlobalHomeContainer>
    </>
  )
}

//========================FILTER MENU =============================
let Filters = ({setOrdered,setApiOrDB,checkDbDogs}) => {
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
                        <li><div onClick={()=>checkDbDogs?.length?setApiOrDB('DB'):alert('THE DATABASE IS EMPTY')}>DB</div></li>
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
        dogs:state.dogs,
        details:state.details,
        temperaments:state.temperaments,
    };
  }
    
export default connect(mapStateToProps,{getDogs,getDogByName,getTemperaments})(Home);