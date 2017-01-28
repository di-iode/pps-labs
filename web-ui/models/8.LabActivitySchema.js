/**
 * Created by Thomas on 31/07/2016
 */
const mongoose = require('mongoose')
const helper = require('pps-schema-helper')

/**
 * Sous-schemas à inclure
 */
const BaseActivitySchema = helper.getBaseActivitySchema()
const Resource = mongoose.model('Resource')
const Machine = mongoose.model('Machine')

const NetworkSchema = new mongoose.Schema({
  machines: [Machine.schema]
})

const LabActivitySchema = new BaseActivitySchema({
  is_template: {type: Boolean, default: true},
  networks: {type: NetworkSchema, validate: [(a) => a.length > 3, '{PATH} exceeds the limit of 3']}
})

module.exports = Resource.discriminator('LabActivity', LabActivitySchema)
