import { Routes, Route } from 'react-router-dom';
import SiteLayout from './layouts/SiteLayout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import AboutUP from './components/home/AboutUP';
import About from './components/home/About';
import Highlights from './components/home/Highlights';
import FocusSectors from './components/home/FocusSectors';
import Agenda from './components/home/Agenda';
import Outreach from './components/home/Outreach';
import Visitors from './components/home/Visitors';
import Opportunities from './components/home/Opportunities';
import EventTeam from './components/home/EventTeam';
import CorporateCommittee from './components/home/CorporateCommittee';
import SupportingOrgs from './components/home/SupportingOrgs';
import AboutLAA from './components/home/AboutLAA';
import LAACommittee from './components/home/LAACommittee';
import LAACommittees from './components/home/LAACommittees';
import PastEvent from './components/home/PastEvent';
import Media from './components/home/Media';
import KeyBrands from './components/home/KeyBrands';
import Venue from './components/home/Venue';
import Partners from './components/home/Partners';
import Contact from './components/home/Contact';

export default function App() {
  return <Routes>
    <Route element={<SiteLayout/>}>
      <Route index element={<Home/>}/>
      <Route path="about" element={<><AboutUP/><About/><AboutLAA/></>}/>
      <Route path="highlights" element={<><Highlights/><FocusSectors/></>}/>
      <Route path="focus-sectors" element={<FocusSectors/>}/>
      <Route path="agenda" element={<Agenda/>}/>
      <Route path="outreach" element={<Outreach/>}/>
      <Route path="visitors" element={<Visitors/>}/>
      <Route path="opportunities" element={<Opportunities/>}/>
      <Route path="team" element={<><EventTeam/><CorporateCommittee/><SupportingOrgs/></>}/>
      <Route path="corporate" element={<CorporateCommittee/>}/>
      <Route path="supporting-organisations" element={<SupportingOrgs/>}/>
      <Route path="laa" element={<><AboutLAA/><LAACommittee/></>}/>
      <Route path="committees" element={<><LAACommittee/><LAACommittees/></>}/>
      <Route path="gallery" element={<><PastEvent/><Media/></>}/>
      <Route path="media" element={<Media/>}/>
      <Route path="brands" element={<KeyBrands/>}/>
      <Route path="venue" element={<><Venue/><Partners/></>}/>
      <Route path="partners" element={<Partners/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Route>
  </Routes>;
}
