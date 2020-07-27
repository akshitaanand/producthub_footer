import React, { Component } from "react";
import ReactDOM from "react-dom";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Modal from "react-bootstrap/Modal";
import { ToastsContainer, ToastsStore } from "react-toasts";
import "./App.css";
import { MDBBtn } from "mdbreact";
import { SocialMediaIconsReact } from "social-media-icons-react";
import NewWindow from "react-new-window";
import { Link, BrowserRouter, Route } from "react-router-dom";
import terms from "./terms.html";

class Footer extends Component {
  handleOnclick() {
    window.open();
  }

  render() {
    return (
      <MDBFooter className="footer">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6" className="toleft">
              <div className="colorpallet">
                <h5
                  className="title"
                  style={{ color: "#f7b748", fontSize: "17px" }}
                >
                  Quick Links
                </h5>
                <div
                  style={{
                    flexDirection: "row",
                    color: "white",
                    fontSize: "15px"
                  }}
                >
                  <MDBBtn>
                    <a style={{ color: "white", fontSize: "17px" }}>About</a>
                  </MDBBtn>
                  <MDBBtn>
                    <a style={{ color: "white", fontSize: "17px" }}>
                      Featured Products
                    </a>
                  </MDBBtn>
                  <MDBBtn>
                    <a style={{ color: "white", fontSize: "17px" }}>
                      How We Work
                    </a>
                  </MDBBtn>
                  <MDBBtn>
                    <a style={{ color: "white", fontSize: "17px" }}>
                      Contact Us
                    </a>
                  </MDBBtn>
                </div>

                <h5
                  className="toleft"
                  style={{ color: "#f7b748", fontSize: "17px" }}
                >
                  Get Started
                </h5>
                <div
                  style={{
                    flexDirection: "row",
                    color: "white",
                    fontSize: "17px"
                  }}
                >
                  <MDBBtn>
                    <a style={{ color: "white", fontSize: "17px" }}>
                      Our Process
                    </a>
                  </MDBBtn>
                  <MDBBtn>
                    <a style={{ color: "white", fontSize: "17px" }}>Sign Up</a>
                  </MDBBtn>
                  <MDBBtn>
                    <a style={{ color: "white", fontSize: "17px" }}>
                      Become A Partner
                    </a>
                  </MDBBtn>
                  <MDBBtn>
                    <a style={{ color: "white", fontSize: "17px" }}>Market</a>
                  </MDBBtn>
                  <MDBBtn>
                    <a style={{ color: "white", fontSize: "17px" }}>FAQ</a>
                  </MDBBtn>
                </div>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <div className="footer-copyright text-center py-3">
          <MDBContainer
            fluid
            style={{ color: "#f7b748", fontSize: "17px", marginright: ".5rem" }}
          >
            <div className="icon">Follow Us! </div>
            <SocialMediaIconsReact
              borderColor="rgba(242,233,233,0.25)"
              borderWidth="5"
              borderStyle="double"
              icon="linkedin"
              iconColor="rgba(1,0,15,1)"
              backgroundColor="rgba(255,255,255,1)"
              iconSize="5"
              roundness="26%"
              url="https://www.linkedin.com/company/producthub-inc/"
              size="37"
            />{" "}
            <SocialMediaIconsReact
              borderColor="rgba(255,255,255,0.25)"
              borderWidth="5"
              borderStyle="double"
              icon="facebook"
              iconColor="rgba(0,0,0,1)"
              backgroundColor="rgba(255,255,255,1)"
              iconSize="5"
              roundness="26%"
              url="https://www.facebook.com/producthub.in"
              size="37"
            />{" "}
            <SocialMediaIconsReact
              borderColor="rgba(255,255,255,0.25)"
              borderWidth="5"
              borderStyle="double"
              icon="instagram"
              iconColor="rgba(0,0,0,1)"
              backgroundColor="rgba(255,255,255,1)"
              iconSize="5"
              roundness="26%"
              url="https://www.instagram.com/producthub.in/?igshid=1hv66f6d3uldd"
              size="37"
            />{" "}
            <SocialMediaIconsReact
              borderColor="rgba(255,255,255,0.25)"
              borderWidth="5"
              borderStyle="double"
              icon="twitter"
              iconColor="rgba(0,0,0,1)"
              backgroundColor="rgba(255,255,255,1)"
              iconSize="5"
              roundness="26%"
              url="https://twitter.com/ProductHub2"
              size="37"
            />
          </MDBContainer>
          <MDBContainer className="tocenter">
            <div style={{ flexDirection: "row" }}>
              <MDBBtn>
                <td
                  style={{ color: "white", fontSize: "17px" }}
                  onClick={() =>
                    window
                      .open("", "Terms and Conditions", "width=200,height=100")
                      .document.write("<h1>Privacy Policy</h1>")
                  }
                >
                  {" "}
                  Privacy Policy
                </td>
              </MDBBtn>
              <MDBBtn>
                <td
                  style={{ color: "white", fontSize: "17px" }}
                  onClick={() =>
                    window
                      .open("", "Terms and Conditions", "width=200,height=100")
                      .document.write(
                        "<h1>TERMS OF USE</h1> <p>Last updated: 2020-07-10 </p> <h3>1. Introduction</h3><p>Welcome to ProductHub LLP (“Company”, “we”, “our”, “us”)! These Terms of Service (“Terms”, “Terms of Service”) govern your use of our website located at producthub.in (together or individually “Service”) operated by ProductHub LLP. Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our web pages. Your agreement with us includes these Terms and our Privacy Policy (“Agreements”). You acknowledge that you have read and understood Agreements, and agree to be bound by them. If you do not agree with (or cannot comply with) Agreements, then you may not use the Service, but please let us know by emailing at hello@producthub.in so we can try to find a solution. These Terms apply to all visitors, users and others who wish to access or use Service.</p>"
                      )
                  }
                >
                  Terms and Conditions
                </td>
              </MDBBtn>
            </div>
          </MDBContainer>
          <MDBContainer>Copyright @2020 ProductHub</MDBContainer>
        </div>
      </MDBFooter>
    );
  }
}

export default Footer;
