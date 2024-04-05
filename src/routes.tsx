import { Route, Routes } from 'react-router-dom'

import { CreateClient } from './components/pages/CreateClient';

export default function PagesRoutes(){
    return(
        <Routes>
            <Route>
                <Route  path = "/Create-client" element={<CreateClient/>}/>
            </Route>
        </Routes>
    );
}