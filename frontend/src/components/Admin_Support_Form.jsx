import React from 'react'

const Admin_Support_Form = () => {
  return (
    //  <!-- Product Modal -->
    <div id="productModal" class="modal" >
        <div class="modal-content">
            <div class="modal-header">
                <h3 id="productModalTitle">Add New Product</h3>
                <span class="close" >&times;</span>
                {/* {onclick="closeModal('productModal')"} */}
            </div>
            <form id="productForm">
                <div class="modal-body">
                    <div class="form-group">
                        <label for="productName">Product Name *</label>
                        <input type="text" id="productName" name="name" required/>
                    </div>
                    <div class="form-group">
                        <label for="productPrice">Product Price (₹) *</label>
                        <input type="number" id="productPrice" name="price" min="0" step="0.01" required/>
                    </div>
                    <div class="form-group">
                        <label for="productDescription">Product Description *</label>
                        <textarea id="productDescription" name="description" rows="4" required></textarea>
                    </div>
                    <div class="form-group">
                        <label for="productImage">Product Image URL</label>
                        <input type="url" id="productImage" name="image" placeholder="https://example.com/image.jpg"/>
                        <img id="productImagePreview" class="image-preview" />
                    </div>
                    <div class="form-group">
                        <label for="productOrder">Display Order</label>
                        <input type="number" id="productOrder" name="order" min="1" placeholder="1"/>
                        <small class="form-text">Lower numbers appear first</small>
                    </div>
                    <div class="form-group">
                        <label for="productAvailable">Available for Purchase</label>
                        <label class="toggle-switch">
                            <input type="checkbox" id="productAvailable" name="available" checked/>
                            <span class="slider"></span>
                        </label>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" >Cancel</button>
                    {/* {onclick="closeModal('productModal')"} */}
                    <button type="submit" class="btn btn-primary">Save Product</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Admin_Support_Form;