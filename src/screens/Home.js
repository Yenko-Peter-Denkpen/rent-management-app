import React,{useContext} from 'react';
import { FaImages } from 'react-icons/fa';
import Header from"../components/Header"
function Home() {
 
  return (
    <>
    <Header/>
   <div className='FaImgs'>
<div className='firstrow'>
<div className='card'>
 <h1>House for rent</h1>

 <div style={{
      display:"grid",
      gridTemplateColumns:"1fr 1fr 1fr ",
      maxWidth:"90%",
      margin:"20px auto"
 }}>
 {
imgs.map(imgs=>(
<div style={{
  display:"flex",
  flexDirection:"column",
  justifyContent:"center",
  border:"1px solid #dedede",
  padding:"10px",
  margin:"10px"
}}>
<img src={house.imgs} alt="" height={"230px"}/>
<h5>{house.name}</h5>
<h5> GHC{house.price.toFixed(2)}</h5>
</div>
))
 }
</div>
</div>

</div>
   </div>
   </>
  )
}

export default Home