import React from 'react';

function Login(){
    return(
        <main className="form-signin w-100 m-auto">
    <form>
          <img className="mb-4" src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"></img>
          <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
      
          <div className="form-floating">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Email address</label></input>
          </div>
          <div className="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">Password</label></input>
          </div>
      
         
          <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
          <p class="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
        </form>
      </main>
    )
}

export default Login;