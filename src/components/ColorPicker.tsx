import React from 'react'
// @ts-ignore
export function ColorPicker(props ) {
  return (
    <div className="flex items-center space-x-2">
      <label className="text-sm font-medium text-gray-700">{props.label}</label>
      <input
        type="color"
        value={props.color}
        onChange={(e) => props.onChange(e.target.value)}
        className="w-8 h-8 border-none rounded-full overflow-hidden"
      />
    </div>
  )
}

