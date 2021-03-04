import books from '../../../components/BookData/data.json'

export default async (req, res) => {
    res.status(200).json({books})
    
}