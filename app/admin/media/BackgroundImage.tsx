"use client"
import { CollapseSection } from "@/components/CollapseSection";
import { SingleImageInput } from "@/components/SingleImageInput";
import { memo } from "react";

const BackgroundImage = () => {
    const data = [
        { label: "#Home", fileUrl: "/layout/home" },
        { label: "#Letter", fileUrl: "/layout/letter" },
        { label: "#Couple", fileUrl: "/layout/couple" },
        { label: "#Story", fileUrl: "/layout/story" },
        { label: "#Wedding-Events", fileUrl: "/layout/wedding-events" },
        { label: "#Album", fileUrl: "/layout/album" },
        { label: "#Wishes", fileUrl: "/layout/wishes" },
        { label: "#Gifts", fileUrl: "/layout/gifts" },
    ]
    return <CollapseSection title="1. Ảnh Nền" defaultOpen={true}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-4">
            {data.map(e => {
                return <SingleImageInput key={e.fileUrl} label={e.label} fileUrl={e.fileUrl} />
            })}
        </div>
    </CollapseSection>
}

export default memo(BackgroundImage)