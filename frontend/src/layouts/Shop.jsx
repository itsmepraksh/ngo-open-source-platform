// import "../styles/index.css" 
import style from '../styles/Shop.module.css'

const Shop = () => {
  return (
    <section id="shop" className={`${style.section}`}>
      <div className={`${style.container}`}>
        <h2 className={`${style.section_title}`}>Support Products</h2>
        <p className={`${style.purchase_message}`}>Purchase eco-friendly products and support our cause. Every purchase helps fund our community initiatives.</p>

        <div className={`${style.shop_grid}`} id="productsContainer">
          {/* <!-- Products will be loaded dynamically from Firebase --> */}
          <div className={`${style.shop_card}`}>
            <img
              src="https://m.media-amazon.com/images/I/713XO3qEsUL._UL1500_.jpg"
              alt="Eco-Friendly Jute Bag"
              className={`${style.shop_image}`}
            />
            <div className={`${style.card_content}`}>
              <h3 className={`${style.card_title}`}>Eco-Friendly Jute Bags</h3>
              <p className={`${style.card_description}`}>
                Durable and sustainable jute bags perfect for shopping and daily use.
                Help reduce plastic waste.
              </p>
              <p className={`${style.card_price}`}>₹150</p>
              <button className={`${style.card_button}`}>Order Now</button>
            </div>

            <div />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Shop