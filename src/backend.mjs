import PocketBase from 'pocketbase';
const db = new PocketBase('http://127.0.0.1:8090');

export async function getOffres() {
    try {
        let data = await db.collection('maison').getFullList({
            sort: '-created',
        });
        return data;
    } catch (error) {
        console.log('Une erreur est survenue en lisant la liste des maisons', error);
        return [];
    }
}

export function getImageUrl(record, recordImage) {
    // return `http://127.0.0.1:8090/api/files/${record.collectionId}/${record.id}/${recordImage}`;
    return db.files.getUrl(record, recordImage);

}