import './App.css'

function App() {

  return <main className="modal">

    <section className="productImage">
      <img src="./public/images/image-product-desktop.jpg" alt="" />
    </section>
    <section className="text">
      <h6 className="title">PERFUME</h6>
      <h2 className="productTitle">Gabrielle Essence Eau De Parfum</h2>
      <p className="description">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the house of CHANEL</p>

      <section className="pricing">
      <h2 className="discountedPrice">$149.99</h2>
        <h5 className="originalPrice">$169.99</h5>
      </section>
        <button className="addToCart">
        <img src="./public/images/icon-cart.svg" alt="" />
        <p>Add to Cart</p>
        </button>
    </section>

     
  </main>
  
}

export default App
