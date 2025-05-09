import { HeroSection } from '../HeroSection/HeroSection';
import { Button } from '../UI/Button/Button';
import { Input } from '../UI/Input/Input';
import './main.css';

export const Main = () => {
  return (
    <main className='main'>
      <HeroSection />
      <Input
        className='password'
        type='password'
        placeholder='Password'
        error={true}
        label='Password'
        errorMessage='Должно быть не менее 5 символов'
      ></Input>
      <Button>Create account</Button>
    </main>
  );
};
