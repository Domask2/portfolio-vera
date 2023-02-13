import React from 'react';
import EmploymentCard from "./EmploymentCard/EmploymentCard";
import Button from "../Button/Button";
import './Employment.scss';

const Employment = () => (
    <div className="employment">
        <div className="wrapper">
            <div className="employment_wrapper">

                <div className="employment_wrapper_back">
                    <div className="line_block lb1"/>
                    <div className="line_block lb2"/>
                    <div className="line_block lb3"/>
                </div>

                <div className="content">
                    <div className="card">
                        <EmploymentCard
                            number="&nbsp;01"
                            title="Дизайн сайтов"
                            txt="Индивидуальное решение под ваши бизнес задачи. Дизайн на основе готового прототипа
                    или вашего тех. задания. Адаптивный дизайн сайтов для мобильных устройств."
                            link="1234"
                        />

                        <EmploymentCard
                            number="02"
                            title="РЕДИЗАЙН САЙТОВ"
                            txt="Индивидуальное решение под ваши бизнес задачи. Дизайн на основе готового прототипа
                    или вашего тех. задания. Адаптивный дизайн сайтов для мобильных устройств."
                            link="1234"
                        />

                        <EmploymentCard
                            number="03"
                            title="РАЗРАБОТКА САЙТОВ"
                            txt="Индивидуальное решение под ваши бизнес задачи. Дизайн на основе готового прототипа
                    или вашего тех. задания. Адаптивный дизайн сайтов для мобильных устройств."
                            link="1234"
                        />
                    </div>
                    <Button styleText={{color: 'black'}}>Все услуги</Button>
                </div>
            </div>
        </div>
    </div>
)

export default Employment;

