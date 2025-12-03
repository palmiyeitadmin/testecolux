import React from 'react';
import { ArrowRight, Maximize2, Box, EyeOff, TrendingUp, SlidersHorizontal, Sun } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../constants';
import { Button } from '../components/Button';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    { icon: Maximize2, title: '15% More Usable Space', desc: 'Eco Luxx offers up to 15% more usable interior area compared to traditional pergolas.' },
    { icon: Box, title: '75% Smaller Packaging Volume', desc: 'With a modular packaging system, making delivery easier and more economical.' },
    { icon: EyeOff, title: 'Hidden Mechanism', desc: 'All mechanical components are integrated discreetly into the structure.' },
    { icon: TrendingUp, title: '30% Better Price', desc: 'Eco Luxx offers premium quality at a more accessible price point.' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0">
          <img
            src="/assets/img/hero-bg.png"
            alt="Luxury Outdoor Living"
            className="w-full h-full object-cover object-left-[20px]"
            style={{ objectPosition: '20px center', transform: 'scale(1.3)' }}
          />
        </div>

        <div className="absolute inset-0">
          <div className="max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
            <div className="max-w-2xl text-white space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center">
                  <div className="w-4 h-2 bg-black"></div>
                </div>
              </div>

              <h1 className="text-2xl md:text-4xl font-bold leading-tight drop-shadow-2xl">
                Premium Outdoor Living, <br />Now Within Reach.
              </h1>

              <p className="text-lg text-gray-300 max-w-lg drop-shadow-lg">
                Minimal design, smooth manual control and a space that adapts to your everyday moments. Smart Engineering in Every Size.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button variant="secondary" onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}>
                  Explore Sizes <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid Section */}
      <section id="products" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Choose What Fits Your Needs</h2>
            <p className="text-slate-500 mt-2">Size options for every lifestyle</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {MOCK_PRODUCTS.map((product) => (
              <div key={product.id} className={`${product.id === 'grandis' ? 'md:col-span-2' : ''} group`}>
                <div className="relative bg-gray-100 rounded-lg overflow-hidden mb-6 aspect-[4/3] md:aspect-video cursor-pointer" onClick={() => navigate(`/product/${product.id}`)}>
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-6 right-6 text-white text-5xl md:text-6xl font-bold drop-shadow-lg opacity-90">
                    {product.name}
                  </div>
                </div>

                <div className="flex justify-between items-end px-2">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{product.subtitle}</h3>
                    <p className="text-slate-500 text-sm font-medium mt-1">{product.dimensions}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-teal-600">${product.price.toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-6 px-2">
                  <Button size="sm" onClick={() => navigate(`/product/${product.id}`)}>
                    Buy Now <ArrowRight className="ml-2 w-3 h-3" />
                  </Button>
                  <button
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Advantages of Smart Design</h2>
            <p className="text-slate-500 mt-2">Engineering and design excellence in every detail</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-4">
                <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-6 text-slate-700">
                  <feature.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Ready System (Toggle Section) */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Future-Ready System</h2>
          <p className="text-slate-500 mb-16">Manual today, motorized tomorrow. Your investment is future-proof.</p>

          <div className="flex justify-center items-center gap-12 md:gap-24 relative">
            {/* Connecting Line */}
            <div className="absolute top-10 left-1/4 right-1/4 h-px bg-slate-200 -z-10"></div>
            <div className="absolute top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-2">
              <ArrowRight className="w-4 h-4 text-slate-300" />
            </div>

            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-20 h-20 rounded-full bg-slate-900 flex items-center justify-center mb-4 shadow-lg ring-4 ring-slate-50 transition-transform group-hover:scale-110">
                <SlidersHorizontal className="w-8 h-8 text-white rotate-90" />
              </div>
              <span className="font-semibold text-slate-900">Manual</span>
              <span className="text-xs text-slate-400">Today</span>
              <p className="text-xs text-slate-400 mt-2 max-w-[150px]">Easy operation, simple mechanism</p>
            </div>

            <div className="flex flex-col items-center group cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
              <div className="w-20 h-20 rounded-full bg-white border border-slate-200 flex items-center justify-center mb-4 shadow-sm transition-transform group-hover:scale-110">
                <Sun className="w-8 h-8 text-slate-900" />
              </div>
              <span className="font-semibold text-slate-900">Motorized</span>
              <span className="text-xs text-slate-400">Future</span>
              <p className="text-xs text-slate-400 mt-2 max-w-[150px]">Optional upgrade available</p>
            </div>
          </div>

          <p className="text-xs text-slate-400 mt-16 max-w-lg mx-auto">
            Eco Luxx Pergola is designed with the infrastructure for a future motorized upgrade.
            You can keep your initial investment and upgrade to an automated system whenever you choose.
          </p>
        </div>
      </section>
    </div>
  );
};