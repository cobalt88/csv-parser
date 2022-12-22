const express = require('express')
const app = express()
const port = process.env.PORT || 3010
const fs = require('fs')
const path = require('path')


app.listen(port, () => console.log(`CSV Parser is listening on port ${port}!`))