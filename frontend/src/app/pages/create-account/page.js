'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
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
  // Add remaining as needed
};

export default function StepPage({ params }) {
  const stepNumber = parseInt(params.stepNumber);
  const StepComponent = steps[stepNumber];
  const router = useRouter();

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
      router.push(`/create-account/step/${stepNumber + 1}`);
    }
  };

  const prevStep = () => {
    if (stepNumber > 1) {
      router.push(`/create-account/step/${stepNumber - 1}`);
    }
  };

  if (!StepComponent) return <p>Invalid step</p>;

  return (
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
            onClick={() => {
              console.log('Final Submit', formData);
            }}
          >
            ❤️ Submit
          </button>
        )}
      </div>
    </div>
  );
}



// "use client";
// import { useState } from "react";
// import Step1 from "@/app/component/Steps/Step1";
// import Step2 from "@/app/component/Steps/Step2";
// import Step3 from "@/app/component/Steps/Step3";
// import Step4 from "@/app/component/Steps/Step4";
// import Step5 from "@/app/component/Steps/Step5";
// import Step6 from "@/app/component/Steps/Step6";
// import Step7 from "@/app/component/Steps/Step7";
// import Step8 from "@/app/component/Steps/Step8";
// import Step9 from "@/app/component/Steps/Step9";
// import Step10 from "@/app/component/Steps/Step10";
// import Step11 from "@/app/component/Steps/Step11";
// // import Step12 from "@/app/component/Steps/Step12";
// // import Step13 from "@/app/component/Steps/Step13";
// // import Step14 from "@/app/component/Steps/Step14";
// import "./createAccount.css";
// import Image from "next/image";

// export default function CreateAccount() {
  
//   const [step, setStep] = useState(1);
//   const [showConsent, setShowConsent] = useState(true);
//   const [formData, setFormData] = useState({
//     name: "",
//     photos: [],
//     email: "",
//     interestedIn: "",
//     ageRange: [23, 70],
//     gender: "",
//     mode: "date",
//     smoke: "",
//     drink: "",
//     Merital: "",
//     dob: "",
//     city: "",
//     religion: "",
//     interests: "",
//     aadhaar: "",
//     phone: "",
//     otp: "",
//     location: "",
//     hobbies: [],
//     sexualOrientation: "",
//     weight: "",
//     height: "",
//     lookingFor: "",
//     relationshipType: "",
//     profilePic: "",
//     education: "",
//     occupation: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validateStep = () => {
//     switch (step) {
//       case 1:
//         return formData.name.trim() !== "";
//       case 2:
//         return formData.email.trim() !== "";
//       case 3:
//         return formData.gender.trim() !== "";
//       case 4:
//         return formData.mode.trim() !== "";
//       case 5:
//         return formData.smoke.trim() !== "";
//       case 6:
//         return formData.drink.trim() !== "";
//       case 7:
//         return formData.Merital.trim() !== "";
//       case 8:
//         return formData.dob.trim() !== "";
//       case 9:
//         return formData.religion.trim() !== "";
//         case 10:
//           return formData.aadhaar.length === 12 && formData.phone.trim() !== "";
        
//       case 11:
//         return (
//           formData.sexualOrientation.trim() !== "" &&
//           formData.height.trim() !== "" &&
//           formData.weight.trim() !== ""
//         );
//       case 12:
//         return formData.height.trim() !== "";
//       case 13:
//         return formData.hobbies.length > 0;
//       case 14:
//         return formData.education.trim() !== "";
//       case 15:
//         return formData.password.trim() !== "";
//       default:
//         return true;
//     }
//   };

//   const nextStep = () => {
//     if (validateStep()) {
//       console.log("step",step);
      
//       setStep((prev) => (prev < 15 ? prev + 1 : prev));
//     } else {
//       alert("Please fill in the required field(s) before continuing.");
//     }
//   };

//   const prevStep = () => {
//     setStep((prev) => (prev > 1 ? prev - 1 : prev));
//   };

//   const handleSubmit = () => {
//     console.log("Form Submitted:", formData);
//   };

//   const renderStep = () => {
//     switch (step) {
//       case 1:
//         return <Step1 formData={formData} handleChange={handleChange} setFormData={setFormData} />;
//       case 2:
//         return <Step2 formData={formData} handleChange={handleChange} setFormData={setFormData} />;
//       case 3:
//         return <Step3 formData={formData} setFormData={setFormData} />;
//       case 4:
//         return <Step4 formData={formData} setFormData={setFormData} />;
//       case 5:
//         return <Step5 formData={formData} setFormData={setFormData} />;
//       case 6:
//         return <Step6 formData={formData} setFormData={setFormData} />;
//       case 7:
//         return <Step7 formData={formData} setFormData={setFormData} />;
//       case 8:
//         return <Step8 formData={formData} setFormData={setFormData} />;
//       case 9:
//         return <Step9 formData={formData} setFormData={setFormData} />;
//       case 10:
//         return <Step10 formData={formData} handleChange={handleChange} setFormData={setFormData} />;
//       case 11:
//         return <Step11 formData={formData} handleChange={handleChange} setFormData={setFormData} />;
//       // case 12:
//       //   return <Step12 formData={formData} handleChange={handleChange} setFormData={setFormData} />;
//       // case 13:
//       //   return <Step13 formData={formData} setFormData={setFormData} />;
//       // case 14:
//       //   return <Step14 formData={formData} handleChange={handleChange} setFormData={setFormData} />;
//       case 15:
//         return (
//           <div>
//             <h2>Step 15: Password</h2>
//             <input
//               name="password"
//               type="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="form-input"
//             />
//           </div>
//         );
//       default:
//         return <div>Invalid Step</div>;
//     }
//   };

//   return (
//     <div className="form-container">
//       {showConsent ? (
//         <div className="consent-popup">
//           <Image src="/logo.png" alt="logo" width={100} height={70} className="consent-logo" />
//           <h2 className="consent-title"> Before You Swipe</h2>
//           <p className="consent-text">
//             Welcome! We are excited to be part of your dating journey.
//             <br /><br />
//             Here we treat everyone with kindness and respect, no matter their race, religion, nationality, ethnicity, skin color, ability, size, sex, gender identity, or sexual orientation.
//             <br /><br />
//             In our mission to actively keep this platform safe and inclusive, we ask you to join us by adhering to our <a href="#">guidelines</a>.
//             <br /><br />
//             And remember: We have always got your back!
//           </p>
//           <p className="consent-footer">With love, The Team</p>
//           <button className="consent-button" onClick={() => setShowConsent(false)}>I agree</button>
//         </div>
//       ) : (
//         <div className="form-card">
//           <div className="form-header">
//             <h2>Create Your Love Profile</h2>
//             <p>Step {step} of 15</p>
//           </div>
//           <div className="form-body">{renderStep()}</div>
//           <div className="form-footer">
//             {step > 1 && (
//               <button className="btn secondary" onClick={prevStep}>← Back</button>
//             )}
//             {step < 15 ? (
//               <button className="btn primary" onClick={nextStep}>Next →</button>
//             ) : (
//               <button className="btn submit" onClick={handleSubmit} type="submit">❤️ Submit</button>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
