import HeadActivity from "../components/HeadActivity"
import ImgActivity from "/images/activity-empty-state.png"

const Home = () => {
  return (
    <>
      <HeadActivity />
      <div data-cy="activity-empty-state">
        <img src={ImgActivity} alt="Activity Empty State" />
      </div>
    </>
  )
}

export default Home