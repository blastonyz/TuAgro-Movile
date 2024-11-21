import * as SQLite from 'expo-sqlite/legacy'

const db = SQLite.openDatabase("tuagro.db")

export const createSessionsTable = () => {
    const promise = new Promise((resolved,rejected)=>{
        const query = 'CREATE TABLE IF NOT EXISTS sessions (email TEXT NOT NULL, token TEXT NOT NULL,localId TEXT PRIMARY KEY NOT NULL)'
        db.transaction(tx => tx.executeSql(query,[],(_,result)=>resolved(result),(_,result)=>rejected(result)))
    })
    return promise
}

export const insertSessions = ({email,token,localId}) => {
    const promise = new Promise((resolved,rejected)=> {
        const query = 'INSERT INTO sessions (email,token,localId) VALUES(?,?,?)'
        db.transaction(tx=>tx.executeSql(query,[email,token,localId],(_,result)=>resolved(result),(_,result)=>rejected(result)))
    })
    return promise
}

export const fetchSession = () => {
    const promise = new Promise((resolved,rejected)=>{
        const query = 'SELECT * FROM sessions'
        db.transaction(tx=>tx.executeSql(query,[],(_,result)=>resolved(result.rows._array),(_,result)=>rejected(result)))
    })
    return promise
}

export const clearSessions= () => {
    const promise = new Promise((resolved,rejected)=>{
        const query = "DELETE FROM sessions" 
        db.transaction(tx=>{tx.executeSql(query,[],(_, result)=>resolved(result),(_,error)=>rejected(error))})
    })
    return promise
}