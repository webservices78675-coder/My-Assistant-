
import React from 'react';
import VoiceAssistant from './components/VoiceAssistant';
import { ABDUL_PHONE } from './constants';

const App: React.FC = () => {
  const whatsappUrl = `https://wa.me/${ABDUL_PHONE}?text=Hi%20Abdul,%20I'm%20interested%20in%20getting%20a%20website%20for%20my%20business`;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-40 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-200">
            AQ
          </div>
          <div>
            <h1 className="font-bold text-gray-900 leading-tight">Abdul Qadeer</h1>
            <p className="text-[10px] text-blue-600 font-bold uppercase tracking-widest">Web Design Expert</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <span className="hidden sm:flex items-center text-xs text-green-600 font-bold bg-green-50 px-3 py-1 rounded-full">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            AVAILABLE NOW
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center max-w-4xl mx-auto w-full px-6 py-12 text-center">
        
        {/* Hero Section */}
        <div className="space-y-6 mb-12">
          <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-sm font-bold rounded-full mb-2">
            Professional Website Solutions
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight tracking-tight">
            Stop losing customers.<br/>
            <span className="text-blue-600">Get online today.</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto font-medium">
            Helping businesses grow with high-converting websites starting from just $50. Talk to my AI assistant or message me directly.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl px-4">
          
          {/* AI Voice Agent Button (The VoiceAssistant component handles its own state) */}
          <div className="flex flex-col items-center p-8 bg-white rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all group">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-100">
               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-20a3 3 0 00-3 3v10a3 3 0 003 3 3 3 0 003-3V5a3 3 0 00-3-3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Voice Consultation</h3>
            <p className="text-sm text-gray-500 mb-6 text-center h-10">Instant pricing and business advice from our AI assistant.</p>
            <VoiceAssistant isMainButton={true} />
          </div>

          {/* WhatsApp Direct Button */}
          <div className="flex flex-col items-center p-8 bg-white rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all group">
            <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-green-100">
               <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.236 3.484 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.652zm5.835-3.332c1.515.899 3.3 1.447 5.231 1.448 5.437 0 9.858-4.42 9.858-9.855 0-2.63-.1.233-1.859-2.133-1.86-1.861-4.329-2.885-6.94-2.885-5.437 0-9.857 4.42-9.86 9.855-.001 1.944.575 3.842 1.667 5.441l-1.094 4.002 4.098-1.074z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp Abdul</h3>
            <p className="text-sm text-gray-500 mb-6 text-center h-10">Chat directly with Abdul to start your project.</p>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-2xl shadow-lg transition-all active:scale-95 text-center"
            >
              Start Chat
            </a>
          </div>

        </div>

        {/* Benefits List */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 w-full">
          {[
            { label: 'Websites From', value: '$50 USD', icon: '💰' },
            { label: 'Average Delivery', value: '3-5 Days', icon: '⏱️' },
            { label: 'Mobile Ready', value: 'Responsive', icon: '📱' },
            { label: 'SEO Ready', value: 'Google Search', icon: '🔍' },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="text-2xl mb-2">{item.icon}</div>
              <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">{item.label}</div>
              <div className="text-sm font-extrabold text-gray-800">{item.value}</div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white py-8 text-center text-gray-400 text-xs border-t border-gray-100">
        <p className="font-medium">© {new Date().getFullYear()} Abdul Qadeer | All-in-One Digital Presence</p>
      </footer>
    </div>
  );
};

export default App;
