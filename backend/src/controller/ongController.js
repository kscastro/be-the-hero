const crypto = require('crypto');
const connectionDB = require('../database/connectionDB');

module.exports = {
  async index(request, response) {
  
    const ongs = await connectionDB('ongs').select('*');
  
    return response.json(ongs)
  
  },

  async create(request , response){
    const {name, email, whatsapp, city, uf} = request.body;
    const id = crypto.randomBytes(4).toString('HEX');

    await connectionDB('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    })

    return response.json({ id })
  }
}