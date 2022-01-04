import './ColorList.css';
import TextArea from '../TextArea';
import { useState } from 'react';

const listOfColors = ['red', 'green', 'blue', 'black', 'orange'];

const ColorList = () => {
    const [selectedColor, setSelectedColor] = useState('');
    const selectedColorBorder = `1px solid ${selectedColor}`;
    const defaultborder = '1px solid #ddd';

    return (
        <div className='container'>
            <div className='color-box-container'>
                {listOfColors.map((color) => (
                    <div
                        className='color-box'
                        role="presentation"
                        onClick={() => setSelectedColor(color)}
                        style={{ backgroundColor: color, border: color === selectedColor ? selectedColorBorder : defaultborder }}>
                    </div>
                ))}
            </div>
            {selectedColor && <TextArea color={selectedColor} />}
        </div>
    )
}
export default ColorList;