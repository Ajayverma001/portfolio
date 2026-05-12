import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Code2, Terminal, Database, Server, Cpu, Globe } from "lucide-react";
import "./Hero.css";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scrollSmooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001
  });

  // Header - Fades out fast
  const headerScale = useTransform(scrollSmooth, [0, 0.25], [1, 0.8]);
  const headerOpacity = useTransform(scrollSmooth, [0, 0.2], [1, 0]);
  const headerY = useTransform(scrollSmooth, [0, 0.3], [0, -50]);

  // Phone - Sized to viewport
  const phoneScale = useTransform(scrollSmooth, [0, 0.5], [0.8, 1]);
  const phoneY = useTransform(scrollSmooth, [0, 0.5], ["50%", "5%"]); 
  
  // Cards - Tight cluster
  const cardsOpacity = useTransform(scrollSmooth, [0.35, 0.5], [0, 1]);
  
  const card1X = useTransform(scrollSmooth, [0.4, 0.8], [0, -320]);
  const card1Y = useTransform(scrollSmooth, [0.4, 0.8], [0, -100]);
  const card2X = useTransform(scrollSmooth, [0.4, 0.8], [0, -360]);
  const card2Y = useTransform(scrollSmooth, [0.4, 0.8], [0, 80]);
  const card3X = useTransform(scrollSmooth, [0.4, 0.8], [0, -320]);
  const card3Y = useTransform(scrollSmooth, [0.4, 0.8], [0, 260]);

  const card4X = useTransform(scrollSmooth, [0.4, 0.8], [0, 320]);
  const card4Y = useTransform(scrollSmooth, [0.4, 0.8], [0, -80]);
  const card5X = useTransform(scrollSmooth, [0.4, 0.8], [0, 360]);
  const card5Y = useTransform(scrollSmooth, [0.4, 0.8], [0, 100]);
  const card6X = useTransform(scrollSmooth, [0.4, 0.8], [0, 320]);
  const card6Y = useTransform(scrollSmooth, [0.4, 0.8], [0, 280]);

  const bottomContentOpacity = useTransform(scrollSmooth, [0.7, 0.9], [0, 1]);

  return (
    <div ref={containerRef} className="animated-hero-wrapper" id="home">
      <div className="animated-hero-sticky">
        
        {/* Heading */}
        <motion.div
          style={{ scale: headerScale, opacity: headerOpacity, y: headerY }}
          className="animated-hero-header"
        >
          <h1 className="animated-hero-title">
            Reimagine How <br /> You Interact With <br /> The Web
          </h1>
        </motion.div>

        {/* Phone & Cards Container */}
        <motion.div
          style={{ 
            scale: phoneScale, 
            top: phoneY,
            translateY: "-20%"
          }}
          className="animated-phone-container"
        >
          {/* Cards */}
          <FloatingCard style={{ opacity: cardsOpacity, x: card1X, y: card1Y, rotate: -6 }} name="React.js" type="Frontend" amount="UI/UX" iconColor="bg-yellow" Icon={Globe} />
          <FloatingCard style={{ opacity: cardsOpacity, x: card2X, y: card2Y, rotate: -3 }} name="Node.js" type="Backend" amount="API" iconColor="bg-gray" Icon={Server} />
          <FloatingCard style={{ opacity: cardsOpacity, x: card3X, y: card3Y, rotate: -4 }} name="MongoDB" type="Database" amount="NoSQL" iconColor="bg-orange" Icon={Database} />
          <FloatingCard style={{ opacity: cardsOpacity, x: card4X, y: card4Y, rotate: 6 }} name="Tailwind" type="Styling" amount="CSS" iconColor="bg-blue" Icon={Code2} />
          <FloatingCard style={{ opacity: cardsOpacity, x: card5X, y: card5Y, rotate: 3 }} name="TypeScript" type="Language" amount="Types" iconColor="bg-purple" Icon={Terminal} />
          <FloatingCard style={{ opacity: cardsOpacity, x: card6X, y: card6Y, rotate: 4 }} name="Next.js" type="Framework" amount="SSR" iconColor="bg-green" Icon={Cpu} />

          {/* iPhone Frame */}
          <div className="iphone-frame">
             <div className="iphone-notch" />
             <div className="iphone-screen">
              <div className="iphone-content">
                <div className="iphone-status-bar">
                  <span className="time">9:41</span>
                  <div className="icons">
                    <Globe size={11} fill="currentColor" />
                    <div className="battery" />
                  </div>
                </div>
                
                <h2 className="iphone-title">Ajay Verma</h2>
                <p className="iphone-subtitle">Software Engineer</p>
                
                <div className="iphone-code-blocks">
                  <div className="code-block">
                    <div className="code-header">
                      <div className="code-dot red"></div>
                      <div className="code-dot yellow"></div>
                      <div className="code-dot green"></div>
                    </div>
                    <pre className="code-body">
                      <code>
                        <span className="keyword">const</span> <span className="variable">developer</span> = {'{'} <br/>
                        &nbsp;&nbsp;name: <span className="string">'Ajay'</span>,<br/>
                        &nbsp;&nbsp;skills: [<span className="string">'React'</span>, <span className="string">'Node'</span>],<br/>
                        &nbsp;&nbsp;status: <span className="string">'Available'</span><br/>
                        {'}'};
                      </code>
                    </pre>
                  </div>

                  <div className="code-block action-block">
                    <div className="flex-row">
                      <div className="action-icon">
                        <Terminal size={14} color="#fff" />
                      </div>
                      <div className="action-text">
                        <p className="primary-text">Execute</p>
                        <p className="secondary-text">buildPortfolio()</p>
                      </div>
                      <div className="action-value">Running...</div>
                    </div>
                  </div>
                </div>
                
                <button className="iphone-btn" onClick={() => document.getElementById('projects')?.scrollIntoView()}>
                  View Projects
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Content */}
        <motion.div 
          style={{ opacity: bottomContentOpacity }}
          className="animated-hero-bottom"
        >
          <p className="bottom-desc">
            From modern web apps to scalable backends — explore my digital universe.
          </p>
          <button className="bottom-btn" onClick={() => document.getElementById('contact')?.scrollIntoView()}>
            Let's Collaborate
          </button>
          <div className="bottom-logos">
             <div className="logo-dots">
                <div className="logo-dot" />
                <div className="logo-dot" />
                <div className="logo-dot" />
             </div>
             <p className="bottom-note">Available for new opportunities</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const FloatingCard = ({ style, name, type, amount, iconColor, Icon }) => (
  <motion.div 
    style={style}
    className="floating-card"
  >
    <div className="fc-content">
      <div className={`fc-icon-wrap ${iconColor}`}>
        <Icon size={16} />
      </div>
      <div className="fc-text">
        <p className="fc-name">{name}</p>
        <p className="fc-type">{type}</p>
      </div>
      <div className="fc-amount-box">
        <p className="fc-amount">{amount}</p>
        <p className="fc-hash">100%</p>
      </div>
    </div>
  </motion.div>
);

export default Hero;
