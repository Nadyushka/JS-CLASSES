console.log('lesson 4');

// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/


// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".

let promise1 = new Promise((res, rej) => {
    console.log("Promise is created")
})

console.log(promise1)

// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

let promise2 = new Promise((res) => {
    res('Promise Data')
})
    .then(res => {
        console.log(res)
    })

console.log(promise2)

// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль

let promise3 = new Promise((res, rej) => {
    rej('Promise Error')
})
    .catch(error => {
            console.log(error)
        }
    )

console.log(promise3)


// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

let promise4 = new Promise((res) => {
        setTimeout(() => {
                res(console.log('Promise Data'))
            }, 5000
        )
    }
)

console.log(promise4)

// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.

let handlePromise: any = {
    promise: null,
    resolve: null,
    reject: null,
    onSuccess: (paramName: any) => console.log(`Promise is resolved with data: ${paramName}`),
    onError: (paramName: any) => console.log(`Promise is rejected with error: ${paramName}`),
}

export const onClickHandlerCreate = () => {
    handlePromise.promise = new Promise((res, rej) => {
            handlePromise.resolve = res
            handlePromise.reject = rej
        }
    )
        .then(res => console.log(res))
        .catch(err => console.log(err))

    console.log(handlePromise.promise)
}

// export const onClickHandlerCreate = () => {
//     return new Promise((res) => {
//         res('Create promise')
//     }).then(res => {
//         handlePromise.promise = 'Create promise';
//         console.log(res)
//         return 'Resolve promise'
//     }).then(res => {
//         handlePromise.resolve = 'Resolve promise'
//         console.log(res)
//         return 'Reject promise'
//     }).then(res => {
//         handlePromise.reject = 'Reject promise'
//         console.log(res)
//     }).finally(() => console.log(handlePromise))
// }

export const onClickHandlerResolve = () => {
    console.log(handlePromise.resolve('Resolve promise'))
}

export const onClickHandlerReject = () => {
    console.log(handlePromise.reject('Reject promise'))
}

// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.

const onSuccess = (value: string) => value + 'Nadya'
const print = (value: string): string => value

let promise6 = new Promise((res) => {
    setTimeout(() => res('My name is '), 1000)
})
    .then(res => onSuccess(res as string))
    .then(res => print(res))
    .then(res => console.log(res))


console.log(promise6)

// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}

let promise7_1 = new Promise((res, rej) => {
    setTimeout(() => res({name: "Anna"}), 2000)
})
    .then(res => res as { name: string })
    .then(res => console.log(res.name))


let promise7_2 = new Promise((res, rej) => {
    setTimeout(() => res({age: 16}), 3000)
})
    .then(res => res as { age: number })
    .then(res => console.log(res.age))

let promise7_3 = new Promise((res,rej) => {
    setTimeout(() => res({city: 'Minsk'}), 4000)
})
    .then(res => res as { city: string })
    .then(res => console.log(res.city))

console.log(promise7_1, promise7_2, promise7_3)


// just a plug
export default () => {
};