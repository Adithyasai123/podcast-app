import React from 'react';


const Login = () => {
  return (
    <div className="Register-container">
      <section className="vh-100" style={{ backgroundColor: ' #0E101C' }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-white" style={{ borderRadius: '25px',backgroundColor: ' #0E101C' }} >
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

                      <form className="mx-1 mx-md-4">

                       

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="email" id="form3Example3c" className="form-control" />
                            <label className="form-label" htmlFor="form3Example3c">Email</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="password" id="form3Example4c" className="form-control" />
                            <label className="form-label" htmlFor="form3Example4c">Password</label>
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="button" className="btn btn-primary btn-lg"style={{backgroundColor:"#EA0583",border:"none"}}>Login</button>
                        </div>

                      </form>

                    </div>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
