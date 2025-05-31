"use client";
import React, { useState } from 'react';
import './Filterations.css';

const Filterations = ({ onFilterChange }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const [filters, setFilters] = useState({
    gender: [],
    ageRange: { min: '', max: '' },
    distance: 50,
    onlineNow: false,
    verifiedOnly: false,
    interests: [],
    sortBy: '',
  });

  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const updateFilter = (key, value) => {
    const updated = { ...filters, [key]: value };
    setFilters(updated);
    onFilterChange && onFilterChange(updated);
  };

  const toggleCheckbox = (key, value) => {
    const current = filters[key];
    const updated = current.includes(value)
      ? current.filter((item) => item !== value)
      : [...current, value];
    updateFilter(key, updated);
  };

  const interestsList = ['Music', 'Travel', 'Fitness', 'Food', 'Reading', 'Movies'];
  const ageOptions = Array.from({ length: 83 }, (_, i) => i + 18); // 18 to 100

  return (
    <div className="filter-bar__container">
      <input
        type="text"
        className="filter-bar__search"
        placeholder="Search users"
        onChange={(e) => updateFilter('search', e.target.value)}
      />

      <div className="filter-bar__scroll">
        {/* Gender */}
        <div className="filter-bar__item" onClick={() => toggleDropdown('gender')}>
          <i className="bi bi-gender-ambiguous"></i> Gender
          {openDropdown === 'gender' && (
            <div className="filter-bar__dropdown" onClick={(e) => e.stopPropagation()}>
              <label><input type="checkbox" checked={filters.gender.includes('Male')} onChange={() => toggleCheckbox('gender', 'Male')} /> Male</label>
              <label><input type="checkbox" checked={filters.gender.includes('Female')} onChange={() => toggleCheckbox('gender', 'Female')} /> Female</label>
            </div>
          )}
        </div>

        {/* Age Range */}
        <div className="filter-bar__item" onClick={() => toggleDropdown('ageRange')}>
          <i className="bi bi-calendar-range"></i> Age Range
          {openDropdown === 'ageRange' && (
            <div className="filter-bar__dropdown" onClick={(e) => e.stopPropagation()}>
              <select
                value={filters.ageRange.min}
                onChange={(e) => updateFilter('ageRange', { ...filters.ageRange, min: e.target.value })}
              >
                <option value="">Min</option>
                {ageOptions.map((age) => (
                  <option key={`min-${age}`} value={age}>{age}</option>
                ))}
              </select>

              <select
                value={filters.ageRange.max}
                onChange={(e) => updateFilter('ageRange', { ...filters.ageRange, max: e.target.value })}
              >
                <option value="">Max</option>
                {ageOptions.map((age) => (
                  <option key={`max-${age}`} value={age}>{age}</option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Distance */}
        <div className="filter-bar__item" onClick={() => toggleDropdown('distance')}>
          <i className="bi bi-signpost-split-fill"></i> Distance
          {openDropdown === 'distance' && (
            <div className="filter-bar__dropdown" onClick={(e) => e.stopPropagation()}>
              <label>{filters.distance} km</label>
              <input type="range" min="0" max="100" value={filters.distance} onChange={(e) => updateFilter('distance', e.target.value)} />
            </div>
          )}
        </div>

        {/* Online Now */}
        <div className="filter-bar__item" onClick={() => toggleDropdown('onlineNow')}>
          <i className="bi bi-wifi"></i> Online Now
          {openDropdown === 'onlineNow' && (
            <div className="filter-bar__dropdown" onClick={(e) => e.stopPropagation()}>
              <label>
                <input type="checkbox" checked={filters.onlineNow} onChange={(e) => updateFilter('onlineNow', e.target.checked)} />
                Show online users only
              </label>
            </div>
          )}
        </div>

        {/* Verified */}
        <div className="filter-bar__item" onClick={() => toggleDropdown('verifiedOnly')}>
          <i className="bi bi-shield-check"></i> Verified
          {openDropdown === 'verifiedOnly' && (
            <div className="filter-bar__dropdown" onClick={(e) => e.stopPropagation()}>
              <label>
                <input type="checkbox" checked={filters.verifiedOnly} onChange={(e) => updateFilter('verifiedOnly', e.target.checked)} />
                Verified profiles only
              </label>
            </div>
          )}
        </div>

        {/* Interests */}
        <div className="filter-bar__item" onClick={() => toggleDropdown('interests')}>
          <i className="bi bi-heart-fill"></i> Interests
          {openDropdown === 'interests' && (
            <div className="filter-bar__dropdown" onClick={(e) => e.stopPropagation()}>
              {interestsList.map((interest, index) => (
                <label key={index}>
                  <input
                    type="checkbox"
                    checked={filters.interests.includes(interest)}
                    onChange={() => toggleCheckbox('interests', interest)}
                  />
                  {interest}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Sort By */}
        <div className="filter-bar__item" onClick={() => toggleDropdown('sortBy')}>
          <i className="bi bi-arrow-down-up"></i> Sort By
          {openDropdown === 'sortBy' && (
            <div className="filter-bar__dropdown" onClick={(e) => e.stopPropagation()}>
              <label>
                <input
                  type="radio"
                  name="sortBy"
                  checked={filters.sortBy === 'newest'}
                  onChange={() => updateFilter('sortBy', 'newest')}
                /> Newest
              </label>
              <label>
                <input
                  type="radio"
                  name="sortBy"
                  checked={filters.sortBy === 'nearest'}
                  onChange={() => updateFilter('sortBy', 'nearest')}
                /> Nearest
              </label>
              <label>
                <input
                  type="radio"
                  name="sortBy"
                  checked={filters.sortBy === 'active'}
                  onChange={() => updateFilter('sortBy', 'active')}
                /> Most Active
              </label>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Filterations;
