import { InputHTMLAttributes } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement>

const Textfield: React.FC<Props> = (props) => (
  <input 
    className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" 
    {...props}
  />
)

export default Textfield