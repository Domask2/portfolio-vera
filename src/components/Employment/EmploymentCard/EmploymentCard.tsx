import React, {FC} from "react";
import './EmploymentCard.scss';

interface EmploymentCardProps {
    number: string
    title: string
    txt: string
    link: string
}

const EmploymentCard: FC<EmploymentCardProps> = ({number, title, txt, link}) => (
    <div className='employmentCard'>
        <div className="number">{number}</div>
        <div className="title">{title}</div>
        <div className="txt">{txt}</div>
        <button type='button'>подробнее</button>
    </div>
)

export default EmploymentCard;