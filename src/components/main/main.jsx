import React, { Component } from "react";
import "./main.css";
import "./form.css";
import Form from "./form";
import Panel from "./panel";

class Main extends Component {
  render() {
    return (
      <main>
        <span>
          <h2>About Us</h2>
        </span>
        <div className="about-div">
          <p>
            Nu Vel, LLC is a full-service entertainment company founded in
            Richmond, Virginia in 2019 by Ronald Timmons, Ivan Fleming and Harry
            Duncan. Our hopes as a company are to bring people together via
            sound production, intentional content, and inclusive endeavors. As
            an entity we house a number of divisions within our organization.
            Our main focus is entertainment, fashion, and philanthropy.
          </p>

          <p>
            We like to think of ourselves as an essential one stop shop for all
            creatives. The mission is to create opportunities for our diverse
            roster of talent and to continue to support them throughout their
            journey. We are here for you, in every possible way! Do Tel, it’s Nu
            Vel !!
          </p>
        </div>

        <span>
          <h2>Services</h2>
        </span>
        
        <div className="services" id="services_off">
          <div className="card">
            <p className="service__title">Production</p>
            <ul className="services-p">
              <li>Recording</li>
              <li>A&R</li>
              <li>Video Treatment</li>
              <li>Performance booking</li>
            </ul>
          </div>
          <div className="card">
            <p className="service__title">Branding</p>
            <ul className="services-p">
              <li>Styling/Image Consulting</li>
              <li>Merchandise</li>
              <li>Social Media Engagement </li>
              <li>Performance booking</li>
            </ul>
          </div>
          <div className="card">
            <p className="service__title">Marketing</p>
            <ul className="services-p">
              <li>Musical Platform Selection</li>
              <li>Target Audience Engagement</li>
              <li>Advertising/Publicity </li>
              <li>PCampaigns/Brand Activations</li>
            </ul>
          </div>
          <div className="card">
            <p className="service__title">Artist Development</p>
            <ul className="services-p">
              <li>Music Consulting</li>
              <li>Media Training</li>
              <li>Time Management </li>
              <li>Health & Wellness </li>
              <li>"Know your story"</li>
            </ul>
          </div>
        </div>

        <div id="portofolio" className="gallery">
          <div className="gallery__item__one" />
          <div className="gallery__item__two" />
          <div className="gallery__item__three" />
          <div className="gallery__item__four" />
          <div className="gallery__item__five" />
          <div className="gallery__item__six" />
        </div>
        <>
          <Panel />
        </>
        <div>
          <section id="contact">
            <h2 className="form__h2">Contact Us</h2>
            <Form />
          </section>
        </div>
      </main>
    );
  }
}

export default Main;
