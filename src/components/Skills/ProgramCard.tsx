import React from 'react';
import './ProgramCard.scss';

const ProgramCard = ({item}: { item: { id: number, src: string, title: string } }) => (
    <div className="program">
        <img src={item.src} alt={item.title}/>
        <div className="txt">
            {item.title}
        </div>
    </div>
)

export default ProgramCard;