import React, {FC} from "react";
import {Link} from "react-router-dom";
import {Fade} from "react-awesome-reveal";
import './EmploymentCard.scss';

interface EmploymentCardProps {
    number: string
    title: string
    txt: string
    link: string
}

const EmploymentCard: FC<EmploymentCardProps> = ({number, title, txt, link}) => (
    <div className='employmentCard'>
        <Fade fraction={0} triggerOnce direction="up">
            <div className="number">{number}</div>
            <div className="title">{title}</div>
            <div className="txt">{txt}</div>
            <Link to={link} className='employment_btn' type='button'>Подробнее</Link>
        </Fade>
    </div>

)

export default EmploymentCard;