'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import { CardContent } from '../ui/card';
import { Button } from '../ui/button';
import Link from 'next/link';

const Join = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <section data-aos="fade-up" data-aos-delay="100" className="py-16 px-4 mt-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-br from-orange-200 via-purple-200 to-blue-200 border-b-4 border-b-purple-500 shadow-xl rounded-xl transition-all duration-300 transform hover:-translate-y-1 ">
          <CardContent className="p-8">
            <h2 className="text-3xl fugaz-font font-bold text-purple-800 mb-8">
              Ready to Start Your Journey?
            </h2>
            {/* <p className="text-gray-600 text-lg mb-8">Join today!</p> */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-purple-600 text-white hover:bg-purple-700"
              >
                <Link href="/sign-up">Create Account</Link>
              </Button>
              {/* <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-purple-600 text-purple-600 hover:bg-purple-50"
                >
                  <Link href="/dashboard">View Demo</Link>
                </Button> */}
            </div>
          </CardContent>
        </div>
      </div>
    </section>
  );
};

export default Join;
