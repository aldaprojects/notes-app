import { db } from '../firebase';


function writeNote(title, description) {
    return new Promise(async(resolve, reject)=>{
        try {
            await db.ref('notes').push({
                title, 
                description
            });
            resolve();
        } catch(e){
            reject(e);
        }
    });
}

function getNotes(callback) {
    db.ref('notes').on('value', snapshot => {
        let notes = [];
        snapshot.forEach(snap => {
            notes.push({
                key: snap.key,
                ...snap.val()
            });
        });
        callback(notes);
    });
}

export default {
    writeNote,
    getNotes
}