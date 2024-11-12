// Articles.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Articles.css'; // Import your CSS file
import Navbar from './Navbar';


const Articles = () => {
  return (
       <div className="articles-section">
        <Navbar/>
        <h2>Featured Articles</h2>
        <div className="articles-container">
          {/* First Article Card */}

          {/* card 1 */}
          <div className="article-card">
            <img src="https://www.verywellmind.com/thmb/oBbEsfjS2Kukt3MMqjggRUAJ98I=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-546206501-567c126d3df78ccc1562ccc8.jpg" className="card-img-top" alt="Article 1" />
             <h3 className="card-title">The Psychology of Personality Development</h3>
            <div className="card-body">
            <Link to="https://www.verywellmind.com/personality-development-2795425">
            <button className="btn btn-primary center-button">Read More</button>
        </Link>
            </div>
          </div>


            {/* card 2 */}
            <br></br>
          <div className="article-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ38YWCImufyW9FRb8YtADdggtHGkLJlu1ieW81hS7uG8mVITPBCCXjVsxpF3R6H1FRRzg&usqp=CAU" className="card-img-top" alt="Article 1" />
            <div className="card-body">
              <h3 className="card-title">What Is Dyssomnia?</h3>
              <Link to = "https://www.verywellmind.com/dyssomnia-types-symptoms-and-treatment-6951638"> 
              <button className="btn btn-primary center-button">Read More</button>
              </Link>
            </div>
          </div>

            {/* card 3 */}
          
            <br></br>
          <div className="article-card">
            <img src=" https://www.verywellmind.com/thmb/olIcQvAVNP4etItcehq87N8vHxI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-563818433-aa5d72b0991e4edc834c56583f8ac48b.jpg" className="card-img-top" alt="Article 1" />
            <div className="card-body">
              <h3 className="card-title">What Is Parasocial Relationship?</h3>
              <Link to="https://www.verywellmind.com/what-is-a-parasocial-relationship-5210770">
              <button className="btn btn-primary center-button">Read More</button>
              </Link>
            </div>
          </div>

            {/* card 4*/}
          <br></br>
          <div className="article-card">
            <img src="https://www.verywellmind.com/thmb/ztEfz0jrHJp2izrwk3L7AhD0GJs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/VWM-types-of-intoverts-Getty-A-de3bdff33fff49f4930e6b6c987afbac.jpg" className="card-img-top" alt="Article 1" />
            <div className="card-body">
              <h3 className="card-title">You Might Be One of These 4 Types of Introverts</h3>
              <Link to="https://www.verywellmind.com/types-of-introverts-8668593">
              <button className="btn btn-primary center-button">Read More</button>
              </Link>
            </div>
          </div>

            {/* card 5 */}
          <br></br>
          <div className="article-card">
            <img src="https://hbr.org/resources/images/article_assets/2021/01/Jan21_29_-56377641.jpg" className="card-img-top" alt="Article 1" />
            <div className="card-body">
              <h3 className="card-title">Work-Life Balance Is a Cycle, Not an Achievement</h3>
              <Link to="https://hbr.org/2021/01/work-life-balance-is-a-cycle-not-an-achievement">
              <button className="btn btn-primary center-button">Read More</button>
              </Link>
            </div>
          </div>

            {/* card 6 */}
          <br></br>
          <div className="article-card">
            <img src="https://www.verywellmind.com/thmb/4GV5ZgT6V22QxNcgUg40hAAhbiA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-168358912-5aee5e5a119fa800378360d6.jpg" className="card-img-top" alt="Article 1" />
            <div className="card-body">
              <h3 className="card-title">7 Tips for Finding Your Purpose in Life</h3>
              <Link to="https://www.verywellmind.com/tips-for-finding-your-purpose-in-life-4164689">
              <button className="btn btn-primary center-button">Read More</button>
              </Link>
            </div>
          </div>

            {/* card 7 */}
          <br></br>
          <div className="article-card">
            <img src="https://www.verywellmind.com/thmb/bl0fMC6-TpLgcbiRRgZTIkQnjM0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/atelophobia-symptoms-causes-treatment-and-coping-7377192-final-7e7f2fe4304b4294b14c00badbd8be3c.png" className="card-img-top" alt="Article 1" />
            <div className="card-body">
              <h3 className="card-title">What to Know About Atelophobia (Fear of Imperfection)</h3>
              <Link to="https://www.verywellmind.com/atelophobia-fear-of-imperfection-symptoms-causes-treatment-coping-7377192">
              <button className="btn btn-primary center-button">Read More</button>
              </Link>
            </div>
          </div>

            {/* card 8 */}
          <br></br>
          <div className="article-card">
            <img src="https://www.verywellmind.com/thmb/QxTLrfft920Bl0zbwfYV4316RsQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/1066772-common-causes-of-depression-5ae727a7875db900375789d5.png" className="card-img-top" alt="Article 1" />
            <div className="card-body">
              <h3 className="card-title">Causes and Risk Factors of Depression</h3>
              <Link to="https://www.verywellmind.com/common-causes-of-depression-1066772">
              <button className="btn btn-primary center-button">Read More</button>
              </Link>
            </div>
          </div>

            {/* card 9 */}
          <br></br>
          <div className="article-card">
            <img src="https://www.verywellmind.com/thmb/wl1_KLHEBtAPyc9rouMomx7c3Bs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/franckreporter-470f5d4b83c1492ba98454c0c0a87f59.jpg" className="card-img-top" alt="Article 1" />
            <div className="card-body">
              <h3 className="card-title">Why Am I So Anxious for No Reason?</h3>
              <Link to="https://www.verywellmind.com/why-am-i-so-anxious-for-no-reason-8675293">
              <button className="btn btn-primary center-button">Read More</button>
              </Link>
            </div>
          </div>


            {/* card 10 */}
          <br></br>
          <div className="article-card">
            <img src="https://www.talktoangel.com/images/multipleSelect/1517c8664be296f0d87d9e5fc54fdd60.svg" className="card-img-top" alt="Article 1" />
            <div className="card-body">
              <h3 className="card-title">Adjustment Disorder: When We Struggle to Adapt to Change</h3>
              <Link to="https://www.verywellmind.com/what-is-an-adjustment-disorder-4799768">
              <button className="btn btn-primary center-button">Read More</button>
              </Link>
            </div>
          </div>

            {/* card 11 */}
          <br></br>
          <div className="article-card">
            <img src="https://www.verywellmind.com/thmb/myYetJsBdbBkpFH1-gG2LmEkwzo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-543194461-56a89e9a5f9b58b7d0f3aaa0.jpg" className="card-img-top" alt="Article 1" />
            <div className="card-body">
              <h3 className="card-title">7 Tips for Coping With Anxiety in Work Meetings</h3>
              <Link to="https://www.verywellmind.com/anxiety-in-meetings-3024310">
              <button className="btn btn-primary center-button">Read More</button>
              </Link>
            </div>
          </div>


            {/* card 12 */}
          <br></br>
          <div className="article-card">
            <img src="https://www.verywellmind.com/thmb/dQ4PbeWgYsGoOhBi_bW5oPMO-7A=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/businesswoman-asking-question-at-presentation-in-office-building-175137803-59c7c65c519de20010c88571.jpg" className="card-img-top" alt="Article 1" />
            <div className="card-body">
              <h3 className="card-title">Fear of Being the Center of Attention</h3>
              <Link to="https://www.verywellmind.com/center-of-attention-fear-3024831">
              <button className="btn btn-primary center-button">Read More</button>
              </Link>
            </div>
          </div>


        </div>
       <br></br>
        
          
      
</div>

  );
};

export default Articles;