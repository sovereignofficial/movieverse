import React, { useState, useEffect } from 'react';

type ToastType = 'error' | 'success';

interface ToastProps {
  message: string;
  type: ToastType;
}

const Toast: React.FC<ToastProps> = ({ message, type }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(()=>{
   message && setIsVisible(true);
  },[message,setIsVisible])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [isVisible]);

  const toastClass =`fixed z-50 bottom-0 left-0 right-0 p-4 mx-auto w-1/2 rounded bg-transparent backdrop-blur-sm ring-1 ring-zinc-700 border-l-8 ${type === 'error' ? 'border-red-500' : 'border-green-500'} text-white animation-slow ${isVisible ? 'translate-y-0' : 'translate-y-20'} text-center`;

  return (
    <>
        <div className={toastClass}>
          <p className={`${type === 'error' ? 'text-red-500' : 'text-green-500'} font-medium`}>{message}</p>
        </div>
    </>
  );
};

export default Toast;
