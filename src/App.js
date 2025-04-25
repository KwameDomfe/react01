import './App.css';
import './css/utility_classes.css';
import './css/gdb_normalize.css';
import './css/style.css'

import { 
createBrowserRouter,
Route,
createRoutesFromElements,
RouterProvider,
} from 'react-router-dom';

// Layouts
import RootLayout from './layouts/RootLayout';
import ListPagesLayout from './layouts/ListPagesLayout';
import CategoryPagesLayout from './layouts/CategoryPagesLayout';
import DetailPagesLayout from './layouts/DetailPagesLayout';
import LandingPagesLayout from './layouts/LandingPagesLayout';

// Pages Routes
import Home from './pages/Home';

import Faq from './pages/info/Index';
import Info from './pages/info/Index';
import Contact from './pages/info/Contact';
// Style Guide
import Styleguide   from './pages/info/styleguide/Index';
import Atoms        from './pages/info/styleguide/Atoms';
import Molecules    from './pages/info/styleguide/Molecules';
import Organisms    from './pages/info/styleguide/Organisms';
import Templates    from './pages/info/styleguide/Templates';

import ProjectsHome from './pages/projects/ProjectsHome'


import Governance from './pages/info/governance/Governance'
import GovernanceDetails from './pages/info/governance/GovernanceDetails'
import Careers, { careersLoader } from './pages/info/careers/Careers';
import CareerDetails, { careerDetailsLoader } from './pages/info/careers/CareerDetails';
import CareersError from './pages/info/careers/CareersError';
import Management from "./pages/info/management/Management";
import PageNotFound from './pages/PageNotFound';
// Function
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route  path="/"
            element={<RootLayout />}
        > 
            <Route index 
                element = {<Home />}
            />
            <Route path = "info/"
                element = {
                    <CategoryPagesLayout 
                        capname="Info" 
                        bgColour='red'
                    />
                }
                >
                <Route path = "" 
                    element = {<Info />} 
                    />
            </Route>
            
            <Route path ="info/"
            >
                <Route path = "governance" 
                    element = {<Governance />} 
                />
                <Route path = "governance/:id" 
                    element = {<GovernanceDetails />} 
                />
                <Route path = "management/" 
                >
                    <Route path = "" 
                        element = {<Management/>}
                    >
                    <Route path = ":id" 
                        element = {<DetailPagesLayout depname='management'/>}
                    />
                    </Route>
                </Route>
                <Route path = "technical-team" 
                    element = {<LandingPagesLayout name='Technical Team'/>}
                />
                <Route path = "technical-team/:id" 
                    element = {<DetailPagesLayout name ='Technical Team'/>} 
                />
                <Route path = "careers" 
                    element = {<LandingPagesLayout name='Careers'/>} 
                    errorElement = { <CareersError /> }
                    >
                    <Route 
                        index 
                        element = {<Careers />} 
                        loader = {careersLoader}
                    />
                    <Route 
                        path=":id"
                        element = {<CareerDetails />}
                        loader = {careerDetailsLoader}
                    />
                </Route>
                <Route path = "contact" 
                    element = {<Contact />} 
                />
                <Route path = "faq" 
                    element = {<Faq />} 
                />

                <Route path = "style-guide/"
                    element = {<LandingPagesLayout lapname='la'/>} 
                >
                    <Route path = "" 
                        element = {<Styleguide />} 
                    />
                    <Route path = "atoms/" 
                        element = {<DetailPagesLayout name = 'atoms' />} 
                    />
                    <Route path = "molecules/" 
                        element = {<DetailPagesLayout name = 'molecules' />} 
                    />
                    <Route path = "organisms/" 
                        element = {<DetailPagesLayout name = 'organisms' />} 
                    />
                    <Route path = "templates" 
                        element = {<DetailPagesLayout name = 'templates' />} 
                    />
                </Route>
            </Route>
            
            <Route path = "projects/"
                element = {<CategoryPagesLayout capname="Projects" bgColour='blue0'/>} 
            >
                <Route path = "" 
                element ={<ProjectsHome />}
                />
                <Route path = "lists" 
                    element = {<ListPagesLayout name='projects' />} 
                />
                <Route path = ":id/" 
                    element = {<DetailPagesLayout />} 
                />
                <Route path = "careers" 
                    element = {<LandingPagesLayout />} 
                    // errorElement = { <CareersError /> }
                    >
                    <Route 
                        index 
                        element = {<Careers />} 
                        loader = {careersLoader}
                    />
                    <Route 
                        path=":id"
                        element = {<CareerDetails />}
                        loader = {careerDetailsLoader}
                    />
                </Route>
                <Route path = "faq" 
                    element = {<Faq />} 
                />
                <Route path = "style-guide/" 
                    element  = {<Styleguide />}
                />
                <Route path = "style-guide/"
                    element = {<LandingPagesLayout />} 
                >
                    <Route path = "atoms" 
                        element = {<Atoms />} 
                    />
                    <Route path = "molecules" 
                        element = {<Molecules />} 
                    />
                    <Route path = "organisms" 
                        element = {<Organisms />} 
                    />
                    <Route path = "templates" 
                        element = {<Templates />} 
                    />
                </Route>
            </Route>

            <Route path = "services/"
                element = {<CategoryPagesLayout capname="Services" bgColour='blue5'/>} 
            >
                <Route path = "" 
                    
                />
                {/* <Route path = "/:id" 
                    element = {<DetailPagesLayout />} 
                /> */}
                <Route path = "governance" 
                    element = {<ListPagesLayout />} 
                />
                <Route path = "careers" 
                    element = {<LandingPagesLayout />} 
                    errorElement = { <CareersError /> }
                    >
                    <Route 
                        index 
                        element = {<Careers />} 
                        loader = {careersLoader}
                    />
                    <Route 
                        path=":id"
                        element = {<CareerDetails />}
                        loader = {careerDetailsLoader}
                    />
                </Route>
                <Route path = "faq" 
                    element = {<DetailPagesLayout />} 
                />
                <Route path = "style-guide/" 
                    element  = {<Styleguide />}
                />
                <Route path = "style-guide/"
                    element = {<LandingPagesLayout />} 
                >
                    <Route path = "atoms" 
                        element = {<Atoms />} 
                    />
                    <Route path = "molecules" 
                        element = {<Molecules />} 
                    />
                    <Route path = "organisms" 
                        element = {<Organisms />} 
                    />
                    <Route path = "templates" 
                        element = {<Templates />} 
                    />
                </Route>
            </Route>

            {/* Miscellaneous Pages */}

            <Route path="*"
            element = { <PageNotFound /> }
            >
            </Route>

            
        </Route>

    )
)

function App() {

    return (
        <RouterProvider
            router={router}
        />
    );

} 

export default App;
