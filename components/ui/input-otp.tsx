import * as React from "react"

interface OTPInputProps {
  length?: number
  value: string
  onChange: (val: string) => void
}

export function OTPInput({ length = 6, value, onChange }: OTPInputProps) {
  const inputsRef = React.useRef<HTMLInputElement[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
    const val = e.target.value.replace(/\D/g, "")
    if (!val) return
    const newValue = value.split("")
    newValue[i] = val
    onChange(newValue.join("").slice(0, length))
    if (i < length - 1) inputsRef.current[i + 1]?.focus()
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, i: number) => {
    if (e.key === "Backspace" && !value[i] && i > 0) {
      inputsRef.current[i - 1]?.focus()
    }
  }

  return (
    <div className="flex justify-between gap-2">
      {Array.from({ length }).map((_, i) => (
        <input
          key={i}
          type="text"
          maxLength={1}
          value={value[i] || ""}
          onChange={(e) => handleChange(e, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          ref={(el) => {
            if (el) inputsRef.current[i] = el
          }}
          className="
            w-12 h-12 border border-gray-300 rounded-lg text-center text-lg font-medium
            focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition
          "
        />
      ))}
    </div>
  )
}
