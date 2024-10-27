import backgroundImage from './assets/alexander.png';

function App() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    ></div>
  );
}

export default App;
