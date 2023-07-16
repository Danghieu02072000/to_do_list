
const input = document.querySelector('.name');
const btn = document.querySelector('.btn');
const car = Car();
const listCar = document.querySelector('.list-car');


function Car() {
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
                        return `<li class='car-item' data-index='${index}'> <span>${item}</span> <span>x</span> </li>`
                       })
            html = html.join('');
            listCar.innerHTML = html;
            const carItem = document.querySelectorAll('.car-item');
            carItem.forEach(function(item,index) {
                item.onclick = function(e) {
                    if(e.target.textContent == 'x') {
                        car.splice(index,1);
                        cars.view();
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

