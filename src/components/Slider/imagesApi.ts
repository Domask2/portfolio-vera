/**
 * Get cats pictures
 * @param {number} length
 * @returns {Promise<Array<{ title: string, url:string, id:string }>}
 */

const apiKey = 'live_TIKUxE4I0GOiG2OOb4MFbAMg3u6w7kdZpVlRfz4WQutb5yh1IrAYFCFa9pTBbUb5';
const getImages = (length = 10) => fetch(`https://api.thecatapi.com/v1/images/search?limit=10&api_key=${apiKey}`)
        .then((response) => response.json())
        .then((response) => {
            const images: { title:string; url: string; id:string }[] = [];
            response.forEach((c: { breeds: [{ description:string }]; url: string; id:string }) => {
                const title = c?.breeds[0]?.description
                const url = c?.url;
                const id = c?.id
                images.push({ title, url, id });
            });

            return images.slice(0, length); // remove the extra cats
        });

export default getImages;