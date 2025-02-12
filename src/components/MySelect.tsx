import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
const MySelect = ({ data, placeholder }) => {
  return (
    <Select>
        <SelectTrigger className="w-[180px]">
            <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {data.map((item) => (
            <SelectItem value={item.value}>{item.name}</SelectItem>
          ))
          }
        </SelectContent>
    </Select>

  )
}

export default MySelect
