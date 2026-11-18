// The homepage only calls individually authored, reusable section components.
import Hero from '../components/home/Hero';
import AboutUP from '../components/home/AboutUP';
import About from '../components/home/About';
import Highlights from '../components/home/Highlights';
import FocusSectors from '../components/home/FocusSectors';
import Agenda from '../components/home/Agenda';
import Outreach from '../components/home/Outreach';
import Visitors from '../components/home/Visitors';
import Opportunities from '../components/home/Opportunities';
import EventTeam from '../components/home/EventTeam';
import CorporateCommittee from '../components/home/CorporateCommittee';
import SupportingOrgs from '../components/home/SupportingOrgs';
import AboutLAA from '../components/home/AboutLAA';
import LAACommittee from '../components/home/LAACommittee';
import LAACommittees from '../components/home/LAACommittees';
import PastEvent from '../components/home/PastEvent';
import Media from '../components/home/Media';
import KeyBrands from '../components/home/KeyBrands';
import Venue from '../components/home/Venue';
import Partners from '../components/home/Partners';
import Contact from '../components/home/Contact';

export default function Home() {
  return <>
    <Hero />
    <AboutUP />
    <About />
    <Highlights />
    <FocusSectors />
    <Agenda />
    <Outreach />
    <Visitors />
    <Opportunities />
    <EventTeam />
    <CorporateCommittee />
    <SupportingOrgs />
    <AboutLAA />
    <LAACommittee />
    <LAACommittees />
    <PastEvent />
    <Media />
    <KeyBrands />
    <Venue />
    <Partners />
    <Contact />
  </>;
}
