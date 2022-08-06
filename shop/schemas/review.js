export default {
    name: 'review', 
    title: 'Review',
    type: 'document',
    fields: 
    [
        { 
            name : 'name',
            title : 'Name', 
            type : 'string' 
        },
        { 
            name: 'slug', 
            title: 'Slug', 
            type: 'slug', 
            options: {
                source: 'name',
                maxLength: 90
            }
        },
        //make product a relationship to the product schema
        {
            name: 'product',
            title: 'Product',
            type: 'reference',
            to: [{type: 'product'}]
        },
        {
            name: 'Rating',
            title: 'Rating',
            type: 'number',
            options: {
                min: 1,
                max: 5,
            }
        },
        {
            name: 'details',
            title: 'Details',
            type: 'string',
        }
    ]
};
