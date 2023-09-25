interface ButtonProps {
  text: string
  primary?: boolean
}
const Button: React.FC<ButtonProps> = ({ text, primary }) => {
  return (
    <div
      className={`py-2 px-4 w-full text-center cursor-pointer hover:opacity-[.5] ${primary ? 'bg-black text-white' : 'border-solid	border border-gray-600'} rounded-md`}
    >
      {text}
    </div>
  )
}

export default Button
