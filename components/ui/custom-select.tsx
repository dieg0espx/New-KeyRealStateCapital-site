"use client"

import { useState, useRef, useEffect } from "react"
import { createPortal } from "react-dom"
import { ChevronDown } from "lucide-react"

interface CustomSelectProps {
  value: string
  onChange: (value: string) => void
  options: { value: string; label: string }[]
  placeholder?: string
  className?: string
}

export function CustomSelect({ 
  value, 
  onChange, 
  options, 
  placeholder = "--Select--", 
  className = "" 
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLabel, setSelectedLabel] = useState(() => {
    const selectedOption = options.find(option => option.value === value)
    return selectedOption ? selectedOption.label : placeholder
  })
  const [isMobile, setIsMobile] = useState(false)
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0, width: 0 })
  const selectRef = useRef<HTMLDivElement>(null)

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Update selected label when value changes
  useEffect(() => {
    const selectedOption = options.find(option => option.value === value)
    setSelectedLabel(selectedOption ? selectedOption.label : placeholder)
  }, [value, options, placeholder])

  // Calculate dropdown position for mobile portal
  useEffect(() => {
    if (isOpen && isMobile && selectRef.current) {
      const rect = selectRef.current.getBoundingClientRect()
      setDropdownPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width
      })
    }
  }, [isOpen, isMobile])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node
      if (isMobile) {
        // For mobile portal, check if clicking outside the dropdown
        if (target && (target as Element).closest('.mobile-portal-dropdown')) {
          return
        }
      }
      if (selectRef.current && !selectRef.current.contains(target)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, isMobile])

  const handleOptionClick = (optionValue: string) => {
    onChange(optionValue)
    setIsOpen(false)
  }

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  // Mobile portal dropdown
  const MobileDropdown = () => {
    if (!isOpen || !isMobile) return null

    return createPortal(
      <div 
        className="fixed bg-white border-2 border-gray-200 rounded-lg shadow-xl max-h-60 overflow-y-auto mobile-portal-dropdown"
        style={{
          top: dropdownPosition.top,
          left: dropdownPosition.left,
          width: dropdownPosition.width,
          zIndex: 9999999,
          position: 'fixed'
        }}
      >
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => handleOptionClick(option.value)}
            className={`w-full px-4 py-3 text-left text-base font-medium transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg ${
              value === option.value
                ? 'bg-light-green text-white'
                : 'text-gray-900 hover:bg-gray-50'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>,
      document.body
    )
  }

  return (
    <div ref={selectRef} className={`relative ${className}`}>
      {/* Select Trigger */}
      <button
        type="button"
        onClick={handleToggle}
        className="w-full h-12 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-light-green focus:outline-none focus:ring-4 focus:ring-light-green/20 bg-white text-gray-900 text-base font-medium transition-all duration-200 hover:border-gray-300 shadow-sm hover:shadow-md flex items-center justify-between"
      >
        <span className="text-left">{selectedLabel}</span>
        <ChevronDown 
          className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>

      {/* Desktop dropdown - absolute positioning */}
      {isOpen && !isMobile && (
        <div className="absolute top-full left-0 right-0 z-[9999] mt-1 bg-white border-2 border-gray-200 rounded-lg shadow-xl max-h-60 overflow-y-auto">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => handleOptionClick(option.value)}
              className={`w-full px-4 py-3 text-left text-base font-medium transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg ${
                value === option.value
                  ? 'bg-light-green text-white'
                  : 'text-gray-900 hover:bg-gray-50'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}

      {/* Mobile dropdown - portal */}
      <MobileDropdown />
    </div>
  )
}
