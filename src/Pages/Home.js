import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import c1 from './image/8.png';
import c2 from './image/2.png';
import c3 from './image/home 2.png'
import c4 from './image/5.jpg';
import c5 from './image/6.avif';
import { Link } from 'react-router-dom';



const Home = () => {
  return (
    <div>
      {/* Carousel */}
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={c1} className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src={c4} className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src={c5} className="d-block w-100" alt="Slide 3" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
<br></br>
     <Link className="nav-link" to="/Home"> <h1 className="home" style={{color:" #ffcc00"}}>Home</h1></Link>
      {/* container */}
      <div className="container mt-5">
  <div className="row">
    {/* Left Half: Image */}
    <div className="col-md-6">
      <img src={c2} style={{ width: "100%",  height:"550px", borderRadius:"10px"}} alt="Fresh Juice Benefits" />
    </div>

    {/* Right Half: Content */}
    <div className="col-md-6 d-flex align-items-center">
      <div>
        <h3>BENEFITS OF FRESH JUICE</h3>
        <p>
          <strong>Nutrient-Rich:</strong> Fresh juice is packed with vitamins, minerals, and antioxidants. For example, orange juice is high in vitamin C, which boosts the immune system, while carrot juice is rich in vitamin A, which is good for vision and skin health.
        </p>
        <p>
          <strong>Hydration:</strong> Fresh juice is an excellent way to stay hydrated, especially during hot weather. It provides fluids along with essential electrolytes.
        </p>
        <p>
          <strong>Boosts Energy:</strong> The natural sugars and nutrients in fresh juice can give you a quick and sustained energy boost, making it a great pick-me-up.
        </p>
        <p>
          <strong>Supports Digestion:</strong> Fresh juice, especially those made from fruits and vegetables high in fiber, like apple or carrot, can aid in digestion and promote a healthy gut.
        </p>
        
        <p>
          <strong>Weight Management:</strong> Fresh juice can be a healthy addition to your diet if you're looking to manage your weight. It can serve as a low-calorie, nutrient-dense alternative to sugary drinks and snacks.
        </p>
        
       
      </div>
    </div>
  </div>
</div>

{/* container */}
<div className="container mt-5">
  <div className="row">
    {/* Left Half: Image */}
    <d iv className="col-md-6">
      <img src={c3} style={{ width: "100%", height:"550px", borderRadius:"10px"}} alt="Fresh Juice Benefits" />
    </d>

    {/* Right Half: Content */}
    <div className="col-md-6 d-flex align-items-center">
      <div>
        <h3>WHY? FRESH JUICE</h3>
  <div>
  
    <p>
      <strong>Nutrient Powerhouse:</strong> Fresh juice is packed with essential vitamins, minerals, and antioxidants, providing a concentrated dose of nutrients in every glass.
    </p>
    <p>
      <strong>Natural Hydration:</strong> It helps keep you hydrated, especially important in warm climates or after physical activity.
    </p>
    <p>
      <strong>Detox Support:</strong> Many fresh juices, particularly green juices, aid in detoxifying the body and supporting liver function.
    </p>
    <p>
      <strong>Energy Boost:</strong> The natural sugars in fresh juice provide a quick and sustained energy boost without the crash associated with processed sugars.
    </p>
    <p>
      <strong>Immune System Support:</strong> Vitamins like C and A, commonly found in fresh juices, help bolster your immune system, making you less susceptible to illnesses.
    </p>
   
  </div>
</div>

       
      </div>
    </div>
  </div>
  <div className="container mt-5">
  <h3 className="text-center mb-4">Fresh Juice Details</h3>
  <table className="table table-bordered table-striped">
    <thead className="table-dark">
      <tr>
        <th>Sl. No</th>
        <th>Fruit Name</th>
        <th>250ml</th>
        <th>500ml</th>
        <th>1000ml</th>
      </tr>
    </thead>
    <tbody>
      {[
        { name: 'Apple', price250ml: 100, price1000ml: 350 },
        { name: 'Avocado', price250ml: 120, price1000ml: 240 },  
        { name: 'Banana', price250ml: 50, price1000ml: 150 },     
        { name: 'Dragon Fruit', price250ml: 135, price1000ml: 400 }, 
        { name: 'Fig', price250ml: 150, price1000ml: 500 },       
        { name: 'Grapes', price250ml: 65, price1000ml: 240 },   
        { name: 'Guava', price250ml: 75, price1000ml: 250 },     
        { name: 'Kiwi', price250ml: 155, price1000ml: 500 },      
        { name: 'Lemon', price250ml: 45, price1000ml: 120 },  
        { name: 'Mango', price250ml: 85, price1000ml: 250 },     
        { name: 'Muskmelon', price250ml: 80, price1000ml: 300 },  
        { name: 'Orange', price250ml: 60, price1000ml: 220 },     
        { name: 'Papaya', price250ml: 70, price1000ml: 210 },
        { name: 'Peach', price250ml: 100, price1000ml: 300 },      
        { name: 'Peer', price250ml: 75, price1000ml: 250 },       
        { name: 'Sapota', price250ml: 45, price1000ml: 130 },    
        { name: 'Strawberry', price250ml: 170, price1000ml: 680 }, 
        { name: 'Watermelon', price250ml: 45, price1000ml: 120 },  
        { name: 'Pineapple', price250ml: 130, price1000ml: 400 }, 
        { name: 'Pomogranet', price250ml: 160, price1000ml: 480 }, 
      ].map((fruit, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{fruit.name}</td>
          <td>₹ {fruit.price250ml}</td>
          <td>₹ {fruit.price250ml * 2}</td> {/* 500ml price */}
          <td>₹ {fruit.price1000ml}</td> {/* Updated 1000ml price */}
        </tr>
      ))}
    </tbody>
  </table>
</div>





</div>
  );
};

export default Home;
