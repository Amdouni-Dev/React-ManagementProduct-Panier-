// pour le composant product
import React from 'react'
import { Button, Card } from 'react-bootstrap';
class Product extends React.Component {
constructor(props){
    super(props)
}
state={product:this.props.product,likes:this.props.product.like,quantity:this.props.product.quantity} // houni 3ibara sna3t objet lel composant product(initialisation de l'etat du composant avec un objet product w mlezem nafsou yetb3ath lel products.js)
like=()=>{
this.setState(  (oldState)=>({likes:oldState.likes+1} ) ) //ki n9olou this.setState yaarefili ena bech nbadel l'etatt mte3 l composant ,
// setState bech tekhou prametre oldState w tbaddel likes ili mawjoud a fi state bel oldSate+1
// setstate: hiya fonction predefinie mte3 State 
}
/** ****************************************** */
// commentitha bech nwali nekhdem l fonction fel composant parent:w akkeka nhez l product direct w nbaddel fih automatiquement
// buy=()=>{
//     this.setState( (oldState)=>({ 
//        product:{ // houni 3ibara sna3t product jdid (fih l product la9dim w baddelt l quantité )
//         ...oldState.product,
//         quantity: oldState.product.quantity-1
//        }
//     } ) )
// }

render(){
  return (

    <>
   <Card style={{width:'18rem'}} >
    <Card.Img   variant='top'  src={require('../assets/images/product1.webp')}  height="200px" width="50px"  ></Card.Img>
    <Card.Body>
        <Card.Title> Title: {this.state.product.name}</Card.Title>
        <Card.Text>Description: {this.state.product.description}  </Card.Text>
        <Card.Text>Price: {this.state.product.price}</Card.Text>
        <Card.Text>Quantity: {this.state.product.quantity}</Card.Text>
   <Card.Text> likes:{this.state.likes} </Card.Text>
   <Button onClick={this.like} >Like</Button>
   {/* <Button onClick={this.buy} >Buy</Button> hedhy teb3a l fonction buy illi mawjouda houni */}
 <Button onClick={  ()=>this.props.buyFunction(this.state.product) }   disabled={this.state.product.quantity<=0}  >Buy</Button> 
 {/* l fonction  buyFunction 3adineha(3ibara zedneha lel props ==> 3ibara sna3na fonction w 3adineha fel props) fel props w leeeeezem tkoun mawjouda fel composant parent 
 houni fel fonction buyFunction deja b3atht l'objet product , y3ni le fait que nekilik aal bouton , deja yjib m3ah l objet product
 */}
    </Card.Body>

   </Card>
    </>
  )
}
}
export default Product;

// fel like najmou menest7a9ouch l oldState mte3 l produit(fazt ...oldState.product (houni chnekhou l produit la9dim w bech nzid aalih)) khater deja sna3na likes f state w baddelna direct fel fonction like(){}
// fel buy ken zedna quantity fel state w fel render hatyna this .state.quantity w badelna ray tbadlet automatiquement kif like bedhabt
// ema puisque meazdnech f state w bech nekhdmou aal quantité direct twalli nest7a9ou ...oldState.product (yaani l'etat la9dima mte3 l produit w nbadlou fiha direct)

/* 

state={product:this.props.product}: houni sna3t objet product(deja howa l props mte3 l composant hedha ) w hatitou f state bech baad ki n3ayetlou fel composant parent
yefhem l composant parent eli hedheka l'etat mte3 l composant Product 

*/