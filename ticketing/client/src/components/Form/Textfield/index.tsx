import { InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const Textfield: React.FC<Props> = (props) => (
  <>
    <label
      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
      htmlFor={props.id}
    >
      {props.label}
    </label>
    <input
      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      {...props}
    />
  </>
)

export default Textfield
