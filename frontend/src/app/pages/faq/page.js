"use client";
import Image from "next/image";
import React, { useState } from "react";
import pic1 from "@/app/Images/faqimage.jpg";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./faq.css";
import MeetOn from "@/app/component/MeetOn/page";
import Link from "next/link";


const Page = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What In This Dating Website?",
      answer:
        "This dating website helps people connect based on shared interests and preferences, offering a safe and engaging platform for meaningful relationships.",
    },
    {
      question: "Is There A Trial?",
      answer:
        "Yes, we use top-level encryption and manual profile verification to keep your experience safe and private.",
    },
    {
      question: "Are My Information Safe?",
      answer:
        "Yes, basic features are free. However, premium features like advanced filters and unlimited messages are available with a subscription.",
    },
    {
      question: "How Do I Contact You?",
      answer:
        "You can delete your profile anytime from the settings page. Once deleted, your data will be removed permanently.",
    },
  ];

  return (
    <>
         <section className='breadcrumb-all'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center m-0 gap-2">
                                    <li className="breadcrumb-item "><Link href="/"className="text-light" >Home</Link></li>
                                    {/* <i className="bi bi-heart"></i> */}
                                    <li className="breadcrumb-item active text-light" aria-current="page"></li>FAQ
                                </ol>
                            </nav>
                            {/* <h1 className='text-center'>FAQ Page</h1> */}
                            {/* <p className='text-center'>Choose the plan that suits you best</p> */}
                        </div>
                    </div>
                </div>
            </section>


      <section className="faqMainSec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="faqLeftSec">
                {faqs.map((faq, index) => (
                  <div key={index} className="mb-3">
                    <div
                      className="Faq-dropdown-sec"
                      onClick={() => toggleFAQ(index)}
                      style={{ cursor: "pointer" }}
                    >
                      <span>{faq.question}</span>
                      <div className="arrowDownSec">
                        <MdKeyboardArrowDown
                          className={`fs-3 transition-icon ${
                            openIndex === index ? "rotate-icon" : ""
                          }`}
                        />
                      </div>
                    </div>
                    {openIndex === index && (
                      <div className="Faq-answer mt-2">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="col-md-6">
              <div className="faqRightSec">
                <Image
                  src={pic1}
                  alt="FAQ illustration"
                  className="faq-image"
                  width={520}
                  height={340}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
       <div>
        <div className="mt-5">
            <MeetOn/>

         
        </div>
       </div>

    </>
  );
};

export default Page;
