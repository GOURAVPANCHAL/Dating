// pages/categories.js
import React from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

const page = () => {
    const categories = [
  { name: 'Maintenance Service Part', icon: 'bi-tools', link: '/category/maintenance-service-part' },
  { name: 'Air Conditioning', icon: 'bi-snow', link: '/category/air-conditioning' },
  { name: 'Belts Chains and Rollers', icon: 'bi-diagram-3', link: '/category/belts-chains-and-rollers' },
  { name: 'Body', icon: 'bi-car-front', link: '/category/body' },
  { name: 'Brake System', icon: 'bi-stoplights', link: '/category/brake-system' },
  { name: 'Engine', icon: 'bi-speedometer2', link: '/category/engine' },
  { name: 'Clutch System', icon: 'bi-circle-square', link: '/category/clutch-system' },
  { name: 'Engine Cooling System', icon: 'bi-fan', link: '/category/engine-cooling-system' },
  { name: 'Exhaust System', icon: 'bi-cloud-fog2', link: '/category/exhaust-system' },
  { name: 'Filters', icon: 'bi-funnel', link: '/category/filters' },
  { name: 'Fuel Supply System', icon: 'bi-fuel-pump', link: '/category/fuel-supply-system' },
  { name: 'Gasket and Sealing Rings', icon: 'bi-c-circle', link: '/category/gasket-and-sealing-rings' },
  { name: 'Ignition and Glowplug System', icon: 'bi-lightning', link: '/category/ignition-and-glowplug-system' },
  { name: 'Interior and Comfort', icon: 'bi-door-open', link: '/category/interior-and-comfort' },
  { name: 'Lighting', icon: 'bi-lightbulb', link: '/category/lighting' },
  { name: 'Oils and Fluids', icon: 'bi-droplet-half', link: '/category/oils-and-fluids' },
  { name: 'Pipes and Hoses', icon: 'bi-pipe', link: '/category/pipes-and-hoses' },
  { name: 'Repair Kits', icon: 'bi-tools', link: '/category/repair-kits' },
  { name: 'Sensors Relays and Control units', icon: 'bi-broadcast', link: '/category/sensors-relays-and-control-units' },
  { name: 'Steering', icon: 'bi-steering-wheel', link: '/category/steering' },
  { name: 'Suspension and Arms', icon: 'bi-arrows-move', link: '/category/suspension-and-arms' }
];
  return (
    <div className="container my-3">
      <h3 className="mb-4">Top Categories</h3>
      <div className="row">
        {categories.map((category, index) => (
          <div className="col-md-3 col-6 mb-4" key={index}>
            <Link href={category.link} className="text-decoration-none text-gray">
              <div className="border p-3 text-center h-100 rounded category-box hover-shadow">
                <i className={`bi ${category.icon} mb-2 d-block`} style={{ fontSize: '2rem', color: 'gray' }}></i>
                <span className="d-block" style={{color:"gray"}}>{category.name}</span>
              </div>
            </Link>
          </div>       
        ))}
      </div>
    </div>
  );
};

export default page;
