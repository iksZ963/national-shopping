"use client"
import { FC, useState } from 'react';
import Modal from './OpenModel';
import { SiTicktick } from "react-icons/si";
import { Card } from './ui/card';
import Image from 'next/image';
import { Button } from './ui/button';

const OpenModelButton: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <div>
      <button className="px-6 py-3 bg-blue-600 text-white rounded" onClick={openModal}>
        Open Modal
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal} >
        <div className="flex flex-col  justify-center min-w-[450px] gap-4">
            <div className='flex flex-col items-center gap-2 text-primary'>
                <SiTicktick size={35} />
                <h3 className='text-2xl'>Item added to your cart!</h3>
            </div>
            <div className='flex items-center gap-4'>
                <Card className='w-20 h-20'>
                    <Image width={80} height={80} src="/images/JAZRVxcURsIiFR7rPr0ZtAP4KfM6wv6xAh3OmN5w.jpg" alt="product-image" />
                </Card>
                <div className='flex flex-col'>
                    <h2 className='font-bold'>আতিকা সরিষার তেল</h2>
                    <div className='flex gap-4'>
                        <span>Price:</span> <b className='text-primary'>৳280.00</b>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
        <div className='flex justify-center gap-2'>
            
           <Button onClick={closeModal} variant={'outline'} className='min-w-40'>Back to shopping</Button>
           <Button  className='min-w-40'>Proseed to Checkout</Button>
           
        </div>
      </Modal>
    </div>
  );
}

export default OpenModelButton;
