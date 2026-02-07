export const getUser = (req, res) => {
    res.json({
        id: req.params.id,
        name: "Echa",
        age: 20
    })
}