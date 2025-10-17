"use client";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Funnel } from "lucide-react";
import { ProductModel } from "@/lib/model";
import { CategoryModel } from "@/lib/model";
import { BrandModel } from "@/lib/model";
import { MultiCombobox } from "./MultiCombobox";
import { memo, useState } from "react";
import { Label } from "./label";
import FilterGroup from "./FilterGroup";
interface FilterProductProps {
    open?: boolean;
    product?: ProductModel;
    categories: CategoryModel[]
    brands: BrandModel[]
    metadata: MetadataProps[]
    onApply: (filters: {
        q: string,
        categorieIds: string[],
        brandIds: string[],
        metadata: MetadataProps[]
    }) => void;
}

export interface MetadataProps {
    metaKey: string
    metaName?: string
    metaValues: string[]
}

const CardFilterProduct: React.FC<FilterProductProps> = ({
    categories = [], brands = [], metadata = [], onApply
}) => {
    const [open, setOpen] = useState<boolean>(false)
    const [selectedMetaData, setSelectedMetaData] = useState<Record<string, string[]>>({});
    const [filters, setFilters] = useState<{
        q: string,
        categorieIds: string[];
        brandIds: string[];
        metadata: MetadataProps[];
    }>({
        q: "",
        categorieIds: [],
        brandIds: [],
        metadata: []
    });
    const resetFilters = () => {
        setFilters({
            q: "",
            categorieIds: [],
            brandIds: [],
            metadata: []
        });
        setSelectedMetaData({})
        onApply?.({
            q: "",
            categorieIds: [],
            brandIds: [],
            metadata: []
        })
    };
    return (
        <Popover modal open={open} onOpenChange={(e) => {
            setOpen(e)
        }}>
            <PopoverTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2 h-full  cursor-pointer">
                    <Funnel className="h-4 w-4" />
                    Phân loại
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[450px] p-4 space-y-4 ">
                {/* Danh mục */}
                <div className="mr-3 flex ml-4">
                    <Label className="mr-1">Danh mục:</Label>
                    <MultiCombobox
                        options={categories.map(e => ({
                            value: e.id, label: e.name
                        }))}
                        values={filters.categorieIds}
                        onChange={(values: string[]) => {
                            setFilters({
                                ...filters,
                                categorieIds: values
                            });
                        }}
                        placeholder="Tìm kiếm theo danh mục"
                        className="" />
                </div>
                <div className="mr-1 flex ">
                    <Label className="mr-1">Thương hiệu:</Label>
                    <MultiCombobox
                        options={brands.map(e => ({
                            value: e.id, label: e.name
                        }))}
                        values={filters.brandIds}
                        onChange={(values: string[]) => {
                            setFilters({
                                ...filters,
                                brandIds: values
                            });
                        }}
                        placeholder="Tìm kiếm theo thương hiệu"
                        className="" />
                </div>
                <FilterGroup
                    data={metadata}
                    setSelected={setSelectedMetaData}
                    selected={selectedMetaData} />

                {/* Actions */}
                <div className="flex justify-end gap-2 pt-2 ">
                    <Button variant="outline" className="cursor-pointer" onClick={resetFilters}>
                        Xóa bộ lọc
                    </Button>
                    <Button
                        className="cursor-pointer bg-blue-500 hover:bg-blue-500 hover:opacity-70"
                        onClick={() => {
                            onApply?.({
                                ...filters,
                                metadata: Object.entries(selectedMetaData)
                                    .map(e => ({ metaKey: e[0], metaValues: e[1] }))
                                    .filter(e => e?.metaValues?.length > 0)
                            })
                            setOpen(false)
                        }}
                    >
                        Áp dụng
                    </Button>
                </div>
            </PopoverContent>
        </Popover>
    );
}
export default memo(CardFilterProduct)