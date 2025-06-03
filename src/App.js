import './App.css';
import logo from './Images/logoRemBg.png';
import freeShopping from './Images/free.gif';
import esayReturns from './Images/return-of-investment.gif';
import securePayment from './Images/credit-card.gif';
import customerSupport from './Images/phone.gif';
import qualityGuarantee from './Images/premium-quality.gif';
import ca from './Images/ts.png';
import black from './Images/black.png';
import girl from './Images/girl.png';
import { FaShoppingCart } from "react-icons/fa";
import star from './Images/star.png';
import { HiOutlineShoppingBag } from "react-icons/hi2";

function App() {
  return (
    <>
        <div className='home-conatiner'>
            <div className='nav-container'>
                  <div>
                    <img className='logo-img' alt='logoImg' src={logo}/>
                  </div>
                  <ul className='nav-list'>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Blog</li>
                    <i className='icon-shop'><HiOutlineShoppingBag/></i>
                  </ul>
            </div>
            <div className='hero-container'>

                <div className='hero-text'>
                    <p>Trade-in-Offer</p>
                    <h1>Discover the best products at unbeatable prices</h1>
                    <h3>Welcome to Our Store</h3>
                    <h4>Save more with cupons & up to  save 70% off</h4>
                    <button className='shop-now-btn'>Shop Now</button>
                </div>

                <div className='hero-image'>
                    <img className='men-img' src='https://cdn.shopify.com/s/files/1/0266/6276/4597/files/casual_tshirts_for_men_by_wes_c_bdcf7c5f-5a77-4312-a49c-cb235ea14ef1.jpg?v=1649333556' alt='Hero' /> 

                </div>
            </div>
        </div>   


        <div className='our-products-container'>
           <div className='our-products-box'>
             <div  className='our-products-box-div'>
              <img src={freeShopping} alt='online-shopping'/>
              <h2>Online Shopping</h2>
              
             </div>

             <div className='our-products-box-div'>
              <img src={esayReturns} alt='Free Shipping'/>
              <h2>Easy Returns</h2>
              
             </div>

             <div className='our-products-box-div'>
              <img src={securePayment} alt='Secure Payment'/>
              <h2>Secure Payment</h2>
              
             </div>

             <div className='our-products-box-div'>
              <img src={customerSupport} alt='Customer Support'/>
              <h2>24/7 Customer Support</h2>
              
             </div>

             <div className='our-products-box-div'>
              <img src={qualityGuarantee} alt='Quality Guarantee'/>
              <h2>Quality Guarantee</h2>
              
             </div>
           </div>
        </div>

        <div className='future-products-container'>
          <h1 className='future-products-h1'>Featured Products</h1>
          <p className='future-pro-p'>Summer Collection New Morden Design</p>
          <div className='future-products-box'>
            <div className='future-products-box-div'>
              <img className='ts' src={ca} alt='t-shirt'/>
                 <p>Addidas</p>
                  <h3>Cartoon Layer Shirt</h3>
                  <img className='star' src={star} alt='star'/>
                  <div className='price-btn'>
                    <h4>$120.00</h4>
                    <i className='price-btn-icon'><FaShoppingCart/></i>
                  </div>
            </div>
            <div className='future-products-box-div'>
              <img className='ts' src={ca} alt='t-shirt'/>
                 <p>Addidas</p>
                  <h3>Cartoon Layer Shirt</h3>
                  <img className='star' src={star} alt='star'/>
                  <div className='price-btn'>
                    <h4>$120.00</h4>
                    <i className='price-btn-icon'><FaShoppingCart/></i>
                  </div>
            </div>
            <div className='future-products-box-div'>
              <img className='ts' src={ca} alt='t-shirt'/>
                 <p>Addidas</p>
                  <h3>Cartoon Layer Shirt</h3>
                  <img className='star' src={star} alt='star'/>
                  <div className='price-btn'>
                    <h4>$120.00</h4>
                    <i className='price-btn-icon'><FaShoppingCart/></i>
                  </div>
            </div>
            <div className='future-products-box-div'>
              <img className='ts' src={ca} alt='t-shirt'/>
                 <p>Addidas</p>
                  <h3>Cartoon Layer Shirt</h3>
                  <img className='star' src={star} alt='star'/>
                  <div className='price-btn'>
                    <h4>$120.00</h4>
                    <i className='price-btn-icon'><FaShoppingCart/></i>
                  </div>
            </div>
            <div className='future-products-box-div'>
              <img className='ts' src={ca} alt='t-shirt'/>
                 <p>Addidas</p>
                  <h3>Cartoon Layer Shirt</h3>
                  <img className='star' src={star} alt='star'/>
                  <div className='price-btn'>
                    <h4>$120.00</h4>
                    <i className='price-btn-icon'><FaShoppingCart/></i>
                  </div>
            </div>
            <div className='future-products-box-div'>
              <img className='ts' src={ca} alt='t-shirt'/>
                 <p>Addidas</p>
                  <h3>Cartoon Layer Shirt</h3>
                  <img className='star' src={star} alt='star'/>
                  <div className='price-btn'>
                    <h4>$120.00</h4>
                    <i className='price-btn-icon'><FaShoppingCart/></i>
                  </div>
            </div>
            <div className='future-products-box-div'>
              <img className='ts' src={ca} alt='t-shirt'/>
                 <p>Addidas</p>
                  <h3>Cartoon Layer Shirt</h3>
                  <img className='star' src={star} alt='star'/>
                  <div className='price-btn'>
                    <h4>$120.00</h4>
                    <i className='price-btn-icon'><FaShoppingCart/></i>
                  </div>
            </div>
            <div className='future-products-box-div'>
              <img className='ts' src={ca} alt='t-shirt'/>
                 <p>Addidas</p>
                  <h3>Cartoon Layer Shirt</h3>
                  <img className='star' src={star} alt='star'/>
                  <div className='price-btn'>
                    <h4>$120.00</h4>
                    <i className='price-btn-icon'><FaShoppingCart/></i>
                  </div>
            </div>

            
          </div>
        </div>


    <div class="black-shirts-container">
      <img src={black} alt="shirt" class="shirt-image" />
      
      <div class="content">
        <h1>MEN</h1>
        <button>SHOP NOW</button>
      </div>
    </div>

    <div class="women-shirts-container">

       <div class="content-women">
        <h1>WOMEN</h1>
        <button>SHOP NOW</button>
      </div>
      
      <img src={girl} alt="shirt" class="shirt-image" />
      
     
    </div>



    </>
  );
}

export default App;
