import React from 'react'
import './footer.css'
import image1 from '@/app/Images/user/user1.jpeg'
import image2 from '@/app/Images/user/user2.jpeg'
import image3 from '@/app/Images/user/user3.jpeg'

// import image1 from '../../Images/user/people1.png'
// import image2 from '../../Images/user/people2.png'
// import image3 from '../../Images/user/people3.png'

const Footer = () => {
  return (
    <>
    <footer className="site-footer">
      <div className="container">
        <div className="row align-items-center newsletter-row">
          <div className="col-md-6">
            <h6 className="footer-heading">Newsletter Sign Up's</h6>
            <form className="newsletter-form">
              <input type="email" className="form-control email-input" placeholder="Your email address" />
              <button className="upgradebtn">Subscribe</button>
            </form>
          </div>
          <div className="col-md-6 text-md-end text-center mt-4 mt-md-0">
            <h6 className="footer-heading">Join Community</h6>
            <div className="social-icons">
              <a href="#"><i className="bi bi-twitter"></i></a>
              <a href="#"><i className="bi bi-twitch"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-gem"></i></a>
              <a href="#"><i className="bi bi-discord"></i></a>
            </div>
          </div>
        </div>

        <hr />

        {/* Bottom Section */}
        <div className="row footer-main">
          {/* About */}
          <div className="col-md-3 mb-4">
            <h6 className="footer-heading">About Ollya</h6>
            <p>Ollya is a friendly dating theme based on HTML template for the community functionality</p>
            <p><strong>Address:</strong> Suite-13 Tropical Center New Elephant Road 1205</p>
            <p><strong>Contact:</strong> +30 226 4881 514<br />www.yoursitename.com</p>
          </div>

          {/* Featured Members */}
          <div className="col-md-3 mb-4">
            <h6 className="footer-heading">Featured Members</h6>
            <div className="member">
              <img src="/images/user1.jpeg" alt="Samantha" className="member-img" />
              <div>
                <strong>Samantha Lee</strong><br />
                <span className="text-success">Active</span>
              </div>
            </div>
            <div className="member">
              <img  src="/images/user2.jpeg" alt="Peter" className="member-img" />
              <div>
                <strong>Peter McMillan</strong><br />
                <span>2 Hours Ago</span>
              </div>
            </div>
            <div className="member">
              <img  src="/images/user3.jpeg" alt="Tluagtea" className="member-img" />
              <div>
                <strong>Tluagtea Tualzik</strong><br />
                <span className="text-success">Active</span>
              </div>
            </div>
          </div>

          {/* Contacts */}
          <div className="col-md-3 mb-4">
            <h6 className="footer-heading">Contacts & Support</h6>
            <ul className="footer-links">
              <li><a href="#">› About Us</a></li>
              <li><a href="#">› Our Team</a></li>
              <li><a href="#">› Testimonials</a></li>
              <li><a href="#">› Get in Touch</a></li>
              <li><a href="#">› FAQ</a></li>
            </ul>
          </div> 

          {/* Recent Activity */}
          <div className="col-md-3 mb-4">
            <h6 className="footer-heading">Recent Activity</h6>
            {[image1, image2, image3].map( (i,index) => (
              <div className="recent-activity" key={index}>
                <img src={`/activity${i}.jpg`} className="activity-img" alt="Activity" />
                <div>
                  <strong>Where To Find A Good...</strong><br />
                  <small>August 13, 2022</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer ;