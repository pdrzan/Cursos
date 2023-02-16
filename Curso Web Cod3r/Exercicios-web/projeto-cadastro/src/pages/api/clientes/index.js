export default function handler(req, res) {
    if(req.method === "GET") {
        handleGet(req, res)
    } else {
        res.status(405).send()
    }
}
function handleGet(req, res) {
    res.status(200).json({
        id: 10,
        nome: 'Edison Arantes do Nascimento',
        email: 'peleoficial@gmail.com'

    })
}