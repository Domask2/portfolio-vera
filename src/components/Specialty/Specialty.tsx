import React from 'react';
import './Specialty.scss';

const arrSpecialty = [
    {
        id: 0,
        title: 'Постраничное согласование',
        txt: 'Разработка шаг за шагом. Вы всегда знаете, на каком этапе работы мы сейчас находимся.'
    },
    {
        id: 1,
        title: 'Контроль верстки',
        txt: 'После создания дизайна, не пропадаю и готова поддерживать контакт с вашим разработчиком до завершения верстки проекта.'
    },

    {
        id: 2,
        title: 'Не веду больше 2-х проектов одновременно',
        txt: 'Это позволяет мне избегать дедлайнов и дает возможность уделять больше времени для изучения вашего бизнеса.'
    },

    {
        id: 3,
        title: 'Бесплатные консультации',
        txt: 'Во время работы над вашим проектом, делюсь ценными рекомендациями касательно SEO и юзабилити.'
    },

    {
        id: 4,
        title: 'Никогда не пропадаю',
        txt: 'Если я взяла ваш проект, то значит я буду доступна для вас почти 24/7'
    },

    {
        id: 5,
        title: 'Всегда соблюдаю сроки',
        txt: 'Если я называю сроки, то будьте уверены, что мы в них уложимся.И часто даже закончим раньше, если конечно сроки не будете затягивать вы ;)'
    },
]


const Specialty = () => (
    <div className='specialty'>
        <div className="wrapper">
            <h3 className='specialty_title'>Мои особенности</h3>
            <div className="specialty_wrapper">

                <div className="box">

                    {
                        arrSpecialty.slice(0, 3).map((item, index) => (
                            <div key={item.id} className="box_txt">
                                <div className="title">{item.title}</div>
                                <div className="txt">{item.txt}</div>
                            </div>
                        ))
                    }

                </div>
                <div className="box">
                    {
                        arrSpecialty.slice(3).map((item, index) => (
                            <div key={item.id} className="box_txt">
                                <div className="title">{item.title}</div>
                                <div className="txt">{item.txt}</div>
                            </div>
                        ))
                    }

                    {/*<div className="image">*/}
                    {/*    <img*/}
                    {/*        src="https://images.unsplash.com/photo-1548430077-773fa74bda9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM2fGFldTZyTC1qNmV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=60"*/}
                    {/*        alt="img"/>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    </div>
)

export default Specialty;