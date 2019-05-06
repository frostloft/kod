Vue.component('Filter', {
    props: ['filterText'],

    template: `<div class="form-group">
                    <label for="filters">Фильтры</label>
                </div>
                <ul class="list-group">
                    <li class="filter-text list-group-item list-group-item-action pointer">
                    {{ filterText }}
                    </li>
                </ul>`
})

new Vue({
    el: '#filterthing',
    data: {
        filters: [
            { id: 1, filterText: 'Фильтр 1'},
            { id: 2, filterText: 'Фильтр 2'}
        ]
    }
})