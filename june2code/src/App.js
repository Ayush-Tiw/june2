import logo from './logo.svg';
import './App.css';




function App() {

    const phoneList=[
        {
            image:"http1.///random.com1",
            name:"OnePlus 9 5G",
            brand:"Oneplus"
        },
        {
            image:"http1.///random.com2",
            name:"Iphone 13 mini",
            brand:"Apple"
        },
        {
            image:"http1.///random.com3",
            name:"Redmi Note 3 ",
            brand:"MI"
        },
        {
            image:"http1.///random.com4",
            name:"Realme c5 ",
            brand:"Realme"
        }
    ]

  return (
    <div className="App">
     welcome to page
{phoneList.map((phone)=><Phone key={index} image={phone.image} name={phone.name} brand={phone.brand} />)}

    </div>
  );
}

function Phone({image,name,brand}){

    return(
        <div className="app-container">
        <div className="phone-container">
<img className="phone-image" src="" alt=""/>{image}
<div classname="phone-spec">
<h1 className="phone-name">{name}</h1>
<p className="phone brand">{brand}</p>
</div>
        </div>
        </div>
    )
}

export default App;



// 