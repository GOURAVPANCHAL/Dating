'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import './createAccount.css';
import Image from 'next/image';
import logo from '@/app/Images/logo.png'
// Import steps
import Step1 from '@/app/component/Steps/Step1';
import Step2 from '@/app/component/Steps/Step2';
import Step3 from '@/app/component/Steps/Step3';
import Step4 from '@/app/component/Steps/Step4';
import Step5 from '@/app/component/Steps/Step5';
import Step6 from '@/app/component/Steps/Step6';
import Step7 from '@/app/component/Steps/Step7';
import Step8 from '@/app/component/Steps/Step8';
import Step9 from '@/app/component/Steps/Step9';
import Step10 from '@/app/component/Steps/Step10';
import Step11 from '@/app/component/Steps/Step11';
import Step12 from '@/app/component/Steps/Step12';
import Step13 from '@/app/component/Steps/Step13';
import Step14 from '@/app/component/Steps/Step14';
import Step15 from '@/app/component/Steps/Step15';

const steps = {
  1: Step1,
  2: Step2,
  3: Step3,
  4: Step4,
  5: Step5,
  6: Step6,
  7: Step7,
  8: Step8,
  9: Step9,
  10: Step10,
  11: Step11,
  12: Step12,
  13: Step13,
  14: Step14,
  15: Step15,
};

export default function StepPage() {
  const router = useRouter();
  const [stepNumber, setStepNumber] = useState(1);
  const [showConsent, setShowConsent] = useState(true);
  // Detect step from URL
  useEffect(() => {
    const match = window?.location?.pathname.match(/step\/(\d+)/);
    const currentStep = match ? parseInt(match[1], 10) : 1;
    setStepNumber(currentStep);

    if (currentStep === 1) {
      setShowConsent(true);
    } else {
      setShowConsent(false);
    }
  }, []);

  const handleConsentAgree = () => {
    setShowConsent(false);
  };

  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const updated = { ...formData, [e.target.name]: e.target.value };
    setFormData(updated);
  };

  const StepComponent = steps[stepNumber];
  if (!StepComponent) return <p>Invalid step</p>;

  const nextStep = () => {
    if (stepNumber < 15) {
      router.push(`/pages/create-account/step/${stepNumber + 1}`);
    }
  };

  const prevStep = () => {
    if (stepNumber > 1) {
      router.push(`/pages/create-account/step/${stepNumber - 1}`);
    }
  };

  return (
    <div className="form-container">
      {showConsent ? (
        <div className="consent-popup">
          <Image src={logo} alt="logo" width={70} height={70} />
          <h2 className="consent-title">Before You Swipe</h2>
          <p className="consent-text">
            Welcome! We are excited to be part of your dating journey.
            <br /><br />
            Here we treat everyone with kindness and respect, no matter their race, religion, nationality, ethnicity, skin color, ability, size, sex, gender identity, or sexual orientation.
            <br /><br />
            In our mission to actively keep this platform safe and inclusive, we ask you to join us by adhering to our <a href="#">guidelines</a>.
            <br /><br />
            And remember: We have always got your back!
          </p>
          <p className="consent-footer">With love, The Team</p>
          <button className="consent-button" onClick={handleConsentAgree}>
            I agree
          </button>
        </div>
      ) : (
        <div className="form-card">
          <div className="form-header">
            <h2>Create Your Love Profile</h2>
            <p>Step {stepNumber} of 15</p>
          </div>

          <div className="form-body">
            <StepComponent
              formData={formData}
              handleChange={handleChange}
              setFormData={setFormData}
            />
          </div>

          <div className="form-footer">
            {stepNumber > 1 && (
              <button className="btn secondary" onClick={prevStep}>
                ← Back
              </button>
            )}
            {stepNumber < 15 ? (
              <button className="btn primary" onClick={nextStep}>
                Next →
              </button>
            ) : (
              <button
                className="btn submit"
                onClick={() => router.push("/pages/login")}
              >
                Let's Get Started! ❤️
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
