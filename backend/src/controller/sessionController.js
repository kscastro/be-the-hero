const connectionDB = require('../database/connectionDB');

module.exports = {

  async create(request, response){
    const { id } = request.body;

    const ong = connectionDB('ongs').where('id', id).select('name').first();

    if(!ong){
      return response.status(400).json({error: 'No ONG found with this ID' });
    }

    return response.json(ong)
  }

}