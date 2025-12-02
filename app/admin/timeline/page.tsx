"use client"
import StoryTimeLine from './StoryTimeLine';

// --- Component Chính (Áp dụng bố cục một cột) ---
export default function MediaManagementPage() {
    return (
        <div className="grid grid-cols-1 gap-2 mx-auto">
            <StoryTimeLine />
        </div>
    );
}