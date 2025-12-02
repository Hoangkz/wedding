export const baseInputClass =
    "w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-150 text-sm shadow-inner"

export const Input = ({
    label,
    name,
    value,
    onChange,
    disabled,
    type = "text",
    className = "",
    placeholder = "",
    required,
}: any) => (
    <div className="flex flex-col space-y-1">
        {label && (
            <label htmlFor={name} className="font-semibold text-gray-700 text-sm">
                {label}
            </label>
        )}
        <input
            id={name}
            name={name}
            type={type}
            placeholder={placeholder || label}
            value={value}
            onChange={onChange}
            disabled={disabled}
            required={required}
            className={`${baseInputClass} ${className}`}
        />
    </div>
)

export const TextArea = ({ label, name, value, onChange, className = "", placeholder = "" }: any) => (
    <div className={`flex flex-col space-y-1 ${className}`}>
        <label htmlFor={name} className="font-semibold text-gray-700 text-sm">
            {label}
        </label>
        <textarea
            id={name}
            name={name}
            placeholder={placeholder || label}
            value={value}
            onChange={onChange}
            rows={2}
            className={`${baseInputClass} resize-none`}
        />
    </div>
)
