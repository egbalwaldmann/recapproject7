import dbConnect from "../../../db/connect"
import Attraction from "../../../db/models/Attraction"

export default async function handler(req, res) {
  dbConnect()

  if (req.method === "GET") {
    const attractions = await Attraction.find()
    res.status(200).json(attractions)
  }

  if (req.method === "POST") {
    try {

      // let response = JSON.parse(req.body)
      await Attraction.create(JSON.parse(req.body))
      res.status(200).json({ status: 'attraction created' })

    } catch (error) {
      console.error(error)
      res.status(400).json({ error: "error" })
    }
  }
}
