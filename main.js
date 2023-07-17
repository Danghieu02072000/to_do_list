
const input = document.querySelector('.toDoList__input');
const btn = document.querySelector('.toDoList__btn');
const car = Car();
const listCar = document.querySelector('.toDoList__list');


function Car() {
    isDone = false;
    const car = [];
    const cars = {
        add(item) {
            if(item != '') {
                car.push(item);
                this.view();
            }
        },
        remove(index){
            console.log('xóa sản phẩm')
        },
        edit(index, car){
            console.log('sửa sản phẩm')
        },
        view() {
            var html = car.map(function(item, index) {
                        return ` <li class="toDoList__item" data-index="${index}">
                                    <span class="toDoList__text"> ${item}</span>
                                    <span class="toDoList__delete"><i class="bi bi-trash-fill"></i></span>
                                </li>`
                       })
            html = html.join('');
            listCar.innerHTML = html;
            const carItem = document.querySelectorAll('.toDoList__item');
            carItem.forEach(function(item,index) {
                item.onclick = function(e) {
                    if(e.target.closest(".toDoList__delete")) {
                        car.splice(index,1);
                        cars.view();
                    }
                    if(isDone) {
                        isDone = false;
                        e.target.classList.remove('done');
                    }
                    else {
                        isDone = true;
                        e.target.classList.add('done');
                    }
                }
            })
        }
    }
    return cars;
}

btn.onclick = function() {
    let new_car = input.value;
    car.add(new_car);
    input.value = '';
    input.focus;
}


car.view()

