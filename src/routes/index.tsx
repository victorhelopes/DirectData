import { Route, Routes } from 'react-router-dom'

import { CreateClient } from '../components/pages/CreateClient';
import { Home } from '../components/pages/Home';
import { UpdateClient } from '../components/pages/UpdateClient';

export default function PagesRoutes(){
    return(
        <Routes>
            <Route>
                <Route  path = "/" element={<Home/>}/>
                <Route  path = "/Create-client" element={<CreateClient/>}/>
                <Route  path = "/edit-client/:cpf" element={<UpdateClient/>}/>
            </Route>
        </Routes>
    );
}