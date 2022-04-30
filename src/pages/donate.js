import React from 'react'
import "../style/admin.css"

function donate() {
  return (
 <>   
          <section id="pricing">
        <div className="container-fluid ">
            <div className="donate-head d-flex my-5 flex-column text-center ">
                <h2 className="donate">Donate as much you want.</h2>
                <p className="quote">"We make a living by what we get. We make a life by what we give."

                    ---- Winston Churchill</p>
            </div>

            <div className="container">
                <div className="card">
                    <div className="text-center card-header">
                        Donate <i className="fa fa-heartbeat" aria-hidden="true"></i>
                    </div>
                    <div className="text-center">
                        <h1>Select an Amount*</h1>

                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 pricing-col">
                        <div className="card m-2">

                            <div className="card-body">
                                <h2><i className="fa fa-inr" aria-hidden="true"></i>1500</h2>
                                <p>could purchase a winter coat for one kid.</p>

                                <div className="d-grid">
                                    <button type="button" className="btn btn-lg btn-dark">Donate</button>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-4 col-md-6 pricing-col">
                        <div className="card m-2">

                            <div className="card-body">
                                <h2><i className="fa fa-inr" aria-hidden="true"></i>2500</h2>
                                <p>could buy a school supplies for an entire year.</p>

                                <div className="d-grid">
                                    <button type="button" className="btn btn-lg btn-dark">Donate</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 pricing-col">
                        <div className="card m-2">

                            <div className="card-body">
                                <h2><i className="fa fa-inr" aria-hidden="true"></i>3500</h2>
                                <p>could support the cost of field lessons, and awards.</p>

                                <div className="d-grid">
                                    <button type="button" className="btn btn-lg btn-dark">Donate</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 pricing-col">
                        <div className="card m-2">

                            <div className="card-body">
                                <h2><i className="fa fa-inr" aria-hidden="true"></i>4500</h2>
                                <p>Would make it possible to purchase additional books for kids.</p>

                                <div className="d-grid">
                                    <button type="button" className="btn btn-lg btn-dark">Donate</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 pricing-col">
                        <div className="card m-2">

                            <div className="card-body">
                                <h2><i className="fa fa-inr" aria-hidden="true"></i>5500</h2>
                                <p>could cover the cost of extended learning opportunities.</p>

                                <div className="d-grid">
                                    <button type="button" className="btn btn-lg btn-dark">Donate</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer id="footer">

<div className="container-fluid">
    <div className="row">
        <div className="col-lg-6">
            <div className="lorem text-center">
                <h1>Let's Talk</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta pariatur nihil veniam fuga
                    culpa ab eius in animi molestiae, dolorum qui corporis distinctio quo minus fugit
                    perferendis quis autem delectus!</p>
                <button type="button" className="btn btn-lg btn-light"><a href="./join text-none">Be a Member</a></button>
            </div>
        </div>
        <div className="col-lg-6">
                <h1>Contact Us:</h1>
                <i className="m-1 fa fa-twitter" aria-hidden="true"></i>
                <i className="m-1 fa fa-facebook-official" aria-hidden="true"></i>
                <i className="m-1 fa fa-instagram" aria-hidden="true"></i>
                <i className="m-1 fa fa-envelope" aria-hidden="true"></i>
                <p>Email : firstmy@gmail.com</p>
                <p>Phone no. : 6265915363</p>
                <p>© Copyright firstmy</p>
        </div>
    </div>
</div>
</footer>
 </>
  )
}

export default donate