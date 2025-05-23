import { executeApiRequest } from "../../../app/token";
import { HeroSection } from "../HeroSection/HeroSection";
import { TaglineSection } from "../TaglineSection/TagLineSection";
// import { Button } from '../UI/Button/Button';
// import { Input } from '../UI/Input/Input';
import "./main.css";

export const Main = () => {
  (async () => {
    try {
      const token = await executeApiRequest();
      console.log('Токен:', token.access_token);
    } catch (error) {
      console.error('Ошибка:', error);
    }
  })();
  return (
    <main className="main">
      <HeroSection />
      {/* <Input
        className='password'
        type='password'
        placeholder='Password'
        error={true}
        label='Password'
        errorMessage='Должно быть не менее 5 символов'
      ></Input>
      <Button className='register__button'>Create account</Button> */}
      <TaglineSection />
    </main>
  );
};
