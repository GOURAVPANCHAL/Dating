import Head from 'next/head';
import Image from 'next/image';
import './Purpose.css';
import pic1 from '@/app/Images/banner7.png'
import pic2 from '@/app/Images/img.png'
import pic3 from '@/app/Images/romantic.png'
import pic4 from '@/app/Images/passion.png'
import pic5 from '@/app/Images/money.jpg'




export default function PurposePage() {
  return (
    <div className="container">
      {/* Hero Section */}
      <header className="hero">
        <div className="heroContent">
          <h1>Welcome to <span>Luvnestor</span></h1>
          <h2>Where <span className="highlightTextOnly">Meaningful Connections</span> Begin</h2>
          <p className="heroText">💼 Earn Money by Sharing Connection, Support & Companionship</p>
          <div className="heroButtons">
            <a href="/signup" className="button primaryButton">Find Your Match</a>
            <a href="/become-professional" className="button outlineButton">Earn as a Guide</a>
          </div>
        </div>
        <div className="heroImage">
          <Image 
            src={pic1}
            className='Purpose-MainSecImg'
            alt="Happy couple talking" 
            priority
          />
        </div>
      </header>

      {/* Purpose Section */}
      <section className="section purposeSection">
        <div className="sectionImage">
          <Image 
            src={pic2}
            className='purposeSecImg'
            alt="Couple having coffee"  
          />
        </div>
        <div className="sectionContent">
          <h2 className="sectionTitle">More Than <span className="highlightText">Just Dating</span></h2>
          <p className="sectionText">
          🌹 Your Time, Energy & Presence Are Valuable — Get Paid for Being Genuine
          At <strong> Luvnestor </strong>, you are not just joining a dating platform — you are stepping into a new way to connect and earn. Whether you're offering heartfelt conversations, warm companionship, or respectful physical closeness (only with mutual consent), you can monetize your presence and emotional value.


          </p>
          <div className="benefitsGrid">
            <div className="benefitCard">
          
              <h3>🗨️ 1. Paid Chat Sessions</h3>
              <p>Get paid per minute or per session for meaningful conversations — be a listener, motivator, or emotional companion.</p>
            </div>
            <div className="benefitCard">
             
              <h3>☕ 2. Meetings with Purpose</h3>
              <p>Offer coffee dates, walk meetups, lunch talks, or calming presence for someone who just needs company.</p>
            </div>
            <div className="benefitCard">
             
              <h3>💕 3. Guided Dating Experiences</h3>
              <p>Help others gain confidence in dating, plan the perfect evening, or just be their kind and genuine companion.</p>
            </div>

            <div className="benefitCard">
             
              <h3>💆 4. Mental & Emotional Relaxation Support</h3>
              <p>Create calm, safe spaces where users can vent, share stress, or find peace with your guidance and presence.</p>
            </div>

          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section howItWorks">
        <h2 className="sectionTitle centerTitle">How <span className="highlightText">Luvnestor</span> Works</h2>
        
        <div className="workflowSteps">
          <div className="stepCard">
            <div className="stepNumber">1</div>
            <Image 
               src={pic3}
              alt="Find your match" 
              width={300} 
              height={200}
              className="stepImage"
            />
            <h3>Find Your Match</h3>
            <p>Connect with like-minded couples who share your interests and values</p>
          </div>
          
          <div className="stepCard">
            <div className="stepNumber">2</div>
            <Image 
           src={pic4}
              alt="Plan your date" 
              width={300} 
              height={700}
              className="stepImage"
            />
            <h3> Emotional/Physical Support (Only if Mutually Agreed)</h3>
            <p>When both parties are ready and respectful, offer physical closeness — like hugs, touch therapy, or consensual intimacy. It’s always optional, always safe.</p>
          </div>
          
          <div className="stepCard">
            <div className="stepNumber">3</div>
            <Image 
               src={pic1}
              alt="Enjoy the moment" 
              width={300} 
              height={200}
              className="stepImage"
            />
            <h3>Enjoy the Connection</h3>
            <p>Focus on each other and build meaningful memories together</p>
          </div>
        </div>
      </section>

      {/* Earn Money Section */}
      <section className="section earnSection">
        <div className="sectionContent">
          <h2 className="sectionTitle ">Turn Your <span className="highlightText">Emotional Intelligence</span> Into Income</h2>
          <p className="sectionText">
            Become a <strong>Certified Connection Guide</strong> and earn money by helping others build meaningful relationships.
          </p>
          
          <div className="earnGrid">
            <div className="earnCard">
              <div className="earnIcon">💰</div>
              <h3>Set Your Rates</h3>
              <p>Charge what you're worth for your time and expertise</p>
            </div>
            <div className="earnCard">
              <div className="earnIcon">🌟</div>
              <h3>Flexible Schedule</h3>
              <p>Work when you want, as much or as little as you like</p>
            </div>
            <div className="earnCard">
              <div className="earnIcon">💎</div>
              <h3>Premium Clients</h3>
              <p>Access to members looking for premium experiences</p>
            </div>
          </div>
          
        <div className='buttonSec'>
        <a href="/become-professional" className="button secondaryButton largeButton">
            Become a Connection Guide
          </a>
        </div>
        </div>
        <div className="sectionImage">
          <Image 
             src={pic5}
            alt="Professional helping couple" 
            className='PurposeImg'
           
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials">
        <h2 className="sectionTitle centerTitle">Success <span className="highlightText">Stories</span></h2>
        <div className="testimonialGrid">
          <div className="testimonialCard">
            <Image 
              src={pic1}
              alt="Happy couple" 
              width={120} 
              height={120}
              className="testimonialImage"
            />
            <p className="testimonialText">
            "Luvnestor helped us break out of our routine and rediscover why we fell in love. The conversation guides were incredibly helpful!"
            </p>
            <p className="testimonialAuthor">- Sarah & Mark</p>
          </div>
          
          <div className="testimonialCard">
            <Image 
             src={pic1}
              alt="Happy couple" 
              width={120} 
              height={120}
              className="testimonialImage"
            />
            <p className="testimonialText">
              "As a Connection Guide, I've been able to turn my counseling skills into a rewarding side income while helping others."
            </p>
            <p className="testimonialAuthor"> David, Connection Guide</p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section finalCta">
        <h2 className="ctaTitle">Ready to Start Your <span className="highlightText1">Luvnestor Journey</span>?</h2>
        <p className="ctaText">Join thousands of couples building deeper connections today</p>
        <div className="ctaButtons">
          <a href="/signup" className="button primaryButton largeButton">Find Your Match</a>
          <a href="/become-professional" className="button secondaryButton largeButton">Become a Guide</a>
        </div>
      </section>
    </div>
  );
}
