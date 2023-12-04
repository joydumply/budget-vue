# Budget App Vue 3

## v.1.0.1 Vuex

### Added

- Added Vuex and Store for BudgetApp
- Reworked methods to manipulate store state

## v1.0.0 Released

### Added

- Added BudgetListItem as a component
- Fixed Outcome value bug
- Implemented changing color for **TotalBalance**
- Implemented confirmation before removing item from the list
- Added icon for each BudgetListItem (income/outcome)
- Implemented sorting (Income/Outcome/All)
- Implemented **value** validation

## Tasks

1. [x] Внутри компоненты **BudgetList** взять шаблон который мы генерируем для одного элемента в списке и вынести его в отдельную компоненту например **BudgetListItem**.

2. [x] Сейчас есть бага, если мы выберем в форме тип **outcome** но цифру введем без минуса то это значение _приплюсуется к общему балансу_, нужно это исправить.

3. [x] **TotalBalance** должен менять цвет текста в зависимости от значения **total**, если значение больше нуля то цвет <span style="color:green">зеленый</span>, если ноль то **черный** и если меньше нуля то <span style="color:red">красный</span>.

4. [x] При удаление одного item из списка запрашивать подтверждение хотя бы обычным confirm, но если хотите посложнее то используйте из фреймворка element-ui, элемент **Dialog**.

5. [x] В каждом элементе списка _расход/доход_ доблжна быть иконка el-icon-top или el-icon-bottom в зависимости от того какой тип у данного элемета расход или доход. Эти иконки вы можете найти в разделе **Icon** на сайте [element-ui](https://element-plus.org/). Также должен менятся цвет цифры на <span style="color:red">красный</span> или <span style="color:green">зеленый</span>.

6. [x] Добавить кнопки сортировки над **BudgetList** которые будут управлять сортировкой списка, показать только расходы, показать только доходы, показать все.

7. [x] Сделать кастомный валидатор для поля **value** в форме, пользователь не должен иметь возможности отправить форму со значением ноль в этом поле. Про кастомные валидаторы можете почитать в документации [element-ui](https://element-plus.org/) в разделе с Form.
