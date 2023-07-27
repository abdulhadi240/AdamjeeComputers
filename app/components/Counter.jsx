'use client'
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const Counter = () => {
  const counterRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [years, setYears] = useState(0);
  const [clients, setClients] = useState(0);
  const [Employee, setEmployee] = useState(0);
  const [Bags, setBags] = useState(0);
  const [woven, setWoven] = useState(0);


  const yearsOfExperience = 25;
  const clientsCount = 3000;
  const EmployeeCount = 100;
  const BagsCount = 400;
  const wovenCount = 2; // Update this value with your desired count for 'others'

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust the threshold value as needed
    };

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(entry.target);
      }
    }, options);

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      // Simulate counting animation
      let yearsCounter = 0;
      let clientsCounter = 0;
      let EmployeeCounter = 0;
      let BagsCounter = 0;
      let wovenCounter = 0;

      const interval = setInterval(() => {
        if (yearsCounter < yearsOfExperience) {
          setYears(yearsCounter);
          yearsCounter++;
        }

        if (clientsCounter < clientsCount) {
          setClients(clientsCounter);
          clientsCounter += 50; // Update this increment value as desired
        }

        if (EmployeeCounter < EmployeeCount) {
          setEmployee(EmployeeCounter);
          EmployeeCounter ++; // Update this increment value as desired
        }

        if (BagsCounter < BagsCount) {
          setBags(BagsCounter);
          BagsCounter += 10; // Update this increment value as desired
        }


        if (wovenCounter < wovenCount) {
          setWoven(wovenCounter);
          wovenCounter += 0.5; // Update this increment value as desired
        }


        if (yearsCounter >= yearsOfExperience && clientsCounter >= clientsCount && EmployeeCounter >= EmployeeCount && BagsCounter >= BagsCount && wovenCounter >= wovenCount) {
          clearInterval(interval);
        }
      }, 50); // Adjust the interval value as needed

      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <div className='w-full h-auto pt-2 pb-2 bg-gray-50'>
      
      <div ref={counterRef} className="flex justify-center ">
        <div className='flex lg:gap-32'>
          <div className=" mx-6 mt-6">
            <div className="text-xl text-center lg:text-4xl font-bold text-gray-800">{years}+</div>
            <div className="text-gray-600 text-center">Years of Experience</div>
          </div>
          <div className="mt-6 mx-6">
            <div className="text-xl text-center lg:text-4xl font-bold text-gray-800">{clients}+</div>
            <div className="text-gray-600 text-center">Customer</div>
          </div>
          <div className=" mt-6 mx-6">
            <div className="text-xl  lg:text-4xl font-bold text-gray-800">{Employee}+</div>
            <div className="text-gray-600 text-center">Brands</div>
          </div>
          <div className=" mt-6 mx-6">
            <div className="text-xl  lg:text-4xl font-bold text-gray-800">{Bags}+</div>
            <div className="text-gray-600 text-center">Institution</div>
          </div>
        </div>


      </div>

    </div>

  );
};

export default Counter;
