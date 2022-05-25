import Welcome from '../components/LandingPage/Welcome';
import Widget from '../components/Widget';
import IndustryCards from '../components/IndustryCards';
import CompanyCards from '../components/CompanyCards';

const LandingPage = () => {

  return (
    <div>
      <Welcome />
      <Widget title="Leading you into economic victory." sub="We’ve got the expertise, we’ve got the connections, and we want your business to accelerate and thrive. We’ll see you through the entire process from development to expansion while capitalising on emerging opportunities to bring the best economic result." />
      <IndustryCards />
      <Widget title="Aptrasco Group" sub="The group has one mission, and that is to turn your business into a roaring success. Our customers come first, and we are in the business of protecting your benefits. We also provide after-sales services to care for your needs." />
      <CompanyCards />
    </div>
  )
};

export default LandingPage;