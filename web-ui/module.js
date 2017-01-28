/**
 * Point d'entrée standardisé pour charger des modules PPS
 */
const path = require('path')

module.exports = {

  /**
   * utilisé pour lier le routeur
   */
  subDomain: '/labs',

  title: 'Labs',

  description: 'Accéder à la plateforme de labs',

  ROLES: null,

  ui: true,

  /**
   * Charge les modèles du module
   */
  models: {
    7: {
      CourseActivity: path.join(__dirname, '/models/7.CourseActivitySchema.js'),
      Machine: path.join(__dirname, '/models/7.MachineSchema.js')
    },
    8: {
      LabActivity: path.join(__dirname, '/models/8.LabActivitySchema.js')
    }
  },
  /**
   * Lie le routeur
   */
  loadRouter: function (app) {
    app.use(module.exports.subDomain, require('./labs.js'))
  }

}
