//  import "../styles/style.css" 

const Donation = () => {


  return (
    <section id="donate" class="section">
        <div class="container">
            <h2 class="section-title">Support Our Cause</h2>
            <div class="fade-in"   className="text-center mb-[3rem]">
                <p className="font-[1.2rem] mb-[2rem]">Your contribution helps us continue our mission of creating positive change in communities.</p>
                
                <div class="donate-options">
                    <button class="donate-btn" onClick="donate(100)">₹100</button>
                    <button class="donate-btn" onClick="donate(500)">₹500</button>
                    <button class="donate-btn" onClick="donate(1000)">₹1000</button>
                    <button class="donate-btn" onClick="donate(2500)">₹2500</button>
                </div>
                
                <div class="custom-amount">
                    <input type="number" id="customAmount" placeholder="Enter custom amount" min="1"/>
                    <button class="btn btn-primary" onClick="donateCustom()">Donate Custom Amount</button>
                </div>
                
                <div className="mt-[2rem] p-[1.5rem] bg-[#f8f9fa] rounded-[10px] max-w-[600px] mx-auto ">
                    <h4 className="text-[#2c3e50] mb-[1rem] ">Your Impact</h4>
                    <div className="grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] gap-[1rem] text-center">
                        <div>
                            <strong className="text-[#e74c3c]">₹100</strong><br/>
                            <small>Feeds 5 people</small>
                        </div>
                        <div>
                            <strong className="text-[#e74c3c]">₹500</strong><br/>
                            <small>Plants 10 trees</small>
                        </div>
                        <div>
                            <strong className="text-[#e74c3c]">₹1000</strong><br/>
                            <small>Provides clothing for a family</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Donation