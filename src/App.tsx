import React from 'react';

// UI
import Tile from './Tile';
import {
    ExclamationTriangleIcon,
    SunIcon,
    MoonIcon,
    BoltIcon,
    HeartIcon,
    WrenchIcon,
    LightBulbIcon,
    PhoneIcon,
    StarIcon,
    SparklesIcon,
    CloudIcon,
    BanknotesIcon,
    ArchiveBoxIcon,
    AcademicCapIcon,
    BeakerIcon,
    FaceSmileIcon,
    HandRaisedIcon,
    GlobeAltIcon,
    KeyIcon,
    LockClosedIcon,
    LockOpenIcon,
} from '@heroicons/react/24/outline';

function App() {
    return (
        <div className="App">
            <div className="grid grid-cols-2 sm:grid-cols-6">
                <Tile className="bg-amber-100">
                    <ExclamationTriangleIcon className="h-16 w-16 fill-amber-400 text-black" />
                </Tile>
                <Tile className="bg-lime-200    ">
                    <FaceSmileIcon className="h-16 w-16 fill-amber-300 text-black" />
                </Tile>
                <Tile className="bg-blue-500">
                    <SunIcon className="h-16 w-16 fill-yellow-500 text-black" />
                </Tile>
                <Tile className="bg-blue-500">
                    <CloudIcon className="h-16 w-16 fill-gray-50 text-black" />
                </Tile>
                <Tile className="bg-gray-900">
                    <MoonIcon className="h-16 w-16 fill-gray-300 text-black" />
                </Tile>
                <Tile className="bg-gray-900">
                    <StarIcon className="h-16 w-16 fill-yellow-300 text-black" />
                </Tile>
                <Tile className="bg-gray-900">
                    <SparklesIcon className="h-16 w-16 fill-yellow-300 text-black" />
                </Tile>
                <Tile className="bg-gray-600">
                    <BoltIcon className="h-16 w-16 fill-yellow-500 text-black" />
                </Tile>
                <Tile className="bg-pink-200">
                    <HeartIcon className="h-16 w-16 fill-red-500 text-black" />
                </Tile>
                <Tile className="bg-green-200">
                    <WrenchIcon className="h-16 w-16 fill-gray-400 text-black" />
                </Tile>
                <Tile className="bg-yellow-100">
                    <LightBulbIcon className="h-16 w-16 fill-yellow-400 text-black" />
                </Tile>
                <Tile className="bg-blue-100">
                    <PhoneIcon className="h-16 w-16 fill-red-500 text-black" />
                </Tile>
                <Tile className="bg-green-200">
                    <BanknotesIcon className="h-16 w-16 fill-green-500 text-black" />
                </Tile>
                <Tile className="bg-amber-400">
                    <ArchiveBoxIcon className="h-16 w-16 fill-amber-600 text-black" />
                </Tile>
                <Tile className="bg-purple-300">
                    <AcademicCapIcon className="h-16 w-16 fill-gray-600 text-black" />
                </Tile>
                <Tile className="bg-cyan-300">
                    <BeakerIcon className="h-16 w-16 fill-green-600 text-black" />
                </Tile>
                <Tile className="bg-red-400">
                    <HandRaisedIcon className="h-16 w-16 fill-amber-400 text-black" />
                </Tile>
                <Tile className="bg-blue-700">
                    <GlobeAltIcon className="h-16 w-16 fill-blue-400 text-black" />
                </Tile>
                <Tile className="bg-cyan-700">
                    <KeyIcon className="h-16 w-16 fill-amber-400 text-black" />
                </Tile>
                <Tile className="bg-orange-300">
                    <LockOpenIcon className="h-16 w-16 fill-gray-400 text-black" />
                </Tile>
            </div>
        </div>
    );
}

export default App;
