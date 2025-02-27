import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Button from './Button';

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: { text: string; included: boolean }[];
  isPopular: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  features,
  isPopular = false,
}) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={`bg-white rounded-lg shadow-md overflow-hidden ${
        isPopular ? 'border-2 border-blue-500 relative' : ''
      }`}
    >
      {isPopular && (
        <div className="bg-blue-500 text-white text-xs font-semibold py-1 px-3 absolute top-0 right-0 rounded-bl-lg">
          MOST POPULAR
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-center mb-4">{title}</h3>
        <div className="text-center mb-6">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-gray-600">/month</span>
        </div>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600">{feature.text}</span>
            </li>
          ))}
        </ul>
        <Button
          variant={isPopular ? 'primary' : 'outline'}
          className="w-full"
        >
          Get Started
        </Button>
      </div>
    </motion.div>
  );
};

export default PricingCard;