//  import sliding from '../Component/sliding';

import Header from '../Component/Header';
import Slider from '../Component/sliding';
import Item from '../Component/item';
import { product } from '../Component/product';
// import slide1 from "../Component/Asset/slide1.jpg";
// import slide2 from "../Component/Asset/slide2.jpg";
// import slide3 from "../Component/Asset/slide3.jpg";

export  default function Home () {
    return(
        <>
        <Header/>
        <Slider/>
        <h1>Welcome To the Home page</h1>
         <div className='d-flex justify-content-between flex-wrap row-gap-2 p-5'>
            
            { product.map((value)=>{
                    return <Item title={value.name} image={value.image} desc={value.desc} imageHeight={value.imageH} price={value.price}/>
                })
            }
            {/* <Item tittle="swiss 1" image={slide1}  desc="Some text ......"/>
            <Item tittle="swiss 2" image={slide2} desc="Some text ......text" />
            <Item tittle="swiss 3" image={slide3} desc="Some text ......text more ..... text"/>
            <Item tittle="swiss 1" image={slide1}  desc="Some.... text ......"/>
            <Item tittle="swiss 2" image={slide2} desc="Some to be text ......text" />
            <Item tittle="swiss 3" image={slide3} desc="Some text over ......text more ..... text"/>
            <Item tittle="swiss 1" image={slide1}  desc="Some text ......text"/>
            <Item tittle="swiss 2" image={slide2} desc="Some text ......text over" />
            <Item tittle="swiss 3" image={slide3} desc="Some text ......text more text ..... text"/> */}
         </div> 
        
        </>

    )
}