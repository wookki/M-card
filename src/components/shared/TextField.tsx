import {
  FocusEventHandler,
  forwardRef,
  InputHTMLAttributes,
  useState,
} from 'react'
import Input from './Input'
import Text from './Text'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode
  hasError?: boolean
  helpMessage?: React.ReactNode
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, hasError, helpMessage, onFocus, onBlur, ...props }, ref) => {
    const [focused, setFocused] = useState(false)
    //TODO: 포커스 처리
    const labelColor = hasError ? 'red' : focused ? 'blue' : undefined

    const handleFocus: FocusEventHandler<HTMLInputElement> = (event) => {
      setFocused(true)
      onFocus?.(event)
    }

    const handleBlur: FocusEventHandler<HTMLInputElement> = (event) => {
      setFocused(false)
      onBlur?.(event)
    }

    return (
      <div>
        {label && (
          <Text typography="t7" color={labelColor} style={{ marginBottom: 6 }}>
            {label}
          </Text>
        )}
        <Input
          ref={ref}
          aria-invalid={hasError}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        {helpMessage && (
          <Text
            typography="t7"
            color={labelColor}
            style={{ marginTop: 6, fontSize: 12 }}
          >
            {helpMessage}
          </Text>
        )}
      </div>
    )
  },
)

export default TextField
