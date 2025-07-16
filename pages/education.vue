<script lang="ts" setup>

</script>

<template>
    <div class="main-wrapper education-wrapper">
        <h1>Образование</h1>

        <div class="table">
            <div class="row">
                <div class="left">Информация о реализуемых уровнях образования</div>
                <div class="right">
                    <ul>
                        <li>Дополнительное профессиональное образование</li>
                        <li>Профессиональное обучение</li>
                    </ul>
                </div>
            </div>

            <div class="row">
                <div class="left">Информация о формах обучения</div>
                <div class="right">Очно</div>
            </div>

            <div class="row">
                <div class="left">Информация о нормативных сроках обучения</div>
                <div class="right">
                    <ul>
                        <li>Дополнительное профессиональное образование: от 16 часов</li>
                        <li>Профессиональное образование: от 16 часов</li>
                    </ul>
                </div>
            </div>

            <div class="row">
                <div class="left">Информация о сроке действия государственной аккредитации образовательной программы (при наличии государственной аккредитации)</div>
                <div class="right">не имеется</div>
            </div>

            <div class="row">
                <div class="left">Информация о численности обучающихся по реализуемым образовательным программам за счёт бюджетных ассигнований федерального бюджета, бюджетов субъектов Российской Федерации, местных бюджетов</div>
                <div class="right">не имеется</div>
            </div>

            <div class="row">
                <div class="left">Информация о численности обучающихся и по договорам об образовании за счёт средств физических и (или) юридических лиц</div>
                <div class="right">не имеется</div>
            </div>

            <div class="row">
                <div class="left">Информация о языках, на которых осуществляется образование (обучение)</div>
                <div class="right">Обучение осуществляется на русском языке.</div>
            </div>

            <div class="row">
                <div class="left">Информация о направлениях и результатах научной (научно- исследовательской) деятельности и научно- исследовательской базе для её осуществления</div>
                <div class="right">не имеется</div>
            </div>

            <div class="row">
                <div class="left">Информация о результатах приёма по каждому направлению подготовки или специальности высшего образования с различными условиями приёма (на места, финансируемые за счёт бюджетных ассигнований федерального бюджета, бюджетов субъектов Российской Федерации, местных бюджетов, по договорам об образовании за счёт средств физических и (или) юридических лиц) с указанием средней суммы набранных баллов по всем вступительным испытаниям</div>
                <div class="right">не имеется</div>
            </div>

            <div class="row">
                <div class="left">Информация о результатах перевода, восстановления и отчисления</div>
                <div class="right">не имеется</div>
            </div>
        </div>

        <h2 class="pb-4">Образовательные программы</h2>

        <div class="table">
            <div class="row">
                <div class="left">
                    Программа профессионального обучения "Лифтер"
                </div>
                <div class="right center">
                    <Button small href="/edu/Профессиональное_Обучение_Лифтер.pdf" bg="#6366F1" color="#fff" download>Скачать</Button>
                </div>
            </div>

            <div class="row">
                <div class="left">
                    Дополнительная профессиональная программа повышения квалификации "Менеджер по персоналу: система управления персоналом в организации"
                </div>
                <div class="right center">
                    <Button small href="/edu/ДПО_Менеджер_по_персоналу.pdf" bg="#6366F1" color="#fff" download>Скачать</Button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .table {
        width: 100%;
        max-width: 1200px;
        padding: 20px;
        border-radius: 10px;
        border: rgba(0, 0, 0, 0.2) solid 1px;
        margin-bottom: 40px;

        .row {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            padding-bottom: 30px;
            padding-top: 30px;
            border-bottom: rgba(0, 0, 0, 0.2) solid 1px;

            &:hover div {
                color: #000;
            }

            div {
                color: rgba(0, 0, 0, 0.4);
                cursor: pointer;
                transition: all .3s;
            }

            &:first-child {
                padding-top: 0;
            }

            &:last-child {
                padding-bottom: 0;
                border: none;
            }
        }

        .left {
            width: 68%;
            border-right: rgba(0, 0, 0, 0.2) solid 1px;
        }

        .right {
            width: 30%;
            padding-left: 20px;
            line-height: 1;

            &.center {
                display: flex;
                justify-content: flex-end;
            }

            li {
                padding-bottom: 10px;
            }
        }
    }

    .education-wrapper {
        padding-top: 64px;
        padding-bottom: 64px;

        h1 {
            padding-bottom: 20px;
        }

        @media (max-width: 640px) {
            .table {
                .row {
                    flex-direction: column;
                }

                .left {
                    padding-bottom: 10px;
                }

                .left,
                .right {
                    width: 100%;
                    border-right: 0;
                    color: var(--primary-text-color);
                }
            }
        }
    }
</style>
