"use client"
import BackgroundImage from './BackgroundImage';
import MultiImageSection from './MultiImageSection';

export default function MediaManagementPage() {
  return (
    <div className="p-2 bg-gray-100">
      <div className="grid grid-cols-1 gap-2 mx-auto">
        <BackgroundImage />
        <MultiImageSection />
      </div>
    </div>
  );
}