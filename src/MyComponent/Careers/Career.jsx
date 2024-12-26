import React from "react";
import "./Career.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import dream from './Images/dreams.jpg'
import webw from './Images/web-w.jpg'
import androidOne from './Images/android1-w.jpg'
import graphicdesign from './Images/graphicdesign-w.jpg'
import machine from './Images/machine.jpg'
import datascience from './Images/datascience-w.jpg'
import qa from './Images/qa.jpeg'
import dreamsTwo from './Images/dreams-2.jpg'
import HeroBgFour from './Images/hero-bg4.jpg'
import work from './Images/work.jpg'


const Career = () => {
  return (
    <>
      <Navbar />

      <div class="hero-content-overlay" id="Home">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="hero-content-wrap flex flex-column justify-content-center align-items-start">
                <header class="entry-header">
                  <h4 data-aos="fade-right">Internships that Shape Futures!</h4>
                  <h1 data-aos="fade-left">
                    Kickstart your career
                    <br />
                    with internships!
                  </h1>
                </header>
                <div class="entry-content">
                  <p className="fontGrey">
                    {" "}
                    Nhancio is a leading provider of internship opportunities
                    for students and recent graduates. We offer interships in
                    various fields to kick-start your career!
                  </p>
                </div>
                <footer class="entry-footer read-more">
                  <a href="#About">Learn more</a>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="icon-boxes" id="About">
        <div class="container-fluid">
          <div class="col-12 px-24">
            <div class="flex flex-wrap align-items-stretch">
              <div
                class="icon-box"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
              >
                <div class="icon">
                  <span>
                    <i class="fa-solid fa-computer"></i>
                  </span>
                </div>
                <header class="entry-header">
                  <h2 class="entry-title">Skill Development</h2>
                </header>
                <div class="entry-content">
                  <p>
                    Our internship program isn't just about completing tasks or
                    gaining work experience; it's about empowering students with
                    the skills and knowledge they need to excel in their future
                    careers.
                  </p>
                </div>
              </div>
              <div
                class="icon-box"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
              >
                <div class="icon">
                  <span>
                    <i class="fa-solid fa-globe"></i>
                  </span>
                </div>
                <header class="entry-header">
                  <h2 class="entry-title">Real-World Experience</h2>
                </header>
                <div class="entry-content">
                  <p>
                    Through our internships, students have the chance to apply
                    their academic knowledge in real-world scenarios and gaining
                    practical skills.
                  </p>
                </div>
              </div>
              <div
                class="icon-box"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
              >
                <div class="icon">
                  <span>
                    <i class="fa-solid fa-user"></i>
                  </span>
                </div>
                <header class="entry-header">
                  <h2 class="entry-title">Professional Networking</h2>
                </header>
                <div class="entry-content">
                  <p>
                    Networking is an essential aspect of any successful career,
                    and we provide the perfect platform to establish connections
                    that can open doors to new opportunities.
                  </p>
                </div>
              </div>
              <div
                class="icon-box"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
              >
                <div class="icon">
                  <span>
                    <i class="fa-solid fa-chalkboard-user"></i>
                  </span>
                </div>
                <header class="entry-header">
                  <h2 class="entry-title">Mentorship and Guidance</h2>
                </header>
                <div class="entry-content">
                  <p>
                    Experience the power of Mentorship and Guidance as we
                    connect students with industry professionals who provide
                    one-on-one guidance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="about-section">
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-6 flex align-content-center mt-5 mt-lg-0">
              <div class="ezuca-video position-relative">
                <img src={dream} alt="" />
              </div>
            </div>

            <div class="col-12 col-lg-6 align-content-lg-stretch">
              <header class="heading">
                <h2 class="entry-title">Follow your dreams with Nhancio.</h2>
                <p>
                  Nhancio will help students to grow stronger and making your
                  dreams come true. Our internship program is designed in such a
                  way that it will help the students to grow stronger. We are
                  always ready to help our interns so, that he can fulfill his
                  dreams.
                  <br></br>
                  Everyone who is a part of our community has the same drive and
                  excitement for creation as you do.You will enjoy being a part
                  of our community as you will get a warm and friendly
                  atmosphere.
                </p>
              </header>
            </div>
          </div>
        </div>
      </section>

      <section
        class="featured-courses vertical-column courses-wrap"
        id="Internships"
      >
        <div class="container">
          <div class="row mx-m-25">
            <div class="col-12 px-25">
              <header class="heading flex flex-wrap justify-content-between align-items-center">
                <h2 class="entry-title">Our Internships</h2>
              </header>
            </div>
            <div
              class="col-12 col-md-6 col-lg-4 px-25"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              <div class="course-content">
                <figure class="course-thumbnail">
                  <a>
                    <img src={webw} alt="" />
                  </a>
                </figure>
                <div class="course-content-wrap">
                  <header class="entry-header">
                    <h2 class="entry-title">
                      <a>Web Development</a>
                    </h2>
                    <div class="entry-meta flex align-items-center">
                      <div class="course-date">
                        Build stunning, live and responsive websites with
                        cutting edge tech stack.
                      </div>
                    </div>
                  </header>
                  <footer class="entry-footer flex justify-content-between align-items-center">
                    <div class="course-ratings flex justify-content-end align-items-center btn">
                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSd9TuXoa7D2TrrDxALFiCyih6_QT5OYzosETb-lGukcUY0vPQ/viewform"
                        target="_blank"
                      >
                        Apply now
                      </a>
                    </div>
                  </footer>
                </div>
              </div>
            </div>
            <div
              class="col-12 col-md-6 col-lg-4 px-25"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              <div class="course-content">
                <figure class="course-thumbnail">
                  <a>
                    <img src={androidOne} alt="" />
                  </a>
                </figure>
                <div class="course-content-wrap">
                  <header class="entry-header">
                    <h2 class="entry-title">
                      <a>App Development</a>
                    </h2>
                    <div class="entry-meta flex align-items-center">
                      <div class="course-date">
                        Build native multi-platform applications with flutter
                        and dart.
                      </div>
                    </div>
                  </header>
                  <footer class="entry-footer flex justify-content-between align-items-center">
                    <div class="course-ratings flex justify-content-end align-items-center btn">
                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSd9TuXoa7D2TrrDxALFiCyih6_QT5OYzosETb-lGukcUY0vPQ/viewform"
                        target="_blank"
                      >
                        Apply now
                      </a>
                    </div>
                  </footer>
                </div>
              </div>
            </div>

            <div
              class="col-12 col-md-6 col-lg-4 px-25"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              <div class="course-content">
                <figure class="course-thumbnail">
                  <a>
                    <img src={graphicdesign} alt="" />
                  </a>
                </figure>
                <div class="course-content-wrap">
                  <header class="entry-header">
                    <h2 class="entry-title">
                      <a>Graphic designing</a>
                    </h2>
                    <div class="entry-meta flex align-items-center">
                      <div class="course-date">
                        Unleashing Creativity: Transforming Ideas into Visuals.
                      </div>
                    </div>
                  </header>
                  <footer class="entry-footer flex justify-content-between align-items-center">
                    <div class="course-ratings flex justify-content-end align-items-center btn">
                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSd9TuXoa7D2TrrDxALFiCyih6_QT5OYzosETb-lGukcUY0vPQ/viewform"
                        target="_blank"
                      >
                        Apply now
                      </a>
                    </div>
                  </footer>
                </div>
              </div>
            </div>
            <div
              class="col-12 col-md-6 col-lg-4 px-25"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              <div class="course-content">
                <figure class="course-thumbnail">
                  <a>
                    <img src={machine} alt="" />
                  </a>
                </figure>
                <div class="course-content-wrap">
                  <header class="entry-header">
                    <h2 class="entry-title">
                      <a>Digital marketing with AI</a>
                    </h2>
                    <div class="entry-meta flex align-items-center">
                      <div class="course-date">
                        Leverage AI to establish high RoI marketing campaigns.
                      </div>
                    </div>
                  </header>
                  <footer class="entry-footer flex justify-content-between align-items-center">
                    <div class="course-ratings flex justify-content-end align-items-center btn">
                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSd9TuXoa7D2TrrDxALFiCyih6_QT5OYzosETb-lGukcUY0vPQ/viewform"
                        target="_blank"
                      >
                        Apply now
                      </a>
                    </div>
                  </footer>
                </div>
              </div>
            </div>
            <div
              class="col-12 col-md-6 col-lg-4 px-25"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              <div class="course-content">
                <figure class="course-thumbnail">
                  <a>
                    <img src={datascience} alt="" />
                  </a>
                </figure>
                <div class="course-content-wrap">
                  <header class="entry-header">
                    <h2 class="entry-title">
                      <a>Data Science and AI</a>
                    </h2>
                    <div class="entry-meta flex align-items-center">
                      <div class="course-date">
                        Implement advanced ML and AI algorithms in business
                        workflows to enrich the experiences.
                      </div>
                    </div>
                  </header>
                  <footer class="entry-footer flex justify-content-between align-items-center">
                    <div class="course-ratings flex justify-content-end align-items-center btn">
                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSd9TuXoa7D2TrrDxALFiCyih6_QT5OYzosETb-lGukcUY0vPQ/viewform"
                        target="_blank"
                      >
                        Apply now
                      </a>
                    </div>
                  </footer>
                </div>
              </div>
            </div>
            <div
              class="col-12 col-md-6 col-lg-4 px-25"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              <div class="course-content">
                <figure class="course-thumbnail">
                  <a>
                    <img src={qa} alt="" />
                  </a>
                </figure>
                <div class="course-content-wrap">
                  <header class="entry-header">
                    <h2 class="entry-title">
                      <a>QA & Testing</a>
                    </h2>
                    <div class="entry-meta flex align-items-center">
                      <div class="course-date">
                        Learn API and webservice tessting with new age tools.
                      </div>
                    </div>
                  </header>
                  <footer class="entry-footer flex justify-content-between align-items-center">
                    <div class="course-ratings flex justify-content-end align-items-center btn">
                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSd9TuXoa7D2TrrDxALFiCyih6_QT5OYzosETb-lGukcUY0vPQ/viewform"
                        target="_blank"
                      >
                        Apply now
                      </a>
                    </div>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="about-section about-section2">
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-6 align-content-lg-stretch">
              <header class="heading">
                <h2 class="entry-title">
                  Join Us in Cultivating Future Leaders
                </h2>
                <p>
                  Nhancio is more than an internship provider; we are a
                  community committed to cultivating future leaders. Join us on
                  this exciting journey of growth, exploration, and professional
                  development.
                  <br></br>
                  We understand the challenges young talents face as they step
                  into the dynamic world of work, and we are here to make that
                  transition smoother, impactful, and rewarding.
                </p>
              </header>
            </div>
            <div class="col-12 col-lg-6 flex align-content-center mt-5 mt-lg-0">
              <div class="ezuca-video position-relative">
                <img src={dreamsTwo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="testimonial-section">
        <div
          class="mid-container"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          <h2 class="entry-title">
            Guiding Students towards Life-Changing Internship Opportunities.
          </h2>
          <div class="mid-text">Start your Internship with Nhancio</div>
        </div>
      </section>

      <section class="latest-news-events">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <header class="heading flex justify-content-between align-items-center">
                <h2 class="entry-title">Your Journey Begins Here!</h2>
              </header>
            </div>
            <div class="col-12 col-lg-6">
              <div class="featured-event-content">
                <figure class="event-thumbnail position-relative m-0">
                  <a>
                    <img src={HeroBgFour} alt="" />
                  </a>
                </figure>
              </div>
            </div>
            <div class="col-12 col-lg-6 mt-5 mt-lg-0">
              <div>
                <p className="fontGrey">
                  Don't miss out on the chance to kick-start your career with an
                  internship that truly makes a difference. Join Nhancio and
                  embark on a transformative journey that will shape your future
                  success.
                </p>
                <p className="fontGrey">
                  Ready to take the next step? Explore our internship
                  opportunities and start your journey with Nhancio today.
                </p>

                <p className="fontGrey">Apply now and let us help you unlock your full potential!</p>
                <footer class="entry-footer flex justify-content-between align-items-center">
                  <div class="course-ratings flex justify-content-end align-items-center btn">
                    <a
                      href="https://forms.gle/E6NZ2S6V92Z9AtgKA"
                      target="_blank"
                    >
                      Apply now
                    </a>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="latest-news-events latest-news-events2">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <header class="heading flex justify-content-between align-items-center">
                <h2 class="entry-title ">How Nhancio Works!</h2>
              </header>
            </div>

            <div class="col-12 col-lg-6 mt-5 mt-lg-0">
              <div>
                <p className="fontGrey">
                  Nhancio aims to tackle business challenges by harnessing the
                  talent and creativity of student communities. Through
                  carefully designed internships, we connect businesses with
                  skilled students who bring fresh perspectives and innovative
                  solutions. Our program provides valuable real-world experience
                  for students while offering businesses cost-effective,
                  quality-driven solutions to their problems.
                </p>
                <p className="fontGrey">
                  By leveraging this unique model, Nhancio fosters a
                  collaborative environment where both businesses and students
                  thrive.
                </p>
              </div>
            </div>

            <div class="col-12 col-lg-6">
              <div class="featured-event-content">
                <figure class="event-thumbnail position-relative m-0">
                  <a>
                    <img src={work} alt="" />
                  </a>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="testimonial-section">
        <div
          class="mid-container"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          <h2 class="entry-title">
            Unlock Your Potential with Nhancio: The Internship Experience You
            Deserve!
          </h2>
          <div class="mid-text">Transforming Minds Through Internships.</div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Career;
