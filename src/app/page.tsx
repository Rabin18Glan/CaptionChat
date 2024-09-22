'use client';
import Link from 'next/link';

function Page() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-4xl font-bold mb-6">Welcome to CapChat</h1>
      <p className="text-lg mb-8">Generate AI captions in a few clicks!</p>
      
      <Link className="bg-white text-blue-500 font-semibold py-3 px-6 rounded-full hover:bg-blue-100 transition duration-300 ease-in-out shadow-lg" href="./caption-generator">
        
          Get Started
        
      </Link>
    </div>
  );
}

export default Page;
