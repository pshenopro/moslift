<script setup>
    const dataStats = [
        {
            img: 'client.svg',
            title: '500+',
            text: 'Довольных клиентов'
        },
        {
            img: 'project-finish.svg',
            title: '500+',
            text: 'Довольных клиентов'
        },
        {
            img: 'search.svg',
            title: '500+',
            text: 'Довольных клиентов'
        },
        {
            img: 'phone.svg',
            title: '500+',
            text: 'Довольных клиентов'
        },
    ]

    const dataAdvantage= [
        {
            img: 'advantage-house.svg',
            title: '10+ лет на рынке',
            text: 'Модтфил-Сервис имеет большой опыт в техническом обслуживании лифтов. Мы используем самые передовые технологии'
        },
        {
            img: 'advantage-people.svg',
            title: 'Команда профессионалов',
            text: 'Наша команда – квалифицированные специалисты, с большим опытом работы с лифтовым оборудованием'
        },
        {
            img: 'advantage-done.svg',
            title: 'Качество и безопасность',
            text: 'Мы гарантируем качество и безопасность работы при обслуживании лифтов и следуем всем нормативным требованиям'
        },
        {
            img: 'advantage-user.svg',
            title: 'Индивидуальный подход',
            text: 'Мы предлагаем индивидуальные решения, в зависимости от требований и потребностей наших клиентов'
        },
        {
            img: 'advantage-search.svg',
            title: 'Прозрачность',
            text: 'Предоставляем всю необходимую информацию о выполненных работах, состоянии лифтов и рекомендациях по их обслуживанию'
        },
        {
            img: 'advantage-ok.svg',
            title: 'Доверие клиентов',
            text: 'Мы строим долгосрочные отношения с нашими клиентами, основанные на взаимном доверии и партнерстве'
        }
    ]
</script>


<template>
    <section class="advantages-wrapper">
        <div class="main-wrapper">
            <div class="count-wrapper">
                <div v-for="{img, title, text} in dataStats" :key="img" class="count-item">
                    <img :src="'/img/' + img" alt="" />
                    <div>
                        <h3>{{ title }}</h3>
                        <p>{{ text }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="advantages-block main-wrapper">
            <h2>Наши преимущества</h2>

            <div class="advantages-block__items">
                <div
                    v-for="{img, title, text} in dataAdvantage"
                    :key="title"
                    class="advantages-block__item"
                >
                    <img :src="'/img/' + img" alt="" />
                    <h4 class="title">{{ title }}</h4>
                    <p class="text">{{ text }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .advantages-wrapper {
        width: 100%;
        background: #FAFAFA;

        h2 {
            font-size: 36px;
            font-weight: 800;
            line-height: 44px;
            color: var(--title-text-color);
        }
    }

    .count-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 64px 0;

        .count-item {
            display: flex;
            align-items: center;
            width: 100%;
            max-width: 280px;
            padding: 34px 24px;
            background: #fff;
            border-radius: 6px;
            box-shadow: 0px 1px 2px -1px #1018281A;
            box-shadow: 0px 1px 3px 0px #1018281A;

            img {
                margin-right: 24px;
            }

            h3 {
                font-size: 24px;
                font-weight: 600;
            }

            p {
                font-size: 14px;
                color: var(--second-text-color);
            }
        }

        @media (max-width: 991px) {
          flex-wrap: wrap;
          padding: 32px 0;

          .count-item {
            width: 48%;
            max-width: none;
            margin-bottom: 10px;
          }
        }
    }

    .advantages-block {
      padding-top: 64px;
      padding-bottom: 64px;

        &__items {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            width: 100%;
            padding-top: 48px;
        }

        &__item {
           width: 100%;
           max-width: 384px;

            &:nth-child(n + 4) {
                margin-top: 48px;
            }

            h4 {
                padding: 17px 0;
                font-weight: 600;
                font-size: 20px;
                line-height: 28px;
            }

            p {
                font-size: 16px;
                color: var(--second-text-color);
            }

          @media (max-width: 1240px) {
            max-width: 340px;
          }
        }

        @media (max-width: 991px) {
          padding-top: 32px;
          padding-bottom: 32px;

          &__item {
            max-width: none;
            width: 48%;
            margin-bottom: 40px;
            height: 212px;

            &:nth-child(n + 4) {
              margin-top: 0;
            }
          }
        }
    }
</style>
