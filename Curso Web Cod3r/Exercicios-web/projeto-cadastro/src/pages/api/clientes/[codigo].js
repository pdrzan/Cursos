export default function Codigo(req, res) {
    const codigo = req.query.codigo
    return (
        res.status(200).json({
            id: codigo,
            nome: `Joao ${codigo}`,
            email: `joaosilva${codigo}@gmail.com`
        })
    )
}