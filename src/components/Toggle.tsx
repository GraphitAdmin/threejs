import React from 'react'
import { Switch } from './Switch'
//@ts-ignore
export function Toggle(props) {
    return (
        <div className="flex items-center space-x-2">
            <Switch
                id={`toggle-${props.label}`}
                checked={props.checked}
                onCheckedChange={props.onChange}
            />
            <label
                htmlFor={`toggle-${props.label}`}
                className="text-sm font-medium text-gray-700"
            >
                {props.label}
            </label>
        </div>
    )
}

