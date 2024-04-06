import { BrowserRouter } from 'react-router-dom';

import PagesRoutes from './routes/index'

function App() {
  return (
    <div className='container'>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"></link>
      <BrowserRouter>
        <PagesRoutes/>
    </BrowserRouter>
    </div>
  );
}

export default App;
