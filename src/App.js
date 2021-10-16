// import logo from './logo.svg';
import swag from './img/Swag.png';
import cosmetics from './img/Cosmetics.png';
import './App.css';
import 'animate.css';
import AuthButton from './components/buttons/authButton.js'
import FeatureCard from './components/featureCard';

function App() {
  return (
    <div className="App font-sans">
      <div className="flex justify-around p-5 bg-gray-400 border-gray-500">
        <svg className="fill-current text-red-400 w-16 h-16 animate__animated animate__fadeInDownBig" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 799.1 698.91"><defs><style>.cls-1</style></defs><path className="cls-1" d="M443.67,431s-38.6-31.71-22.06-57.9c0,0,11-31.71,40-17.92l44.6,15.74s21.57,4.94,16.05,17.34c0,0,5.52,0,12.41-9.65,0,0,13.78-13.78,1.38-28.95,0,0-27.57-24.81-31.71-38.59s-6.89-27.57-27.57-44.12l-74.44-48.24s-28.95-17.92-37.22-45.49S356.82,136,356.82,136,312.71,199.38,383,254.52c0,0-9-5.43-24.81-20.68-15.61-15.09-37.92-40-41.35-42.73l-8.27-5.52s8.27,22.06,9.64,31.71,5.52,30.33,28.95,37.22c0,0-27.57,1.38-33.08,1.38s-9.65-5.52-17.92-5.52-17.92,6.9-19.3,9.65a32.91,32.91,0,0,1,23.43,8.27c11,9.65,37.22,8.27,37.22,8.27s-37.22,2.76-51,45.49c0,0,24.81-19.29,31.7-11l9.65,8.27s-33.08,22.05-31.7,82.71c0,0-22.06-19.3-46.87-27.57S202.43,340,202.43,340s-20.68-22.06-22.06,8.27,23.44,66.16,23.44,66.16-46.87-27.57-48.25-81.33c0,0-1.38-41.35,13.79-66.17,0,0,5.51-9.64,4.13-27.57S148.67,104.26,312.71,50.5c0,0-159.91,6.89-228.83,56.52,0,0-2.76,55.14,29,124.06,0,0-28.95-20.67-42.74-114.41,0,0-55.14,66.17-64.78,136.47,0,0,28.94,37.22,102,102,0,0-35.84-9.08-102-78.29,0,0-20.68,60.37,28.94,137.56,0,0,45.49,19.3,129.58,19.3,0,0-49.62,15.17-124.06-2.75,0,0,97.87,111.65,246.75,124.06,0,0-42.73-20.68-67.55-60.65l51,13.78s20.67,2.76,35.84,23.44S381.64,635,389.91,677.72c0,0,13.78,52.38,20.67,62s8.28,15.16,13.79,1.38,44.11-86.85,44.11-86.85,42.73-70.3,37.22-113S496.05,479.21,443.67,431Zm40-118.55c2.76,11-8.27-2.76-15.16-1.38s-13.78-19.3-13.78-19.3C456.07,291.74,480.89,301.39,483.64,312.42Z" transform="translate(-1.03 -50.5)"/><path className="cls-1" d="M797.48,282.72a3.54,3.54,0,0,0-6-1.7c-33.14,34-58.32,52.63-74.79,62.64a3.55,3.55,0,0,1-4.25-5.64c52.59-48.15,77.43-77.85,82.46-84a3.54,3.54,0,0,0,.75-2.75c-8.31-56.68-45.77-110.37-59.5-128.49a3.55,3.55,0,0,0-6.32,1.6c-6.4,39.12-15.44,64.57-23.45,80.73-2,4-8,1.4-6.5-2.79,17-48.24,17.59-85.38,17.46-93.83a3.51,3.51,0,0,0-1.5-2.84C663.29,68.88,560.7,56,513.42,51.87a3.54,3.54,0,0,0-1.63,6.81C650.2,115.4,629,222,627.68,239c-1.38,17.92,4.14,27.57,4.14,27.57C647,291.35,645.6,332.7,645.6,332.7c-.86,33.71-19.61,57.13-33.48,69.9a3.54,3.54,0,0,1-5.52-4.26c6.89-13.23,15-32.79,14.19-50.47-1.24-27.34-18.16-12.12-21.49-8.85a3.56,3.56,0,0,0-.82,1.27c-2.12,5.66-18.34,43.81-40.4,52.08-7.29,2.73-33.59,14.82-33.59,14.82a3.37,3.37,0,0,0-1.44,1.06c-4.81,6-26.57,32.71-33.29,41a3.53,3.53,0,0,0,.16,4.64c17.6,18.62,23.45,38.17,28.92,53.89a3.55,3.55,0,0,0,4.59,2.15A42.87,42.87,0,0,1,531,507.8l.38-.08L573,496.46a3.55,3.55,0,0,1,3.82,5.49c-16.85,23.29-39,39-51.86,46.87,0,.23,0,.46,0,.7v0a3.56,3.56,0,0,0,4,3.55c116.29-14.89,199-88.78,224.32-114a3.54,3.54,0,0,0-3.24-6A294.29,294.29,0,0,1,676.25,439c-4.42-.23-4.48-6.74-.06-7.07,52.74-4,83.55-15.07,89.61-17.42a3.65,3.65,0,0,0,1.73-1.42C807,351,801.16,300,797.48,282.72Z" transform="translate(-1.03 -50.5)"/></svg>
        <h1 className="animate__animated animate__fadeInDown font-bold my-auto text-5xl text-purple">Phoenix</h1>
        <AuthButton />
      </div>
      <div className="grid grid-auto-wrap gap-4 m-6">
        <FeatureCard
          img={swag}
          title="Epic Capes!"
          alt="Character wearing an awesome cape."
          content={
            <>Awesome minecraft capes and elytras, to be <em>earned or purchased!</em></>
          }
        />
        <FeatureCard
          img={cosmetics}
          title="Unique Cosmetics!"
          alt="Player with cool cosmetics."
          content={
            <>Show off your fashion sense with our one-of-a-kind cosmetic items.</>
          }
        />
        <FeatureCard
          img={swag}
          title="Placeholder"
          alt="Placeholder"
          content={
            <>This is some placeholder text, replace it later!</>
          }
        />
        <FeatureCard
          img={swag}
          title="Placeholder"
          alt="Placeholder"
          content={
            <>This is some placeholder text, replace it later!</>
          }
        />
        <FeatureCard
          img={swag}
          title="Placeholder"
          alt="Placeholder"
          content={
            <>This is some placeholder text, replace it later!</>
          }
        />
        <FeatureCard
          img={swag}
          title="Placeholder"
          alt="Placeholder"
          content={
            <>This is some placeholder text, replace it later!</>
          }
        />
        
      </div>
    </div>
  );
}

export default App;
