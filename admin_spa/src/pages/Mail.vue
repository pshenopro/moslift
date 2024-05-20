<template>
    <h1>
        Почта
    </h1>

    <div class="ui-mail">
        <div class="ui-mail-line">
            <div class="ui-mail-line__item">
                <v-icon v-if="true" icon="mdi-star" />
                <v-icon v-else icon="mdi-star-outline" />
            </div>
            <v-checkbox class="ui-mail-line__check"/>
            <div class="ui-mail-line__item ui-mail-content">
                <h2>Заголовок</h2>
                <div class="ui-mail-text">
                    Текст
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.ui-mail {
    &-line {
      display: flex;
      align-items: center;
      padding: 20px;
      border: 1px solid #000;
      border-radius: 2px;

      &__check {
        padding: 0 10px;
        border-right: 1px solid #000;
      }

      &__item {
        width: 5%;
        height: 30px;
        padding: 0 10px;
        border-right: 1px solid #000;

        &:last-child {
          border: 0;
        }

        .v-checkbox.v-input {
            flex: none;

            .v-input__control {
                .v-checkbox {
                    .v-selection-control {
                        min-height: 0;
                        --v-selection-control-size: 0px;
                    }
                }
            }
        }
      }

      .ui-mail-content {
        width: 80%;
      }
    }
  }
</style>