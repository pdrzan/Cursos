
export default function handler(req, res) {
  return (
    res.status(200).json({ name: 'John Doe', method: req.method, nome: req.query.nome, id: +req.query.id })
  )
}
