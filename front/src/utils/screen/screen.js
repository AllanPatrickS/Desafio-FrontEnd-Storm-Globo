import { useEffect, useState } from 'react';

function ScreenSize() {
    const [size, setSize] = useState([0, 0]);
    useEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return function cleanup() { window.removeEventListener('resize', updateSize); }
    }, []);
    return size;
}

export default ScreenSize;