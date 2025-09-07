import style from "../styles/Donation.module.css"

const Donation = () => {


    return (
        <section id="donate" className={`${style.donation_section}`}>
            <div className={`${style.container}`}>
                <h2 className={`${style.section_title}`}>Support Our Cause</h2>
                <div className={`${style.fade_in}`}>
                    <p className={`${style.donate_message}`}>Your contribution helps us continue our mission of creating positive change in communities.</p>

                    <div className={`${style.donate_options}`}>
                        <button className={`${style.donate_btn}`} 
                        // onClick="donate(100)"
                        >₹100</button>
                        <button className={`${style.donate_btn}`} 
                        // onClick="donate(500)"
                        >₹500</button>
                        <button className={`${style.donate_btn}`} 
                        // onClick="donate(1000)"
                        >₹1000</button>
                        <button className={`${style.donate_btn}`} 
                        // onClick="donate(2500)"
                        >₹2500</button>
                    </div>

                    <div className={`${style.custom_amount}`}>
                        <input type="number" id="customAmount" placeholder="Enter custom amount" min="1" />
                        <button className={`${style.btn_primary}`} 
                        // onClick="donateCustom()"
                        >Donate Custom Amount</button>
                    </div>

                    <div className={style.impactBox}>
                        <h4 className={style.impactTitle}>Your Impact</h4>
                        <div className={style.impactGrid}>
                            <div className={style.impactItem}>
                                <strong className={style.impactValue}>₹100</strong><br />
                                <small className={style.impactText}>Feeds 5 people</small>
                            </div>
                            <div className={style.impactItem}>
                                <strong className={style.impactValue}>₹500</strong><br />
                                <small className={style.impactText}>Plants 10 trees</small>
                            </div>
                            <div className={style.impactItem}>
                                <strong className={style.impactValue}>₹1000</strong><br />
                                <small className={style.impactText}>Provides clothing for a family</small>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Donation