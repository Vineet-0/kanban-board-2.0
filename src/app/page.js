"use client"
import { useState, useEffect } from 'react';

import Navbar from './component/Navbar'
import Body from './component/Body' 

export default function Home() {
  const [selectedGrouping, setSelectedGrouping] = useState('Status');
  const [selectedOrdering, setSelectedOrdering] = useState('Priority');
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSelectedGrouping(localStorage.getItem('selectedGrouping'));
      setSelectedOrdering(localStorage.getItem('selectedOrdering'));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedGrouping', selectedGrouping);
    localStorage.setItem('selectedOrdering', selectedOrdering);
  }, [selectedGrouping, selectedOrdering]);

  return (
    <div className='w-full min-h-screen bg-[#f4f5f8] dark:bg-[#02040a]'>
      <Navbar selectedGrouping={selectedGrouping} setSelectedGrouping={setSelectedGrouping} selectedOrdering={selectedOrdering} setSelectedOrdering={setSelectedOrdering} />
      <Body selectedGrouping={selectedGrouping} setSelectedGrouping={setSelectedGrouping} selectedOrdering={selectedOrdering} setSelectedOrdering={setSelectedOrdering} />
    </div>
  )
}
