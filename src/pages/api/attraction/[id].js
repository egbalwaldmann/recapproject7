import dbConnect from "../../../../db/connect"
import Attraction from "../../../../db/models/Attraction"

export default async function handler(req, res) {
  dbConnect()
  const { id } = req.query

  if (req.method === 'GET') {
    const foundAttraction = await Attraction.findById(id)
    res.status(200).json(foundAttraction)
  }

  if (req.method === "POST") {
    const deletedAttraction = await Attraction.findByIdAndDelete(id)
    res.status(200).json({ message: 'Succesfully Deleted' })
  }
}
