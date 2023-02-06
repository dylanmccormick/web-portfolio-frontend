import { greeting } from '../../data';
import './Greeting.css';
function Greeting() {
  return (
    <>
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">{greeting.title}</h1>
              <p className="greeting-text-p subTitle">{greeting.subTitle}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Greeting;
