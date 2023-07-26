import React from 'react'
import QnA from './QnA'

const QnASection = () => {
  return (
    <div>
     <div className='text-3xl font-bold flex justify-center text-center mt-20'>Frequently asked questions </div>
     <div className='flex flex-col gap-4 lg:gap-6 mt-10'>
        <QnA heading={'What types of computers does your company offer for sale?'} text={'We offer a wide range of computers to suit various needs, including desktops, laptops, workstations, and gaming PCs. Our selection includes top brands and customizable configurations to meet your specific requirements.'}/>
        <QnA heading={'Can your company provide bulk orders for  businesses looking to establish computer labs?'} text={' Absolutely! We cater to bulk orders for educational institutions, businesses, and other organizations interested in setting up computer labs. Our team can assist you in selecting the right computers and accessories to create a productive and efficient computing environment.'}/>
        <QnA heading={' Are your computers pre-installed with operating systems and software?'} text={'Yes, our computers come with pre-installed operating systems, and we can customize the software according to your needs. Whether you require specific productivity tools, creative software, or educational applications, we can ensure your computers are ready to use right out of the box.'}/>
        <QnA heading={'Do you offer on-site setup and support for the computer labs you help establish?'} text={'Certainly! We offer on-site setup and support services to ensure a smooth installation process and address any technical issues that may arise. Our technicians are experienced in configuring computer labs to optimize performance and functionality.'}/>
        <QnA heading={'Does your company offer any warranties or after-sales support for the computers sold?'} text={'Yes, we provide warranties for all the computers we sell. The length of the warranty may vary depending on the product, but we strive to offer comprehensive coverage for your peace of mind. Additionally, our dedicated support team is available to assist with any technical queries or concerns you may have after your purchase.'}/>
     </div>
     <div className='mt-20 flex flex-col gap-3'>
        <h1 className='flex justify-center text-2xl font-bold text-center'>Upgrade your computing power and efficiency with us !</h1>
        <p className='flex justify-center text-center'>Your one-stop computer shop</p>
        <div className='flex justify-center  '>
        <button className='h-auto p-2 w-44  bg-black cursor-pointer text-white rounded-lg'>Shop Now</button>
        </div>
     </div>
    </div>
  )
}

export default QnASection