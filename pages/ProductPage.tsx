import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Star, ShoppingBag, Box, EyeOff, Maximize2, ShieldCheck } from 'lucide-react';
import { MOCK_PRODUCTS } from '../constants';
import { Button } from '../components/Button';
import { AccordionItem } from '../components/Accordion';
import { ControlType, ColorOption } from '../types';

export const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = MOCK_PRODUCTS.find(p => p.id === id) || MOCK_PRODUCTS[0];
  
  const [activeImage, setActiveImage] = useState(product.images[0]);
  const [control, setControl] = useState<ControlType>(ControlType.MANUAL);
  const [color, setColor] = useState<ColorOption>(ColorOption.WHITE);

  // Update active image when product changes (if using recommendations later)
  useEffect(() => {
    setActiveImage(product.images[0]);
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <div className="pt-24 md:pt-32 pb-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-slate-500 mb-8">
          <Link to="/" className="hover:text-slate-900">Pergolas</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-slate-900 font-medium">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Gallery */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 rounded-xl overflow-hidden mb-4 border border-slate-100 p-8 flex items-center justify-center min-h-[500px]">
                {/* Blueprint/Main Image placeholder visualization */}
                <div className="relative w-full h-full">
                   <img 
                    src={activeImage} 
                    alt={product.name} 
                    className="w-full h-full object-contain mix-blend-multiply"
                   />
                   {/* Measurement lines mock overlay */}
                   <div className="absolute top-0 bottom-0 -right-4 border-l border-slate-300 flex items-center">
                     <span className="rotate-90 text-[10px] text-slate-400 whitespace-nowrap -ml-2">{product.dimensions.split('x')[0]} CM</span>
                   </div>
                   <div className="absolute top-0 -left-4 bottom-0 border-r border-slate-300"></div>
                </div>
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    activeImage === img ? 'border-slate-900 ring-2 ring-slate-900/10' : 'border-transparent hover:border-slate-300'
                  }`}
                >
                  <img src={img} alt={`View ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
              {/* Technical Drawing Thumbnail */}
              <button className="bg-white border-2 border-dashed border-slate-200 rounded-lg flex items-center justify-center hover:border-slate-400 transition-colors">
                <span className="text-xs text-slate-400 font-medium text-center px-2">Tech Specs</span>
              </button>
            </div>
          </div>

          {/* Right Column: Details & Configurator */}
          <div className="lg:col-span-5 flex flex-col h-full">
            <div className="mb-6">
              <h1 className="text-5xl font-bold text-slate-900 mb-2">{product.name}</h1>
              <div className="flex items-center justify-between">
                <span className="text-xl text-slate-500 font-light">{product.subtitle} <span className="text-slate-300">|</span> {product.dimensions}cm</span>
              </div>
              
              <div className="flex items-center mt-4 space-x-4">
                 <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-slate-200'}`} />
                    ))}
                 </div>
                 <span className="text-sm text-slate-400">{product.reviews} reviews</span>
              </div>
            </div>

            <div className="text-4xl font-bold text-teal-600 mb-10">
              ${product.price.toLocaleString()}
            </div>

            {/* Configurator */}
            <div className="space-y-8 mb-10">
              
              {/* Control Selection */}
              <div>
                <label className="block text-sm font-medium text-slate-900 mb-3">Control</label>
                <div className="flex gap-4">
                  {[ControlType.MANUAL, ControlType.MOTORIZED].map((type) => (
                    <button
                      key={type}
                      onClick={() => setControl(type)}
                      className={`flex-1 py-3 px-4 text-sm font-medium rounded-md border transition-all ${
                        control === type 
                          ? 'border-slate-900 bg-white text-slate-900 shadow-sm ring-1 ring-slate-900' 
                          : 'border-gray-200 bg-gray-50 text-slate-500 hover:bg-white hover:border-gray-300'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div>
                <label className="block text-sm font-medium text-slate-900 mb-3">Color <span className="text-slate-400 font-normal">• {color}</span></label>
                <div className="flex gap-4">
                  {[ColorOption.WHITE, ColorOption.GREY, ColorOption.BLACK].map((opt) => {
                    const bgColors = {
                        [ColorOption.WHITE]: 'bg-white',
                        [ColorOption.GREY]: 'bg-gray-400',
                        [ColorOption.BLACK]: 'bg-slate-900'
                    };
                    return (
                        <button
                          key={opt}
                          onClick={() => setColor(opt)}
                          className={`w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center transition-all ${
                            color === opt ? 'ring-2 ring-offset-2 ring-slate-900 scale-110' : 'hover:scale-105'
                          } ${bgColors[opt]}`}
                          aria-label={`Select ${opt} color`}
                        />
                    );
                  })}
                </div>
              </div>

            </div>

            <Button size="lg" fullWidth className="mb-12 shadow-xl shadow-slate-900/10">
              <ShoppingBag className="w-5 h-5 mr-2" />
              Add to card
            </Button>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-2 gap-8 mb-12">
               <div className="text-center">
                  <div className="w-12 h-12 mx-auto bg-slate-50 rounded-full flex items-center justify-center mb-3">
                     <Box className="w-5 h-5 text-slate-700" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 mb-1">75% Smaller Packaging</h4>
                  <p className="text-[10px] text-slate-500 leading-tight">Modular system for easy delivery.</p>
               </div>
               <div className="text-center">
                  <div className="w-12 h-12 mx-auto bg-slate-50 rounded-full flex items-center justify-center mb-3">
                     <EyeOff className="w-5 h-5 text-slate-700" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 mb-1">Hidden Mechanism</h4>
                  <p className="text-[10px] text-slate-500 leading-tight">Discreetly integrated components.</p>
               </div>
               <div className="text-center">
                  <div className="w-12 h-12 mx-auto bg-slate-50 rounded-full flex items-center justify-center mb-3">
                     <Maximize2 className="w-5 h-5 text-slate-700" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 mb-1">15% More Space</h4>
                  <p className="text-[10px] text-slate-500 leading-tight">Optimized interior area.</p>
               </div>
               <div className="text-center">
                  <div className="w-12 h-12 mx-auto bg-slate-50 rounded-full flex items-center justify-center mb-3">
                     <ShieldCheck className="w-5 h-5 text-slate-700" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 mb-1">L-Shaped Pillars</h4>
                  <p className="text-[10px] text-slate-500 leading-tight">Smart corner placement.</p>
               </div>
            </div>

            {/* Accordions */}
            <div className="border-t border-gray-200">
               <AccordionItem title="Description" defaultOpen>
                  <p className="mb-4">{product.description}</p>
                  <p>Eco Luxx removes the superfluous and restores the authentic value — it’s a pergola that moves with you.</p>
               </AccordionItem>
               <AccordionItem title="Technical Information">
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                     <li>Dimensions: {product.dimensions} cm</li>
                     <li>Material: Powder-coated aluminum alloy</li>
                     <li>Wind Resistance: Up to 120 km/h</li>
                     <li>Snow Load: Up to 110 kg/m²</li>
                  </ul>
               </AccordionItem>
               <AccordionItem title="Delivery">
                  <p className="text-sm">Free standard shipping on all orders. Delivery typically takes 2-4 weeks depending on your location. The modular packaging ensures it fits through standard doorways.</p>
               </AccordionItem>
               <AccordionItem title="Assembly">
                  <p className="text-sm">Designed for DIY enthusiasts. Requires 2 people and approximately 4-6 hours. All tools and detailed instructions are included.</p>
               </AccordionItem>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};