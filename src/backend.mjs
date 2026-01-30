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

export function getImageUrl(record, imageField) {
    if (!record || !imageField || !record[imageField]) {
        return '';
    }

    // Si le champ est un tableau (plusieurs images), prendre la première
    const imageValue = Array.isArray(record[imageField])
        ? record[imageField][0]
        : record[imageField];

    if (!imageValue) {
        return '';
    }

    return `http://127.0.0.1:8090/api/files/${record.collectionId}/${record.id}/${imageValue}`;
}