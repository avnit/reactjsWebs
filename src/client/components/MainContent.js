import React from "react"
import image1 from "./img/portfolio/thumbnails/1.jpg";
import image2 from "./img/portfolio/thumbnails/2.jpg";
import image3 from "./img/portfolio/thumbnails/3.jpg";
import image4 from "./img/portfolio/thumbnails/4.jpg";
import image5 from "./img/portfolio/thumbnails/5.jpg";
import image6 from "./img/portfolio/thumbnails/6.jpg";


function MainContent() {
return (

<div>
    <section class="page-section bg-primary" id="about">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <h2 class="text-white mt-0">We've got what you need!</h2>
            <div class="divider light my-4"> </div>
            <p class="text-white-50 mb-4">We got best consultants and experience to make your organization cloud enabled.</p>
            <a class="btn btn-light btn-xl js-scroll-trigger" href="#services">Get Started!</a>
          </div>
        </div>
      </div>
    </section>

    <section class="page-section" id="services">
      <div class="container">
        <h2 class="text-center mt-0">Service provided</h2>
        <div class="divider my-4"></div>
        <div class="row">
          <div class="col-lg-3 col-md-6 text-center">
            <div class="mt-5">
              <i class="fas fa-4x fa-gem text-primary mb-4"></i>
              <h3 class="h4 mb-2">Cloud Migration</h3>
              <p class="text-muted mb-0">Migrate your applications to AWS,Google or Azure cloud</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 text-center">
            <div class="mt-5">
              <i class="fas fa-4x fa-laptop-code text-primary mb-4"></i>
              <h3 class="h4 mb-2">Rebuild application in cloud</h3>
              <p class="text-muted mb-0">Cloud native development. </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 text-center">
            <div class="mt-5">
              <i class="fas fa-4x fa-globe text-primary mb-4"></i>
              <h3 class="h4 mb-2">Cloud Support</h3>
              <p class="text-muted mb-0">Support for all cloud platforms</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 text-center">
            <div class="mt-5">
              <i class="fas fa-4x fa-heart text-primary mb-4"></i>
              <h3 class="h4 mb-2">Cloud statergy</h3>
              <p class="text-muted mb-0">Build a statergy to migrate to cloud</p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section id="portfolio">
      <div class="container-fluid p-0">
        <div class="row no-gutters">
          <div class="col-lg-4 col-sm-6">
            <a class="portfolio-box" href="img/portfolio/fullsize/1.jpg">
              <img class="img-fluid" src={image1} alt="" />
              <div class="portfolio-box-caption">
                <div class="project-category text-white-50">
                  Category
                </div>
                <div class="project-name">
                  Project Name
                </div>
              </div>
            </a>
          </div>
          <div class="col-lg-4 col-sm-6">
            <a class="portfolio-box" href="img/portfolio/fullsize/2.jpg">
              <img class="img-fluid" src={image2} alt="" />
              <div class="portfolio-box-caption">
                <div class="project-category text-white-50">
                  Category
                </div>
                <div class="project-name">
                  Project Name
                </div>
              </div>
            </a>
          </div>
          <div class="col-lg-4 col-sm-6">
            <a class="portfolio-box" href="img/portfolio/fullsize/3.jpg">
              <img class="img-fluid" src={image3} alt="" />
              <div class="portfolio-box-caption">
                <div class="project-category text-white-50">
                  Category
                </div>
                <div class="project-name">
                  Project Name
                </div>
              </div>
            </a>
          </div>
          <div class="col-lg-4 col-sm-6">
            <a class="portfolio-box" href="img/portfolio/fullsize/4.jpg">
              <img class="img-fluid" src={image4} alt="" />
              <div class="portfolio-box-caption">
                <div class="project-category text-white-50">
                  Category
                </div>
                <div class="project-name">
                  Project Name
                </div>
              </div>
            </a>
          </div>
          <div class="col-lg-4 col-sm-6">
            <a class="portfolio-box" href="img/portfolio/fullsize/5.jpg">
              <img class="img-fluid" src={image5} alt="" />
              <div class="portfolio-box-caption">
                <div class="project-category text-white-50">
                  Category
                </div>
                <div class="project-name">
                  Project Name
                </div>
              </div>
            </a>
          </div>
          <div class="col-lg-4 col-sm-6">
            <a class="portfolio-box" href="img/portfolio/fullsize/6.jpg">
              <img class="img-fluid" src={image6} alt="" />
              <div class="portfolio-box-caption p-3">
                <div class="project-category text-white-50">
                  Category
                </div>
                <div class="project-name">
                  Project Name
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="page-section" id="contact">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <h2 class="mt-0">Let's Get In Touch!</h2>
            <div class="divider my-4" />
            <p class="text-muted mb-5">Ready to start your next project with us? Give us a call or send us an email and we will get back to you as soon as possible!</p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 ml-auto text-center">
            <i class="fas fa-phone fa-3x mb-3 text-muted"></i>
            <div>+1 (312)-292-7155</div>
          </div>
          <div class="col-lg-4 mr-auto text-center">
            <i class="fas fa-envelope fa-3x mb-3 text-muted"></i>
            <a class="d-block" href="mailto:hr@asbsolutions.awsapps.com">hr@asbsolutions.awsapps.com</a>
          </div>
        </div>
      </div>
    </section>

    <section class="page-section" id="open position">
      <div class="container">

      </div>
    </section>


</div>
  )
}

export default MainContent
