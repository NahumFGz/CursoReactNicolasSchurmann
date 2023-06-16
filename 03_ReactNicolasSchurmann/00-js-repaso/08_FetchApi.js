 const url = 'https://jsonplaceholder.typicode.com/users'

//  fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data))

// fetch(url, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Autorization': 'Bearer acadeberiairuntoken'
//     },
//     body: JSON.stringify({
//         name: 'Chanchito feliz',
//         website: 'google.com'
//     })
// })

const fn = async () => {

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Autorization': 'Bearer acadeberiairuntoken'
        },
        body: JSON.stringify({
            name: 'Chanchito feliz',
            website: 'google.com'
        })
    })

    const data = await response.json()
    console.log(data)
}

fn()