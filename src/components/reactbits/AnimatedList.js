import React from 'react';
import { motion } from 'motion/react';

const AnimatedList = ({ items = [], renderItem, className = '', stagger = 0.08, direction = 'up' }) => {
    const offset = direction === 'up' ? { y: 18 } : { y: -18 };

    return (
        <ul className={className}>
            {items.map((item, i) => (
                <motion.li
                    key={item.id ?? i}
                    initial={{ opacity: 0, ...offset }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: i * stagger, ease: [0.2, 0.65, 0.3, 0.95] }}
                >
                    {renderItem(item, i)}
                </motion.li>
            ))}
        </ul>
    );
};

export default AnimatedList;
