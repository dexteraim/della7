import Bg_image from '/images/backgrounds/hero.svg';

const Bg = () => {
  return (
    <div className="absolute -z-50 bg-no-repeat">
      <img src={Bg_image} alt="bg" />
    </div>
  );
};

export default Bg;
