import React from 'react';
import style from '../styles/Place_Order_Form.module.css'

const Place_Order_Form = () => {
  return (
    <div className={`${style.form_container}`}>
      <div className={`${style.form_card}`}>
        {/* Product Info */}
        <h2 className={`${style.form_title}`}>Order Eco-Friendly Jute Bags</h2>
        <div className={`${style.product_box}`}>
          <h3>Eco-Friendly Jute Bags</h3>
          <p className={`${style.product_price}`}>₹150</p>
        </div>

        {/* Form */}
        <form>
          <label>Full Name *</label>
          <input type="text" placeholder="Enter your full name" />

          <label>Email Address *</label>
          <input type="email" placeholder="Enter your email" />

          <label>Phone Number *</label>
          <input type="tel" placeholder="Enter your phone number" />

          <label>Quantity *</label>
          <input type="number" defaultValue="1" />

          <label>Shipping Address *</label>
          <textarea placeholder="Enter your complete shipping address..." />

          <label>Additional Notes (Optional)</label>
          <textarea placeholder="Any special requirements or instructions..." />
          
          <div className={`${style.total_box}`}>
            <div className={style.amount_row}>
              <span>Total Amount:</span>
              <strong>₹150</strong>
            </div>
            <p className={style.info_text}>
              ℹ️ Shipping charges will be calculated based on location
            </p>
          </div>

          {/* Buttons */}
          <div className={`${style.button_row}`}>
            <button type="button" className={`${style.cancel_btn}`}>
              Cancel
            </button>
            <button type="button" className={`${style.order_btn}`}>
              🛒 Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Place_Order_Form