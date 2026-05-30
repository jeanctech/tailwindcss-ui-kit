// Button.jsx
export const Button = ({ children, variant = "primary" }) => (
  <button className={`px-4 py-2 rounded-lg ${
    variant === "primary" ? "bg-blue-500 text-white" : "bg-gray-200"
  }`}>
    {children}
  </button>
)