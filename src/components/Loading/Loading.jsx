import './Loading.css';
import { motion } from 'framer-motion';
import logo from '../../assets/Loading/Logo.png';
import { StrawberrySVG } from '../../assets/Loading/StrawberrySVG';

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-logo-container">
        <img src={logo} alt="logo" />
      </div>

      <div className="strawberries">
        {Array.from({ length: 3 }).map((_, index) => (
          <motion.div
            key={index}
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: index * 0.2,
            }}
          >
            <StrawberrySVG/>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
