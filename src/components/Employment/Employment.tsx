import React from 'react';
import EmploymentCard from "./EmploymentCard/EmploymentCard";
import Button from "../Button/Button";
import {employments} from "../../data";
import './Employment.scss';

const Employment = () => (
    <div className="employment">
        <div className="wrapper">
            <div className="employment_wrapper">
                <div className="content">
                    <div className="card">
                        {
                            employments.length > 0 && employments.map((employment) => {
                                const {id, number, title, txt, link} = employment;
                                return (
                                    <EmploymentCard key={id} number={number} title={title} txt={txt} link={link}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="button">
                <Button styleText={{color: 'black'}}>Все услуги</Button>
            </div>
        </div>
    </div>
)

export default Employment;

