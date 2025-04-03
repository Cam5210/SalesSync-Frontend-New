// A page that displays all the components in the components folder so that we can see how each is styled in the dev environment

import React from 'react';
import ButtonDemo from '../ui/ButtonDemo';
import CardDemo from '../ui/CardDemo';
import { VideoPlayer } from '../ui';

const ViewComponents = () => {
    return (
        <div className="space-y-8 p-4">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-4 dark:text-white">Video Player</h2>
                <div className="max-w-2xl mx-auto">
                    <VideoPlayer 
                        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                        poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
                        title="Big Buck Bunny - Sample Video"
                        controls={true}
                    />
                    <p className="mt-4 text-gray-600 dark:text-gray-300">
                        Video player with fullscreen support. Click the fullscreen button in the top-right to toggle fullscreen mode.
                    </p>
                </div>
            </div>
            
            <ButtonDemo />
            <CardDemo />
        </div>
    );
};

export default ViewComponents;