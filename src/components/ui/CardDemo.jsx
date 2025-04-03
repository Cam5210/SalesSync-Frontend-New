import React, { useState } from 'react';
import Card, { DefaultCard, ElevatedCard, OutlinedCard, FilledCard } from './Card';

const CardDemo = () => {
  const [activeCards, setActiveCards] = useState({ 
    card1: true, 
    card2: true, 
    card3: true, 
    card4: true 
  });

  const toggleCardActive = (cardId) => {
    setActiveCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  return (
    <div className="p-6 space-y-8">
      {/* Card Variants */}
      <div>
        <h2 className="text-lg font-semibold mb-4 dark:text-white">Card Variants</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <DefaultCard 
            active={activeCards.card1} 
            onClick={() => toggleCardActive('card1')}
            className="min-h-[120px]"
          >
            <h3 className="text-md font-semibold mb-2 dark:text-white">Default Card</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Basic card with subtle border
            </p>
            <div className="mt-3 text-right">
              <button className="text-xs bg-blue-500 text-white px-2 py-1 rounded">Action</button>
            </div>
          </DefaultCard>
          
          <ElevatedCard 
            active={activeCards.card2} 
            onClick={() => toggleCardActive('card2')}
            className="min-h-[120px]"
          >
            <h3 className="text-md font-semibold mb-2 dark:text-white">Elevated Card</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Card with elevation shadow
            </p>
            <div className="mt-3 text-right">
              <button className="text-xs bg-blue-500 text-white px-2 py-1 rounded">Action</button>
            </div>
          </ElevatedCard>
          
          <OutlinedCard 
            active={activeCards.card3} 
            onClick={() => toggleCardActive('card3')}
            className="min-h-[120px]"
          >
            <h3 className="text-md font-semibold mb-2 dark:text-white">Outlined Card</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Card with pronounced border
            </p>
            <div className="mt-3 text-right">
              <button className="text-xs bg-blue-500 text-white px-2 py-1 rounded">Action</button>
            </div>
          </OutlinedCard>
          
          <FilledCard 
            active={activeCards.card4} 
            onClick={() => toggleCardActive('card4')}
            className="min-h-[120px]"
          >
            <h3 className="text-md font-semibold mb-2 dark:text-white">Filled Card</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Card with background color
            </p>
            <div className="mt-3 text-right">
              <button className="text-xs bg-blue-500 text-white px-2 py-1 rounded">Action</button>
            </div>
          </FilledCard>
        </div>
        <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Click on cards to toggle active/inactive state
        </div>
      </div>
      
      {/* Card Shadows */}
      <div>
        <h2 className="text-lg font-semibold mb-4 dark:text-white">Card Shadows</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <Card shadow="none" className="min-h-[100px]">
            <h3 className="text-md font-semibold dark:text-white">No Shadow</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">shadow="none"</p>
          </Card>
          
          <Card shadow="sm" className="min-h-[100px]">
            <h3 className="text-md font-semibold dark:text-white">Small Shadow</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">shadow="sm"</p>
          </Card>
          
          <Card shadow="md" className="min-h-[100px]">
            <h3 className="text-md font-semibold dark:text-white">Medium Shadow</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">shadow="md"</p>
          </Card>
          
          <Card shadow="lg" className="min-h-[100px]">
            <h3 className="text-md font-semibold dark:text-white">Large Shadow</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">shadow="lg"</p>
          </Card>
          
          <Card shadow="xl" className="min-h-[100px]">
            <h3 className="text-md font-semibold dark:text-white">Extra Large Shadow</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">shadow="xl"</p>
          </Card>
        </div>
      </div>
      
      {/* Card Roundness */}
      <div>
        <h2 className="text-lg font-semibold mb-4 dark:text-white">Card Roundness</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <Card rounded="none" className="min-h-[100px]">
            <h3 className="text-md font-semibold dark:text-white">No Rounding</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">rounded="none"</p>
          </Card>
          
          <Card rounded="sm" className="min-h-[100px]">
            <h3 className="text-md font-semibold dark:text-white">Small Rounding</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">rounded="sm"</p>
          </Card>
          
          <Card rounded="md" className="min-h-[100px]">
            <h3 className="text-md font-semibold dark:text-white">Medium Rounding</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">rounded="md"</p>
          </Card>
          
          <Card rounded="lg" className="min-h-[100px]">
            <h3 className="text-md font-semibold dark:text-white">Large Rounding</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">rounded="lg"</p>
          </Card>
          
          <Card rounded="full" className="min-h-[100px]">
            <h3 className="text-md font-semibold dark:text-white">Full Rounding</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">rounded="full"</p>
          </Card>
        </div>
      </div>
      
      {/* Card Widths */}
      <div>
        <h2 className="text-lg font-semibold mb-4 dark:text-white">Card Widths</h2>
        <div className="space-y-4">
          <Card width="xs" className="min-h-[60px]">
            <h3 className="text-md font-semibold dark:text-white">Extra Small</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">width="xs" (16rem / 256px)</p>
          </Card>
          
          <Card width="sm" className="min-h-[60px]">
            <h3 className="text-md font-semibold dark:text-white">Small</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">width="sm" (18rem / 288px)</p>
          </Card>
          
          <Card width="md" className="min-h-[60px]">
            <h3 className="text-md font-semibold dark:text-white">Medium</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">width="md" (20rem / 320px)</p>
          </Card>
          
          <Card width="lg" className="min-h-[60px]">
            <h3 className="text-md font-semibold dark:text-white">Large</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">width="lg" (24rem / 384px)</p>
          </Card>
          
          <Card width="xl" className="min-h-[60px]">
            <h3 className="text-md font-semibold dark:text-white">Extra Large</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">width="xl" (30rem / 480px)</p>
          </Card>
          
          <Card width="2xl" className="min-h-[60px]">
            <h3 className="text-md font-semibold dark:text-white">2X Large</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">width="2xl" (36rem / 576px)</p>
          </Card>
          
          <Card width="full" className="min-h-[60px]">
            <h3 className="text-md font-semibold dark:text-white">Full Width</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">width="full" (100% of container)</p>
          </Card>
        </div>
      </div>
      
      {/* Card Padding */}
      <div>
        <h2 className="text-lg font-semibold mb-4 dark:text-white">Card Padding</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <Card padding="none" className="min-h-[100px] flex items-center justify-center">
            <div className="bg-blue-100 p-2 rounded">
              <p className="text-sm text-blue-800">padding="none"</p>
            </div>
          </Card>
          
          <Card padding="sm" className="min-h-[100px] flex items-center justify-center">
            <div className="bg-blue-100 p-2 rounded">
              <p className="text-sm text-blue-800">padding="sm"</p>
            </div>
          </Card>
          
          <Card padding="md" className="min-h-[100px] flex items-center justify-center">
            <div className="bg-blue-100 p-2 rounded">
              <p className="text-sm text-blue-800">padding="md"</p>
            </div>
          </Card>
          
          <Card padding="lg" className="min-h-[100px] flex items-center justify-center">
            <div className="bg-blue-100 p-2 rounded">
              <p className="text-sm text-blue-800">padding="lg"</p>
            </div>
          </Card>
          
          <Card padding="xl" className="min-h-[100px] flex items-center justify-center">
            <div className="bg-blue-100 p-2 rounded">
              <p className="text-sm text-blue-800">padding="xl"</p>
            </div>
          </Card>
        </div>
      </div>
      
      {/* Hover Effects */}
      <div>
        <h2 className="text-lg font-semibold mb-4 dark:text-white">Hover Effects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card hover={true} className="min-h-[100px]">
            <h3 className="text-md font-semibold dark:text-white">Hover Enabled</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              hover=true (default). Hover over this card to see the effect.
            </p>
          </Card>
          
          <Card hover={false} className="min-h-[100px]">
            <h3 className="text-md font-semibold dark:text-white">Hover Disabled</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              hover=false. This card has no hover effects.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CardDemo; 