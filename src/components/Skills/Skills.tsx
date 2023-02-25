import React from 'react';
import './Skills.scss';
import {Fade} from "react-awesome-reveal";
import {programs, skills} from "../../data";
import ProgramCard from "./ProgramCard";
import SkillCard from "./SkillCard";

const Skills = () => (
    <div className='skills'>
        <div className="wrapper">
            <h3 className='skills_title'>cкиллы</h3>

            <div className="skills_wrapper">
                <Fade triggerOnce fraction={0}>
                    <div className="skills_programs">
                        {
                            programs.length > 0 && programs.map((item) => (
                                <ProgramCard key={item.id} item={item}/>
                            ))
                        }
                    </div>
                </Fade>
                <div className="box_content">
                    <div className="box_content_grape">
                        {
                            skills.length > 0 && skills.map((item) => (
                                <SkillCard key={item.id} item={item}/>
                            ))
                        }
                    </div>

                    <div className="box_content_txt">
                        <Fade triggerOnce fraction={0} direction='right'>
                            <p className='txt_one'>Дизайнер не обязан уметь писать тексты и верстать.
                                Но он обязан разбираться в особенностях всех этапов производства.
                            </p>
                        </Fade>
                        <Fade triggerOnce fraction={0} direction='up'>
                            <p className='txt_two'>*Я никогда не изображаю в дизайне то, что невозможно реализовать на
                                верстке.</p>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Skills;