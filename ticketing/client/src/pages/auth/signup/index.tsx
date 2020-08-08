import { Textfield } from '@components/Form';

const Signup: React.FC = () => {
  return (
    <form>
      <h1>Signup</h1>
      <Textfield name="email" type="email" placeholder="Type your email" />
    </form>
  );
};

export default Signup;
