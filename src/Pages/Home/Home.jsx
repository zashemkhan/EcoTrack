import HeroBanner from "../../Components/HeroBanner/HeroBanner";
import RecentTips from "../../Components/RecentTips/RecentTips";
import UpcomingEvent from "../../Components/UpcomingEvent/UpcomingEvent";
import ActiveChallenge from "../../Components/ActiveChallenge/ActiveChallenge";
import LiveStatics from "../../Components/CommunityTools/LiveStatics";
import GoGReen from "../../Components/GoGReen/GoGReen";
import HowWorks from "../../Components/GoGReen/HowWorks";

const Home = () => {
  return (
    <div className="min-h-screen mx-auto w-11/12 lg:py-15 py-10">
      <HeroBanner></HeroBanner>
      <LiveStatics></LiveStatics>

      <section>
        <ActiveChallenge></ActiveChallenge>
      </section>
      <section>
        <RecentTips></RecentTips>
      </section>
      <section className="">
        <UpcomingEvent></UpcomingEvent>
      </section>
      <section className="py-15">
        {/* <h2>hoo</h2> */}
        <GoGReen></GoGReen>
        <HowWorks></HowWorks>
      </section>
    </div>
  );
};

export default Home;
