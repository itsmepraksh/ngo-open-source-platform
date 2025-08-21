import "../styles/index.css" 

const Shop = () => {
  return (
    <section id="shop" class="section">
        <div class="container">
            <h2 class="section-title">Support Products</h2>
            <p className="text-center mb-[3rem] font-[1.1rem]">Purchase eco-friendly products and support our cause. Every purchase helps fund our community initiatives.</p>
            
            <div class="shop-grid" id="productsContainer">
                {/* <!-- Products will be loaded dynamically from Firebase --> */}
            </div>
        </div>
    </section>
  )
}

export default Shop