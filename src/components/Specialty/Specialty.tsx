import React from 'react';
import SpecialtyCard from "./SpecialtyCard";
import {arrSpecialty} from "../../data";
import './Specialty.scss';

const Specialty = () => (
    <div className='specialty'>
        <div className="wrapper">
            <h3 className='specialty_title'>мои особенности</h3>
            <div className="specialty_wrapper">
                {
                    arrSpecialty.length > 0 && (
                        <SpecialtyCard
                            item={arrSpecialty.slice(0, 3)}
                            animationPosition = {['left', 'left', 'up']}
                        />
                    )
                }
                {
                    arrSpecialty.length > 3 && (
                        <SpecialtyCard
                            item={arrSpecialty.slice(3)}
                            animationPosition = {['right', 'right', 'up']}
                        />
                    )
                }
            </div>
        </div>
    </div>
)

export default Specialty;