const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');
let id = 0; // UUID 사용을 권장한다. 하지만 여기서는 간단하기때문에 integer를 사용한다. 하지만 권장하지 않는다.
// 아래와 같이 코드를 설명하는 주석은 사용하지 않는다. 이는 오히려 가독성을 떨어뜨릴수 있기 때문이다. 가능하면 '왜?' 즉, 의도를 작성해야한다.
function onAdd() {
    // 1. 사용자가 입력한 텍스트를 받아옴.
    const text = input.value;
    if (text === '') {
        input.focus();
        return;
    }
    // 2. 새로운 아이템을 만듦. (텍스트 + 삭제 버튼)
    const item = createItem(text);
    // 3. items 컨테이너 안에 새로만든 아이템을 추가한다.
    items.appendChild(item);
    // 4. 새로 추가된 아이템으로 스크롤링
    item.scrollIntoView({block : 'center'});
    // 5. 인풋을 초기화 한다.
    input.value = '';
    input.focus();
};
function createItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');
    itemRow.setAttribute('data-id', id);
    itemRow.innerHTML = `<div class="item">
        <span class="item__name">${text}</span>
        <button class="item__delete">
            <i class="fas fa-trash-alt" aria-hidden="true" data-id=${id}></i>
        </button>
    </div>
    <div class="item__divider"></div>`;
    id ++;
    return itemRow;
}
addBtn.addEventListener('click', () => {
    onAdd();
});
input.addEventListener('keypress', event => {
    if(event.key === 'Enter'){
        onAdd();
    }
})
items.addEventListener('click', event => {
    const id = event.target.dataset.id;
    if(id){
        const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
        toBeDeleted.remove();
    };
})