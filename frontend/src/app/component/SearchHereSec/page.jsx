import Image from 'next/image'
import React from 'react'
import { FaFacebookF, FaInstagram, FaWhatsapp, FaPinterest } from 'react-icons/fa'
import pic1 from '@/app/Images/people.png'
import pic2 from '@/app/Images/people1.png'
import pic3 from '@/app/Images/people2.png'
import pic4 from '@/app/Images/people3.png'
import './searchSec.css'

const users = [
  { id: 1, name: "Manish", designation: "Developer", details: "Quisque sit amet ante vehicula risus pharetra sagittis ac sit amet justo. Duis eu sapien nisl condimentum vitae..", image: pic2 },
  { id: 2, name: "Manish", designation: "Developer", details: "Quisque sit amet ante vehicula risus pharetra sagittis ac sit amet justo. Duis eu sapien nisl condimentum vitae..", image: pic1 },
  { id: 3, name: "Manish", designation: "Developer", details: "Quisque sit amet ante vehicula risus pharetra sagittis ac sit amet justo. Duis eu sapien nisl condimentum vitae..", image: pic3 },
  { id: 4, name: "Manish", designation: "Developer", details: "Quisque sit amet ante vehicula risus pharetra sagittis ac sit amet justo. Duis eu sapien nisl condimentum vitae..", image: pic4 },
];

export default function SearchHereSec() {
  return (
    <section>
      <div className="container">
        <div className="searchContainerSec">
          <div className='tittleSection'>
            <p className="miniTittle">Our Groups</p>
            <h2 className="mainTittle text-center">Start your Search Here</h2>
          </div>
          <div className="row">
            {users.map((item) => (
              <div className="col-md-3 col-6" key={item.id}>
                <div className="SearchMainSec">
                  <div className="UserImgWrapper">
                    <Image src={item.image} alt="UserImg" width={250} height={260} className="UserImg" />
                    <div className="social-icons">
                      <FaFacebookF className="iconsec fs-3"/>
                      <FaInstagram className="iconsec fs-3"/>
                      <FaWhatsapp className="iconsec fs-3"/>
                      <FaPinterest className="iconsec fs-3"/> 
                    </div>
                  </div>
                  <h3 className="searchUserName">{item.name}</h3>
                  <div className='Search-detailSec'>
                    <p className='designationSec'>{item.designation}</p>
                    <div className="user-discription">
                      <p>{item.details}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
