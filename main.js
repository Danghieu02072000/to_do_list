
const input = document.querySelector('.name');
const btn = document.querySelector('.btn');
const car = Car();
const listCar = document.querySelector('.list-car');
console.log(listCar)
function Car() {
    const car = [];
    const cars = {
        add(e) {
            car.push(e);
            this.view();
        },
        remove(index){
            console.log('xóa sản phẩm')
        },
        edit(index, car){
            console.log('sửa sản phẩm')
        },
        view() {
            var html = car.map(function(item) {
                        return `<li>${item}</li>`
                       })
            html = html.join('');
            listCar.innerHTML = html;
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

