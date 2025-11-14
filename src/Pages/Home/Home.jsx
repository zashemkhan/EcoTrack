import HeroBanner from "../../Components/HeroBanner/HeroBanner";
import RecentTips from "../../Components/RecentTips/RecentTips";
import UpcomingEvent from "../../Components/UpcomingEvent/UpcomingEvent";
import ActiveChallenge from "../../Components/ActiveChallenge/ActiveChallenge";
import LiveStatics from "../../Components/CommunityTools/LiveStatics";
import GoGReen from "../../Components/GoGReen/GoGReen";
import HowWorks from "../../Components/GoGReen/HowWorks";

const Home = () => {
  return (
    <div className="min-h-screen  ">
      <section >
        <HeroBanner></HeroBanner>
        <LiveStatics></LiveStatics>
      </section>
      <section className="mx-auto w-11/12">
        <ActiveChallenge></ActiveChallenge>
      </section>
      <section className="mx-auto w-11/12">
        <RecentTips></RecentTips>
      </section>
      <section className="mx-auto w-11/12">
        <UpcomingEvent></UpcomingEvent>
      </section>
      <section className="py-15 mx-auto w-11/12">
        <GoGReen></GoGReen>
        <HowWorks></HowWorks>
      </section>
    </div>
  );
};

export default Home;
