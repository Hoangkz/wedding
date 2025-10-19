"use client"

import * as React from "react"
import { Check, ChevronsUpDown, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Badge } from "@/components/ui/badge"

interface Option {
  label: string
  value: string
}

interface MultiComboboxProps {
  options: Option[]
  placeholder?: string
  values: string[]
  onChange: (value: string[]) => void
  className?: string | undefined
}

export function MultiCombobox({
  options,
  placeholder = "Chọn...",
  values,
  onChange,
  className = undefined,
}: MultiComboboxProps) {
  const [open, setOpen] = React.useState(false)

  const toggleValue = (val: string) => {
    if (values.includes(val)) {
      onChange(values.filter((v) => v !== val))
    } else {
      onChange([...values, val])
    }
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={`w-[300px] cursor-pointer justify-between ${className ? className : ""}`}
        >
          {values.length > 0 ? (
            <div className="flex gap-1 flex-wrap">
              {values.map((val, index) => {
                const item = options.find((o) => o.value === val)
                if (index === 1) {
                  return (
                    <Badge key={val} variant="secondary">
                      +{values.length - 1}
                    </Badge>
                  )
                } else if (index > 1) {
                  return
                }
                return (
                  <Badge key={val} variant="secondary" className="relative pr-4 ">
                    {item?.label}
                    <div
                      onClick={(e) => {
                        e.preventDefault()
                        const newValues = values.filter((e) => e !== val)
                        onChange(newValues)
                      }}
                      className="z-10 cursor-pointer absolute top-0 
                                            right-0 w-4 h-4 justify-center rounded-full
                                            bg-gray-300 text-black hover:bg-red-500 hover:text-white"
                    >
                      <X />
                    </div>
                  </Badge>
                )
              })}
            </div>
          ) : (
            <span className="text-muted-foreground">{placeholder}</span>
          )}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Tìm kiếm..." />
          <CommandList>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  className="cursor-pointer"
                  key={option.value}
                  onSelect={() => toggleValue(option.value)}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      values.includes(option.value) ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
