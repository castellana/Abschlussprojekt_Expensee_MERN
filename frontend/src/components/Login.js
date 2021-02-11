import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const Login = () => {
  return (
    <section>
      <motion.div
        className="login-wrapper"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
      >
        <div className="logo">
          <h1>Expensee</h1>
        </div>
        <div className="login">
          <button>
            <a href="http://localhost:5000/auth/google">Login mit Google</a>
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Login;
