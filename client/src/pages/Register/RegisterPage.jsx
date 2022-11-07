import React from "react";

export default function RegisterPage () {

    return (
        <>
      
        <section class="vh-100 bg-image"
 style={{backgroundImage: `url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")` }}>
  <div class="mask d-flex align-items-center h-100 gradient-custom-3">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card" style={{ borderRadius: "15px" }}>
            <div class="card-body p-5">
              <h2 class="text-uppercase text-center mb-5">Create an account</h2>

              <form>

                <div className="form-outline mb-4">
                  <input type="text" id="username" class="form-control form-control-lg" />
                  <label class="form-label" htmlFor="username">username</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="email" id="email" class="form-control form-control-lg" />
                  <label class="form-label" htmlFor="email">email</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="password" id="password" class="form-control form-control-lg" />
                  <label class="form-label" htmlFor="password">Password</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="number" id="experience" class="form-control form-control-lg" />
                  <label class="form-label" for="experience">Experience</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="number" id="level" class="form-control form-control-lg" />
                  <label class="form-label" for="level">Level</label>
                </div>

                <div className="d-flex justify-content-center">
                  <button type="button"
                    class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Submit</button>
                </div>

                <p class="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!"
                    class="fw-bold text-body"><u>Login here</u></a></p>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        
        </>
    )

}