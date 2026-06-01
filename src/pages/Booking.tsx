import React from 'react';
import BookingForm from '@/components/booking/BookingForm';
import { ShieldCheck, Clock, MapPin, Video, HeartPulse } from 'lucide-react';

const Booking: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Information Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-slate-900">Book Your <span className="text-primary">Appointment</span></h1>
              <p className="text-slate-600 leading-relaxed">
                Take the first step towards better health. Our easy booking system allows you to schedule a consultation with our experts in just a few clicks.
              </p>
            </div>

            <div className="space-y-6 bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="font-bold text-slate-900 text-xl flex items-center">
                 <ShieldCheck className="h-6 w-6 text-primary mr-3" /> Booking Benefits
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-slate-100 p-2 rounded-lg mr-4 shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Flexible Scheduling</h4>
                    <p className="text-xs text-slate-500 mt-1">Choose a time that fits your busy life with real-time availability.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-slate-100 p-2 rounded-lg mr-4 shrink-0">
                    <Video className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Virtual or In-Person</h4>
                    <p className="text-xs text-slate-500 mt-1">Consult with our doctors from home or visit our modern clinic.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-slate-100 p-2 rounded-lg mr-4 shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Easy Directions</h4>
                    <p className="text-xs text-slate-500 mt-1">Get precise GPS directions and parking info once your booking is confirmed.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-primary p-8 rounded-3xl text-white space-y-4 shadow-xl shadow-primary/20">
               <div className="flex items-center space-x-3 mb-2">
                 <div className="bg-white/20 p-2 rounded-lg">
                   <HeartPulse className="h-6 w-6" />
                 </div>
                 <h3 className="font-bold text-xl">Member Portal</h3>
               </div>
               <p className="text-primary-foreground/80 text-sm">
                 Registered members get access to faster bookings, medical history, and prescription renewals.
               </p>
               <button className="w-full bg-white text-primary font-bold py-3 rounded-xl hover:bg-slate-50 transition-colors">
                 Sign In / Register
               </button>
            </div>
          </div>

          {/* Booking Form Area */}
          <div className="lg:col-span-2">
            <BookingForm />
          </div>
        </div>

        {/* FAQ Preview */}
        <div className="mt-20 border-t border-slate-200 pt-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-10 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900">What should I bring to my appointment?</h4>
              <p className="text-sm text-slate-600">Please bring your insurance card, a valid ID, and a list of any current medications you are taking.</p>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900">How do virtual consultations work?</h4>
              <p className="text-sm text-slate-600">You will receive a secure link via email 15 minutes before your scheduled time. Just click the link to join.</p>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900">Can I reschedule my appointment?</h4>
              <p className="text-sm text-slate-600">Yes, you can reschedule or cancel up to 24 hours before your appointment through the confirmation email.</p>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900">Are there parking facilities available?</h4>
              <p className="text-sm text-slate-600">Free patient parking is available at the main entrance of Campus A and Campus B.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;