import React from 'react';
import '../styles/Education.scss';

function Education() {
  return (
    <div className="Education">
      <h3>EDUCATION</h3>
      {/* /ul无序列表 */}
      <ul>
        <li>
          <span className="years">1990</span>
          <div className="education">
            <span className="firstLine">I was born in Katowice</span>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente,
            exercitationem, totam, dolores iste dolore est aut modi.
          </div>
        </li>
        <li>
          <span className="years">2005</span>
          <div className="education">
            <span className="firstLine">
              Secondary school specializing in artistic
            </span>
            <br />
            Eos, explicabo, nam, tenetur et ab eius deserunt aspernatur ipsum
            ducimus quibusdam quis voluptatibus.
          </div>
        </li>
        <li>
          <span className="years">2009</span>
          <div className="education">
            <span className="firstLine">
              First level graduation in Graphic Design
            </span>
            <br />
            Aspernatur, mollitia, quos maxime eius suscipit sed beatae ducimus
            quaerat quibusdam perferendis? lusto, quibusdam asperiores underepel
            lat.
          </div>
        </li>
        <li>
          <span className="years">2012</span>
          <div className="education">
            <span className="firstLine">
              Second level graduation in Graphic Design
            </span>
            <br />
            Ducimus, aliquam tempore autem itaque et accusantium!
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Education;
