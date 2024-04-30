import img1 from '../../../assets/img/insta1.jpg';
import img2 from '../../../assets/img/insta2.jpg';
import img3 from '../../../assets/img/insta3.jpg';
import img4 from '../../../assets/img/insta4.jpg';
import img5 from '../../../assets/img/insta5.jpg';
import img6 from '../../../assets/img/insta6.jpg';
import img7 from '../../../assets/img/insta7.jpg';
import img8 from '../../../assets/img/insta8.jpg';
import img9 from '../../../assets/img/insta9.jpg';
import img10 from '../../../assets/img/insta10.jpg';
import img11 from '../../../assets/img/insta11.jpg';
import img12 from '../../../assets/img/insta12.jpg';
import './Galleray.css';
const Galleray = () => {
  return (
    <div className="px-3 md:px-10 lg:px-16 mt-20 mb-8">
      <h1 className="text-center mb-6 text-4xl font-medium">@UOMO</h1>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        <div className="overflow-hidden">
          <img className="g-img" src={img1} alt="" />
        </div>
        <div className="overflow-hidden">
          <img className="g-img" src={img2} alt="" />
        </div>
        <div className="overflow-hidden">
          <img className="g-img" src={img3} alt="" />
        </div>
        <div className="overflow-hidden">
          <img className="g-img" src={img4} alt="" />
        </div>
        <div className="overflow-hidden">
          <img className="g-img" src={img5} alt="" />
        </div>
        <div className="overflow-hidden">
          <img className="g-img" src={img6} alt="" />
        </div>
        <div className="overflow-hidden">
          <img className="g-img" src={img7} alt="" />
        </div>
        <div className="overflow-hidden">
          <img className="g-img" src={img8} alt="" />
        </div>
        <div className="overflow-hidden">
          <img className="g-img" src={img9} alt="" />
        </div>
        <div className="overflow-hidden">
          <img className="g-img" src={img10} alt="" />
        </div>
        <div className="overflow-hidden">
          <img className="g-img" src={img11} alt="" />
        </div>
        <div className="overflow-hidden">
          <img className="g-img" src={img12} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Galleray;
