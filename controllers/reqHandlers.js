function setName(req, res) {
    const { name } = req.body.Name;
    res.redirect('/chat', { name })
}

module.exports = {
    setName
}