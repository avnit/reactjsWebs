import React from "react"
import Background from "./img/bg-masthead.jpg";

const styles = {
  header: {
    paddingTop: '10rem',
    background: 'linear-gradient(to bottom, #{fade-out($brown, .2)} 0%,#{fade-out($brown, .2)} 100%)',
    // url(" + ${Background} + ")",
    backgroundImage: `url(${Background})`,
    height: '100vh',
    width: '100%',
    //opacity: 0.6,
    //backgroundColor: '#5c4d42',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
}



function Header() {
  return (
    <header style = { styles.header } className="masthead">
      <div class="container h-100">
        <div class="row h-100 align-items-center justify-content-center text-center">
          <div class="col-lg-10 align-self-end">
            <h1 class="text-uppercase text-white font-weight-bold">ASB Solutions Group LLC</h1>
            <div class="divider my-4" />
          </div>
          <div class="col-lg-8 align-self-baseline">
            <p class="text-white-75 font-weight-light mb-5">Statergy, build ,deploy and Support cloud applicaiton on AWS, Google and Azure. </p>
            <a class="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
