/* ==== Containers & Component ==== */
import {
  HomePage,
  RecipePage,
  InfoPage,
  HomePageAPI,
} from './containers';
import {
  Header,
  Footer,
  SearchForm,
} from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/* ==== Style ==== */
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';

function App() {
  console.log(process.env.REACT_APP_API_KEY);
  return (
    <>
      <Header />
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<HomePage />} exact />
              <Route path='/recipes/:id' element={<RecipePage />} exact />
              <Route path='/info' element={<InfoPage />} />
              <Route path='/searchform' element={<SearchForm />} />
              <Route path='/clientapi' element={<HomePageAPI />} />
          </Routes>
        </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
