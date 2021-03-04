import books from '../../../components/BookData/data.json'

export default async (req, res) => {
    const filtered = books.filter(book => book.url === req.query.url);
    
    if (filtered.length > 0){
        let info = filtered[0]
        res.status(200).json(info)

    } else {
        res.status(400).json({error: 'Book not found'});
    }
};