import qs from 'query-string';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProducts = async (query) => {
    const url = qs.stringifyUrl({
        url: URL,
        query: {
            colorId: query.colorId,
            categoryId: query.categoryId,
            sizeId: query.sizeId,
            isFeatured: query.isFeatured
        }
    });

    const res = await fetch(url); // Use the constructed URL here
    return res.json();
};

export default getProducts;
