'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import './createAccount.css';
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
import Image from 'next/image';

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
  // Add Step12-15 when ready
};

export default function StepPage() {
  const router = useRouter();
  const [stepNumber, setStepNumber] = useState(1);
  const [showConsent, setShowConsent] = useState(true);

  useEffect(() => {
    if(typeof window !== 'undefined') {
    const path = window.location.pathname;
    const match = path.match(/step\/(\d+)/);
    if (match) {
      setStepNumber(parseInt(match[1], 10));
    }
}
  }, []);

  const StepComponent = steps[stepNumber];

  const [formData, setFormData] = useState(
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('formData') || '{}')
      : {}
  );

  const handleChange = (e) => {
    setFormData((prev) => {
      const updated = { ...prev, [e.target.name]: e.target.value };
      localStorage.setItem('formData', JSON.stringify(updated));
      return updated;
    });
  };

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

  if (!StepComponent) return <p>Invalid step</p>;

  return (
    <div className="form-container">
{showConsent ? (
        <div className="consent-popup">
          <Image src="/logo.png" alt="logo" width={100} height={70} className="consent-logo" />
          <h2 className="consent-title"> Before You Swipe</h2>
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
          <button className="consent-button" onClick={() => setShowConsent(false)}>I agree</button>
        </div>
        
      ) :( <div className="form-card">
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
              onClick={() => {
                console.log('Final Submit', formData);
              }}
            >
              ❤️ Submit
            </button>
          )}
        </div>
      </div>) }
    </div>
  );
}
