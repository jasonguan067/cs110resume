import React, { useEffect, useState } from 'react';
import './Typewriter.css';

const Typewriter = ({ text }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (currentIndex < text.length) {
                setDisplayText(text.substring(0, currentIndex + 1));
                setCurrentIndex(currentIndex + 1);
            }
        }, 100);

        return () => clearTimeout(timer);
    }, [text, currentIndex]);

    return (
        <span className="typewriter">
            {displayText}
        </span>
    );
};

export default Typewriter;