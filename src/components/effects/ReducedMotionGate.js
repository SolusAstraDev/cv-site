import { useReducedMotion } from '../../utils/reducedMotion';

const ReducedMotionGate = ({ children, fallback = null }) => {
    const reduced = useReducedMotion();
    if (reduced) return fallback;
    return children;
};

export default ReducedMotionGate;
