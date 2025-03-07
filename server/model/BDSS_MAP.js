import mongoose from 'mongoose'
const { Schema, model } = mongoose

const BDSS_SCHEMA = new Schema({
  type: String,
  date: String,
  division: String,
  district: String,
  location: String,
  x_coord: Number,
  y_coord: Number,
  description: String,
  source1: String,
  source2: String,
  ai_summary: String,
  isSpam: Boolean,
  tags: Object
})

const BDSS_MAP = model('BDSS_MAP', BDSS_SCHEMA)
export default BDSS_MAP
