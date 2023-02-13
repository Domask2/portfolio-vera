import React from 'react';
import './Skills.scss';

const arrSkills = [
    {
        id: 0,
        src: 'https://yanakhodkina.com/wp-content/themes/yanakhodkina_2/images/Ps.svg',
        title: 'Photoshop'
    },
    {
        id: 1,
        src: 'https://yanakhodkina.com/wp-content/themes/yanakhodkina_2/images/figma.svg',
        title: 'Figma'
    },
    {
        id: 2,
        src: 'https://yanakhodkina.com/wp-content/themes/yanakhodkina_2/images/Ai.svg',
        title: 'Illustrator'
    },
    {
        id: 3,
        src: 'https://yanakhodkina.com/wp-content/themes/yanakhodkina_2/images/infinity.svg',
        title: 'Другие'
    },
];

const value = [
    {
        id: 0,
        title: 'UI/UX',
        procent: '50%',
    },
    {
        id: 1,
        title: 'Юзабилити',
        procent: '90%',
    },
    {
        id: 3,
        title: 'SEO',
        procent: '70%',
    },
    {
        id: 4,
        title: 'HTML/CSS',
        procent: '30%',
    },
    {
        id: 5,
        title: 'Интернет маркетинг',
        procent: '78%',
    },
]


const Skills = () => (
    <div className='skills'>
        <div className="wrapper">
            <h3 className='skills_title'>Скиллы</h3>

            <div className="skills_wrapper">
                <div className="box_program">
                    {
                        arrSkills.map((item) => (
                            <div key={item.id} className="skill">
                                <img src={item.src} alt={item.title}/>
                                <div className="txt">
                                    {item.title}
                                </div>

                            </div>
                        ))
                    }
                </div>

                <div className="box_content">
                    <div className="box_content_grap">
                        {
                            value.map((item) => (
                                <div key={item.id} className="box_content_value">
                                    <div className="title">
                                        {item.title}
                                    </div>

                                    <div className="grap">
                                        <div style={{width: `${item.procent}`}} className="grap_procent"/>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="box_content_txt">
                        <p className='txt_one'>Дизайнер не обязан уметь писать тексты и верстать.
                            Но он обязан разбираться в особенностях всех этапов производства.
                        </p>
                        <p className='txt_two'>*Я никогда не изображаю в дизайне то, что невозможно реализовать на верстке.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Skills;