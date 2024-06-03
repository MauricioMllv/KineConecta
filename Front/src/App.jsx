import Routes from './routes';
import './App.css'
import { NewsContextProvider } from './context/NewsProvider';
import { ImagesContextProvider } from './context/ImagesProvider';
import { ImagesFContextProvider } from './context/ImagesFProvider';

function App() {

  return (
    
      <ImagesFContextProvider>
        <ImagesContextProvider>
          <NewsContextProvider>
            <Routes />
          </NewsContextProvider>
        </ImagesContextProvider>
      </ImagesFContextProvider>
    
    
  );
}



export default App
