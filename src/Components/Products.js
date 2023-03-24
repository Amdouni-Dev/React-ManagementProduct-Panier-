// pour le composant products
// hedha l composant parent bech n3ayet fih lel product eli hatititou f state fel products.js 
import React from 'react';
import { Alert, Col, Container,Row } from 'react-bootstrap';
import products from '../products.json'
import Product from './Product';
class Products extends React.Component {
constructor(props){
    super(props);
}
state={visible:false,visible1:false}
 buy=(product)=>{

//console.log(product.name);// houni logique yaffichi esm l produit khater deja b3athtou mel composant enfant product fel bouton buy
product.quantity--;
//this.forceUpdate() hedhy t forci l mise ajour w nwalli ki nekiliki aal bouton buy l quantité ton9es directement
// l7al men ghir forceUpadate: // le fait que nesta3mel setState hata mefiha chay ysir mise a jour lel etat mte3 l composant ==>this.setState(()=>({}));
this.setState(()=>({
visible:true
 
}));
setTimeout( ()=>{
    this.setState(  ()=>( {visible:false} ))
},3000 ) // ya3ni visible twalli false ken ba3d 3 seconde w ki twali false meaach fama alerte 
    
console.log(product.quantity);


}
componentDidMount(){ // lors du montage du composant
    this.setState(  ()=>({
       visible1:true
    }) )

    setTimeout(   ()=>{
        this.setState(  ()=>({visible1:false}))
    },3000)
}

render(){
    return(
        <>
        {/* <h1>Hi Store !</h1> */}
        {this.state.visible1 &&
      <Alert variant="success">
      <Alert.Heading>Hey,Welcome to my React project! <strong> MyStore </strong>    </Alert.Heading>
      <p>
      Thank you for choosing our store, we hope you enjoy your shopping experience!
      </p>
      <hr />
    </Alert>
        }
        <Container>
            <Row>
{products.map( (element,index)=>
<Col key={index} >
<Product product={element} buyFunction={this.buy} /> {/* houni lezemni nasna3 un composant Product w fel props n3adilopu objet product w deja definitou ena fel state*/}

</Col>
)}
{this.state.visible && 
<Alert><h1>you bought a product</h1></Alert>

}


            </Row>
        </Container>
        </>
    )
}
}
export default Products;


// merci :)