import { HeroSection } from '../HeroSection/HeroSection';
import { Button } from '../UI/Button/Button';
import './main.css';

export const Main = () => {
  return (
    <main className='main'>
      <HeroSection />
      <Button>Create account</Button>
    </main>
  );
};
