import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt'

const users = [
    {id: uuidv4(), name: 'gahbriel', email: 'ghsouza1013@gmail.com', password: 'qualquer', role: 'admin', favorites: [
        {id: uuidv4(), name: 'Vingadores', releaseDate: '07-21-2021', posterUrl: 'qualquerLink'}
    ]},
    {id: uuidv4(), name: 'gahbriel', email: 'ghsouza1013@gmail.com', password: 'qualquer', role: 'standard',  favorites: [
        {id: uuidv4(), name: 'Godillza', releaseDate: '07-21-2021', posterUrl: 'qualquerLink'}
    ]},
    {id: uuidv4(), name: null, email: null, password: null, role: 'guest', favorites: null}
]

function getUsers() {
    return users
}

function getUserByEmail(email: string) {
    const user = users.find(user => user.email === email)
    if(!user) return null
    return user
}

function createUser(name: string, email: string, password: string, role: string) {
    const newUser = {
        id: uuidv4(),
        name, 
        email, 
        password: bcrypt.hashSync(password, 10), 
        role, 
        favorites: []
    }
    users.push(newUser)
    return {...newUser, password: null}
}

function updateUser(id: string, name?: string, email?: string, role?: string) {
    const userIndex = users.findIndex(user => user.id === id)

    const user = users[userIndex]

    if(name) {
        user.name = name
    }
    if(email) {
        user.email = email
    }
    if(role) {
        user.role = role
    }

    users[userIndex] = user
    return {...user, password: undefined}
}

function deleteUser(id: string) {
    const userIndex = users.findIndex(user => user.id === id)
    const userDelete = users.splice(userIndex, 1)
    return userDelete[0]
}


export {deleteUser, createUser, updateUser, getUsers, getUserByEmail}