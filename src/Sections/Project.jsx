import React from 'react'
import '../css/Project.css'
import timelyBanner from '../Photos/timelyBanner.png'
import shinecomBanner from '../Photos/shinecomBanner.png'
import naukricomBanner from '../Photos/nakuricomBanner.png'
import githublogo from '../Photos/githublogo.webp'
import html5logo from '../Photos/html5logo.webp'
import cssblack from '../Photos/cssblack.png'
import css from '../Photos/css3logo.webp'
import jslogo from '../Photos/jslogo.webp'
import reactlogo from '../Photos/reactlogo.webp'
import nodejs from '../Photos/nodejslogo.webp'
import mongodb from '../Photos/mongidb.webp'
import expresslogo from '../Photos/expresslogo.webp'
import reduxlogo from '../Photos/reduxlogo.webp'
import chakrauilogo from '../Photos/chakrauilogo.png'
import reactblack from '../Photos/reactblack.png'
import { motion } from 'framer-motion'
import coder from '../Photos/coder.png'
import Projectslider from './Projectslider'


import tata1mg1 from "../Photos/tata1mg1.jpg"
import tata1mg2 from "../Photos/tata1mg2.png"
import tata1mg3 from "../Photos/tata1mg3.png"
import tata1mg4 from "../Photos/tata1mg4.png"


import clarks1 from "../Photos/clarks1.jpg"
import clarks2 from "../Photos/clarks2.webp"
import clarks3 from "../Photos/clarks3.webp"
import clarks4 from "../Photos/clarks4.jpeg"

import naukri1 from '../Photos/naukri1.jpg'
import naukri2 from '../Photos/naukri2.png'
import naukri3 from '../Photos/naukri3.png'
import naukri4 from '../Photos/naukri4.png'

import manyavar1 from '../Photos/manyavar1.jpg'
import manyavar2 from '../Photos/manyavar2.avif'
import manyavar3 from '../Photos/manyavar3.webp'
import manyavar4 from '../Photos/manyavar4.avif'


export default function Project() {
  return (
    <div className='project' >
      <div className="background-image-project">
        <div className="fixed-container-project">
          <h2> My Projects</h2>
          <div className='projectcontainer' >
            <div
              whileInView={{ y: [-50, 0] }}
              transition={{ delay: 0.2 }}
              className='projectdiv' >
              <Projectslider img1={manyavar1} img2={manyavar2} img3={manyavar3} img4={manyavar4} />
              <div>
                <p>Manyavar Clone</p>
                <p>One of India's leading celebration wear brands. Providing branded ethnic wear for men and kids and also for women with mohey's collection.</p>
                <div className='techstacks' >
                  <img src={html5logo} alt="html" />
                  <img src={css} alt="css" />
                  <img src={jslogo} alt="js" />
                  <img src={reactlogo} alt="react" />
                  <img src={nodejs} alt="nodejs" />
                  <img style={{ borderRadius: "50%" }} src={mongodb} alt="mongoDB" />
                  <img style={{ borderRadius: "50%" }} src={expresslogo} alt="expressjs" />
                  <img src={chakrauilogo} alt="chakra" />
                  <img src={reduxlogo} alt="redux" />
                </div>
                <br />
                <div className='twobtns' >

                  <a href="https://github.com/Prakashkumarjena700/Manyavar-Clone" target='_blank' >Github</a>
                  <a href="https://manyavar-clone-nine.vercel.app/" target='_blank' >Live</a>
                </div>
              </div>
            </div>
            <div
              whileInView={{ y: [-50, 0] }}
              transition={{ delay: 0.2 }}
              className='projectdiv' >
              <Projectslider img1={clarks1} img2={clarks2} img3={clarks3} img4={clarks4} />
              <div>
                <p>Clarks Clone</p>
                <p>Clarks is a reputable brand of shoes that is known for being affordable, comfortable, and durable enough for everyday footware.</p>
                <div className='techstacks' >
                  <img src={html5logo} alt="html" />
                  <img src={css} alt="css" />
                  <img src={jslogo} alt="js" />
                  <img src={reactlogo} alt="react" />
                  <img src={nodejs} alt="nodejs" />
                  <img style={{ borderRadius: "50%" }} src={mongodb} alt="mongoDB" />
                  <img style={{ borderRadius: "50%" }} src={expresslogo} alt="expressjs" />
                  <img src={chakrauilogo} alt="chakra" />
                  {/* <img src={reduxlogo} alt="redux" /> */}
                </div>
                <br />
                <div className='twobtns' >
                  <a href="https://github.com/Prakashkumarjena700/ClarksShoes_Clone" target='_blank' >Github</a>
                  <a href="https://clarks-shoes-clone.vercel.app/" target='_blank' >Live</a>
                </div>
              </div>
            </div>
            <div
              whileInView={{ y: [-50, 0] }}
              transition={{ delay: 0.2 }}
              className='projectdiv' >
              <Projectslider img1={tata1mg1} img2={tata1mg2} img3={tata1mg3} img4={tata1mg4} />
              <div>
                <p>Tata 1mg Clone</p>
                <p>Tata 1mg provide accurate, authoritative & trustworthy information on medicines and help people use their medicines effectively and safely.</p>
                <div className='techstacks' >
                  <img src={html5logo} alt="html" />
                  <img src={css} alt="css" />
                  <img src={jslogo} alt="js" />
                  <img src={reactlogo} alt="react" />
                  <img src={nodejs} alt="nodejs" />
                  <img style={{ borderRadius: "50%" }} src={mongodb} alt="mongoDB" />
                  <img style={{ borderRadius: "50%" }} src={expresslogo} alt="expressjs" />
                  <img src={chakrauilogo} alt="chakra" />
                </div>
                <br />
                <div className='twobtns' >
                  <a href="https://github.com/Prakashkumarjena700/Project_Medicare" target='_blank' >Github</a>
                  <a href="https://project-medicare-fp24844q1-fullstackcrud.vercel.app/" target='_blank' >Live</a>
                </div>
              </div>
            </div>
            <div
              whileInView={{ y: [-50, 0] }}
              transition={{ delay: 0.2 }}
              className='projectdiv' >
              <Projectslider img1={naukri1} img2={naukri2} img3={naukri3} img4={naukri4} />
              <div>
                <p>Naukri.com Clone</p>
                <p>Naukri.com, India's No.1 job site that provides hiring-related services to corporate/recruiters, placement agencies & to job-seekers in India.</p>
                <div className='techstacks' >
                  <img src={html5logo} alt="html" />
                  <img src={css} alt="css" />
                  <img src={jslogo} alt="js" />
                  <img src={reactlogo} alt="react" />
                  <img src={nodejs} alt="nodejs" />
                  <img style={{ borderRadius: "50%" }} src={mongodb} alt="mongoDB" />
                  <img style={{ borderRadius: "50%" }} src={expresslogo} alt="expressjs" />
                  <img src={chakrauilogo} alt="chakra" />
                </div>
                <br />
                <div className='twobtns' >
                  <a href="https://github.com/Prakashkumarjena700/Naukri.com_Clone" target='_blank' >Github</a>
                  <a href="https://naukri-com-frontend.vercel.app/" target='_blank' >Live</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
