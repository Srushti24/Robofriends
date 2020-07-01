import React,{Component} from 'react';


const Card=(props)=>{
const {id,name,username,email}=props;
return(
<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
<img alt='robots' src={`https://robohash.org/${id}?size=200x200`}/>
<div>

<h1>{name} </h1>
<p1> {email}</p1>
</div>
</div>
);
}


export default Card;